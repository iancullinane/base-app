package lastfm

type LastFmData struct {
	Tracks    `json:"recenttracks"`
	ErrorCode int `json:"errorCode"`
}

type Response struct {
	Tracks    []CustomTrack `json:"tracks"`
	ErrorCode int           `json:"errorCode"`
}

type Tracks struct {
	List []Track `json:"track"`
}

type Track struct {
	Name         string `json:"name"`
	Date         `json:"date"`
	Images       []Image `json:"image"`
	ArtistObject `json:"artist"`
	Attributes   `json:"@attr,omitempty"`
}

type Attributes struct {
	NowPlaying string `json:"nowplaying,omitempty"`
}

type Image struct {
	Text string `json:"#text"`
	Size string `json:"size"`
}

type Date struct {
	UTS string `json:"uts"`
}

type ArtistObject struct {
	Text string `json:"#text"`
}

type CustomTrack struct {
	Name       string  `json:"name"`
	Artist     string  `json:"artist_name"`
	Image      []Image `json:"image"`
	TimePlayed string  `json:"date,omitempty"`
	NowPlaying string  `json:"now_playing,omitempty"`
}
