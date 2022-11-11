```yaml
openapi: 3.0.3
info:
  title: Example
  version: 1.0.0
paths:
  /post:
    post:
      summary: Creates new post
      operationId: newPost
      requestBody:
        required: true
        content:
          multipart/form-data:
            schema:
              type: object
              required: [ title, content ]
              properties:
                title:
                  type: string
                content:
                  type: string
                thumbnail:
                  type: string
                  format: binary
                attachments:
                  type: array
                  items:
                    type: string
                    format: binary
      responses:
        '200':
          description: OK
```
