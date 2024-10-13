"use strict";(globalThis.webpackChunkdocs_v_2=globalThis.webpackChunkdocs_v_2||[]).push([[951],{5680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>g});var r=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,g=d["".concat(c,".").concat(f)]||d[f]||u[f]||s;return n?r.createElement(g,a(a({ref:t},l),{},{components:n})):r.createElement(g,a({ref:t},l))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6190:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=n(8168),o=(n(6540),n(5680));const s={id:"interface_responses",title:"Interface responses",sidebar_label:"Interface responses"},a=void 0,i={unversionedId:"concepts/interface_responses",id:"concepts/interface_responses",title:"Interface responses",description:"OpenAPI allows to define multiple responses by using HTTP codes and content types.",source:"@site/docs/concepts/interface_responses.md",sourceDirName:"concepts",slug:"/concepts/interface_responses",permalink:"/docs/concepts/interface_responses",draft:!1,editUrl:"https://github.com/ogen-go/web/edit/main/docs/concepts/interface_responses.md",tags:[],version:"current",frontMatter:{id:"interface_responses",title:"Interface responses",sidebar_label:"Interface responses"},sidebar:"tutorialSidebar",previous:{title:"Convenient errors",permalink:"/docs/concepts/convenient_errors"},next:{title:"Middlewares",permalink:"/docs/concepts/middlewares"}},c={},p=[],l={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.yg)(d,(0,r.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"OpenAPI allows to define multiple responses by using HTTP codes and content types."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Multiple responses schema"',title:'"Multiple',responses:!0,'schema"':!0},"      responses:\n        '200':\n          description: Successful operation\n          content:\n            application/json:\n              schema:\n                $ref: '#/components/schemas/Pet'\n        '405':\n          description: Invalid input\n")),(0,o.yg)("p",null,"To represents them, ",(0,o.yg)("inlineCode",{parentName:"p"},"ogen")," generates an interface-based sum type (or ",(0,o.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Tagged_union"},(0,o.yg)("em",{parentName:"a"},"tagged union")),")\nof different response types."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:'title="addPet operation response interface"',title:'"addPet',operation:!0,response:!0,'interface"':!0},"type AddPetRes interface {\n    addPetRes()\n}\n")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-go",metastring:'title="addPet operation response variants"',title:'"addPet',operation:!0,response:!0,'variants"':!0},'// AddPetMethodNotAllowed is response for AddPet operation.\ntype AddPetMethodNotAllowed struct{}\n\nfunc (*AddPetMethodNotAllowed) addPetRes() {}\n\n// Ref: #/components/schemas/Pet\ntype Pet struct {\n    ID        OptInt64    `json:"id"`\n    Name      string      `json:"name"`\n    Category  OptCategory `json:"category"`\n    PhotoUrls []string    `json:"photoUrls"`\n    Tags      []Tag       `json:"tags"`\n    // Pet status in the store.\n    Status OptPetStatus `json:"status"`\n}\n\nfunc (*Pet) addPetRes()     {}\n')))}u.isMDXComponent=!0}}]);