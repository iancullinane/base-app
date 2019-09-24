package server

import (
	"flag"
	"fmt"
	"net/http"
	"os"
	"time"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

type Tracks interface {
	GetTracks(w http.ResponseWriter, r *http.Request)
}

type Slack interface {
	Event(w http.ResponseWriter, r *http.Request)
}

// type PestoDb interface {
// 	GetVendors(w http.ResponseWriter, r *http.Request)
// 	GetProducts(w http.ResponseWriter, r *http.Request)
// 	OrderHandler(w http.ResponseWriter, r *http.Request)
// }

func SetUpServer(tracks Tracks) *http.Server {
	var entry string
	var static string
	var port string

	flag.StringVar(&entry, "entry", "./dist/index.html", "the entrypoint to serve.")
	flag.StringVar(&static, "dist", ".", "the directory to serve static files from.")
	flag.StringVar(&port, "port", "5500", "the `port` to listen on.")
	flag.Parse()

	mux := mux.NewRouter()

	// Note: In a larger application, we'd likely extract our route-building logic into our handlers
	// package, given the coupling between them.

	// It's important that this is before your catch-all route ("/")
	api := mux.PathPrefix("/api/v1/").Subrouter()
	// api.Methods("OPTIONS").Handler(AccountsCreatePreFlight)

	// lastfm methods
	api.HandleFunc("/tracks", tracks.GetTracks).Methods("GET")

	// slack methods
	// api.HandleFunc("/slack", slack.Event).Methods("POST")

	// Serve static assets directly.
	mux.PathPrefix("/dist/").Handler(http.FileServer(http.Dir(static)))

	// Catch-all: Serve our JavaScript application's entry-point (index.html).
	mux.PathPrefix("/").HandlerFunc(IndexHandler(entry))

	fmt.Printf("Starting server on port %s\n", port)

	srv := &http.Server{
		Handler: handlers.LoggingHandler(os.Stdout, mux),
		Addr:    ":" + port,
		// Good practice: enforce timeouts for servers you create!
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}

	return srv
}

func IndexHandler(entrypoint string) func(w http.ResponseWriter, r *http.Request) {
	fn := func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, entrypoint)
	}
	return http.HandlerFunc(fn)
}
