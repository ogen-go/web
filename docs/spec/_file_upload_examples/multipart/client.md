```go
package example

import (
	"context"
	"fmt"
	"io"

	"github.com/ogen-go/ogen/example/api"
	ht "github.com/ogen-go/ogen/http"
)

type Post struct {
	Title       string
	Content     string
	Thumbnail   io.Reader
	Attachments []io.Reader
}

func MakePost(ctx context.Context, client *api.Client, post Post) error {
	req := &api.NewPostReqForm{
		Title:   post.Title,
		Content: post.Content,
	}
	if t := post.Thumbnail; t != nil {
		req.Thumbnail = api.NewOptMultipartFile(ht.MultipartFile{
			Name: "thumbnail",
			File: t,
		})
	}
	for i, attachment := range post.Attachments {
		req.Attachments = append(req.Attachments, ht.MultipartFile{
			Name: fmt.Sprintf("attachment%d", i),
			File: attachment,
		})
	}
	return client.NewPost(ctx, req)
}
```
