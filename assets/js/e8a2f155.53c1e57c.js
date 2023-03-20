"use strict";(globalThis.webpackChunkdocs_v_2=globalThis.webpackChunkdocs_v_2||[]).push([[120],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,g=u["".concat(d,".").concat(m)]||u[m]||c[m]||o;return r?n.createElement(g,i(i({ref:t},l),{},{components:r})):n.createElement(g,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7485:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={id:"middlewares",title:"Middlewares",sidebar_label:"Middlewares"},i=void 0,s={unversionedId:"concepts/middlewares",id:"concepts/middlewares",title:"Middlewares",description:"The middleware API is experimental and may change in the",source:"@site/docs/concepts/middlewares.md",sourceDirName:"concepts",slug:"/concepts/middlewares",permalink:"/docs/concepts/middlewares",draft:!1,editUrl:"https://github.com/ogen-go/web/edit/main/docs/concepts/middlewares.md",tags:[],version:"current",frontMatter:{id:"middlewares",title:"Middlewares",sidebar_label:"Middlewares"},sidebar:"tutorialSidebar",previous:{title:"Interface responses",permalink:"/docs/concepts/interface_responses"},next:{title:"Static router",permalink:"/docs/concepts/static_router"}},d={},p=[],l={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/ogen-go/ogen/middleware"},(0,a.kt)("inlineCode",{parentName:"a"},"middleware"))," API is experimental and may change in the\nfuture.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you are looking for a way how to use ",(0,a.kt)("inlineCode",{parentName:"p"},"net/http")," middlewares with ",(0,a.kt)("inlineCode",{parentName:"p"},"ogen"),", check out the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/concepts/static_router#using-nethttp-middlewares"},"Using net/http middlewares")," section.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ogen")," provides a high-level middleware API that allows you to perform custom logic before and after the request\nis handled by the server."),(0,a.kt)("p",null,"Unlike the ",(0,a.kt)("inlineCode",{parentName:"p"},"net/http")," middleware, ",(0,a.kt)("inlineCode",{parentName:"p"},"ogen")," middleware gets an already parsed and validated request, and must return a\ntyped response."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package middlewares\n\nimport (\n    "go.uber.org/zap"\n    "go.uber.org/zap/zapcore"\n\n    "github.com/ogen-go/ogen/middleware"\n)\n\nfunc Logging(logger *zap.Logger) middleware.Middleware {\n    return func(\n        req middleware.Request,\n        next func(req middleware.Request) (middleware.Response, error),\n    ) (middleware.Response, error) {\n        logger := logger.With(\n            zap.String("operation", req.OperationName),\n            zap.String("operationId", req.OperationID),\n        )\n        logger.Info("Handling request")\n        resp, err := next(req)\n        if err != nil {\n            logger.Error("Fail", zap.Error(err))\n        } else {\n            var fields []zapcore.Field\n            // Some response types may have a status code.\n            // ogen provides a getter for it.\n            //\n            // You can write your own interface to match any response type.\n            if tresp, ok := resp.Type.(interface{ GetStatusCode() int }); ok {\n                fields = []zapcore.Field{\n                    zap.Int("status_code", tresp.GetStatusCode()),\n                }\n            }\n            logger.Info("Success", fields...)\n        }\n        return resp, err\n    }\n}\n')))}c.isMDXComponent=!0}}]);