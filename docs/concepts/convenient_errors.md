---
id: convenient_errors
title: Convenient errors
sidebar_label: Convenient errors
---

If spec meets all following requirements:

- Every operation defines the same `default` response
- This response defines only one `application/json` media

then `ogen` generates special handler for errors returned by `Handler` implementation and does not generate default response variant.

For example:
```yaml
openapi: 3.0.3
info:
  title: Convenient errors example
  version: 0.1.0
paths:
  /me:
    get:
      responses:
        "200":
          description: User
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/User"
        default:
          description: General Error
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Error"
  /users:
    post:
      requestBody:
        description: User to create
        required: true
        content:
          application/json:
            schema:
              $ref: "#/components/schemas/User"
      responses:
        "201":
          description: OK
        default:
          description: General Error
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Error"
components:
  schemas:
    User:
      type: object
      required:
        - id
      properties:
        id:
          type: integer
    Error:
      description: Represents error object
      type: object
      properties:
        code:
          type: integer
          format: int64
        message:
          type: string
      required:
        - code
        - message
```

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

### Force or Disable `Convenient errors`

Use `--convenient-errors` option

- `auto` (default) generates `NewError` if possible
- `on` tells generator to fail if spec does not meet requirements
- `off` disables `Convenient errors` at all

