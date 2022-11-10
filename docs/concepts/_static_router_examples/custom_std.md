```go
package main

import (
	"embed"
	"net/http"
	"net/http/pprof"

	"github.com/prometheus/client_golang/prometheus/promhttp"

	api "<your_api_package>"
)

//go:embed static
var static embed.FS

func main() {
	srv, err := api.NewServer(myHandler{})
	if err != nil {
		panic(err)
	}
	mux := http.NewServeMux()
	mux.Handle("/api/v1/", http.StripPrefix("/api/v1", srv))
	// Register static files.
	mux.Handle("/static/", http.FileServer(http.FS(static)))
	// Register metrics handler.
	mux.Handle("/metrics", promhttp.Handler())
	{
		// Register pprof handlers.
		mux.HandleFunc("/debug/pprof/", pprof.Index)
		mux.HandleFunc("/debug/pprof/cmdline", pprof.Cmdline)
		mux.HandleFunc("/debug/pprof/profile", pprof.Profile)
		mux.HandleFunc("/debug/pprof/symbol", pprof.Symbol)
		mux.HandleFunc("/debug/pprof/trace", pprof.Trace)
	}
	http.ListenAndServe(":8080", mux)
}
```
