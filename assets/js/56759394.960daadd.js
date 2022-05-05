"use strict";(globalThis.webpackChunkdocs_v_2=globalThis.webpackChunkdocs_v_2||[]).push([[616],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=i(n),u=a,m=g["".concat(l,".").concat(u)]||g[u]||d[u]||o;return n?r.createElement(m,p(p({ref:t},c),{},{components:n})):r.createElement(m,p({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,p[1]=s;for(var i=2;i<o;i++)p[i]=n[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={id:"intro",title:"Getting started",sidebar_position:1},p="Quick start",s={unversionedId:"intro",id:"intro",title:"Getting started",description:"ogen is a powerful and fast OpenAPI v3 code generator for Go.",source:"@site/docs/01-intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/ogen-go/web/edit/main/docs/01-intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"intro",title:"Getting started",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Features",permalink:"/docs/features"}},l={},i=[{value:"Prepare environment",id:"prepare-environment",level:2},{value:"Installation",id:"installation",level:2},{value:"Generate code",id:"generate-code",level:2},{value:"Setup generator",id:"setup-generator",level:3},{value:"Using generated server",id:"using-generated-server",level:3},{value:"Run server",id:"run-server",level:3}],c={toc:i};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quick-start"},"Quick start"),(0,a.kt)("p",null,"ogen is a powerful and fast OpenAPI v3 code generator for Go."),(0,a.kt)("h2",{id:"prepare-environment"},"Prepare environment"),(0,a.kt)("p",null,"Create Go ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/golang/go/wiki/Modules#quick-start"},"module"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go mod init <project>\n")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Then, install the ",(0,a.kt)("inlineCode",{parentName:"p"},"ogen")," tool."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go install -v github.com/ogen-go/ogen/cmd/ogen@latest\n")),(0,a.kt)("h2",{id:"generate-code"},"Generate code"),(0,a.kt)("h3",{id:"setup-generator"},"Setup generator"),(0,a.kt)("p",null,"Download petstore example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://raw.githubusercontent.com/ogen-go/web/main/examples/petstore.yml\n")),(0,a.kt)("p",null,"Create ",(0,a.kt)("inlineCode",{parentName:"p"},"generate.go")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="<project>/generate.go"',title:'"<project>/generate.go"'},"package project\n\n//go:generate go run github.com/ogen-go/ogen/cmd/ogen --schema ./petstore.yml --target petstore --clean\n")),(0,a.kt)("p",null,"Then go to the root directory of your module, and run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go generate ./...\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ogen")," will generate new folder with several files"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"petstore\n\u251c\u2500\u2500 oas_cfg_gen.go\n\u251c\u2500\u2500 oas_client_gen.go\n\u251c\u2500\u2500 oas_defaults_gen.go\n\u251c\u2500\u2500 oas_handlers_gen.go\n\u251c\u2500\u2500 oas_interfaces_gen.go\n\u251c\u2500\u2500 oas_json_gen.go\n\u251c\u2500\u2500 oas_param_dec_gen.go\n\u251c\u2500\u2500 oas_param_gen.go\n\u251c\u2500\u2500 oas_req_dec_gen.go\n\u251c\u2500\u2500 oas_req_enc_gen.go\n\u251c\u2500\u2500 oas_res_dec_gen.go\n\u251c\u2500\u2500 oas_res_enc_gen.go\n\u251c\u2500\u2500 oas_router_gen.go\n\u251c\u2500\u2500 oas_schemas_gen.go\n\u251c\u2500\u2500 oas_server_gen.go\n\u251c\u2500\u2500 oas_validators_gen.go\n")),(0,a.kt)("h3",{id:"using-generated-server"},"Using generated server"),(0,a.kt)("p",null,"To get started, implement ",(0,a.kt)("inlineCode",{parentName:"p"},"Handler")," interface generated by ",(0,a.kt)("inlineCode",{parentName:"p"},"ogen")," tool."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// Handler handles operations described by OpenAPI v3 specification.\ntype Handler interface {\n    // AddPet implements addPet operation.\n    //\n    // Add a new pet to the store.\n    //\n    // POST /pet\n    AddPet(ctx context.Context, req Pet) (Pet, error)\n    // DeletePet implements deletePet operation.\n    //\n    // DELETE /pet/{petId}\n    DeletePet(ctx context.Context, params DeletePetParams) (DeletePetOK, error)\n    // GetPetById implements getPetById operation.\n    //\n    // Returns a single pet.\n    //\n    // GET /pet/{petId}\n    GetPetById(ctx context.Context, params GetPetByIdParams) (GetPetByIdRes, error)\n    // UpdatePet implements updatePet operation.\n    //\n    // POST /pet/{petId}\n    UpdatePet(ctx context.Context, params UpdatePetParams) (UpdatePetOK, error)\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "context"\n    "sync"\n\n    petstore "<project>/petstore"\n)\n\ntype petsService struct {\n    pets map[int64]petstore.Pet\n    id   int64\n    mux  sync.Mutex\n}\n\nfunc (p *petsService) AddPet(ctx context.Context, req petstore.Pet) (petstore.Pet, error) {\n    p.mux.Lock()\n    defer p.mux.Unlock()\n\n    p.pets[p.id] = req\n    p.id++\n    return req, nil\n}\n\nfunc (p *petsService) DeletePet(ctx context.Context, params petstore.DeletePetParams) (petstore.DeletePetOK, error) {\n    p.mux.Lock()\n    defer p.mux.Unlock()\n\n    delete(p.pets, params.PetId)\n    return petstore.DeletePetOK{}, nil\n}\n\nfunc (p *petsService) GetPetById(ctx context.Context, params petstore.GetPetByIdParams) (petstore.GetPetByIdRes, error) {\n    p.mux.Lock()\n    defer p.mux.Unlock()\n\n    pet, ok := p.pets[params.PetId]\n    if !ok {\n        // Return Not Found.\n        return &petstore.GetPetByIdNotFound{}, nil\n    }\n    return &pet, nil\n}\n\nfunc (p *petsService) UpdatePet(ctx context.Context, params petstore.UpdatePetParams) (petstore.UpdatePetOK, error) {\n    p.mux.Lock()\n    defer p.mux.Unlock()\n\n    pet := p.pets[params.PetId]\n    pet.Status = params.Status\n    if val, ok := params.Name.Get(); ok {\n        pet.Name = val\n    }\n    p.pets[params.PetId] = pet\n\n    return petstore.UpdatePetOK{}, nil\n}\n')),(0,a.kt)("h3",{id:"run-server"},"Run server"),(0,a.kt)("p",null,"Now, we are ready to run our server!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"title=main.go",title:"main.go"},'package main\n\nimport (\n    "log"\n    "net/http"\n\n    petstore "<project>/petstore"\n)\n\nfunc main() {\n    // Create service instance.\n    service := &petsService{\n        pets: map[int64]petstore.Pet{},\n    }\n    // Create generated server.\n    srv, err := petstore.NewServer(service)\n    if err != nil {\n        log.Fatal(err)\n    }\n    if err := http.ListenAndServe(":8080", srv); err != nil {\n        log.Fatal(err)\n    }\n}\n')),(0,a.kt)("p",null,"Check that server started by creating pet"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X "POST" -H "Content-Type: application/json" --data "{\\"name\\":\\"Cat\\"}" http://localhost:8080/pet\n{"name":"Cat"}\n')))}d.isMDXComponent=!0}}]);