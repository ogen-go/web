---
id: primitive
title: Primitives
sidebar_label: Primitive
---

## String

String is byte sequence primitive type represent by Go `string` or `[]byte`.

### Supported formats

:::caution

`duration` is a Go `time.Duration` format, but JSON Schema defines it as [RFC 3339 duration](https://datatracker.ietf.org/doc/html/rfc3339#appendix-A).

:::

| Format    | Type                                                          | Description                                                                                                                                                  |
|-----------|---------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| byte      | `[]byte`                                                      | Base64-encoded string as defined in [RFC4648](https://www.rfc-editor.org/rfc/rfc4648.html)                                                                   |
| date-time | [`time.Time`](https://pkg.go.dev/time#Time)                   | Date and time notation as defined by [RFC 3339, section 5.6](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6), for example, `2022-02-22T11:22:33Z` |
| date      | [`time.Time`](https://pkg.go.dev/time#Time)                   | Date only notation as defined by [RFC 3339, section 5.6](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6), for example, `2022-02-22`               |
| time      | [`time.Time`](https://pkg.go.dev/time#Time)                   | Time only notation as defined by [RFC 3339, section 5.6](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6), for example, `11:22:33`                 |
| duration  | [`time.Duration`](https://pkg.go.dev/time#Duration)           | Go duration format                                                                                                                                           |
| uuid      | [`uuid.UUID`](https://pkg.go.dev/github.com/google/uuid#UUID) | UUID                                                                                                                                                         |
| ip        | [`net.IP`](https://pkg.go.dev/net#IP)                         | Any IP (IPv4, IPv6)                                                                                                                                          |
| ipv4      | [`net.IP`](https://pkg.go.dev/net#IP)                         | IPv4, for example, `1.1.1.1`                                                                                                                                 |
| ipv6      | [`net.IP`](https://pkg.go.dev/net#IP)                         | IPv6, for example, `2001:db8:85a3::8a2e:370:7334`                                                                                                            |
| uri       | [`url.URL`](https://pkg.go.dev/net/url#URL)                   | URL as defined by [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986)                                                                                  |
| email     | `string`                                                      | Email, for example, `foo@example.com`                                                                                                                        |
| binary    | `string`                                                      | Binary string                                                                                                                                                |
| hostname  | `string`                                                      | Hostname as defined by [RFC 1034, section 3.1](https://datatracker.ietf.org/doc/html/rfc1034#section-3.1)                                                    |

#### Non-standard formats

| Format            | Type                                           | Description                                                                                                                                   |
|-------------------|------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| unix/unix-seconds | [`time.Time`](https://pkg.go.dev/time#Time)    | [`Time.Unix()`](https://pkg.go.dev/time#Time.Unix), encoded as string. See [issue #307](https://github.com/ogen-go/ogen/issues/306)           |
| unix-nano         | [`time.Time`](https://pkg.go.dev/time#Time)    | [`Time.UnixNano()`](https://pkg.go.dev/time#Time.UnixNano), encoded as string. See [issue #307](https://github.com/ogen-go/ogen/issues/306)   |
| unix-micro        | [`time.Time`](https://pkg.go.dev/time#Time)    | [`Time.UnixMicro()`](https://pkg.go.dev/time#Time.UnixMicro), encoded as string. See [issue #307](https://github.com/ogen-go/ogen/issues/306) |
| unix-milli        | [`time.Time`](https://pkg.go.dev/time#Time)    | [`Time.UnixMilli()`](https://pkg.go.dev/time#Time.UnixMilli), encoded as string. See [issue #307](https://github.com/ogen-go/ogen/issues/306) |
| int32             | `int32`                                        | 32-bit signed integer, encoded as string. See [issue #307](https://github.com/ogen-go/ogen/issues/307)                                        |
| int64             | `int64`                                        | 64-bit signed integer, encoded as string. See [issue #307](https://github.com/ogen-go/ogen/issues/307)                                        |

### Validation

:::note

Note that length validation uses [`utf8.RuneCountInString`](https://pkg.go.dev/unicode/utf8#RuneCountInString) to count
string length.

:::

:::caution

`ogen` uses Go's [`regexp`](https://pkg.go.dev/regexp) instead of ECMAScript-compatible.

:::

| Validator | Description                                    |
|-----------|------------------------------------------------|
| minLength | Minimum length in Unicode code points          |
| maxLength | Maximum length in Unicode code points          |
| pattern   | Go [regexp](https://pkg.go.dev/regexp) pattern |

## Numbers

OpenAPI/JSON schema has two numeric types, `number` and `integer`, where `number` includes both integer and
floating-point numbers.

| type      | format | Go type   | Description                                  |
|-----------|--------|-----------|----------------------------------------------|
| number    | ???      | `float64` | Any numbers                                  |
| number    | float  | `float32` | Floating-point numbers                       |
| number    | double | `float64` | Floating-point numbers with double precision |
| integer   | ???      | `int`     | Integer numbers                              |
| integer   | int32  | `int32`   | Signed 32-bit integers                       |
| integer   | int64  | `int64`   | Signed 64-bit integers                       |
