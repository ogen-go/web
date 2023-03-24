---
id: request_lifecycle
title: Request lifecycle
sidebar_label: Request lifecycle
---

## Server

### `net/http`

First, request comes from http server and goes through any `net/http` middleware that wrap generated `Server`.

`Server` routes request to the operation handler. [More about router here](concepts/static_router.mdx).

### OpenTelemetry

Before handling request handler creates a trace and increases requests counter.

### Security handlers

Security requirements are handled first in order to not handle unauthorized/unauthenticated requests.

If OpenAPI specification defines any security requirements, ogen generates a `SecurityHandler` interface.
For each security scheme, operation handler does this:

- Checks the presence of value, defined by scheme
- If value is present, parses and validates it, then calls the corresponding method of `SecurityHandler`
- If any error occured during this process, handler generates a `ogenerrors.SecurityError`, then calls [error handler](#error-handling)

When all security schemes are parsed, ogen tries to find a requriements that satisfied by these schemes.
If there is no such requirement, handler returns `ogenerrors.ErrSecurityRequirementIsNotSatisfied`.

:::info

Handler calls method of `SecurityHandler`, even if there is already one satisified requirement.
It is done to be sure that every scheme value is validated and checked.

:::

For example, let's say we have a specification like this:

```json
{
  "security": [
    {
      "basicAuth": [],
      "headerKey": []
    },
    {
      "bearerToken": [],
      "headerKey": []
    }
  ],
  "components": {
    "securitySchemes": {
      "headerKey": {
        "type": "apiKey",
        "in": "header",
        "name": "X-Api-Key"
      },
      "basicAuth": {
        "type": "http",
        "scheme": "basic"
      },
      "bearerToken": {
        "type": "http",
        "scheme": "bearer"
      }
    }
  }
}
```

Basically, this specification defines two possible requirements: `(bearerToken && headerKey) || (basicAuth && headerKey)`.

| `headerKey` scheme | `basicAuth` scheme | `bearerToken` scheme | Result |
| ------------------ | ------------------ | -------------------- | ------ |
| Present ✅         | Present ✅         | Not present❌        | OK     |
| Present ✅         | Not present❌      | Present ✅           | OK     |
| Present ✅         | Present ✅         | Present ✅           | OK     |
| Not present❌      | Present ✅         | Present ✅           | Error  |
| Present ✅         | Not present❌      | Not present❌        | Error  |

### Parameters decoder

If any error occured during decoding, parameter decoder generates a `ogenerrors.DecodeParamsError`, then calls [error handler](#error-handling)

### Request body decoder

At first body decoder tries to match given `Content-Type` with defined in spec.
If there is no match, decoder generates a `validate.InvalidContentTypeError`

:::caution

Note that request decoder reads entire request to the memory except for big multipart files.

:::

If any error occured during decoding, body decoder generates a `ogenerrors.DecodeRequestError`, then calls [error handler](#error-handling)

#### `multipart/form-data`

If form file is too big, multipart reader temporarily stores it on disk. Limit is defined by `MaxMultipartMemory`.
These files are available until handler returns.

If any error occured during decoding, **handler closes and deletes all temporary files**.

### Handler

When all parts of request are parsed, user-defined `Handler` is called.

If any middleware set via `WithMiddleware` option, `Handler` passed to the middleware as `next` parameter.

If [`Convenient errors`](concepts/convenient_errors.md) are available, an error returned from `Handler` is passed to `NewError` handler.
Otherwise, error handler defined by `WithErrorHandler` is used.

### Error handling

If any occured during request handling, handler does this:

- Increases error counter
- Sets trace status to error
- Records error using [`Span.RecordError`](https://pkg.go.dev/go.opentelemetry.io/otel/trace#Span.RecordError). It appears in trace as [`exception.*` attributes](https://opentelemetry.io/docs/reference/specification/trace/semantic_conventions/exceptions/).
