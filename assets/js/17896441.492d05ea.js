"use strict";(globalThis.webpackChunkdocs_v_2=globalThis.webpackChunkdocs_v_2||[]).push([[918],{1857:(e,t,a)=>{a.r(t),a.d(t,{default:()=>le});var n=a(7294),l=a(6010),r=a(7462),s=a(5999),c=a(1750);function i(e){const{previous:t,next:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&n.createElement(c.Z,(0,r.Z)({},t,{subLabel:n.createElement(s.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&n.createElement(c.Z,(0,r.Z)({},a,{subLabel:n.createElement(s.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}var o=a(2263),d=a(9960),m=a(5551),u=a(373),v=a(5281),b=a(4477);const h={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function p(e){const t=h[e.versionMetadata.banner];return n.createElement(t,e)}function g(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(d.Z,{to:a,onClick:l},n.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function E(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:r}}=(0,o.Z)(),{pluginId:s}=(0,m.gA)({failfast:!0}),{savePreferredVersionName:c}=(0,u.J)(s),{latestDocSuggestion:i,latestVersionSuggestion:d}=(0,m.Jo)(s),b=i??(h=d).docs.find((e=>e.id===h.mainDocId));var h;return n.createElement("div",{className:(0,l.Z)(t,v.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(p,{siteTitle:r,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(g,{versionLabel:d.label,to:b.path,onClick:()=>c(d.name)})))}function f(e){let{className:t}=e;const a=(0,b.E)();return a.banner?n.createElement(E,{className:t,versionMetadata:a}):null}function L(e){let{className:t}=e;const a=(0,b.E)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,v.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(s.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}function N(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(s.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function _(e){let{lastUpdatedBy:t}=e;return n.createElement(s.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function Z(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:v.k.common.lastUpdated},n.createElement(s.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(N,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(_,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var k=a(6753),C=a(8727);const T="lastUpdated_foO9";function x(e){return n.createElement("div",{className:(0,l.Z)(v.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(C.Z,e)))}function H(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:r,formattedLastUpdatedAt:s}=e;return n.createElement("div",{className:(0,l.Z)(v.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(k.Z,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",T)},(a||r)&&n.createElement(Z,{lastUpdatedAt:a,formattedLastUpdatedAt:s,lastUpdatedBy:r})))}function U(e){const{content:t}=e,{metadata:a}=t,{editUrl:r,lastUpdatedAt:s,formattedLastUpdatedAt:c,lastUpdatedBy:i,tags:o}=a,d=o.length>0,m=!!(r||s||i);return d||m?n.createElement("footer",{className:(0,l.Z)(v.k.docs.docFooter,"docusaurus-mt-lg")},d&&n.createElement(x,{tags:o}),m&&n.createElement(H,{editUrl:r,lastUpdatedAt:s,lastUpdatedBy:i,formattedLastUpdatedAt:c})):null}var y=a(1575),A=a(6043);const w="tocCollapsible_bZGK",B="tocCollapsibleContent_NNA8",I="tocCollapsibleExpanded_IqtF";var M=a(721);const D="tocCollapsibleButton_l22C",S="tocCollapsibleButtonExpanded_KeTX";function O(e){let{collapsed:t,...a}=e;return n.createElement("button",(0,r.Z)({type:"button"},a,{className:(0,l.Z)("clean-btn",D,!t&&S,a.className)}),n.createElement(s.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}function V(e){let{toc:t,className:a,minHeadingLevel:r,maxHeadingLevel:s}=e;const{collapsed:c,toggleCollapsed:i}=(0,A.u)({initialState:!0});return n.createElement("div",{className:(0,l.Z)(w,!c&&I,a)},n.createElement(O,{collapsed:c,onClick:i}),n.createElement(A.z,{lazy:!0,className:B,collapsed:c},n.createElement(M.Z,{toc:t,minHeadingLevel:r,maxHeadingLevel:s})))}var P=a(9649);const R="docItemContainer_vinB",z="docItemCol_DM6M",F="tocMobile_TmEX";var q=a(833),X=a(7524),J=a(2802),$=a(8596);const G={breadcrumbsContainer:"breadcrumbsContainer_Xlws",breadcrumbHomeIcon:"breadcrumbHomeIcon_kU5B"};var K=a(4996);function Q(e){return n.createElement("svg",(0,r.Z)({viewBox:"0 0 24 24"},e),n.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}function j(e){let{children:t,href:a,isLast:l}=e;const r="breadcrumbs__link";return l?n.createElement("span",{className:r,itemProp:"name"},t):a?n.createElement(d.Z,{className:r,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:r},t)}function W(e){let{children:t,active:a,index:s,addMicrodata:c}=e;return n.createElement("li",(0,r.Z)({},c&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,n.createElement("meta",{itemProp:"position",content:String(s+1)}))}function Y(){const e=(0,K.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(d.Z,{"aria-label":(0,s.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,l.Z)("breadcrumbs__link",G.breadcrumbsItemLink),href:e},n.createElement(Q,{className:G.breadcrumbHomeIcon})))}function ee(){const e=(0,J.s1)(),t=(0,$.Ns)();return e?n.createElement("nav",{className:(0,l.Z)(v.k.docs.docBreadcrumbs,G.breadcrumbsContainer),"aria-label":(0,s.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(Y,null),e.map(((t,a)=>{const l=a===e.length-1;return n.createElement(W,{key:a,active:l,index:a,addMicrodata:!!t.href},n.createElement(j,{href:t.href,isLast:l},t.label))})))):null}var te=a(5290);function ae(e){const{content:t}=e,{metadata:a,frontMatter:l,assets:r}=t,{keywords:s}=l,{description:c,title:i}=a,o=r.image??l.image;return n.createElement(q.d,{title:i,description:c,keywords:s,image:o})}function ne(e){const{content:t}=e,{metadata:a,frontMatter:r}=t,{hide_title:s,hide_table_of_contents:c,toc_min_heading_level:o,toc_max_heading_level:d}=r,{title:m}=a,u=!s&&void 0===t.contentTitle,b=(0,X.i)(),h=!c&&t.toc&&t.toc.length>0,p=h&&("desktop"===b||"ssr"===b);return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",!c&&z)},n.createElement(f,null),n.createElement("div",{className:R},n.createElement("article",null,n.createElement(ee,null),n.createElement(L,null),h&&n.createElement(V,{toc:t.toc,minHeadingLevel:o,maxHeadingLevel:d,className:(0,l.Z)(v.k.docs.docTocMobile,F)}),n.createElement("div",{className:(0,l.Z)(v.k.docs.docMarkdown,"markdown")},u&&n.createElement("header",null,n.createElement(P.Z,{as:"h1"},m)),n.createElement(te.Z,null,n.createElement(t,null))),n.createElement(U,e)),n.createElement(i,{previous:a.previous,next:a.next}))),p&&n.createElement("div",{className:"col col--3"},n.createElement(y.Z,{toc:t.toc,minHeadingLevel:o,maxHeadingLevel:d,className:v.k.docs.docTocDesktop})))}function le(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`;return n.createElement(q.FG,{className:t},n.createElement(ae,e),n.createElement(ne,e))}},6753:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7294),l=a(5999),r=a(7462),s=a(6010);const c="iconEdit_dcUD";function i(e){let{className:t,...a}=e;return n.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(c,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}var o=a(5281);function d(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:o.k.common.editThisPage},n.createElement(i,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},1750:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),l=a(6010),r=a(9960);function s(e){const{permalink:t,title:a,subLabel:s,isNext:c}=e;return n.createElement(r.Z,{className:(0,l.Z)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},s&&n.createElement("div",{className:"pagination-nav__sublabel"},s),n.createElement("div",{className:"pagination-nav__label"},a))}},1575:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7462),l=a(7294),r=a(6010),s=a(721);const c="tableOfContents_cNA8";function i(e){let{className:t,...a}=e;return l.createElement("div",{className:(0,r.Z)(c,"thin-scrollbar",t)},l.createElement(s.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},721:(e,t,a)=>{a.d(t,{Z:()=>b});var n=a(7462),l=a(7294);function r(e){let{toc:t,className:a,linkClassName:n,isChild:s}=e;return t.length?l.createElement("ul",{className:s?void 0:a},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:n??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(r,{isChild:!0,toc:e.children,className:a,linkClassName:n}))))):null}const s=l.memo(r);function c(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),a=Array(7).fill(-1);t.forEach(((e,t)=>{const n=a.slice(2,e.level);e.parentIndex=Math.max(...n),a[e.level]=t}));const n=[];return t.forEach((e=>{const{parentIndex:a,...l}=e;a>=0?t[a].children.push(l):n.push(l)})),n}function i(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:n}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:a,maxHeadingLevel:n});return function(e){return e.level>=a&&e.level<=n}(e)?[{...e,children:t}]:t}))}var o=a(6668);function d(e){const t=e.getBoundingClientRect();return t.top===t.bottom?d(e.parentNode):t}function m(e,t){let{anchorTopOffset:a}=t;const n=e.find((e=>d(e).top>=a));if(n){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(d(n))?n:e[e.indexOf(n)-1]??null}return e[e.length-1]??null}function u(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,o.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function v(e){const t=(0,l.useRef)(void 0),a=u();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:n,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:s}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(n),c=function(e){let{minHeadingLevel:t,maxHeadingLevel:a}=e;const n=[];for(let l=t;l<=a;l+=1)n.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:r,maxHeadingLevel:s}),i=m(c,{anchorTopOffset:a.current}),o=e.find((e=>i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,a){a?(t.current&&t.current!==e&&t.current?.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===o)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,a])}function b(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:d,minHeadingLevel:m,maxHeadingLevel:u,...b}=e;const h=(0,o.L)(),p=m??h.tableOfContents.minHeadingLevel,g=u??h.tableOfContents.maxHeadingLevel,E=function(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:n}=e;return(0,l.useMemo)((()=>i({toc:c(t),minHeadingLevel:a,maxHeadingLevel:n})),[t,a,n])}({toc:t,minHeadingLevel:p,maxHeadingLevel:g});return v((0,l.useMemo)((()=>{if(r&&d)return{linkClassName:r,linkActiveClassName:d,minHeadingLevel:p,maxHeadingLevel:g}}),[r,d,p,g])),l.createElement(s,(0,n.Z)({toc:E,className:a,linkClassName:r},b))}},8727:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(7294),l=a(6010),r=a(5999),s=a(9960);const c="tag_hD8n",i="tagRegular_D6E_",o="tagWithCount_i0QQ";function d(e){let{permalink:t,label:a,count:r}=e;return n.createElement(s.Z,{href:t,className:(0,l.Z)(c,r?o:i)},a,r&&n.createElement("span",null,r))}const m="tags_XVD_",u="tag_JSN8";function v(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(m,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:u},n.createElement(d,{label:t,permalink:a}))}))))}},4477:(e,t,a)=>{a.d(t,{E:()=>c,q:()=>s});var n=a(7294),l=a(902);const r=n.createContext(null);function s(e){let{children:t,version:a}=e;return n.createElement(r.Provider,{value:a},t)}function c(){const e=(0,n.useContext)(r);if(null===e)throw new l.i6("DocsVersionProvider");return e}}}]);