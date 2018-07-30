package lastfm

type Client struct {
	http Http
}

func NewClient(http Http) *Client {
	return &Client{
		http: http,
	}
}
