"use strict";(self.webpackChunkulagellam_docusaurus=self.webpackChunkulagellam_docusaurus||[]).push([[1914],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=s(r),g=o,d=m["".concat(i,".").concat(g)]||m[g]||p[g]||n;return r?a.createElement(d,l(l({ref:t},c),{},{components:r})):a.createElement(d,l({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,l[1]=u;for(var s=2;s<n;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2900:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>n,metadata:()=>u,toc:()=>s});var a=r(7462),o=(r(7294),r(3905));const n={slug:"welcome",title:"Welcome",authors:["sivayogeith","uma"],tags:["facebook","hello","docusaurus"]},l=void 0,u={permalink:"/blog/welcome",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-26-welcome/index.md",source:"@site/blog/2021-08-26-welcome/index.md",title:"Welcome",description:"Docusaurus blogging features are powered by the blog plugin.",date:"2021-08-26T00:00:00.000Z",formattedDate:"August 26, 2021",tags:[{label:"facebook",permalink:"/blog/tags/facebook"},{label:"hello",permalink:"/blog/tags/hello"},{label:"docusaurus",permalink:"/blog/tags/docusaurus"}],readingTime:.405,hasTruncateMarker:!1,authors:[{name:"Sivayogeith Umamaheswaran",title:"CTO, Ulagellam",url:"https://github.com/sivayogeith",imageURL:"https://github.com/sivayogeith.png",key:"sivayogeith"},{name:"Umamaheswaran TG",title:"Chairman, Ulagellam",url:"https://github.com/h2i",imageURL:"/img/uma.jpg",key:"uma"}],frontMatter:{slug:"welcome",title:"Welcome",authors:["sivayogeith","uma"],tags:["facebook","hello","docusaurus"]},prevItem:{title:"How I learned MERN in a week!",permalink:"/blog/mern"},nextItem:{title:"MDX Blog Post",permalink:"/blog/mdx-blog-post"}},i={authorsImageUrls:[void 0,void 0]},s=[],c={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/blog"},"Docusaurus blogging features")," are powered by the ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog"},"blog plugin"),"."),(0,o.kt)("p",null,"Simply add Markdown files (or folders) to the ",(0,o.kt)("inlineCode",{parentName:"p"},"blog")," directory."),(0,o.kt)("p",null,"Regular blog authors can be added to ",(0,o.kt)("inlineCode",{parentName:"p"},"authors.yml"),"."),(0,o.kt)("p",null,"The blog post date can be extracted from filenames, such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"2019-05-30-welcome.md")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"2019-05-30-welcome/index.md"))),(0,o.kt)("p",null,"A blog post folder can be convenient to co-locate blog post images:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Docusaurus Plushie",src:r(3107).Z,width:"1500",height:"500"})),(0,o.kt)("p",null,"The blog supports tags as well!"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"And if you don't want a blog"),": just delete this directory, and use ",(0,o.kt)("inlineCode",{parentName:"p"},"blog: false")," in your Docusaurus config."))}p.isMDXComponent=!0},3107:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/docusaurus-plushie-banner-a60f7593abca1e3eef26a9afa244e4fb.jpeg"}}]);