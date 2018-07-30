package lastfm

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// LastFm struct
type LastFm struct {
	http *HTTPClient
	env  string
}

// New creates a new lastfm object
func New(client *HTTPClient) *LastFm {
	return &LastFm{
		http: client,
		env:  "Test",
	}
}

// PrintEnvironment prints the internal value
func (lf *LastFm) PrintEnvironment() {
	fmt.Println(lf.env)
}

func (lf *LastFm) GetTracks(w http.ResponseWriter, r *http.Request) {

	res, err := lf.http.Do()
	if err != nil {
		http.Error(w, err.Error(), 400)
		return
	}

	ret, err := json.Marshal(res)
	if err != nil {
		http.Error(w, err.Error(), 400)
		return
	}

	fmt.Println("Everything is fine?")

	w.Write(ret)
}
