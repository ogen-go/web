"use strict";(globalThis.webpackChunkdocs_v_2=globalThis.webpackChunkdocs_v_2||[]).push([[616],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),g=l(n),u=a,m=g["".concat(i,".").concat(u)]||g[u]||c[u]||o;return n?r.createElement(m,s(s({ref:t},d),{},{components:n})):r.createElement(m,s({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=g;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6437:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>s,metadata:()=>p,toc:()=>i,default:()=>d});var r=n(3117),a=(n(7294),n(3905));const o={id:"intro",title:"Getting started",sidebar_position:1},s="Quick start",p={unversionedId:"intro",id:"intro",title:"Getting started",description:"ogen is a powerful and fast OpenAPI v3 code generator for Go.",source:"@site/docs/01-intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",editUrl:"https://github.com/ogen-go/web/edit/main/docs/01-intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"intro",title:"Getting started",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Features",permalink:"/docs/features"}},i=[{value:"Prepare environment",id:"prepare-environment",children:[],level:2},{value:"Installation",id:"installation",children:[],level:2},{value:"Generate code",id:"generate-code",children:[{value:"Setup generator",id:"setup-generator",children:[],level:3},{value:"Using generated server",id:"using-generated-server",children:[{value:"Interface responses",id:"interface-responses",children:[],level:4}],level:3}],level:2}],l={toc:i};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quick-start"},"Quick start"),(0,a.kt)("p",null,"ogen is a powerful and fast OpenAPI v3 code generator for Go."),(0,a.kt)("h2",{id:"prepare-environment"},"Prepare environment"),(0,a.kt)("p",null,"Create Go ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/golang/go/wiki/Modules#quick-start"},"module"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go mod init <project>\n")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Then, install the ",(0,a.kt)("inlineCode",{parentName:"p"},"ogen")," tool."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go install -v github.com/ogen-go/ogen/cmd/ogen@latest\n")),(0,a.kt)("h2",{id:"generate-code"},"Generate code"),(0,a.kt)("h3",{id:"setup-generator"},"Setup generator"),(0,a.kt)("p",null,"Download petstore example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://raw.githubusercontent.com/ogen-go/ogen/main/_testdata/swagger-petstore.yml\n")),(0,a.kt)("p",null,"Create ",(0,a.kt)("inlineCode",{parentName:"p"},"generate.go")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="<project>/generate.go"',title:'"<project>/generate.go"'},"package project\n\n//go:generate go run github.com/ogen-go/ogen/cmd/ogen --schema ./swagger-petstore.yml --target petstore --clean\n")),(0,a.kt)("p",null,"Then go to the root directory of your module, and run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go generate ./...\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ogen")," will generate new folder with several files"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"petstore\n\u251c\u2500\u2500 oas_cfg_gen.go\n\u251c\u2500\u2500 oas_client_gen.go\n\u251c\u2500\u2500 oas_defaults_gen.go\n\u251c\u2500\u2500 oas_handlers_gen.go\n\u251c\u2500\u2500 oas_interfaces_gen.go\n\u251c\u2500\u2500 oas_json_gen.go\n\u251c\u2500\u2500 oas_param_dec_gen.go\n\u251c\u2500\u2500 oas_param_gen.go\n\u251c\u2500\u2500 oas_req_dec_gen.go\n\u251c\u2500\u2500 oas_req_enc_gen.go\n\u251c\u2500\u2500 oas_res_dec_gen.go\n\u251c\u2500\u2500 oas_res_enc_gen.go\n\u251c\u2500\u2500 oas_router_gen.go\n\u251c\u2500\u2500 oas_schemas_gen.go\n\u251c\u2500\u2500 oas_server_gen.go\n\u251c\u2500\u2500 oas_validators_gen.go\n")),(0,a.kt)("h3",{id:"using-generated-server"},"Using generated server"),(0,a.kt)("p",null,"To get started, implement ",(0,a.kt)("inlineCode",{parentName:"p"},"Handler")," interface generated by ",(0,a.kt)("inlineCode",{parentName:"p"},"ogen")," tool."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// Handler handles operations described by OpenAPI v3 specification.\ntype Handler interface {\n    // AddPet implements addPet operation.\n    //\n    // Add a new pet to the store.\n    //\n    // POST /pet\n    AddPet(ctx context.Context, req Pet) (AddPetRes, error)\n    // DeletePet implements deletePet operation.\n    //\n    // DELETE /pet/{petId}\n    DeletePet(ctx context.Context, params DeletePetParams) (DeletePetBadRequest, error)\n    // FindPetsByStatus implements findPetsByStatus operation.\n    //\n    // Multiple status values can be provided with comma separated strings.\n    //\n    // GET /pet/findByStatus\n    FindPetsByStatus(ctx context.Context, params FindPetsByStatusParams) (FindPetsByStatusRes, error)\n    // FindPetsByTags implements findPetsByTags operation.\n    //\n    // Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.\n    //\n    // GET /pet/findByTags\n    FindPetsByTags(ctx context.Context, params FindPetsByTagsParams) (FindPetsByTagsRes, error)\n    // GetPetById implements getPetById operation.\n    //\n    // Returns a single pet.\n    //\n    // GET /pet/{petId}\n    GetPetById(ctx context.Context, params GetPetByIdParams) (GetPetByIdRes, error)\n    // UpdatePet implements updatePet operation.\n    //\n    // Update an existing pet by Id.\n    //\n    // PUT /pet\n    UpdatePet(ctx context.Context, req Pet) (UpdatePetRes, error)\n    // UpdatePetWithForm implements updatePetWithForm operation.\n    //\n    // POST /pet/{petId}\n    UpdatePetWithForm(ctx context.Context, params UpdatePetWithFormParams) (UpdatePetWithFormMethodNotAllowed, error)\n    // UploadFile implements uploadFile operation.\n    //\n    // POST /pet/{petId}/uploadImage\n    UploadFile(ctx context.Context, req UploadFileReq, params UploadFileParams) (ApiResponse, error)\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package project\n\nimport (\n    "context"\n\n    petstore "<project>/petstore"\n)\n\ntype petsService struct {\n}\n\nfunc (p petsService) AddPet(ctx context.Context, req petstore.Pet) (petstore.AddPetRes, error) {\n    resp := req\n    return &resp, nil\n}\n\nfunc (p petsService) DeletePet(ctx context.Context, params petstore.DeletePetParams) (petstore.DeletePetBadRequest, error) {\n    return petstore.DeletePetBadRequest{}, nil\n}\n\nfunc (p petsService) FindPetsByStatus(ctx context.Context, params petstore.FindPetsByStatusParams) (petstore.FindPetsByStatusRes, error) {\n    return petstore.FindPetsByStatusOKApplicationJSON{}, nil\n}\n\nfunc (p petsService) FindPetsByTags(ctx context.Context, params petstore.FindPetsByTagsParams) (petstore.FindPetsByTagsRes, error) {\n    return petstore.FindPetsByTagsOKApplicationJSON{}, nil\n}\n\nfunc (p petsService) GetPetById(ctx context.Context, params petstore.GetPetByIdParams) (petstore.GetPetByIdRes, error) {\n    return &petstore.GetPetByIdNotFound{}, nil\n}\n\nfunc (p petsService) UpdatePet(ctx context.Context, req petstore.Pet) (petstore.UpdatePetRes, error) {\n    resp := req\n    return &resp, nil\n}\n\nfunc (p petsService) UpdatePetWithForm(ctx context.Context, params petstore.UpdatePetWithFormParams) (petstore.UpdatePetWithFormMethodNotAllowed, error) {\n    return petstore.UpdatePetWithFormMethodNotAllowed{}, nil\n}\n\nfunc (p petsService) UploadFile(ctx context.Context, req petstore.UploadFileReq, params petstore.UploadFileParams) (petstore.ApiResponse, error) {\n    return petstore.ApiResponse{}, nil\n}\n')),(0,a.kt)("h4",{id:"interface-responses"},"Interface responses"),(0,a.kt)("p",null,"Notice that handler for operation with multiple response types returns interface."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="addPet operation schema"',title:'"addPet',operation:!0,'schema"':!0},"  /pet:\n    post:\n      tags:\n        - pet\n      summary: Add a new pet to the store\n      description: Add a new pet to the store\n      operationId: addPet\n      responses:\n        '200':\n          description: Successful operation\n          content:\n            application/json:\n              schema:\n                $ref: '#/components/schemas/Pet'\n        '405':\n          description: Invalid input\n      requestBody:\n        description: Create a new pet in the store\n        required: true\n        content:\n          application/json:\n            schema:\n              $ref: '#/components/schemas/Pet'\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="addPet operation response interface"',title:'"addPet',operation:!0,response:!0,'interface"':!0},"type AddPetRes interface {\n    addPetRes()\n}\n")),(0,a.kt)("p",null,"Such interface represents a sum type (or ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Tagged_union"},(0,a.kt)("em",{parentName:"a"},"tagged union")),")\nof different response types."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="addPet operation response variants"',title:'"addPet',operation:!0,response:!0,'variants"':!0},'// AddPetMethodNotAllowed is response for AddPet operation.\ntype AddPetMethodNotAllowed struct{}\n\nfunc (*AddPetMethodNotAllowed) addPetRes() {}\n\n// Ref: #/components/schemas/Pet\ntype Pet struct {\n    ID        OptInt64    `json:"id"`\n    Name      string      `json:"name"`\n    Category  OptCategory `json:"category"`\n    PhotoUrls []string    `json:"photoUrls"`\n    Tags      []Tag       `json:"tags"`\n    // Pet status in the store.\n    Status OptPetStatus `json:"status"`\n}\n\nfunc (*Pet) addPetRes()     {}\n')))}d.isMDXComponent=!0}}]);