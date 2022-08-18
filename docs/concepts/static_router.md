---
id: static_router
title: Static router
sidebar_label: Static router
---

The `ogen` tool generates a static blazing fast [radix tree](https://en.wikipedia.org/wiki/Radix_tree)-based router.

## Router error handling

### Not Found

If there is no route for the request, the router call the `config.NotFound` handler.
The default handler is [`http.NotFound`](https://pkg.go.dev/net/http#NotFound).

You can change the default handler by using `WithNotFound` option.
```go
h := myHandler{}
srv, err := api.NewServer(h, api.WithNotFound(func(w http.ResponseWriter, r *http.Request) {
	    w.Header().Set("Content-Type", "application/json")
        w.WriteHeader(http.StatusNotFound)
		_, _ = io.WriteString(w, `{"error": "not found"}`)
}))
if err != nil {
	panic(err)
}
```

### Method Not Allowed


If request path matches but the method is not allowed, the router call the `config.MethodNotAllowed` handler.
The default handler returns empty body with [`405 Method Not Allowed`](https://httpwg.org/specs/rfc7231.html#rfc.section.6.5.5) code
and [`Allow`](https://httpwg.org/specs/rfc7231.html#header.allow) header with comma-separated allowed methods list.

You can change the default handler by using `WithMethodNotAllowed` option.

:::caution

The [HTTP spec](https://httpwg.org/specs/rfc7231.html#rfc.section.6.5.5) **requires** that the `Allow` header
is sent with the status code `405 Method Not Allowed`.

You should add the `Allow` header to the response by yourself.

:::

```go
h := myHandler{}
srv, err := api.NewServer(h, api.WithNotFound(func(w http.ResponseWriter, r *http.Request, allowed string) {
        w.Header().Set("Content-Type", "text/plain")
        w.Header().Set("Allow", allowed)
        w.WriteHeader(http.StatusMethodNotAllowed)
		_, _ = fmt.Fprintf(w, "use one of the following methods: %s\n", allowed)
}))
if err != nil {
	panic(err)
}
```

## `FindRoute` method

The `Server` type defines a `FindRoute` method that finds and returns the `Route` for the request, if any.

It's useful for middleware that needs to find the route for the request.

```go
package example

import (
	"net/http"

	api "<your_api_package>"
)

type myMiddleware struct {
	Next *api.Server
}

func (m myMiddleware) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	route, ok := m.Next.FindRoute(r.Method, r.URL.Path)
	if !ok {
		// There is no route for the request.
		//
		// Let server handle 404/405.
		m.Next.ServeHTTP(w, r)
		return
	}
	// Match operation by spec operation ID.
	// Notice that the operation ID is optional and may be empty.
	//
	// You can also use `route.Name()` to get the ogen operation name.
	// Unlike the operation ID, the name is guaranteed to be unique and non-empty.
	switch route.OperationID() {
	case "operation1", "operation2":
		// Middleware logic:
		args := route.Args()
		if args[0] == "debug" {
			w.Header().Set("X-Debug", "true")
        }
	}
	m.Next.ServeHTTP(w, r)
}

func main() {
	s, err := api.NewServer(myHandler{})
	if err != nil {
		panic(err)
	}
	http.ListenAndServe(":8080", myMiddleware{Next: s})
}
```

## Middlewares

The `Server` type implements [`http.Handler`](https://pkg.go.dev/net/http#Handler) interface. Any `net/http`-compatible middleware can be used.

```go
package example

import (
	"net/http"

	"github.com/klauspost/compress/gzhttp"

	api "<your_api_package>"
)

func main() {
	srv, err := api.NewServer(myHandler{})
	if err != nil {
		panic(err)
	}
	http.ListenAndServe(":8080", gzhttp.GzipHandler(srv))
}
```
