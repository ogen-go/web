```go
package main

import (
	"embed"
	"net/http"
	"net/http/pprof"

	"github.com/go-chi/chi/v5"
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
	mux := chi.NewRouter()
	mux.Mount("/api/v1/", http.StripPrefix("/api/v1", srv))
	// Register static files.
	mux.Handle("/static/", http.FileServer(http.FS(static)))
	// Register metrics handler.
	mux.Handle("/metrics", promhttp.Handler())
	mux.Route("/debug/pprof", func(mux chi.Router) {
		// Register pprof handlers.
		mux.HandleFunc("/", pprof.Index)
		mux.HandleFunc("/cmdline", pprof.Cmdline)
		mux.HandleFunc("/profile", pprof.Profile)
		mux.HandleFunc("/symbol", pprof.Symbol)
		mux.HandleFunc("/trace", pprof.Trace)
	})
	http.ListenAndServe(":8080", mux)
}
```
