```go
package example

import (
	"context"
	"image/png"
	"io"
	"os"

	"github.com/go-faster/errors"

	api "<your_api_package>"
)

var _ api.Handler = AvatarService{}

type Storage interface {
	Store(ctx context.Context, data io.Reader) error
}

type AvatarService struct {
	storage Storage
}

func (s AvatarService) UploadAvatar(ctx context.Context, req api.UploadAvatarReq) (resp api.UploadAvatarOK, _ error) {
	f, err := os.CreateTemp("", "avatar")
	if err != nil {
		return resp, err
	}
	defer func() {
		_ = f.Close()
	}()

	const maxImageBytes = 16 * 1024 * 1024 // 16MB
	if _, err := io.Copy(f, io.LimitReader(req.Data, maxImageBytes)); err != nil {
		return resp, err
	}

	// Sniff image format and size.
	header, err := png.DecodeConfig(f)
	if err != nil {
		return resp, errors.Wrap(err, "decode image")
	}

	// Validate image size.
	if header.Width < 96 || header.Height < 96 {
		return resp, errors.New("image is too small")
	}
	if header.Width > 1000 || header.Height > 1000 {
		return resp, errors.New("image is too big")
	}

	// Seek to the beginning of the file.
	if _, err := f.Seek(0, io.SeekStart); err != nil {
		return resp, err
	}

	// Store image.
	if err := s.storage.Store(ctx, f); err != nil {
		return resp, err
	}
	return resp, nil
}
```
