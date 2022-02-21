---
id: any
title: Any type
sidebar_label: Any
---

## Description

To represent untyped and empty schemas, ogen uses "any" `jx.Raw` type.

### Checking JSON type
```go
raw := jx.Raw(`[1, 2, 3]`)
fmt.Println(raw.Type())
// Output:
// array
```

### Getting values from `jx.Raw`
```go
raw := jx.Raw(`[1, 2, 3]`)
d := jx.GetDecoder()
d.DecodeBytes(raw)

var values []int
if err := d.Arr(func(d *jx.Decoder) error {
    v, err := d.Int()
    if err != nil {
        return err
    }
    values = append(values, v)
    return nil
}); err != nil {
	return err
}

fmt.Println(values)
// Output:
// [1 2 3]
```
