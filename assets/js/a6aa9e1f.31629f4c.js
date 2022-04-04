"use strict";(globalThis.webpackChunkdocs_v_2=globalThis.webpackChunkdocs_v_2||[]).push([[89],{8665:(e,t,a)=>{a.d(t,{Z:()=>E});var l=a(7294),r=a(6010),n=a(2600),i=a(9960);const m="sidebar_a9qW",s="sidebarItemTitle_uKok",o="sidebarItemList_Kvuv",c="sidebarItem_CF0Q",d="sidebarItemLink_miNk",g="sidebarItemLinkActive_RRTD";var u=a(5999);function p(e){let{sidebar:t}=e;return 0===t.items.length?null:l.createElement("nav",{className:(0,r.Z)(m,"thin-scrollbar"),"aria-label":(0,u.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(s,"margin-bottom--md")},t.title),l.createElement("ul",{className:o},t.items.map((e=>l.createElement("li",{key:e.permalink,className:c},l.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))))))}function E(e){const{sidebar:t,toc:a,children:i,...m}=e,s=t&&t.items.length>0;return l.createElement(n.Z,m,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},s&&l.createElement("aside",{className:"col col--3"},l.createElement(p,{sidebar:t})),l.createElement("main",{className:(0,r.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&l.createElement("div",{className:"col col--2"},a))))}},2754:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var l=a(7294),r=a(2263),n=a(8665),i=a(8561),m=a(5999),s=a(1750);function o(e){const{metadata:t}=e,{previousPage:a,nextPage:r}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,m.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},l.createElement("div",{className:"pagination-nav__item"},a&&l.createElement(s.Z,{permalink:a,title:l.createElement(m.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")})),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},r&&l.createElement(s.Z,{permalink:r,title:l.createElement(m.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")})))}var c=a(1548),d=a(4739),g=a(6010);function u(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,r.Z)(),{blogDescription:n,blogTitle:i,permalink:m}=t,s="/"===m?a:i;return l.createElement(l.Fragment,null,l.createElement(c.d,{title:s,description:n}),l.createElement(d.Z,{tag:"blog_posts_list"}))}function p(e){const{metadata:t,items:a,sidebar:r}=e;return l.createElement(n.Z,{sidebar:r},a.map((e=>{let{content:t}=e;return l.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},l.createElement(t,null))})),l.createElement(o,{metadata:t}))}function E(e){return l.createElement(c.FG,{className:(0,g.Z)(c.kM.wrapper.blogPages,c.kM.page.blogListPage)},l.createElement(u,e),l.createElement(p,e))}},8561:(e,t,a)=>{a.d(t,{Z:()=>k});var l=a(7294),r=a(6010),n=a(5999),i=a(9960),m=a(4996),s=a(1548),o=a(8780),c=a(7459),d=a(6753);const g="blogPostTitle_rzP5",u="blogPostData_Zg1s",p="blogPostDetailsFull_h6_j";var E=a(8727);const h="image_o0gy";function b(e){return e.href?l.createElement(i.Z,e):l.createElement(l.Fragment,null,e.children)}function v(e){let{author:t}=e;const{name:a,title:r,url:n,imageURL:i,email:m}=t,s=n||m&&`mailto:${m}`||void 0;return l.createElement("div",{className:"avatar margin-bottom--sm"},i&&l.createElement("span",{className:"avatar__photo-link avatar__photo"},l.createElement(b,{href:s},l.createElement("img",{className:h,src:i,alt:a}))),a&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(b,{href:s,itemProp:"url"},l.createElement("span",{itemProp:"name"},a))),r&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))}const _="authorCol_FlmR",N="imageOnlyAuthorRow_trpF",f="imageOnlyAuthorCol_S2np";function Z(e){let{authors:t,assets:a}=e;if(0===t.length)return null;const n=t.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",n?N:"row")},t.map(((e,t)=>l.createElement("div",{className:(0,r.Z)(!n&&"col col--6",n?f:_),key:t},l.createElement(v,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})))))}function k(e){const t=function(){const{selectMessage:e}=(0,s.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,n.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:a}=(0,m.C)(),{children:h,frontMatter:b,assets:v,metadata:_,truncated:N,isBlogPostPage:f=!1}=e,{date:k,formattedDate:P,permalink:T,tags:w,readingTime:y,title:I,editUrl:L,authors:R}=_,A=v.image??b.image,C=!f&&N,M=w.length>0,D=f?"h1":"h2";return l.createElement("article",{className:f?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},l.createElement("header",null,l.createElement(D,{className:g,itemProp:"headline"},f?I:l.createElement(i.Z,{itemProp:"url",to:T},I)),l.createElement("div",{className:(0,r.Z)(u,"margin-vert--md")},l.createElement("time",{dateTime:k,itemProp:"datePublished"},P),void 0!==y&&l.createElement(l.Fragment,null," \xb7 ",t(y))),l.createElement(Z,{authors:R,assets:v})),A&&l.createElement("meta",{itemProp:"image",content:a(A,{absolute:!0})}),l.createElement("div",{id:f?o.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},l.createElement(c.Z,null,h)),(M||N)&&l.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",f&&p)},M&&l.createElement("div",{className:(0,r.Z)("col",{"col--9":C})},l.createElement(E.Z,{tags:w})),f&&L&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(d.Z,{editUrl:L})),C&&l.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":M})},l.createElement(i.Z,{to:_.permalink,"aria-label":(0,n.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:I})},l.createElement("b",null,l.createElement(n.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},6753:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(7294),r=a(5999),n=a(3117),i=a(6010);const m="iconEdit_dcUD";function s(e){let{className:t,...a}=e;return l.createElement("svg",(0,n.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(m,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}var o=a(1548);function c(e){let{editUrl:t}=e;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:o.kM.common.editThisPage},l.createElement(s,null),l.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},1750:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(7294),r=a(9960);function n(e){const{permalink:t,title:a,subLabel:n}=e;return l.createElement(r.Z,{className:"pagination-nav__link",to:t},n&&l.createElement("div",{className:"pagination-nav__sublabel"},n),l.createElement("div",{className:"pagination-nav__label"},a))}},8727:(e,t,a)=>{a.d(t,{Z:()=>u});var l=a(7294),r=a(6010),n=a(5999),i=a(9960);const m="tag_hD8n",s="tagRegular_D6E_",o="tagWithCount_i0QQ";function c(e){const{permalink:t,name:a,count:n}=e;return l.createElement(i.Z,{href:t,className:(0,r.Z)(m,n?o:s)},a,n&&l.createElement("span",null,n))}const d="tags_XVD_",g="tag_JSN8";function u(e){let{tags:t}=e;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,r.Z)(d,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return l.createElement("li",{key:a,className:g},l.createElement(c,{name:t,permalink:a}))}))))}}}]);