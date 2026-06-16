"use strict";(globalThis.webpackChunkdocs_v_2=globalThis.webpackChunkdocs_v_2||[]).push([["823"],{8847(e,s,i){i.r(s),i.d(s,{default:()=>m});var t=i(4848);i(6540);var n=i(4164),r=i(6386),l=i(5310),c=i(9011),d=i(898);let a=[{title:"No reflection",description:(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:["JSON encoding is code-generated and optimized, using ",(0,t.jsx)("a",{href:"https://github.com/go-faster/jx",children:"go-faster/jx"})," for speed and to overcome ",(0,t.jsx)("code",{children:"encoding/json"})," limitations"]}),(0,t.jsx)("li",{children:"Validation is code-generated directly from the specification"}),(0,t.jsxs)("li",{children:["No ",(0,t.jsx)("code",{children:"interface"})," or ",(0,t.jsx)("code",{children:"any"})," on the hot path"]})]})},{title:"No boilerplate",description:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Structures are generated from the OpenAPI v3 specification"}),(0,t.jsx)("li",{children:"Path arguments, headers and query parameters are parsed into typed structures"}),(0,t.jsxs)("li",{children:["String formats like ",(0,t.jsx)("code",{children:"uuid"}),", ",(0,t.jsx)("code",{children:"date"}),", ",(0,t.jsx)("code",{children:"date-time"})," and ",(0,t.jsx)("code",{children:"uri"})," map to Go types directly"]})]})},{title:"Type-safe client & server",description:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Statically typed client and server generated from a single spec"}),(0,t.jsxs)("li",{children:["Implement one ",(0,t.jsx)("code",{children:"Handler"})," interface and you are done"]}),(0,t.jsx)("li",{children:"Code-generated static radix router for fast request dispatch"})]})},{title:"Optional & nullable",description:(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:["Optional and nullable fields ",(0,t.jsx)("b",{children:"without pointers"})," when possible"]}),(0,t.jsxs)("li",{children:["Generated ",(0,t.jsx)("code",{children:"OptT"}),", ",(0,t.jsx)("code",{children:"NilT"})," and ",(0,t.jsx)("code",{children:"OptNilT"})," wrappers with helpers"]}),(0,t.jsxs)("li",{children:["Array ",(0,t.jsx)("code",{children:"nil"})," semantics follow the specification"]})]})},{title:"Sum types",description:(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:["Sum types are generated for ",(0,t.jsx)("code",{children:"oneOf"})]}),(0,t.jsx)("li",{children:"Discriminator field is used when defined in the schema"}),(0,t.jsx)("li",{children:"Otherwise the variant is inferred by type, unique fields or enum values"})]})},{title:"Batteries included",description:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"OpenTelemetry tracing and metrics out of the box"}),(0,t.jsx)("li",{children:"Server-Sent Events (SSE) client generation"}),(0,t.jsx)("li",{children:"Middlewares, convenient errors and per-request options"})]})}];function o({title:e,description:s}){return(0,t.jsx)("div",{className:(0,n.A)("col col--4"),children:(0,t.jsxs)("div",{className:"padding-horiz--md padding-vert--md",children:[(0,t.jsx)("h3",{children:e}),(0,t.jsx)("div",{children:s})]})})}function h(){return(0,t.jsx)("section",{className:"features_xdhU",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"row",children:a.map((e,s)=>(0,t.jsx)(o,{...e},s))})})})}function p(){let{siteConfig:e}=(0,d.A)();return(0,t.jsx)("header",{className:(0,n.A)("hero hero--primary","heroBanner_qdFl"),children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("h1",{className:"hero__title",children:e.title}),(0,t.jsx)("p",{className:"hero__subtitle",children:e.tagline}),(0,t.jsxs)("div",{className:"buttons_AeoN",children:[(0,t.jsx)(l.A,{className:"button button--secondary button--lg",to:"/docs/intro",children:"Get started"}),(0,t.jsx)(l.A,{className:"button button--outline button--secondary button--lg",href:"https://github.com/ogen-go/ogen",children:"GitHub"})]}),(0,t.jsx)("div",{className:"install_xqa7",children:(0,t.jsx)(c.A,{language:"bash",children:"go get -tool github.com/ogen-go/ogen/cmd/ogen@latest"})})]})})}let x=`paths:
  /pet/{petId}:
    get:
      operationId: getPetById
      parameters:
        - name: petId
          in: path
          required: true
          schema:
            type: integer
            format: int64
      responses:
        '200':
          description: Pet
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Pet'`,j=`// Pet describes #/components/schemas/Pet.
type Pet struct {
    ID   int64     \`json:"id"\`
    Name string    \`json:"name"\`
    Tag  OptUUID   \`json:"tag"\`
}

// Handler handles operations described
// by OpenAPI v3 specification.
type Handler interface {
    // GET /pet/{petId}
    GetPetById(ctx context.Context,
        params GetPetByIdParams) (*Pet, error)
}`;function u(){return(0,t.jsx)("section",{className:"showcase_LKp3",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("h2",{className:"showcaseTitle_byle",children:"From spec to Go, instantly"}),(0,t.jsx)("p",{className:"showcaseSubtitle_yO6H",children:"Describe your API once in OpenAPI v3 and let ogen generate a statically typed client and server."}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col col--6",children:(0,t.jsx)(c.A,{language:"yaml",title:"petstore.yml",children:x})}),(0,t.jsx)("div",{className:"col col--6",children:(0,t.jsx)(c.A,{language:"go",title:"generated Go",children:j})})]})]})})}function m(){let{siteConfig:e}=(0,d.A)();return(0,t.jsxs)(r.A,{title:`${e.title}`,description:"OpenAPI v3 code generator for Go",children:[(0,t.jsx)(p,{}),(0,t.jsxs)("main",{children:[(0,t.jsx)(h,{}),(0,t.jsx)(u,{})]})]})}}}]);