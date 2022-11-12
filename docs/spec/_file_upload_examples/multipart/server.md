```go
package example

import (
	"context"
	"strings"

	"github.com/go-faster/errors"

	"github.com/ogen-go/ogen/example/api"
)

var _ api.Handler = PostService{}

type PostService struct{}

func (s PostService) NewPost(ctx context.Context, req api.NewPostReqForm) (resp api.NewPostOK, _ error) {
	if _, ok := req.Thumbnail.Get(); ok {
		// Access optional file field.
	}
	// Iterate over files.
	for _, attachment := range req.Attachments {
		// Checking file name.
		if !strings.HasPrefix(attachment.Name, "attachment") {
			// Access array of files.
			return resp, errors.Errorf("invalid file name: %q", attachment.Name)
		}
	}
	return resp, nil
}
```
