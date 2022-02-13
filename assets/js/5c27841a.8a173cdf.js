"use strict";(globalThis.webpackChunkdocs_v_2=globalThis.webpackChunkdocs_v_2||[]).push([[251],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,y=d["".concat(l,".").concat(u)]||d[u]||c[u]||p;return n?a.createElement(y,i(i({ref:t},m),{},{components:n})):a.createElement(y,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,i=new Array(p);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<p;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8018:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>i,metadata:()=>o,toc:()=>l,default:()=>m});var a=n(3117),r=(n(7294),n(3905));const p={id:"map",title:"Map type",sidebar_label:"Map"},i=void 0,o={unversionedId:"types/map",id:"types/map",title:"Map type",description:"Plain map",source:"@site/docs/types/map.md",sourceDirName:"types",slug:"/types/map",permalink:"/docs/types/map",editUrl:"https://github.com/ogen-go/web/edit/main/docs/types/map.md",tags:[],version:"current",frontMatter:{id:"map",title:"Map type",sidebar_label:"Map"},sidebar:"tutorialSidebar",previous:{title:"Sum type",permalink:"/docs/types/sumtype"}},l=[{value:"Plain map",id:"plain-map",children:[],level:2},{value:"Map with fixed-keys",id:"map-with-fixed-keys",children:[],level:2},{value:"Free-form map",id:"free-form-map",children:[],level:2}],s={toc:l};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"plain-map"},"Plain map"),(0,r.kt)("p",null,"To represent ",(0,r.kt)("inlineCode",{parentName:"p"},"object")," with ",(0,r.kt)("a",{parentName:"p",href:"https://swagger.io/docs/specification/data-models/dictionaries/"},(0,r.kt)("inlineCode",{parentName:"a"},"additionalProperties")),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"ogen")," uses Go ",(0,r.kt)("inlineCode",{parentName:"p"},"map")," type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="string map schema"',title:'"string',map:!0,'schema"':!0},"Map:\n    type: object\n    additionalProperties:\n      type: string\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="generated map type"',title:'"generated',map:!0,'type"':!0},"type Map map[string]string\n")),(0,r.kt)("h2",{id:"map-with-fixed-keys"},"Map with fixed-keys"),(0,r.kt)("p",null,"Map with fixed-keys represent by ",(0,r.kt)("inlineCode",{parentName:"p"},"struct")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"AdditionalProps")," field."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="string map schema"',title:'"string',map:!0,'schema"':!0},"Map:\n    type: object\n    properties:\n      default:\n        type: integer\n    required:\n      - default\n    additionalProperties:\n      type: string\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="generated map type"',title:'"generated',map:!0,'type"':!0},'type Map struct {\n    Default         int `json:"default"`\n    AdditionalProps map[string]string\n}\n')),(0,r.kt)("h2",{id:"free-form-map"},"Free-form map"),(0,r.kt)("p",null,"Map with unspecified schema represent by ",(0,r.kt)("inlineCode",{parentName:"p"},"map")," with ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/go-faster/jx"},(0,r.kt)("inlineCode",{parentName:"a"},"jx.Raw"))," values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="string map schema"',title:'"string',map:!0,'schema"':!0},"Map:\n    type: object\n    additionalProperties: true\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="generated map type"',title:'"generated',map:!0,'type"':!0},"type Map map[string]jx.Raw\n")))}m.isMDXComponent=!0}}]);