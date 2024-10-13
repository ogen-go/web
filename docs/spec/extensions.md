---
id: extensions
title: Generator extensions
sidebar_label: Extensions
---

OpenAPI enables [Specification Extensions](https://spec.openapis.org/oas/v3.1.0#specification-extensions),
which are implemented as patterned fields that are always prefixed by `x-`.

### Server name

Optionally, server name can be specified by `x-ogen-server-name`, for example:

```json
{
  "openapi": "3.0.3",
  "servers": [
    {
      "x-ogen-server-name": "production",
      "url": "https://{region}.example.com/{val}/v1",
    },
    {
      "x-ogen-server-name": "prefix",
      "url": "/{val}/v1",
    },
    {
      "x-ogen-server-name": "const",
      "url": "https://cdn.example.com/v1"
    }
  ],
(...)
```

Generator will use this name to generate a server URL builder:

```go
// ProductionServer is a server URL template.
//
// Production server.
type ProductionServer struct {
	Region string `json:"region" yaml:"region"`
	Val    string `json:"val" yaml:"val"`
}

// Build returns the computed server URL.
//
// If variable is empty, it uses the default value.
// If spec defines an enum and given value is not in the enum, it returns an error.
//
// Notice that given values will not be escaped and may cause invalid URL.
func (s ProductionServer) Build() (string, error) {
	zeroOr := func(s string, def string) string {
		if s == "" {
			return def
		}
		return s
	}
	s.Region = zeroOr(s.Region, "us")
	// Validate "region"
	switch s.Region {
	case "us":
	case "eu":
	default:
		return "", errors.Errorf("param %q: unexpected value %q", "region", s.Region)
	}
	s.Val = zeroOr(s.Val, "prod")
	// Validate "val"
	switch s.Val {
	case "prod":
	case "test":
	default:
		return "", errors.Errorf("param %q: unexpected value %q", "val", s.Val)
	}
	return fmt.Sprintf("https://%s.example.com/%s/v1",
		s.Region,
		s.Val,
	), nil
}
```

### Custom type name

Optionally, type name can be specified by `x-ogen-name`, for example:

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "x-ogen-name": "Name",
  "properties": {
    "foobar": {
      "$ref": "#/$defs/FooBar"
    }
  },
  "$defs": {
    "FooBar": {
      "x-ogen-name": "FooBar",
      "type": "object",
      "properties": {
        "foo": {
          "type": "string"
        }
      }
    }
  }
}
```

### Custom field name

Optionally, type name can be specified by `x-ogen-properties`, for example:

```yaml
components:
  schemas:
    Node:
      type: object
      properties:
        parent:
          $ref: "#/components/schemas/Node"
        child:
          $ref: "#/components/schemas/Node"
      x-ogen-properties:
        parent:
          name: "Prev"
        child:
          name: "Next"
```

The generated source code looks like:

```go
// Ref: #/components/schemas/Node
type Node struct {
    Prev *Node `json:"parent"`
    Next *Node `json:"child"`
}
```

### Extra struct field tags

Optionally, additional Go struct field tags can be specified by `x-oapi-codegen-extra-tags`, for example:

```yaml
components:
  schemas:
    Pet:
      type: object
      required:
        - id
      properties:
        id:
          type: integer
          format: int64
          x-oapi-codegen-extra-tags:
            gorm: primaryKey
            valid: customIdValidator
```

The generated source code looks like:

```go
// Ref: #/components/schemas/Pet
type Pet struct {
    ID   int64     `gorm:"primaryKey" valid:"customNameValidator" json:"id"`
}
```

### Streaming JSON encoding

By default, ogen loads the entire JSON body into memory before decoding it.
Optionally, streaming JSON encoding can be enabled by `x-ogen-json-streaming`, for example:

```yaml
requestBody:
  required: true
  content:
    application/json:
      x-ogen-json-streaming: true
      schema:
        type: array
        items:
          type: number
```

### Operation groups

Optionally, operations can be grouped so a handler interface will be generated for each group of operations.
This is useful for organizing operations for large APIs.

The group for operations on a path or individual operations can be specified by `x-ogen-operation-group`, for example:

```yaml
paths:
  /images:
    x-ogen-operation-group: Images
    get:
      operationId: listImages
      ...
  /images/{imageID}:
    x-ogen-operation-group: Images
    get:
      operationId: getImageByID
      ...
  /users:
    x-ogen-operation-group: Users
    get:
      operationId: listUsers
      ...
```

The generated handler interfaces look like this:

```go
// x-ogen-operation-group: Images
type ImagesHandler interface {
    ListImages(ctx context.Context, req *ListImagesRequest) (*ListImagesResponse, error)
    GetImageByID(ctx context.Context, req *GetImagesByIDRequest) (*GetImagesByIDResponse, error)
}

// x-ogen-operation-group: Users
type UsersHandler interface {
    ListUsers(ctx context.Context, req *ListUsersRequest) (*ListUsersResponse, error)
}

type Handler interface {
    ImagesHandler
    UsersHandler
    // All un-grouped operations will be on this interface
}
```
