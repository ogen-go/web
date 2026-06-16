"use strict";(globalThis.webpackChunkdocs_v_2=globalThis.webpackChunkdocs_v_2||[]).push([["789"],{2834(e,t,a){a.r(t),a.d(t,{metadata:()=>r,default:()=>b,frontMatter:()=>m,contentTitle:()=>h,toc:()=>g,assets:()=>v});var r=JSON.parse('{"id":"validator","title":"Validator","description":"Validate an OpenAPI v3 document directly in your browser. This runs the real","source":"@site/docs/03-validator.mdx","sourceDirName":".","slug":"/validator","permalink":"/docs/validator","draft":false,"unlisted":false,"editUrl":"https://github.com/ogen-go/web/edit/main/docs/03-validator.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"validator","title":"Validator","sidebar_label":"Validator","sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Features","permalink":"/docs/features"},"next":{"title":"Extensions","permalink":"/docs/spec/extensions"}}'),n=a(4848),i=a(8453),o=a(6540),s=a(9526),d=a(6497);let l=`openapi: 3.0.3
info:
  title: Petstore
  version: 1.0.0
paths:
  /pets/{petId}:
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
          description: A pet
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Pet'
components:
  schemas:
    Pet:
      type: object
      required: [id, name]
      properties:
        id:
          type: integer
          format: int64
        name:
          type: string
`,c=null;function u(){let e=(0,d.Ay)("/wasm/wasm_exec.js"),t=(0,d.Ay)("/wasm/ogen.wasm"),[a,r]=(0,o.useState)(l),[i,s]=(0,o.useState)("loading"),[u,p]=(0,o.useState)(""),[m,h]=(0,o.useState)(null),v=(0,o.useRef)(null);(0,o.useEffect)(()=>{let a=!1;return(c||(c=(async()=>{let a;await new Promise((t,a)=>{let r=document.querySelector(`script[data-src="${e}"]`);if(r)return void(r.dataset.loaded?t():(r.addEventListener("load",()=>t()),r.addEventListener("error",a)));let n=document.createElement("script");n.src=e,n.async=!0,n.dataset.src=e,n.addEventListener("load",()=>{n.dataset.loaded="true",t()}),n.addEventListener("error",a),document.head.appendChild(n)});let r=new Go,n=await fetch(t);if(!n.ok)throw Error(`fetch ${t}: ${n.status}`);if(WebAssembly.instantiateStreaming)try{({instance:a}=await WebAssembly.instantiateStreaming(n.clone(),r.importObject))}catch{a=void 0}if(!a){let e=await n.arrayBuffer();({instance:a}=await WebAssembly.instantiate(e,r.importObject))}if(r.run(a),"function"!=typeof window.ogenValidate)throw Error("ogenValidate was not registered by the wasm module");return window.ogenValidate})().catch(e=>{throw c=null,e}))).then(e=>{a||(v.current=e,s("ready"))}).catch(e=>{a||(p(String(e&&e.message?e.message:e)),s("error"))}),()=>{a=!0}},[e,t]);let g=(0,o.useCallback)(()=>{v.current&&h(v.current(a))},[a]);return(0,n.jsxs)("div",{className:"validator_YbJt",children:[(0,n.jsx)("textarea",{className:"editor_X3Vn",value:a,spellCheck:!1,onChange:e=>r(e.target.value),"aria-label":"OpenAPI document"}),(0,n.jsxs)("div",{className:"toolbar_vD3v",children:[(0,n.jsx)("button",{className:"button button--primary",onClick:g,disabled:"ready"!==i,children:"loading"===i?"Loading validator\u2026":"Validate"}),"error"===i&&(0,n.jsxs)("span",{className:"loadError_zlFH",children:["Failed to load validator: ",u]})]}),m&&(0,n.jsx)("div",{className:m.ok?"ok_iAn5":"fail_fMVt",role:"status",children:m.ok?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("strong",{children:"Valid \u2713"}),(0,n.jsx)("div",{className:"summary_ktdq",children:m.summary})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("strong",{children:"Invalid \u2717"}),(0,n.jsx)("pre",{className:"errorOutput_vUnj",children:m.error})]})})]})}function p(){return(0,n.jsx)(s.A,{fallback:(0,n.jsx)("div",{children:"Loading validator\u2026"}),children:()=>(0,n.jsx)(u,{})})}let m={id:"validator",title:"Validator",sidebar_label:"Validator",sidebar_position:3},h="OpenAPI validator",v={},g=[];function f(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"openapi-validator",children:"OpenAPI validator"})}),"\n",(0,n.jsxs)(t.p,{children:["Validate an OpenAPI v3 document directly in your browser. This runs the ",(0,n.jsx)(t.strong,{children:"real\nogen parser and IR builder"})," compiled to WebAssembly \u2014 the same pipeline used by\nthe code generator \u2014 so the result reflects what ogen would actually accept."]}),"\n",(0,n.jsxs)(t.p,{children:["Edit the document below and press ",(0,n.jsx)(t.strong,{children:"Validate"}),". Errors are reported with source\nlocation, exactly like the ",(0,n.jsx)(t.code,{children:"ogen"})," CLI."]}),"\n",(0,n.jsx)(p,{}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Everything runs locally in your browser; the document is never uploaded. The\nvalidator focuses on schema validity \u2014 operations that ogen cannot yet generate\nare ignored (equivalent to ",(0,n.jsx)(t.code,{children:'ignore_not_implemented: ["all"]'}),"), so a valid\nresult does not guarantee every operation is supported. See ",(0,n.jsx)(t.a,{href:"config",children:"Config"}),"\nfor details."]})})]})}function b(e={}){let{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},9526(e,t,a){a.d(t,{A:()=>i});var r=a(4848);a(6540);var n=a(9863);function i({children:e,fallback:t}){return(0,n.A)()?(0,r.jsx)(r.Fragment,{children:e?.()}):t??null}},8453(e,t,a){a.d(t,{R:()=>o,x:()=>s});var r=a(6540);let n={},i=r.createContext(n);function o(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);