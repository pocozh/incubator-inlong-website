"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[42491],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=r,g=p["".concat(l,".").concat(u)]||p[u]||m[u]||o;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},27569:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Overview"},i=void 0,s={unversionedId:"modules/manager/overview",id:"version-1.0.0/modules/manager/overview",title:"Overview",description:"1 Introduction to Apache InLong Manager",source:"@site/versioned_docs/version-1.0.0/modules/manager/overview.md",sourceDirName:"modules/manager",slug:"/modules/manager/overview",permalink:"/docs/1.0.0/modules/manager/overview",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.0.0/modules/manager/overview.md",tags:[],version:"1.0.0",frontMatter:{title:"Overview"},sidebar:"tutorialSidebar",previous:{title:"Zookeeper Configure",permalink:"/docs/1.0.0/modules/sort/protocol_introduction"},next:{title:"Deployment",permalink:"/docs/1.0.0/modules/manager/quick_start"}},l={},c=[{value:"1 Introduction to Apache InLong Manager",id:"1-introduction-to-apache-inlong-manager",level:2},{value:"2 Architecture",id:"2-architecture",level:2},{value:"3 Module division of labor",id:"3-module-division-of-labor",level:2},{value:"4 use process",id:"4-use-process",level:2},{value:"5 data model",id:"5-data-model",level:2}],d={toc:c};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-introduction-to-apache-inlong-manager"},"1 Introduction to Apache InLong Manager"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Target positioning: Apache inlong is positioned as a one-stop integration framework for massive data, providing complete coverage of big data access scenarios from data collection, transmission, sorting, and technical capabilities.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Platform value: Users can complete task configuration, management, and indicator monitoring through the platform's built-in management and configuration platform. At the same time, the platform provides SPI extension points in the main links of the process to implement custom logic as needed. Ensure stable and efficient functions while lowering the threshold for platform use.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Apache InLong Manager is the user-oriented unified UI of the entire data access platform. After the user logs in, it will provide different function permissions and data permissions according to the corresponding role. The page provides maintenance portals for the platform's basic clusters (such as mq, sorting), and you can view basic maintenance information and capacity planning adjustments at any time. At the same time, business users can complete the creation, modification and maintenance of data access tasks, and index viewing and reconciliation functions. The corresponding background service will interact with the underlying modules when users create and start tasks, and deliver the tasks that each module needs to perform in a reasonable way. Play the role of coordinating the execution process of the serial back-end business."))),(0,r.kt)("h2",{id:"2-architecture"},"2 Architecture"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(21151).Z,width:"965",height:"507"})),(0,r.kt)("h2",{id:"3-module-division-of-labor"},"3 Module division of labor"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Module"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Responsibilities"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"manager-common"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Module common code, entry exception definition, tool class, enumeration, etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"manager-dao"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Database Operation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"manager-service"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Business Logic Layer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"manager-web"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Front-end interactive response interface")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"manager-workflow-engine"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Workflow Engine")))),(0,r.kt)("h2",{id:"4-use-process"},"4 use process"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1610).Z,width:"1285",height:"852"})),(0,r.kt)("h2",{id:"5-data-model"},"5 data model"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(58747).Z,width:"1441",height:"673"})))}m.isMDXComponent=!0},58747:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/datamodel-7c788db64ee2c4f646d063d43a8675a6.jpg"},21151:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/inlong-manager-a3645b4c9d18fd67a2bb591656eaf4d6.png"},1610:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/interactive-7dd8e370ae4885484e6a4576cb5de26f.jpg"}}]);