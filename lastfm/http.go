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

type Response struct {
	RecentTracks Tracks `json:"recenttracks"`
	ErrorCode    int    `json:"errorCode"`
}

type Tracks struct {
	List []Track `json:"track"`
}

type Track struct {
	Name   string       `json:"name"`
	Artist ArtistObject `json:"artist"`
}

type ArtistObject struct {
	Text string `json:"#text"`
}

func NewHttpClient(username, apiKey string) *HTTPClient {

	return &HTTPClient{
		username: username,
		apiKey:   apiKey,
	}
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

func (c *HTTPClient) Do() (*Response, error) {

	requestString := c.MakeQuery()

	fmt.Println(requestString)
	// fmt.Printf("Make request for: %s", requestString)
	req, err := http.NewRequest("GET", requestString, nil)
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

	response, err := unmarshalResponse(res)
	if err != nil {
		return nil, err
	}

	return response, nil
}

func unmarshalResponse(res *http.Response) (*Response, error) {
	if err := parseHTTPError(res); err != nil {
		return nil, err
	}

	var ret Response
	dec := json.NewDecoder(res.Body)
	if err := dec.Decode(&ret); err != nil {
		return nil, errors.Wrap(err, "error decoding response")
	}

	return &ret, nil
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
