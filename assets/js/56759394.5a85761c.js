"use strict";(globalThis.webpackChunkdocs_v_2=globalThis.webpackChunkdocs_v_2||[]).push([[925],{5680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>m});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),i=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},g=function(e){var n=i(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,g=p(e,["components","mdxType","originalType","parentName"]),c=i(t),u=a,m=c["".concat(l,".").concat(u)]||c[u]||d[u]||o;return t?r.createElement(m,s(s({ref:n},g),{},{components:t})):r.createElement(m,s({ref:n},g))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[c]="string"==typeof e?e:a,s[1]=p;for(var i=2;i<o;i++)s[i]=t[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},284:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var r=t(8168),a=(t(6540),t(5680));const o={id:"intro",title:"Getting started",sidebar_position:1},s="Quick start",p={unversionedId:"intro",id:"intro",title:"Getting started",description:"ogen is a powerful and fast OpenAPI v3 code generator for Go.",source:"@site/docs/01-intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/ogen-go/web/edit/main/docs/01-intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"intro",title:"Getting started",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Features",permalink:"/docs/features"}},l={},i=[{value:"Prepare environment",id:"prepare-environment",level:2},{value:"Installation",id:"installation",level:2},{value:"Generate code",id:"generate-code",level:2},{value:"Setup generator",id:"setup-generator",level:3},{value:"Using generated server",id:"using-generated-server",level:3},{value:"Run server",id:"run-server",level:3},{value:"Using generated client",id:"using-generated-client",level:3}],g={toc:i},c="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(c,(0,r.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"quick-start"},"Quick start"),(0,a.yg)("p",null,"ogen is a powerful and fast OpenAPI v3 code generator for Go."),(0,a.yg)("h2",{id:"prepare-environment"},"Prepare environment"),(0,a.yg)("p",null,"Create Go ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/golang/go/wiki/Modules#quick-start"},"module"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"go mod init <project>\n")),(0,a.yg)("h2",{id:"installation"},"Installation"),(0,a.yg)("p",null,"Then, install the ",(0,a.yg)("inlineCode",{parentName:"p"},"ogen")," tool."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"go install -v github.com/ogen-go/ogen/cmd/ogen@latest\n")),(0,a.yg)("h2",{id:"generate-code"},"Generate code"),(0,a.yg)("h3",{id:"setup-generator"},"Setup generator"),(0,a.yg)("p",null,"Download petstore example."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"wget https://raw.githubusercontent.com/ogen-go/web/main/examples/petstore.yml\n")),(0,a.yg)("p",null,"Create ",(0,a.yg)("inlineCode",{parentName:"p"},"generate.go")," file:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go",metastring:'title="generate.go"',title:'"generate.go"'},"package project\n\n//go:generate go run github.com/ogen-go/ogen/cmd/ogen@latest --target petstore --clean petstore.yml\n")),(0,a.yg)("p",null,"Then go to the root directory of your module, and run:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"go generate ./...\n")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"ogen")," will generate new folder with several files"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-console"},"petstore\n\u251c\u2500\u2500 oas_cfg_gen.go\n\u251c\u2500\u2500 oas_client_gen.go\n\u251c\u2500\u2500 oas_handlers_gen.go\n\u251c\u2500\u2500 oas_interfaces_gen.go\n\u251c\u2500\u2500 oas_json_gen.go\n\u251c\u2500\u2500 oas_middleware_gen.go\n\u251c\u2500\u2500 oas_parameters_gen.go\n\u251c\u2500\u2500 oas_request_decoders_gen.go\n\u251c\u2500\u2500 oas_request_encoders_gen.go\n\u251c\u2500\u2500 oas_response_decoders_gen.go\n\u251c\u2500\u2500 oas_response_encoders_gen.go\n\u251c\u2500\u2500 oas_router_gen.go\n\u251c\u2500\u2500 oas_schemas_gen.go\n\u251c\u2500\u2500 oas_server_gen.go\n\u251c\u2500\u2500 oas_unimplemented_gen.go\n\u251c\u2500\u2500 oas_validators_gen.go\n")),(0,a.yg)("h3",{id:"using-generated-server"},"Using generated server"),(0,a.yg)("p",null,"To get started, implement ",(0,a.yg)("inlineCode",{parentName:"p"},"Handler")," interface generated by ",(0,a.yg)("inlineCode",{parentName:"p"},"ogen")," tool."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"// Handler handles operations described by OpenAPI v3 specification.\ntype Handler interface {\n    // AddPet implements addPet operation.\n    //\n    // Add a new pet to the store.\n    //\n    // POST /pet\n    AddPet(ctx context.Context, req *Pet) (*Pet, error)\n    // DeletePet implements deletePet operation.\n    //\n    // Deletes a pet.\n    //\n    // DELETE /pet/{petId}\n    DeletePet(ctx context.Context, params DeletePetParams) error\n    // GetPetById implements getPetById operation.\n    //\n    // Returns a single pet.\n    //\n    // GET /pet/{petId}\n    GetPetById(ctx context.Context, params GetPetByIdParams) (GetPetByIdRes, error)\n    // UpdatePet implements updatePet operation.\n    //\n    // Updates a pet in the store.\n    //\n    // POST /pet/{petId}\n    UpdatePet(ctx context.Context, params UpdatePetParams) error\n}\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "context"\n    "sync"\n\n    petstore "<project>/petstore"\n)\n\ntype petsService struct {\n    pets map[int64]petstore.Pet\n    id   int64\n    mux  sync.Mutex\n}\n\nfunc (p *petsService) AddPet(ctx context.Context, req *petstore.Pet) (*petstore.Pet, error) {\n    p.mux.Lock()\n    defer p.mux.Unlock()\n\n    p.pets[p.id] = *req\n    p.id++\n    return req, nil\n}\n\nfunc (p *petsService) DeletePet(ctx context.Context, params petstore.DeletePetParams) error {\n    p.mux.Lock()\n    defer p.mux.Unlock()\n\n    delete(p.pets, params.PetId)\n    return nil\n}\n\nfunc (p *petsService) GetPetById(ctx context.Context, params petstore.GetPetByIdParams) (petstore.GetPetByIdRes, error) {\n    p.mux.Lock()\n    defer p.mux.Unlock()\n\n    pet, ok := p.pets[params.PetId]\n    if !ok {\n        // Return Not Found.\n        return &petstore.GetPetByIdNotFound{}, nil\n    }\n    return &pet, nil\n}\n\nfunc (p *petsService) UpdatePet(ctx context.Context, params petstore.UpdatePetParams) error {\n    p.mux.Lock()\n    defer p.mux.Unlock()\n\n    pet := p.pets[params.PetId]\n    pet.Status = params.Status\n    if val, ok := params.Name.Get(); ok {\n        pet.Name = val\n    }\n    p.pets[params.PetId] = pet\n\n    return nil\n}\n')),(0,a.yg)("h3",{id:"run-server"},"Run server"),(0,a.yg)("p",null,"Now, we are ready to run our server!"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go",metastring:"title=main.go",title:"main.go"},'package main\n\nimport (\n    "log"\n    "net/http"\n\n    petstore "<project>/petstore"\n)\n\nfunc main() {\n    // Create service instance.\n    service := &petsService{\n        pets: map[int64]petstore.Pet{},\n    }\n    // Create generated server.\n    srv, err := petstore.NewServer(service)\n    if err != nil {\n        log.Fatal(err)\n    }\n    if err := http.ListenAndServe(":8080", srv); err != nil {\n        log.Fatal(err)\n    }\n}\n')),(0,a.yg)("p",null,"Check that server started by creating pet"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'curl -X "POST" -H "Content-Type: application/json" --data "{\\"name\\":\\"Cat\\"}" http://localhost:8080/pet\n{"name":"Cat"}\n')),(0,a.yg)("h3",{id:"using-generated-client"},"Using generated client"),(0,a.yg)("p",null,"Let's make a simple app that gets the pet by id."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go",metastring:"title=main.go",title:"main.go"},'package main\n\nimport (\n    "bytes"\n    "context"\n    "encoding/json"\n    "flag"\n    "os"\n\n    "github.com/fatih/color"\n\n    petstore "<project>/petstore"\n)\n\nfunc run(ctx context.Context) error {\n    var arg struct {\n        BaseURL string\n        ID      int64\n    }\n    flag.StringVar(&arg.BaseURL, "url", "http://localhost:8080", "target server url")\n    flag.Int64Var(&arg.ID, "id", 1, "pet id to request")\n    flag.Parse()\n\n    client, err := petstore.NewClient(arg.BaseURL)\n    if err != nil {\n        return fmt.Errorf("create client: %w", err)\n    }\n\n    res, err := client.GetPetById(ctx, petstore.GetPetByIdParams{\n        PetId: arg.ID,\n    })\n    if err != nil {\n        return fmt.Errorf("get pet %d: %w", arg.ID, err)\n    }\n\n    switch p := res.(type) {\n    case *petstore.Pet:\n        data, err := p.MarshalJSON()\n        if err != nil {\n            return err\n        }\n        var out bytes.Buffer\n        if err := json.Indent(&out, data, "", "  "); err != nil {\n            return err\n        }\n        color.New(color.FgGreen).Println(out.String())\n    case *petstore.GetPetByIdNotFound:\n        return errors.New("not found")\n    }\n\n    return nil\n}\n\nfunc main() {\n    if err := run(context.Background()); err != nil {\n        color.New(color.FgRed).Printf("%+v\\n", err)\n        os.Exit(2)\n    }\n}\n')))}d.isMDXComponent=!0}}]);