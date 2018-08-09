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

	w.Header().Set("Access-Control-Allow-Origin", "*")

	fmt.Println(r.URL.String())
	page := r.URL.Query().Get("page")
	fmt.Println(page)

	res, err := lf.http.GetTracks()
	if err != nil {
		http.Error(w, err.Error(), 400)
		return
	}

	// res = formatResponse(res)

	ret, err := json.Marshal(res)
	if err != nil {
		http.Error(w, err.Error(), 400)
		return
	}

	w.Write(ret)
}
