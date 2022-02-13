---
id: map
title: Map type
sidebar_label: Map
---

## Plain map

To represent `object` with [`additionalProperties`](https://swagger.io/docs/specification/data-models/dictionaries/)
`ogen` uses Go `map` type.

```yaml title="string map schema"
Map:
    type: object
    additionalProperties:
      type: string
```

```go title="generated map type"
type Map map[string]string
```

## Map with fixed-keys

Map with fixed-keys represent by `struct` with `AdditionalProps` field.

```yaml title="string map schema"
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

```go title="generated map type"
type Map struct {
	Default         int `json:"default"`
	AdditionalProps map[string]string
}
```

## Free-form map

Map with unspecified schema represent by `map` with [`jx.Raw`](https://pkg.go.dev/github.com/go-faster/jx) values.

```yaml title="string map schema"
Map:
    type: object
    additionalProperties: true
```

```go title="generated map type"
type Map map[string]jx.Raw
```

