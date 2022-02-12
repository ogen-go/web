---
id: optional
title: Optional type
sidebar_label: Optional
---

## Description

Instead of using pointers, `ogen` generates generic wrappers.

For example, `OptNilString` is `string` that is optional (no value) and can be `null`.

```go
// OptNilString is optional nullable string.
type OptNilString struct {
    Value string
    Set   bool
    Null  bool
}
```

Multiple convenience helper methods and functions are generated, some of them:

```go
// IsSet returns true if OptNilString was set.
func (o OptNilString) IsSet() bool
// Reset unsets value.
func (o *OptNilString) Reset()
// SetTo sets value to v.
func (o *OptNilString) SetTo(v string)
// IsSet returns true if value is Null.
func (o OptNilString) IsNull() bool
// Get returns value and boolean that denotes whether value was set.
func (o OptNilString) Get() (v string, ok bool)
// Or returns value if set, or given parameter if does not.
func (o OptNilString) Or(d string) string

func NewOptNilString(v string) OptNilString
```

## Semantic

To implement decoder, ogen follows the rules below

### Type

| Schema                 | Type          |
|------------------------|---------------|
| required               | `T`           |
| optional               | `Opt[#T]`     |
| nullable, but required | `Nil[#T]`     |
| optional & nullable    | `OptNil[#T]`  |

### Decoder behavior

| Schema                 | no value    | `null`                 | value                   |
|------------------------|-------------|------------------------|-------------------------|
| required               | Error       | Error                  | OK                      |
| optional               | `Set=false` | Error                  | `Set=true`              |
| nullable, but required | Error       | `Null=true`            | OK                      |
| optional & nullable    | `Set=false` | `Set=true`,`Null=true` | `Set=true`,`Null=false` |

## Semantic for arrays

For arrays semantic is slightly different

### Type

| Schema                 | Type              |
|------------------------|-------------------|
| required               | `[]T`             |
| optional               | `[]T`             |
| nullable, but required | `[]T`             |
| optional & nullable    | `OptNil[#T]Array` |

### Decoder behavior

| Schema                 | no value    | `null`                              | `[]`                                 | non-empty array                          |
|------------------------|-------------|-------------------------------------|--------------------------------------|------------------------------------------|
| required               | Error       | Error                               | Empty non-`nil` slice                | Non-empty slice                          |
| optional               | `nil` slice | Error                               | Empty non-`nil` slice                | Non-empty slice                          |
| nullable, but required | Error       | `nil` slice                         | Empty non-`nil` slice                | Non-empty slice                          |
| optional & nullable    | `Set=false` | `Set=true`,`Null=true`, empty slice | `Set=true`,`Null=false`, empty slice | `Set=true`,`Null=false`, non-empty slice |
