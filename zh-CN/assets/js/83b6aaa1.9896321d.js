"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[81032],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=a.createContext({}),p=function(e){var t=a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,m=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(r),g=n,u=s["".concat(m,".").concat(g)]||s[g]||d[g]||l;return r?a.createElement(u,i(i({ref:t},c),{},{components:r})):a.createElement(u,i({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=s;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},8372:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const l={title:"\u603b\u89c8"},i=void 0,o={unversionedId:"modules/manager/overview",id:"version-1.3.0/modules/manager/overview",title:"\u603b\u89c8",description:"1 InLong Manager \u4ecb\u7ecd",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.0/modules/manager/overview.md",sourceDirName:"modules/manager",slug:"/modules/manager/overview",permalink:"/zh-CN/docs/modules/manager/overview",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.3.0/modules/manager/overview.md",tags:[],version:"1.3.0",frontMatter:{title:"\u603b\u89c8"},sidebar:"tutorialSidebar",previous:{title:"\u76d1\u63a7\u6307\u6807",permalink:"/zh-CN/docs/modules/sort/metrics"},next:{title:"\u5b89\u88c5\u90e8\u7f72",permalink:"/zh-CN/docs/modules/manager/quick_start"}},m={},p=[{value:"1 InLong Manager \u4ecb\u7ecd",id:"1-inlong-manager-\u4ecb\u7ecd",level:2},{value:"2 Architecture",id:"2-architecture",level:2},{value:"3 \u6a21\u5757\u5206\u5de5",id:"3-\u6a21\u5757\u5206\u5de5",level:2},{value:"4 \u7cfb\u7edf\u4f7f\u7528\u6d41\u7a0b",id:"4-\u7cfb\u7edf\u4f7f\u7528\u6d41\u7a0b",level:2},{value:"5 \u6570\u636e\u6a21\u578b",id:"5-\u6570\u636e\u6a21\u578b",level:2}],c={toc:p};function d(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"1-inlong-manager-\u4ecb\u7ecd"},"1 InLong Manager \u4ecb\u7ecd"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u76ee\u6807\u5b9a\u4f4d\uff1aApache InLong \u5b9a\u4f4d\u4e3a\u4e00\u7ad9\u5f0f\u6d77\u91cf\u6570\u636e\u96c6\u6210\u6846\u67b6\uff0c\u63d0\u4f9b\u5927\u6570\u636e\u4ece\u91c7\u96c6 -> \u4f20\u8f93 -> \u5206\u62e3 -> \u843d\u5730\u7684\u6280\u672f\u80fd\u529b\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5e73\u53f0\u4ef7\u503c\uff1a\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u5e73\u53f0\u4e2d\u7684\u7ba1\u7406\u3001\u914d\u7f6e\u5e73\u53f0\u5b8c\u6210\u4efb\u52a1\u7684\u914d\u7f6e\u3001\u7ba1\u7406\u4ee5\u53ca\u6307\u6807\u7684\u76d1\u63a7\uff0c\u540c\u65f6\u901a\u8fc7\u5e73\u53f0\u63d0\u4f9b\u7684\u63d2\u4ef6\u5316\u6269\u5c55\u80fd\u529b\uff0c\u6309\u9700\u5b9e\u73b0\u81ea\u5b9a\u4e49\u7684\u6269\u5c55\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"InLong Manager \u662f Apache InLong \u9879\u76ee\u7684\u7edf\u4e00\u7ba1\u7406\u5e73\u53f0\uff0c\u5e73\u53f0\u63d0\u4f9b\u5404\u57fa\u7840\u914d\u7f6e\uff08\u5982\u6570\u636e\u6d41\u914d\u7f6e\u3001\u6d88\u8d39\u914d\u7f6e\u3001\u96c6\u7fa4\u7ba1\u7406\u7b49\uff09\u7684\u7ef4\u62a4\u5165\u53e3\uff0c\u7528\u6237\u53ef\u521b\u5efa\u6570\u636e\u91c7\u96c6\u4efb\u52a1\u3001\u67e5\u770b\u6307\u6807\u6570\u636e\u7b49\u3002 "))),(0,n.kt)("h2",{id:"2-architecture"},"2 Architecture"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(41940).Z,width:"965",height:"507"})),(0,n.kt)("h2",{id:"3-\u6a21\u5757\u5206\u5de5"},"3 \u6a21\u5757\u5206\u5de5"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u6a21\u5757"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u804c\u8d23"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"manager-common"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6a21\u5757\u516c\u5171\u4ee3\u7801\uff0c\u5982\u5f02\u5e38\u5b9a\u4e49\u3001\u5de5\u5177\u7c7b\u3001\u679a\u4e3e\u7b49")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"manager-dao"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6570\u636e\u5e93\u64cd\u4f5c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"manager-service"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4e1a\u52a1\u903b\u8f91\u5c42")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"manager-workflow"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5de5\u4f5c\u6d41\u670d\u52a1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"manager-plugins"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Sort \u63d2\u4ef6\u670d\u52a1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"manager-web"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u524d\u7aef\u4ea4\u4e92\u63a5\u53e3\u5c42")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"manager-client"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5ba2\u6237\u7aef\u670d\u52a1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"manager-client-examples"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5ba2\u6237\u7aef\u4f7f\u7528\u793a\u4f8b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"manager-client-tools"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5ba2\u6237\u7aef\u547d\u4ee4\u884c\u5de5\u5177")))),(0,n.kt)("h2",{id:"4-\u7cfb\u7edf\u4f7f\u7528\u6d41\u7a0b"},"4 \u7cfb\u7edf\u4f7f\u7528\u6d41\u7a0b"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(25350).Z,width:"1285",height:"852"})),(0,n.kt)("h2",{id:"5-\u6570\u636e\u6a21\u578b"},"5 \u6570\u636e\u6a21\u578b"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(89863).Z,width:"1441",height:"673"})))}d.isMDXComponent=!0},89863:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/datamodel-7c788db64ee2c4f646d063d43a8675a6.jpg"},41940:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/inlong-manager-a3645b4c9d18fd67a2bb591656eaf4d6.png"},25350:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/interactive-7dd8e370ae4885484e6a4576cb5de26f.jpg"}}]);