package lastfm

type LastFmData struct {
	Tracks    `json:"recenttracks"`
	ErrorCode int `json:"errorCode"`
}

type Response struct {
	Tracks    []CustomTrack `json:"test"`
	ErrorCode int           `json:"errorCode"`
}

type CustomTrack struct {
	Name   string  `json:"name"`
	Artist string  `json:"artist_name"`
	Image  []Image `json:"image"`
}

type Tracks struct {
	List []Track `json:"track"`
}

type Track struct {
	Name         string  `json:"name"`
	Images       []Image `json:"image"`
	ArtistObject `json:"artist"`
}

type Image struct {
	Text string `json:"#text"`
	Size string `json:"size"`
}

type ArtistObject struct {
	Text string `json:"#text"`
}
