"use strict";(globalThis.webpackChunkdocs_v_2=globalThis.webpackChunkdocs_v_2||[]).push([[450],{3905:(t,e,n)=>{n.d(e,{Zo:()=>o,kt:()=>N});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),d=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},o=function(t){var e=d(t.components);return a.createElement(m.Provider,{value:e},t.children)},k="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,m=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),k=d(n),g=r,N=k["".concat(m,".").concat(g)]||k[g]||u[g]||i;return n?a.createElement(N,l(l({ref:e},o),{},{components:n})):a.createElement(N,l({ref:e},o))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=g;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p[k]="string"==typeof t?t:r,l[1]=p;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4487:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={id:"primitive",title:"Primitives",sidebar_label:"Primitive"},l=void 0,p={unversionedId:"types/primitive",id:"types/primitive",title:"Primitives",description:"String",source:"@site/docs/types/primitive.md",sourceDirName:"types",slug:"/types/primitive",permalink:"/docs/types/primitive",draft:!1,editUrl:"https://github.com/ogen-go/web/edit/main/docs/types/primitive.md",tags:[],version:"current",frontMatter:{id:"primitive",title:"Primitives",sidebar_label:"Primitive"},sidebar:"tutorialSidebar",previous:{title:"Optional",permalink:"/docs/types/optional"},next:{title:"Sum type",permalink:"/docs/types/sumtype"}},m={},d=[{value:"String",id:"string",level:2},{value:"Supported formats",id:"supported-formats",level:3},{value:"Non-standard formats",id:"non-standard-formats",level:4},{value:"Validation",id:"validation",level:3},{value:"Numbers",id:"numbers",level:2}],o={toc:d},k="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(k,(0,a.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"string"},"String"),(0,r.kt)("p",null,"String is byte sequence primitive type represent by Go ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"[]byte"),"."),(0,r.kt)("h3",{id:"supported-formats"},"Supported formats"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"duration")," is a Go ",(0,r.kt)("inlineCode",{parentName:"p"},"time.Duration")," format, but JSON Schema defines it as ",(0,r.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc3339#appendix-A"},"RFC 3339 duration"),".")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"byte"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]byte")),(0,r.kt)("td",{parentName:"tr",align:null},"Base64-encoded string as defined in ",(0,r.kt)("a",{parentName:"td",href:"https://www.rfc-editor.org/rfc/rfc4648.html"},"RFC4648"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"date-time"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pkg.go.dev/time#Time"},(0,r.kt)("inlineCode",{parentName:"a"},"time.Time"))),(0,r.kt)("td",{parentName:"tr",align:null},"Date and time notation as defined by ",(0,r.kt)("a",{parentName:"td",href:"https://datatracker.ietf.org/doc/html/rfc3339#section-5.6"},"RFC 3339, section 5.6"),", for example, ",(0,r.kt)("inlineCode",{parentName:"td"},"2022-02-22T11:22:33Z"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pkg.go.dev/time#Time"},(0,r.kt)("inlineCode",{parentName:"a"},"time.Time"))),(0,r.kt)("td",{parentName:"tr",align:null},"Date only notation as defined by ",(0,r.kt)("a",{parentName:"td",href:"https://datatracker.ietf.org/doc/html/rfc3339#section-5.6"},"RFC 3339, section 5.6"),", for example, ",(0,r.kt)("inlineCode",{parentName:"td"},"2022-02-22"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"time"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pkg.go.dev/time#Time"},(0,r.kt)("inlineCode",{parentName:"a"},"time.Time"))),(0,r.kt)("td",{parentName:"tr",align:null},"Time only notation as defined by ",(0,r.kt)("a",{parentName:"td",href:"https://datatracker.ietf.org/doc/html/rfc3339#section-5.6"},"RFC 3339, section 5.6"),", for example, ",(0,r.kt)("inlineCode",{parentName:"td"},"11:22:33"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"duration"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pkg.go.dev/time#Duration"},(0,r.kt)("inlineCode",{parentName:"a"},"time.Duration"))),(0,r.kt)("td",{parentName:"tr",align:null},"Go duration format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uuid"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pkg.go.dev/github.com/google/uuid#UUID"},(0,r.kt)("inlineCode",{parentName:"a"},"uuid.UUID"))),(0,r.kt)("td",{parentName:"tr",align:null},"UUID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ip"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pkg.go.dev/net#IP"},(0,r.kt)("inlineCode",{parentName:"a"},"net.IP"))),(0,r.kt)("td",{parentName:"tr",align:null},"Any IP (IPv4, IPv6)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ipv4"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pkg.go.dev/net#IP"},(0,r.kt)("inlineCode",{parentName:"a"},"net.IP"))),(0,r.kt)("td",{parentName:"tr",align:null},"IPv4, for example, ",(0,r.kt)("inlineCode",{parentName:"td"},"1.1.1.1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ipv6"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pkg.go.dev/net#IP"},(0,r.kt)("inlineCode",{parentName:"a"},"net.IP"))),(0,r.kt)("td",{parentName:"tr",align:null},"IPv6, for example, ",(0,r.kt)("inlineCode",{parentName:"td"},"2001:db8:85a3::8a2e:370:7334"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uri"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pkg.go.dev/net/url#URL"},(0,r.kt)("inlineCode",{parentName:"a"},"url.URL"))),(0,r.kt)("td",{parentName:"tr",align:null},"URL as defined by ",(0,r.kt)("a",{parentName:"td",href:"https://datatracker.ietf.org/doc/html/rfc3986"},"RFC 3986"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"email"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Email, for example, ",(0,r.kt)("inlineCode",{parentName:"td"},"foo@example.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"binary"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Binary string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hostname"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Hostname as defined by ",(0,r.kt)("a",{parentName:"td",href:"https://datatracker.ietf.org/doc/html/rfc1034#section-3.1"},"RFC 1034, section 3.1"))))),(0,r.kt)("h4",{id:"non-standard-formats"},"Non-standard formats"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unix/unix-seconds"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pkg.go.dev/time#Time"},(0,r.kt)("inlineCode",{parentName:"a"},"time.Time"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pkg.go.dev/time#Time.Unix"},(0,r.kt)("inlineCode",{parentName:"a"},"Time.Unix()")),", encoded as string. See ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/ogen-go/ogen/issues/306"},"issue #307"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unix-nano"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pkg.go.dev/time#Time"},(0,r.kt)("inlineCode",{parentName:"a"},"time.Time"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pkg.go.dev/time#Time.UnixNano"},(0,r.kt)("inlineCode",{parentName:"a"},"Time.UnixNano()")),", encoded as string. See ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/ogen-go/ogen/issues/306"},"issue #307"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unix-micro"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pkg.go.dev/time#Time"},(0,r.kt)("inlineCode",{parentName:"a"},"time.Time"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pkg.go.dev/time#Time.UnixMicro"},(0,r.kt)("inlineCode",{parentName:"a"},"Time.UnixMicro()")),", encoded as string. See ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/ogen-go/ogen/issues/306"},"issue #307"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unix-milli"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pkg.go.dev/time#Time"},(0,r.kt)("inlineCode",{parentName:"a"},"time.Time"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://pkg.go.dev/time#Time.UnixMilli"},(0,r.kt)("inlineCode",{parentName:"a"},"Time.UnixMilli()")),", encoded as string. See ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/ogen-go/ogen/issues/306"},"issue #307"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"int32"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int32")),(0,r.kt)("td",{parentName:"tr",align:null},"32-bit signed integer, encoded as string. See ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/ogen-go/ogen/issues/307"},"issue #307"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"int64"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int64")),(0,r.kt)("td",{parentName:"tr",align:null},"64-bit signed integer, encoded as string. See ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/ogen-go/ogen/issues/307"},"issue #307"))))),(0,r.kt)("h3",{id:"validation"},"Validation"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Note that length validation uses ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/unicode/utf8#RuneCountInString"},(0,r.kt)("inlineCode",{parentName:"a"},"utf8.RuneCountInString"))," to count\nstring length.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Validator"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minLength"),(0,r.kt)("td",{parentName:"tr",align:null},"Minimum length in Unicode code points")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxLength"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum length in Unicode code points")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pattern"),(0,r.kt)("td",{parentName:"tr",align:null},"Go ",(0,r.kt)("a",{parentName:"td",href:"https://pkg.go.dev/regexp"},"regexp")," pattern")))),(0,r.kt)("h2",{id:"numbers"},"Numbers"),(0,r.kt)("p",null,"OpenAPI/JSON schema has two numeric types, ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"integer"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," includes both integer and\nfloating-point numbers."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"format"),(0,r.kt)("th",{parentName:"tr",align:null},"Go type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2013"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"float64")),(0,r.kt)("td",{parentName:"tr",align:null},"Any numbers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"float32")),(0,r.kt)("td",{parentName:"tr",align:null},"Floating-point numbers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"double"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"float64")),(0,r.kt)("td",{parentName:"tr",align:null},"Floating-point numbers with double precision")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2013"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"Integer numbers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"int32"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int32")),(0,r.kt)("td",{parentName:"tr",align:null},"Signed 32-bit integers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"int64"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int64")),(0,r.kt)("td",{parentName:"tr",align:null},"Signed 64-bit integers")))))}u.isMDXComponent=!0}}]);