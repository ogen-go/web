---
id: map
title: Map type
sidebar_label: Map
---

## Plain map

To represent `object` with [`additionalProperties`](https://swagger.io/docs/specification/data-models/dictionaries/)
`ogen` uses Go `map` type.

```yaml
Map:
    type: object
    additionalProperties:
      type: string
```

```go
type Map map[string]string
```

## Map with fixed-keys

Map with fixed-keys represent by `struct` with `AdditionalProps` field.

```yaml
Map:
    type: object
    properties:
      default:
        type: integer
    required:
      - default
    additionalProperties:
      type: string
```

```go
type Map struct {
	Default         int `json:"default"`
	AdditionalProps map[string]string
}
```

## Map with key pattern

`ogen` also supports [`patternProperties`](https://json-schema.org/understanding-json-schema/reference/object.html#pattern-properties).
Decoder will populate map only with keys that matches given pattern.

```yaml
Map:
    type: object
    patternProperties:
      foo.*:
        type: string
```

```go
type Map map[string]string
```

## Free-form map

Map with unspecified schema represent by `map` with [`jx.Raw`](https://pkg.go.dev/github.com/go-faster/jx) values.

```yaml
Map:
    type: object
    additionalProperties: true
```

```go
type Map map[string]jx.Raw
```

