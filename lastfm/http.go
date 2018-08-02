package lastfm

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"io/ioutil"
	"log"
	"net/http"
	"net/url"

	"github.com/pkg/errors"
)

const (
	lastFmUrl = "http://ws.audioscrobbler.com/2.0/"
)

type HTTPClient struct {
	url      url.URL
	username string
	apiKey   string
}

func NewHttpClient(username, apiKey string) *HTTPClient {

	return &HTTPClient{
		username: username,
		apiKey:   apiKey,
	}
}

func (c *HTTPClient) Do(query string) (*Response, error) {

	// fmt.Printf("Make request for: %s", requestString)
	req, err := http.NewRequest("GET", query, nil)
	if err != nil {
		return nil, fmt.Errorf("could not create request object: %v", err)
	}

	hc := &http.Client{}
	res, err := hc.Do(req)
	if err != nil {
		return nil, err
	}
	defer func() {
		io.Copy(ioutil.Discard, res.Body)
		res.Body.Close()
	}()

	if err := parseHTTPError(res); err != nil {
		return nil, err
	}

	response, err := formatLastFm(res.Body)
	if err != nil {
		return nil, err
	}

	return response, nil
}

func (c *HTTPClient) GetTracks() (*Response, error) {

	requestString := c.MakeQuery()

	res, err := c.Do(requestString)
	if err != nil {
		return nil, err
	}

	return res, nil
}

// func formatLastFm(res *http.Response) (*Response, error) {
func formatLastFm(rawData io.ReadCloser) (*Response, error) {

	var lastFmRet LastFmData
	dec := json.NewDecoder(rawData)
	if err := dec.Decode(&lastFmRet); err != nil {
		return nil, errors.Wrap(err, "error decoding response")
	}

	// b, err := json.MarshalIndent(lastFmRet, "", "  ")
	// if err != nil {
	// 	fmt.Println("error:", err)
	// }
	// fmt.Print(string(b))

	var formattedTracks []CustomTrack

	for _, v := range lastFmRet.List {
		tmp := CustomTrack{
			Name:   v.Name,
			Artist: v.ArtistObject.Text,
			Image:  v.Images,
		}
		formattedTracks = append(formattedTracks, tmp)
		// formattfmt.Printf("This is %d: %s\n", i, v.Name)
	}

	ret := Response{
		Tracks: formattedTracks,
	}

	return &ret, nil
}

func parseHTTPError(res *http.Response) error {
	if res.StatusCode >= http.StatusOK && res.StatusCode < http.StatusBadRequest {
		return nil
	}

	if res.ContentLength == 0 {
		return fmt.Errorf("error performing request")
	}

	buf := bytes.NewBuffer(make([]byte, 0, res.ContentLength))
	if _, err := buf.ReadFrom(res.Body); err != nil {
		return errors.Wrap(err, "error reading response body")
	}

	return fmt.Errorf("error performing request: %s", buf.String())
}

func (c *HTTPClient) MakeQuery() string {
	u, err := url.Parse(lastFmUrl)
	if err != nil {
		log.Fatal(err)
	}

	q := u.Query()
	q.Set("method", "user.getRecentTracks")
	q.Set("limit", string(10))
	q.Set("user", c.username)
	q.Set("api_key", c.apiKey)
	q.Set("format", "json")
	u.RawQuery = q.Encode()

	return u.String()
}
