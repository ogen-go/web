"use strict";(globalThis.webpackChunkdocs_v_2=globalThis.webpackChunkdocs_v_2||[]).push([[836],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var r=t(6540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),f=o,m=u["".concat(s,".").concat(f)]||u[f]||g[f]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2120:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(8168),o=(t(6540),t(5680));const a={id:"config",title:"Config",sidebar_label:"Config",sidebar_position:7},i=void 0,l={unversionedId:"config",id:"config",title:"Config",description:"ogen could be configurated via .ogen.yml file:",source:"@site/docs/07-config.mdx",sourceDirName:".",slug:"/config",permalink:"/docs/config",draft:!1,editUrl:"https://github.com/ogen-go/web/edit/main/docs/07-config.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"config",title:"Config",sidebar_label:"Config",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Request lifecycle",permalink:"/docs/misc/request_lifecycle"},next:{title:"FAQ",permalink:"/docs/faq"}},s={},c=[{value:"Features",id:"features",level:3}],p={toc:c},u="wrapper";function g(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"ogen could be configurated via ",(0,o.yg)("inlineCode",{parentName:"p"},".ogen.yml")," file:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml",metastring:'[title=".ogen.yml"]',"[title":'".ogen.yml"]'},'# sets generator options.\ngenerator:\n  # sets generator features.\n  features:\n    enable:\n      # Enables paths client generation\n      - "paths/client"\n      # Enables paths server generation\n      - "paths/server"\n      # Enables validation of client requests\n      - "client/request/validation"\n      # Enables validation of server responses\n      - "server/response/validation"\n      # Enables OpenTelemetry integration\n      - "ogen/otel"\n    disable_all: true\n')),(0,o.yg)("p",null,"See full config example ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/ogen-go/ogen/blob/main/examples/_config/example_all.yml"},"here"),"."),(0,o.yg)("h3",{id:"features"},"Features"),(0,o.yg)("p",null,"ogen provides a opt-in/opt-out mechanism for some features like OpenTelemetry integration."),(0,o.yg)("p",null,"You can find a ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/ogen-go/ogen/blob/main/gen/features.go"},"complete feature list")," in ogen repository."))}g.isMDXComponent=!0}}]);