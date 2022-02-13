---
id: sumtype
title: Sum type
sidebar_label: Sum type
---

Sum type (also known as [_tagged union_](https://en.wikipedia.org/wiki/Tagged_union)) is a type that can be one of
multiple possible variants. `ogen` uses sum types to represent `oneOf` and some `anyOf` schemas.

```yaml title="oneOf schema"
Sum:
  oneOf:
    - $ref: '#/components/schemas/Cat'
    - $ref: '#/components/schemas/Dog'
```

```go title="Generated sum type"
// Sum represents sum type.
type Sum struct {
	Type SumType // switch on this field
	Cat  Cat
	Dog  Dog
}

// SumType is oneOf type of Sum.
type SumType string

// Possible values for SumType.
const (
	CatSum SumType = "Cat"
	DogSum SumType = "Dog"
)
```

## Discriminator inference

To distinguish different cases, decoder need some pattern called _discriminator_.

### Explicit discriminator

Generator may distinguish variants by special type field.

```yaml title="oneOf schema with explicit discriminator mapping"
Sum:
  oneOf:
    - $ref: '#/components/schemas/Cat'
    - $ref: '#/components/schemas/Dog'
  discriminator:
    propertyName: petType
    mapping:
      cat: '#/components/schemas/Cat'
      dog: '#/components/schemas/Dog'
```

### Type discriminator

Type discriminator is discriminator based on JSON type.

```yaml title="oneOf schema with type discriminator"
ID:
  oneOf:
  - type: string
  - type: integer
```

### Unique fields discriminator

_Unique fields_ discriminator is discriminator based on unique schema fields. In that case, Decoder select variant by
field that available only in one of all variants.

For example, given that schema:

```yaml title="oneOf schema with unique fields discriminator"
Sum:
  oneOf:
  - type: object
    required:
    - common-1
    - unique-1
    properties:
      common-1:
        type: string
      unique-1:
        type: string
  - type: object
    required:
    - common-1
    - unique-2
    properties:
      common-1:
        type: string
      unique-2:
        type: string
```

a payload like this:
```json
{"common-1": "foo", "unique-1": "bar"}
```

will indicate that the first variant be used.


