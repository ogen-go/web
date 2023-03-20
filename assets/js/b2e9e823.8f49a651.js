"use strict";(globalThis.webpackChunkdocs_v_2=globalThis.webpackChunkdocs_v_2||[]).push([[691],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n(7462),a=n(7294),o=n(6010),l=n(2466),i=n(6550),u=n(1980),s=n(7392),p=n(12);function c(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=m(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,s]=f({queryString:n,groupId:r}),[c,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,p.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),b=(()=>{const e=u??c;return d({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),g(e)}),[s,g,o]),tabValues:o}}var b=n(2389);const y="tabList__CuJ",v="tabItem_LNqP";function h(e){let{className:t,block:n,selectedValue:i,selectValue:u,tabValues:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),m=e=>{const t=e.currentTarget,n=p.indexOf(t),r=s[n].value;r!==i&&(c(t),u(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:m},l,{className:(0,o.Z)("tabs__item",v,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function x(e){const t=g(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",y)},a.createElement(h,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function T(e){const t=(0,b.Z)();return a.createElement(x,(0,r.Z)({key:String(t)},e))}},5167:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>T,contentTitle:()=>k,default:()=>N,frontMatter:()=>h,metadata:()=>x,toc:()=>w});var r=n(7462),a=(n(7294),n(3905)),o=n(4866),l=n(5162);const i={toc:[]};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package example\n\nimport (\n    "context"\n    "os"\n\n    "github.com/ogen-go/ogen/example/api"\n)\n\nfunc UploadAvatarFile(ctx context.Context, client *api.Client, p string) error {\n    img, err := os.Open(p)\n    if err != nil {\n        return err\n    }\n    defer func() {\n        _ = img.Close()\n    }()\n    return client.UploadAvatar(ctx, api.UploadAvatarReq{Data: img})\n}\n')))}u.isMDXComponent=!0;const s={toc:[]};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package example\n\nimport (\n    "context"\n    "image/png"\n    "io"\n    "os"\n\n    "github.com/go-faster/errors"\n\n    api "<your_api_package>"\n)\n\nvar _ api.Handler = AvatarService{}\n\ntype Storage interface {\n    Store(ctx context.Context, data io.Reader) error\n}\n\ntype AvatarService struct {\n    storage Storage\n}\n\nfunc (s AvatarService) UploadAvatar(ctx context.Context, req api.UploadAvatarReq) error {\n    f, err := os.CreateTemp("", "avatar")\n    if err != nil {\n        return resp, err\n    }\n    defer func() {\n        _ = f.Close()\n    }()\n\n    const maxImageBytes = 16 * 1024 * 1024 // 16MB\n    if _, err := io.Copy(f, io.LimitReader(req.Data, maxImageBytes)); err != nil {\n        return resp, err\n    }\n\n    // Sniff image format and size.\n    header, err := png.DecodeConfig(f)\n    if err != nil {\n        return resp, errors.Wrap(err, "decode image")\n    }\n\n    // Validate image size.\n    if header.Width < 96 || header.Height < 96 {\n        return resp, errors.New("image is too small")\n    }\n    if header.Width > 1000 || header.Height > 1000 {\n        return resp, errors.New("image is too big")\n    }\n\n    // Seek to the beginning of the file.\n    if _, err := f.Seek(0, io.SeekStart); err != nil {\n        return resp, err\n    }\n\n    // Store image.\n    if err := s.storage.Store(ctx, f); err != nil {\n        return resp, err\n    }\n    return resp, nil\n}\n')))}p.isMDXComponent=!0;const c={toc:[]};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"openapi: 3.0.3\ninfo:\n  title: Example\n  version: 1.0.0\npaths:\n  /avatar:\n    post:\n      summary: Upload avatar\n      operationId: uploadAvatar\n      requestBody:\n        required: true\n        content:\n          image/png:\n            schema:\n              type: string\n              format: binary\n      responses:\n        '200':\n          description: OK\n")))}m.isMDXComponent=!0;const d={toc:[]};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package example\n\nimport (\n    "context"\n    "fmt"\n    "io"\n\n    "github.com/ogen-go/ogen/example/api"\n    ht "github.com/ogen-go/ogen/http"\n)\n\ntype Post struct {\n    Title       string\n    Content     string\n    Thumbnail   io.Reader\n    Attachments []io.Reader\n}\n\nfunc MakePost(ctx context.Context, client *api.Client, post Post) error {\n    req := &api.NewPostReqForm{\n        Title:   post.Title,\n        Content: post.Content,\n    }\n    if t := post.Thumbnail; t != nil {\n        req.Thumbnail = api.NewOptMultipartFile(ht.MultipartFile{\n            Name: "thumbnail",\n            File: t,\n        })\n    }\n    for i, attachment := range post.Attachments {\n        req.Attachments = append(req.Attachments, ht.MultipartFile{\n            Name: fmt.Sprintf("attachment%d", i),\n            File: attachment,\n        })\n    }\n    return client.NewPost(ctx, req)\n}\n')))}f.isMDXComponent=!0;const g={toc:[]};function b(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package example\n\nimport (\n    "context"\n    "strings"\n\n    "github.com/go-faster/errors"\n\n    "github.com/ogen-go/ogen/example/api"\n)\n\nvar _ api.Handler = PostService{}\n\ntype PostService struct{}\n\nfunc (s PostService) NewPost(ctx context.Context, req *api.NewPostReqForm) error {\n    if _, ok := req.Thumbnail.Get(); ok {\n        // Access optional file field.\n    }\n    // Iterate over files.\n    for _, attachment := range req.Attachments {\n        // Checking file name.\n        if !strings.HasPrefix(attachment.Name, "attachment") {\n            // Access array of files.\n            return errors.Errorf("invalid file name: %q", attachment.Name)\n        }\n    }\n    return nil\n}\n')))}b.isMDXComponent=!0;const y={toc:[]};function v(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"openapi: 3.0.3\ninfo:\n  title: Example\n  version: 1.0.0\npaths:\n  /post:\n    post:\n      summary: Creates new post\n      operationId: newPost\n      requestBody:\n        required: true\n        content:\n          multipart/form-data:\n            schema:\n              type: object\n              required: [ title, content ]\n              properties:\n                title:\n                  type: string\n                content:\n                  type: string\n                thumbnail:\n                  type: string\n                  format: binary\n                attachments:\n                  type: array\n                  items:\n                    type: string\n                    format: binary\n      responses:\n        '200':\n          description: OK\n")))}v.isMDXComponent=!0;const h={id:"file_upload",title:"File upload",sidebar_label:"File upload"},k=void 0,x={unversionedId:"spec/file_upload",id:"spec/file_upload",title:"File upload",description:"OpenAPI 3.0 provides two ways to upload files:",source:"@site/docs/spec/file_upload.mdx",sourceDirName:"spec",slug:"/spec/file_upload",permalink:"/docs/spec/file_upload",draft:!1,editUrl:"https://github.com/ogen-go/web/edit/main/docs/spec/file_upload.mdx",tags:[],version:"current",frontMatter:{id:"file_upload",title:"File upload",sidebar_label:"File upload"},sidebar:"tutorialSidebar",previous:{title:"Features",permalink:"/docs/features"},next:{title:"Any",permalink:"/docs/types/any"}},T={},w=[{value:"File upload via request body",id:"file-upload-via-request-body",level:2},{value:"File upload via <code>multipart</code> request",id:"file-upload-via-multipart-request",level:2}],q={toc:w};function N(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},q,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"OpenAPI 3.0 provides two ways to upload files:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#file-upload-via-request-body"},"File upload via request body")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#file-upload-via-multipart-request"},"File upload via ",(0,a.kt)("inlineCode",{parentName:"a"},"multipart")," request"))),(0,a.kt)("h2",{id:"file-upload-via-request-body"},"File upload via request body"),(0,a.kt)("p",null,"File would be uploaded via request body.\nThe request body should be of type ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," and format ",(0,a.kt)("inlineCode",{parentName:"p"},"binary"),"."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"spec",label:"Spec",default:!0,mdxType:"TabItem"},(0,a.kt)(m,{mdxType:"RequestBodySpecExample"})),(0,a.kt)(l.Z,{value:"client",label:"Client",mdxType:"TabItem"},(0,a.kt)(u,{mdxType:"RequestBodyClientExample"})),(0,a.kt)(l.Z,{value:"server",label:"Server",mdxType:"TabItem"},(0,a.kt)(p,{mdxType:"RequestBodyServerExample"}))),(0,a.kt)("h2",{id:"file-upload-via-multipart-request"},"File upload via ",(0,a.kt)("inlineCode",{parentName:"h2"},"multipart")," request"),(0,a.kt)("p",null,"Multiple files can be uploaded via ",(0,a.kt)("inlineCode",{parentName:"p"},"multipart")," request, along with other fields."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"spec",label:"Spec",default:!0,mdxType:"TabItem"},(0,a.kt)(v,{mdxType:"MultipartSpecExample"})),(0,a.kt)(l.Z,{value:"client",label:"Client",mdxType:"TabItem"},(0,a.kt)(f,{mdxType:"MultipartClientExample"})),(0,a.kt)(l.Z,{value:"server",label:"Server",mdxType:"TabItem"},(0,a.kt)(b,{mdxType:"MultipartServerExample"}))))}N.isMDXComponent=!0}}]);