```yaml
openapi: 3.0.3
info:
  title: Example
  version: 1.0.0
paths:
  /avatar:
    post:
      summary: Upload avatar
      operationId: uploadAvatar
      requestBody:
        required: true
        content:
          image/png:
            schema:
              type: string
              format: binary
      responses:
        '200':
          description: OK
```
