```go
package example

import (
	"context"
	"os"

	"github.com/ogen-go/ogen/example/api"
)

func UploadAvatarFile(ctx context.Context, client *api.Client, p string) error {
	img, err := os.Open(p)
	if err != nil {
		return err
	}
	defer func() {
		_ = img.Close()
	}()
	return client.UploadAvatar(ctx, api.UploadAvatarReq{Data: img})
}
```
