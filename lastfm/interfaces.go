package lastfm

type Http interface {
	Do(method, path string, params ...string) (*Response, error)
}
