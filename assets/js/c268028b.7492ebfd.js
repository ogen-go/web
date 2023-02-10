"use strict";(globalThis.webpackChunkdocs_v_2=globalThis.webpackChunkdocs_v_2||[]).push([[361],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(h,l(l({ref:t},s),{},{components:n})):r.createElement(h,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var r=n(7462),a=n(7294),o=n(6010),l=n(2466),i=n(6550),u=n(1980),p=n(7392),s=n(12);function d(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function c(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=c(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,p]=h({queryString:n,groupId:r}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,s.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),g=(()=>{const e=u??d;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),f(e)}),[p,f,o]),tabValues:o}}var g=n(2389);const b="tabList__CuJ",v="tabItem_LNqP";function k(e){let{className:t,block:n,selectedValue:i,selectValue:u,tabValues:p}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),c=e=>{const t=e.currentTarget,n=s.indexOf(t),r=p[n].value;r!==i&&(d(t),u(r))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>s.push(e),onKeyDown:m,onClick:c},l,{className:(0,o.Z)("tabs__item",v,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b)},a.createElement(k,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},9267:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>b,frontMatter:()=>d,metadata:()=>m,toc:()=>f});var r=n(7462),a=(n(7294),n(3905)),o=n(4866),l=n(5162);const i={toc:[]};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "embed"\n    "net/http"\n    "net/http/pprof"\n\n    "github.com/prometheus/client_golang/prometheus/promhttp"\n\n    api "<your_api_package>"\n)\n\n//go:embed static\nvar static embed.FS\n\nfunc main() {\n    srv, err := api.NewServer(myHandler{})\n    if err != nil {\n        panic(err)\n    }\n    mux := http.NewServeMux()\n    mux.Handle("/api/v1/", http.StripPrefix("/api/v1", srv))\n    // Register static files.\n    mux.Handle("/static/", http.FileServer(http.FS(static)))\n    // Register metrics handler.\n    mux.Handle("/metrics", promhttp.Handler())\n    {\n        // Register pprof handlers.\n        mux.HandleFunc("/debug/pprof/", pprof.Index)\n        mux.HandleFunc("/debug/pprof/cmdline", pprof.Cmdline)\n        mux.HandleFunc("/debug/pprof/profile", pprof.Profile)\n        mux.HandleFunc("/debug/pprof/symbol", pprof.Symbol)\n        mux.HandleFunc("/debug/pprof/trace", pprof.Trace)\n    }\n    http.ListenAndServe(":8080", mux)\n}\n')))}u.isMDXComponent=!0;const p={toc:[]};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "embed"\n    "net/http"\n    "net/http/pprof"\n\n    "github.com/go-chi/chi/v5"\n    "github.com/prometheus/client_golang/prometheus/promhttp"\n\n    api "<your_api_package>"\n)\n\n//go:embed static\nvar static embed.FS\n\nfunc main() {\n    srv, err := api.NewServer(myHandler{})\n    if err != nil {\n        panic(err)\n    }\n    mux := chi.NewRouter()\n    mux.Mount("/api/v1/", http.StripPrefix("/api/v1", srv))\n    // Register static files.\n    mux.Handle("/static/", http.FileServer(http.FS(static)))\n    // Register metrics handler.\n    mux.Handle("/metrics", promhttp.Handler())\n    mux.Route("/debug/pprof", func(mux chi.Router) {\n        // Register pprof handlers.\n        mux.HandleFunc("/", pprof.Index)\n        mux.HandleFunc("/cmdline", pprof.Cmdline)\n        mux.HandleFunc("/profile", pprof.Profile)\n        mux.HandleFunc("/symbol", pprof.Symbol)\n        mux.HandleFunc("/trace", pprof.Trace)\n    })\n    http.ListenAndServe(":8080", mux)\n}\n')))}s.isMDXComponent=!0;const d={id:"static_router",title:"Static router",sidebar_label:"Static router"},c=void 0,m={unversionedId:"concepts/static_router",id:"concepts/static_router",title:"Static router",description:"The ogen tool generates a static blazing fast radix tree-based router.",source:"@site/docs/concepts/static_router.mdx",sourceDirName:"concepts",slug:"/concepts/static_router",permalink:"/docs/concepts/static_router",draft:!1,editUrl:"https://github.com/ogen-go/web/edit/main/docs/concepts/static_router.mdx",tags:[],version:"current",frontMatter:{id:"static_router",title:"Static router",sidebar_label:"Static router"},sidebar:"tutorialSidebar",previous:{title:"Middlewares",permalink:"/docs/concepts/middlewares"},next:{title:"FAQ",permalink:"/docs/faq"}},h={},f=[{value:"Router error handling",id:"router-error-handling",level:2},{value:"Not Found",id:"not-found",level:3},{value:"Method Not Allowed",id:"method-not-allowed",level:3},{value:"Using <code>net/http</code> middlewares",id:"using-nethttp-middlewares",level:2},{value:"Applying middleware to all routes",id:"applying-middleware-to-all-routes",level:3},{value:"Using <code>FindRoute</code> method",id:"using-findroute-method",level:3},{value:"Adding profiler, metrics or static content route",id:"adding-profiler-metrics-or-static-content-route",level:2}],g={toc:f};function b(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ogen")," tool generates a static blazing fast ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Radix_tree"},"radix tree"),"-based router."),(0,a.kt)("h2",{id:"router-error-handling"},"Router error handling"),(0,a.kt)("h3",{id:"not-found"},"Not Found"),(0,a.kt)("p",null,"If there is no route for the request, the router call the ",(0,a.kt)("inlineCode",{parentName:"p"},"config.NotFound")," handler.\nThe default handler is ",(0,a.kt)("a",{parentName:"p",href:"https://pkg.go.dev/net/http#NotFound"},(0,a.kt)("inlineCode",{parentName:"a"},"http.NotFound")),"."),(0,a.kt)("p",null,"You can change the default handler by using ",(0,a.kt)("inlineCode",{parentName:"p"},"WithNotFound")," option."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'h := myHandler{}\nsrv, err := api.NewServer(h, api.WithNotFound(func(w http.ResponseWriter, r *http.Request) {\n        w.Header().Set("Content-Type", "application/json")\n        w.WriteHeader(http.StatusNotFound)\n        _, _ = io.WriteString(w, `{"error": "not found"}`)\n}))\nif err != nil {\n    panic(err)\n}\n')),(0,a.kt)("h3",{id:"method-not-allowed"},"Method Not Allowed"),(0,a.kt)("p",null,"If request path matches but the method is not allowed, the router call the ",(0,a.kt)("inlineCode",{parentName:"p"},"config.MethodNotAllowed")," handler.\nThe default handler returns empty body\nwith ",(0,a.kt)("a",{parentName:"p",href:"https://httpwg.org/specs/rfc7231.html#rfc.section.6.5.5"},(0,a.kt)("inlineCode",{parentName:"a"},"405 Method Not Allowed"))," code\nand ",(0,a.kt)("a",{parentName:"p",href:"https://httpwg.org/specs/rfc7231.html#header.allow"},(0,a.kt)("inlineCode",{parentName:"a"},"Allow"))," header with comma-separated allowed methods list."),(0,a.kt)("p",null,"You can change the default handler by using ",(0,a.kt)("inlineCode",{parentName:"p"},"WithMethodNotAllowed")," option."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("a",{parentName:"p",href:"https://httpwg.org/specs/rfc7231.html#rfc.section.6.5.5"},"HTTP spec")," ",(0,a.kt)("strong",{parentName:"p"},"requires")," that the ",(0,a.kt)("inlineCode",{parentName:"p"},"Allow")," header\nis sent with the status code ",(0,a.kt)("inlineCode",{parentName:"p"},"405 Method Not Allowed"),"."),(0,a.kt)("p",{parentName:"admonition"},"You should add the ",(0,a.kt)("inlineCode",{parentName:"p"},"Allow")," header to the response by yourself.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'h := myHandler{}\nsrv, err := api.NewServer(h, api.WithMethodNotAllowed(func(w http.ResponseWriter, r *http.Request, allowed string) {\n        w.Header().Set("Content-Type", "text/plain")\n        w.Header().Set("Allow", allowed)\n        w.WriteHeader(http.StatusMethodNotAllowed)\n        _, _ = fmt.Fprintf(w, "use one of the following methods: %s\\n", allowed)\n}))\nif err != nil {\n    panic(err)\n}\n')),(0,a.kt)("h2",{id:"using-nethttp-middlewares"},"Using ",(0,a.kt)("inlineCode",{parentName:"h2"},"net/http")," middlewares"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Server")," type implements ",(0,a.kt)("a",{parentName:"p",href:"https://pkg.go.dev/net/http#Handler"},(0,a.kt)("inlineCode",{parentName:"a"},"http.Handler"))," interface. Any ",(0,a.kt)("inlineCode",{parentName:"p"},"net/http"),"-compatible\nmiddleware can be used."),(0,a.kt)("h3",{id:"applying-middleware-to-all-routes"},"Applying middleware to all routes"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "net/http"\n\n    "github.com/klauspost/compress/gzhttp"\n\n    api "<your_api_package>"\n)\n\nfunc main() {\n    srv, err := api.NewServer(myHandler{})\n    if err != nil {\n        panic(err)\n    }\n    http.ListenAndServe(":8080", gzhttp.GzipHandler(srv))\n}\n')),(0,a.kt)("h3",{id:"using-findroute-method"},"Using ",(0,a.kt)("inlineCode",{parentName:"h3"},"FindRoute")," method"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Server")," type defines a ",(0,a.kt)("inlineCode",{parentName:"p"},"FindRoute")," method that finds and returns the ",(0,a.kt)("inlineCode",{parentName:"p"},"Route")," for the request, if any."),(0,a.kt)("p",null,"It's useful for middleware that needs to find the route for the request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "net/http"\n\n    api "<your_api_package>"\n)\n\ntype myMiddleware struct {\n    Next *api.Server\n}\n\nfunc (m myMiddleware) ServeHTTP(w http.ResponseWriter, r *http.Request) {\n    route, ok := m.Next.FindRoute(r.Method, r.URL.Path)\n    if !ok {\n        // There is no route for the request.\n        //\n        // Let server handle 404/405.\n        m.Next.ServeHTTP(w, r)\n        return\n    }\n    // Match operation by spec operation ID.\n    // Notice that the operation ID is optional and may be empty.\n    //\n    // You can also use `route.Name()` to get the ogen operation name.\n    // Unlike the operation ID, the name is guaranteed to be unique and non-empty.\n    switch route.OperationID() {\n    case "operation1", "operation2":\n        // Middleware logic:\n        args := route.Args()\n        if args[0] == "debug" {\n            w.Header().Set("X-Debug", "true")\n        }\n    }\n    m.Next.ServeHTTP(w, r)\n}\n\nfunc main() {\n    s, err := api.NewServer(myHandler{})\n    if err != nil {\n        panic(err)\n    }\n    http.ListenAndServe(":8080", myMiddleware{Next: s})\n}\n')),(0,a.kt)("h2",{id:"adding-profiler-metrics-or-static-content-route"},"Adding profiler, metrics or static content route"),(0,a.kt)("p",null,"To serve other routes, you can use any upper-level router."),(0,a.kt)("p",null,"Example would serve"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"API routes at ",(0,a.kt)("inlineCode",{parentName:"li"},"/api/v1/*")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pkg.go.dev/net/http/pprof"},"pprof")," handlers on ",(0,a.kt)("inlineCode",{parentName:"li"},"/debug/pprof/*")),(0,a.kt)("li",{parentName:"ul"},"Files from ",(0,a.kt)("inlineCode",{parentName:"li"},"static")," folder on ",(0,a.kt)("inlineCode",{parentName:"li"},"/static/*")),(0,a.kt)("li",{parentName:"ul"},"Prometheus metrics handler on ",(0,a.kt)("inlineCode",{parentName:"li"},"/metrics"))),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"std",label:"net/http",default:!0,mdxType:"TabItem"},(0,a.kt)(u,{mdxType:"CustomStdExample"})),(0,a.kt)(l.Z,{value:"chi",label:"chi",mdxType:"TabItem"},(0,a.kt)(s,{mdxType:"CustomChiExample"}))))}b.isMDXComponent=!0}}]);