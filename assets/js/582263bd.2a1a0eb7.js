"use strict";(globalThis.webpackChunkdocs_v_2=globalThis.webpackChunkdocs_v_2||[]).push([[83],{5680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>m});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(t),c=a,m=u["".concat(l,".").concat(c)]||u[c]||g[c]||i;return t?r.createElement(m,o(o({ref:n},d),{},{components:t})):r.createElement(m,o({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8766:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=t(8168),a=(t(6540),t(5680));const i={slug:"ogen-intro",title:"ogen: OpenAPI v3 code generator for Go",authors:["tdakkota","ernado"]},o=void 0,s={permalink:"/blog/ogen-intro",source:"@site/blog/2022-11-30-ogen.md",title:"ogen: OpenAPI v3 code generator for Go",description:"The ogen project generates code from an OpenAPI specification, freeing you from writing hundreds (or even thousands) of lines of boring boilerplate code on Go.",date:"2022-11-30T00:00:00.000Z",formattedDate:"November 30, 2022",tags:[],readingTime:9.785,hasTruncateMarker:!1,authors:[{name:"tdakkota",title:"ogen maintainer",url:"https://github.com/tdakkota",imageURL:"https://github.com/tdakkota.png",key:"tdakkota"},{name:"Aleksandr Razumov",title:"ogen maintainer",url:"https://github.com/ernado",imageURL:"https://github.com/ernado.png",key:"ernado"}],frontMatter:{slug:"ogen-intro",title:"ogen: OpenAPI v3 code generator for Go",authors:["tdakkota","ernado"]}},l={authorsImageUrls:[void 0,void 0]},p=[{value:"Strong types",id:"strong-types",level:2},{value:"Validation",id:"validation",level:2},{value:"Unknown and required fields",id:"unknown-and-required-fields",level:3},{value:"Enum",id:"enum",level:3},{value:"Without pointers",id:"without-pointers",level:2},{value:"Arrays",id:"arrays",level:3},{value:"JSON implementation without reflection",id:"json-implementation-without-reflection",level:2},{value:"Custom router",id:"custom-router",level:2},{value:"OneOf",id:"oneof",level:2},{value:"Without <code>discriminator</code>",id:"without-discriminator",level:3},{value:"Detailed error messages",id:"detailed-error-messages",level:3},{value:"Summary",id:"summary",level:2}],d={toc:p},u="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"The ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/ogen-go/ogen"},"ogen")," project generates code from an OpenAPI specification, freeing you from writing hundreds (or even thousands) of lines of boring boilerplate code on Go."),(0,a.yg)("p",null,"It generates client and server implementations for Go. Developers just need to implement the request handler. No ",(0,a.yg)("inlineCode",{parentName:"p"},"interface{}")," and no ",(0,a.yg)("inlineCode",{parentName:"p"},"reflect"),", only strong types and codegen."),(0,a.yg)("p",null,"In this article I will tell what makes ogen different from other code generators and why you should try it."),(0,a.yg)("h2",{id:"strong-types"},"Strong types"),(0,a.yg)("p",null,"ogen generates strongly-typed client and server, similar to gRPC. Also, ogen adds endpoint description for each generated method."),(0,a.yg)("p",null,"For the server, the ",(0,a.yg)("inlineCode",{parentName:"p"},"Handler")," interface is generated that needs to be implemented:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"// Handler handles operations described by OpenAPI v3 specification.\ntype Handler interface {\n    // AddPet implements addPet operation.\n    //\n    // Creates a new pet in the store. Duplicates are allowed.\n    //\n    // POST /pets\n    AddPet(ctx context.Context, req NewPet) (AddPetRes, error)\n    // DeletePet implements deletePet operation.\n    //\n    // Deletes a single pet based on the ID supplied.\n    //\n    // DELETE /pets/{id}\n    DeletePet(ctx context.Context, params DeletePetParams) (DeletePetRes, error)\n    // FindPetByID implements find pet by id operation.\n    //\n    // Returns a user based on a single ID, if the user does not have access to the pet.\n    //\n    // GET /pets/{id}\n    FindPetByID(ctx context.Context, params FindPetByIDParams) (FindPetByIDRes, error)\n    // FindPets implements findPets operation.\n    //\n    // Returns all pets from the system that the user has access to\n    //\n    // GET /pets\n    FindPets(ctx context.Context, params FindPetsParams) (FindPetsRes, error)\n    // PatchPet implements patchPet operation.\n    //\n    // Patch a pet.\n    //\n    // PATCH /pets/{id}\n    PatchPet(ctx context.Context, req UpdatePet, params PatchPetParams) (PatchPetRes, error)\n}\n")),(0,a.yg)("p",null,"Client code is quite similar:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"func (c *Client) AddPet(ctx context.Context, request NewPet) (res AddPetRes, err error) {}\n\n// PatchPet invokes patchPet operation.\n//\n// Patch a pet.\n//\n// PATCH /pets/{id}\nfunc (c *Client) PatchPet(ctx context.Context, request UpdatePet, params PatchPetParams) (res PatchPetRes, err error) {}\n")),(0,a.yg)("h2",{id:"validation"},"Validation"),(0,a.yg)("p",null,"ogen supports ",(0,a.yg)("inlineCode",{parentName:"p"},"maxLength"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"minLength"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"pattern")," (regex), ",(0,a.yg)("inlineCode",{parentName:"p"},"minimum"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"maximum")," and other validators for strings, arrays, objects and numbers."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"UpdatePet:\n  type: object\n  properties:\n    name:\n      type: string\n      maxLength: 25\n      minLength: 3\n      pattern: '^[a-zA-Z0-9]+$'\n    tag:\n      maxLength: 10\n      minLength: 1\n      pattern: '^[a-zA-Z0-9]+$'\n      nullable: true\n      type: string\n")),(0,a.yg)("h3",{id:"unknown-and-required-fields"},"Unknown and required fields"),(0,a.yg)("p",null,"Furthermore, it is checked in the effective way that required fields are set, and unknown (if not allowed) are not passed:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"// Validate required fields.\nvar failures []validate.FieldError\nfor i, mask := range [1]uint8{\n    0b00000001,\n} {\n    if result := (requiredBitSet[i] & mask) ^ mask; result != 0 {\n        // Mask only required fields and check equality to mask using XOR.\n        //\n        // If XOR result is not zero, result is not equal to expected, so some fields are missed.\n        // Bits of fields which would be set are actually bits of missed fields.\n        missed := bits.OnesCount8(result)\n        for bitN := 0; bitN < missed; bitN++ {\n            bitIdx := bits.TrailingZeros8(result)\n            fieldIdx := i*8 + bitIdx\n            var name string\n            if fieldIdx < len(jsonFieldsNameOfNewPet) {\n                name = jsonFieldsNameOfNewPet[fieldIdx]\n            } else {\n                name = strconv.Itoa(fieldIdx)\n            }\n            failures = append(failures, validate.FieldError{\n                Name:  name,\n                Error: validate.ErrFieldRequired,\n            })\n            // Reset bit.\n            result &^= 1 << bitIdx\n        }\n    }\n}\n")),(0,a.yg)("h3",{id:"enum"},"Enum"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"enum")," validator is fully supported. The enum values are generated as constants, and validation code is generated as well for the client and server:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'// Ref: #/components/schemas/Kind\ntype Kind string\n\nconst (\n   KindCat   Kind = "Cat"\n   KindDog   Kind = "Dog"\n   KindFish  Kind = "Fish"\n   KindBird  Kind = "Bird"\n   KindOther Kind = "Other"\n)\n\nfunc (s Kind) Validate() error {\n    switch s {\n    case "Cat":\n        return nil\n    case "Dog":\n        return nil\n    case "Fish":\n        return nil\n    case "Bird":\n        return nil\n    case "Other":\n        return nil\n    default:\n        return errors.Errorf("invalid value: %v", s)\n    }\n}\n\n// Decode decodes Kind from json.\nfunc (s *Kind) Decode(d *jx.Decoder) error {\n    if s == nil {\n        return errors.New("invalid: unable to decode Kind to nil")\n    }\n    v, err := d.StrBytes()\n    if err != nil {\n        return err\n    }\n    // Try to use constant string.\n    switch Kind(v) {\n    case KindCat:\n        *s = KindCat\n    case KindDog:\n        *s = KindDog\n    case KindFish:\n        *s = KindFish\n    case KindBird:\n        *s = KindBird\n    case KindOther:\n        *s = KindOther\n    default:\n        *s = Kind(v)\n    }\n\n    return nil\n}\n\n\n')),(0,a.yg)("p",null,"Unlike ",(0,a.yg)("inlineCode",{parentName:"p"},"ogen"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"deepmap/oapi-codegen")," does not check ",(0,a.yg)("inlineCode",{parentName:"p"},"enum")," values. It only generates the named type and constants."),(0,a.yg)("h2",{id:"without-pointers"},"Without pointers"),(0,a.yg)("p",null,"If it is possible."),(0,a.yg)("p",null,"In most cases, to represent optional (or nullable) fields in Go, pointers are usually used:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'type Pet struct {\n    // Name of the pet\n    Name string `json:"name"`\n\n    // Type of the pet\n    Tag *string `json:"tag,omitempty"`\n}\n')),(0,a.yg)("p",null,"This is a common, but hacky way:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"It is easy to get null pointer exception, hello ",(0,a.yg)("em",{parentName:"li"},"The Billion Dollar Mistake")),(0,a.yg)("li",{parentName:"ul"},"It increases the GC pressure, especially if there are many objects or they are nested (e.g. ",(0,a.yg)("inlineCode",{parentName:"li"},"[]Pet"),")"),(0,a.yg)("li",{parentName:"ul"},"It is impossible to express nullable optional when three states can be passed: empty, ",(0,a.yg)("inlineCode",{parentName:"li"},"null")," and filled value. It is especially useful for ",(0,a.yg)("inlineCode",{parentName:"li"},"PATCH")," operations.")),(0,a.yg)("p",null,"ogen solves this problem by generating generic types:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'// Ref: #/components/schemas/NewPet\ntype NewPet struct {\n   Name string    `json:"name"`\n   Tag  OptString `json:"tag"`\n}\n\n// OptString is optional string.\ntype OptString struct {\n   Value string\n   Set   bool\n}\n')),(0,a.yg)("p",null,"It seems that ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/deepmap/oapi-codegen"},"deepmap/oapi-codegen")," cannot handle optional nullable properly:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'// UpdatePet defines model for UpdatePet.\ntype UpdatePet struct {\n   Name *string `json:"name,omitempty"`\n   Tag  *string `json:"tag"`\n}\n')),(0,a.yg)("p",null,"Whereas ogen generates a special ",(0,a.yg)("inlineCode",{parentName:"p"},"OptNilString")," type:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'// Ref: #/components/schemas/UpdatePet\ntype UpdatePet struct {\n   Name OptString    `json:"name"`\n   Tag  OptNilString `json:"tag"`\n}\n\n// OptNilString is optional nullable string.\ntype OptNilString struct {\n   Value string\n   Set   bool\n   Null  bool\n}\n')),(0,a.yg)("p",null,"Using ",(0,a.yg)("inlineCode",{parentName:"p"},"OptNilString")," you can express any state: the absence of the value, ",(0,a.yg)("inlineCode",{parentName:"p"},"null")," value, an empty string, and just a string."),(0,a.yg)("h3",{id:"arrays"},"Arrays"),(0,a.yg)("p",null,"To represent arrays, a special type may not be generated, changing the semantics of the ",(0,a.yg)("inlineCode",{parentName:"p"},"nil")," value of the slice depending on the schema. For example, if the field is ",(0,a.yg)("inlineCode",{parentName:"p"},"optional"),", then ",(0,a.yg)("inlineCode",{parentName:"p"},"nil")," will mean the absence of the value. If ",(0,a.yg)("inlineCode",{parentName:"p"},"nullable"),", then ",(0,a.yg)("inlineCode",{parentName:"p"},"null"),". For optional nullable fields, you will have to generate a wrapper."),(0,a.yg)("h2",{id:"json-implementation-without-reflection"},"JSON implementation without reflection"),(0,a.yg)("p",null,"ogen does not use the standard ",(0,a.yg)("inlineCode",{parentName:"p"},"encoding/json")," with its limitations in speed and capabilities. Instead, it generates a static code for encoding and decoding JSON."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"// Encode encodes string as json.\nfunc (o OptNilString) Encode(e *jx.Encoder) {\n   if !o.Set {\n      return\n   }\n   if o.Null {\n      e.Null()\n      return\n   }\n   e.Str(string(o.Value))\n}\n")),(0,a.yg)("p",null,"It lets you make working with json more efficient and flexible. For example, decoding a field in several passes to support ",(0,a.yg)("inlineCode",{parentName:"p"},"oneOf")," with a discriminator (first the value of the discriminator field is parsed, and then the value as a whole) and without it (first all fields are traversed and the type is selected by unique fields)."),(0,a.yg)("p",null,"Instead of ",(0,a.yg)("inlineCode",{parentName:"p"},"encoding/json"),", ogen uses ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/go-faster/jx"},"go-faster/jx"),", a heavily modified and optimized fork of ",(0,a.yg)("inlineCode",{parentName:"p"},"jsoniter")," (can parse almost a gigabyte of json logs in a second per core)."),(0,a.yg)("h2",{id:"custom-router"},"Custom router"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"ogen")," uses its own, efficient statically generated router based on radix tree:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'// ...\n// Static code generated router with unwrapped path search.\nswitch {\ndefault:\n    if len(elem) == 0 {\n        break\n    }\n    switch elem[0] {\n    case \'/\': // Prefix: "/pets"\n        if l := len("/pets"); len(elem) >= l && elem[0:l] == "/pets" {\n            elem = elem[l:]\n        } else {\n            break\n        }\n\n        if len(elem) == 0 {\n            switch r.Method {\n            case "GET":\n                s.handleFindPetsRequest([0]string{}, w, r)\n            case "POST":\n                s.handleAddPetRequest([0]string{}, w, r)\n            default:\n                s.notAllowed(w, r, "GET,POST")\n            }\n\n            return\n        }\n        switch elem[0] {\n        case \'/\': // Prefix: "/"\n            if l := len("/"); len(elem) >= l && elem[0:l] == "/" {\n                elem = elem[l:]\n            } else {\n                break\n            }\n// ...\n')),(0,a.yg)("p",null,"Static router allows the compiler to make many optimizations: remove unnecessary bounds checks, optimize string comparison,\nuse ",(0,a.yg)("a",{parentName:"p",href:"https://go-review.googlesource.com/c/go/+/357330"},"optimal ",(0,a.yg)("inlineCode",{parentName:"a"},"case")," search algorithm")," instead of ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/go-chi/chi/blob/e5529d9db4d3d45bab5aa1e691e36d45ee5b082f/tree.go#L799-L808"},"binary search"),"."),(0,a.yg)("p",null,"It makes ogen routing much faster than ",(0,a.yg)("inlineCode",{parentName:"p"},"chi")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"echo")," (",(0,a.yg)("a",{parentName:"p",href:"https://gist.github.com/tdakkota/9ef35ce009425a23662108e537b970e2"},"benchmark"),"):"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"name                        time/op\nRouter/GithubStatic/ogen-4  18.7ns \xb1 3%\nRouter/GithubStatic/chi-4    146ns \xb1 2%\nRouter/GithubStatic/echo-4  73.7ns \xb1 9%\nRouter/GithubParam/ogen-4   34.0ns \xb1 3%\nRouter/GithubParam/chi-4     251ns \xb1 3%\nRouter/GithubParam/echo-4    118ns \xb1 2%\nRouter/GithubAll/ogen-4     56.6\xb5s \xb1 3%\nRouter/GithubAll/chi-4       323\xb5s \xb1 3%\nRouter/GithubAll/echo-4      173\xb5s \xb1 4%\n\nname                        alloc/op\nRouter/GithubStatic/ogen-4   0.00B\nRouter/GithubStatic/chi-4    0.00B\nRouter/GithubStatic/echo-4   0.00B\nRouter/GithubParam/ogen-4    0.00B\nRouter/GithubParam/chi-4     0.00B\nRouter/GithubParam/echo-4    0.00B\nRouter/GithubAll/ogen-4      0.00B\nRouter/GithubAll/chi-4       0.00B\nRouter/GithubAll/echo-4      0.00B\n")),(0,a.yg)("h2",{id:"oneof"},"OneOf"),(0,a.yg)("p",null,"Let's imagine that we have a schema like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"Dog:\n  type: object\n  required:\n    - kind\n  properties:\n    kind:\n      $ref: '#/components/schemas/Kind'\n    bark:\n      type: string\nCat:\n  type: object\n  required:\n    - kind\n  properties:\n    kind:\n      $ref: '#/components/schemas/Kind'\n    meow:\n      type: string\nSomePet:\n  type: object\n  discriminator:\n    propertyName: kind\n  oneOf:\n    - $ref: '#/components/schemas/Dog'\n    - $ref: '#/components/schemas/Cat'\n")),(0,a.yg)("p",null,"ogen will generate code like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'// Ref: #/components/schemas/Cat\ntype Cat struct {\n    Kind Kind      `json:"kind"`\n    Meow OptString `json:"meow"`\n}\n\n// Ref: #/components/schemas/Dog\ntype Dog struct {\n    Kind Kind      `json:"kind"`\n    Bark OptString `json:"bark"`\n}\n\n// Ref: #/components/schemas/SomePet\n// SomePet represents sum type.\ntype SomePet struct {\n    Type SomePetType // switch on this field\n    Dog  Dog\n    Cat  Cat\n}\n')),(0,a.yg)("p",null,"As you can see, the ",(0,a.yg)("inlineCode",{parentName:"p"},"oneOf")," case is chosen during the decoding process."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'// func (s *SomePet) Decode(d *jx.Decoder) error\nif err := d.Capture(func(d *jx.Decoder) error {\n    return d.ObjBytes(func(d *jx.Decoder, key []byte) error {\n        if found {\n            return d.Skip()\n        }\n        switch string(key) {\n        case "kind":\n            typ, err := d.Str()\n            if err != nil {\n                return err\n            }\n            switch typ {\n            case "Cat":\n                s.Type = CatSomePet\n                found = true\n            case "Dog":\n                s.Type = DogSomePet\n                found = true\n            default:\n                return errors.Errorf("unknown type %s", typ)\n            }\n            return nil\n        }\n        return d.Skip()\n    })\n}); err != nil {\n    return errors.Wrap(err, "capture")\n}\nif !found {\n    return errors.New("unable to detect sum type variant")\n}\nswitch s.Type {\ncase DogSomePet:\n    if err := s.Dog.Decode(d); err != nil {\n        return err\n    }\ncase CatSomePet:\n    if err := s.Cat.Decode(d); err != nil {\n        return err\n    }\ndefault:\n    return errors.Errorf("inferred invalid type: %s", s.Type)\n}\n')),(0,a.yg)("p",null,"Whereas ",(0,a.yg)("inlineCode",{parentName:"p"},"deepmap/oapi-codegen")," requires an additional manual call (Also, notice that at the moment of posting this article, the generated code is broken):"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'// SomePet defines model for SomePet.\ntype SomePet struct {\n    union json.RawMessage\n}\n\nfunc (t SomePet) Discriminator() (string, error) {\n    var discriminator struct {\n        Discriminator string `json:"kind"`\n    }\n    err := json.Unmarshal(t.union, &discriminator)\n    return discriminator.Discriminator, err\n}\n\n// AsCat returns the union data inside the SomePet as a Cat\nfunc (t SomePet) AsCat() (Cat, error) {\n    var body Cat\n    err := json.Unmarshal(t.union, &body)\n    return body, err\n}\n\n')),(0,a.yg)("p",null,"It seems that the developer should write the entire ",(0,a.yg)("inlineCode",{parentName:"p"},"switch"),"-by-discriminator logic by himself."),(0,a.yg)("h3",{id:"without-discriminator"},"Without ",(0,a.yg)("inlineCode",{parentName:"h3"},"discriminator")),(0,a.yg)("p",null,"Further, ",(0,a.yg)("inlineCode",{parentName:"p"},"ogen")," can work ",(0,a.yg)("strong",{parentName:"p"},"without the explicit discriminator field")," at all, choosing the type by unique fields:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'var found bool\nif err := d.Capture(func(d *jx.Decoder) error {\n    return d.ObjBytes(func(d *jx.Decoder, key []byte) error {\n        switch string(key) {\n        case "bark":\n            match := DogSomePet\n            if found && s.Type != match {\n                s.Type = ""\n                return errors.Errorf("multiple oneOf matches: (%v, %v)", s.Type, match)\n            }\n            found = true\n            s.Type = match\n        case "meow":\n            match := CatSomePet\n            if found && s.Type != match {\n                s.Type = ""\n                return errors.Errorf("multiple oneOf matches: (%v, %v)", s.Type, match)\n            }\n            found = true\n            s.Type = match\n        }\n        return d.Skip()\n    })\n}); err != nil {\n    return errors.Wrap(err, "capture")\n}\n')),(0,a.yg)("p",null,"If there is a ",(0,a.yg)("inlineCode",{parentName:"p"},"meow")," field, then the type is ",(0,a.yg)("inlineCode",{parentName:"p"},"Cat"),", if there is a ",(0,a.yg)("inlineCode",{parentName:"p"},"bark")," field - ",(0,a.yg)("inlineCode",{parentName:"p"},"Dog"),", and if we didn't find anything, then we will get an error ",(0,a.yg)("inlineCode",{parentName:"p"},"unable to detect sum type variant"),"."),(0,a.yg)("h3",{id:"detailed-error-messages"},"Detailed error messages"),(0,a.yg)("p",null,"ogen provides detailed error messages with context, like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-console"},"$ go generate\n  - petstore-expanded.yaml:218:17 -> resolve: can't find value for \"components/schemas/Do1\"\n          217 |       oneOf:\n        \u2192 218 |         - $ref: '#/components/schemas/Do1'\n              |                 \u2191\n          219 |         - $ref: '#/components/schemas/Cat'\n          220 |\n          221 |     UpdatePet:\n")),(0,a.yg)("h2",{id:"summary"},"Summary"),(0,a.yg)("p",null,"Main advantages of ",(0,a.yg)("inlineCode",{parentName:"p"},"ogen"),":"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Strict client and server typing"),(0,a.yg)("li",{parentName:"ul"},"Validation"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"oneOf")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"anyOf")," support"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"nullable optional")," support"),(0,a.yg)("li",{parentName:"ul"},"Built-in fast static router"),(0,a.yg)("li",{parentName:"ul"},"Fast JSON handling"),(0,a.yg)("li",{parentName:"ul"},"Detailed error messages")))}g.isMDXComponent=!0}}]);