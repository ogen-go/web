---
id: convenient_errors
title: Convenient errors
sidebar_label: Convenient errors
---

If spec defines one schema as default response for all operations,
`ogen` generates special handler for errors returned by `Handler` implementation and does not generate default response variant.

```go
// Handler handles operations described by OpenAPI v3 specification.
type Handler interface {
    ...
	// NewError creates ErrorStatusCode from error returned by handler.
	//
	// Used for common default response.
	NewError(ctx context.Context, err error) ErrorStatusCode
}
```

