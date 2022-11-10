---
id: middlewares
title: Middlewares
sidebar_label: Middlewares
---

:::caution

The [`middleware`](https://pkg.go.dev/github.com/ogen-go/ogen/middleware) API is experimental and may change in the
future.

:::

:::info

If you are looking for a way how to use `net/http` middlewares with `ogen`, check out the
[Using net/http middlewares](static_router.md#using-nethttp-middlewares) section.

:::


`ogen` provides a high-level middleware API that allows you to perform custom logic before and after the request
is handled by the server.

Unlike the `net/http` middleware, `ogen` middleware gets an already parsed and validated request, and must return a
typed response.

```go
package middlewares

import (
	"go.uber.org/zap"
	"go.uber.org/zap/zapcore"

	"github.com/ogen-go/ogen/middleware"
)

func Logging(logger *zap.Logger) middleware.Middleware {
	return func(
		req middleware.Request,
		next func(req middleware.Request) (middleware.Response, error),
	) (middleware.Response, error) {
		logger := logger.With(
			zap.String("operation", req.OperationName),
			zap.String("operationId", req.OperationID),
		)
		logger.Info("Handling request")
		resp, err := next(req)
		if err != nil {
			logger.Error("Fail", zap.Error(err))
		} else {
			var fields []zapcore.Field
			// Some response types may have a status code.
			// ogen provides a getter for it.
			//
			// You can write your own interface to match any response type.
			if tresp, ok := resp.Type.(interface{ GetStatusCode() int }); ok {
				fields = []zapcore.Field{
					zap.Int("status_code", tresp.GetStatusCode()),
				}
			}
			logger.Info("Success", fields...)
		}
		return resp, err
	}
}
```
