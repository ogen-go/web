---
id: interface_responses
title: Interface responses
sidebar_label: Interface responses
---

OpenAPI allows to define multiple responses by using HTTP codes and content types.

```yaml title="Multiple responses schema"
      responses:
        '200':
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Pet'
        '405':
          description: Invalid input
```


To represents them, `ogen` generates an interface-based sum type (or [_tagged union_](https://en.wikipedia.org/wiki/Tagged_union))
of different response types.

```go title="addPet operation response interface"
type AddPetRes interface {
	addPetRes()
}
```

```go title="addPet operation response variants"
// AddPetMethodNotAllowed is response for AddPet operation.
type AddPetMethodNotAllowed struct{}

func (*AddPetMethodNotAllowed) addPetRes() {}

// Ref: #/components/schemas/Pet
type Pet struct {
	ID        OptInt64    `json:"id"`
	Name      string      `json:"name"`
	Category  OptCategory `json:"category"`
	PhotoUrls []string    `json:"photoUrls"`
	Tags      []Tag       `json:"tags"`
	// Pet status in the store.
	Status OptPetStatus `json:"status"`
}

func (*Pet) addPetRes()     {}
```


