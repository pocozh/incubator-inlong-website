"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[1155],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),s=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return r?o.createElement(f,l(l({ref:t},p),{},{components:r})):o.createElement(f,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:n,l[1]=a;for(var s=2;s<i;s++)l[s]=r[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},13927:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var o=r(87462),n=(r(67294),r(3905));const i={title:"Zookeeper\u914d\u7f6e\u4ecb\u7ecd",sidebar_position:3},l="\u524d\u8a00",a={unversionedId:"modules/sort/protocol_introduction",id:"version-1.0.0/modules/sort/protocol_introduction",title:"Zookeeper\u914d\u7f6e\u4ecb\u7ecd",description:"\u5f53\u524dinlong-sort\u7684\u5143\u6570\u636e\u7ba1\u7406\u4f9d\u8d56inlong-manager\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0.0/modules/sort/protocol_introduction.md",sourceDirName:"modules/sort",slug:"/modules/sort/protocol_introduction",permalink:"/zh-CN/docs/1.0.0/modules/sort/protocol_introduction",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.0.0/modules/sort/protocol_introduction.md",tags:[],version:"1.0.0",sidebarPosition:3,frontMatter:{title:"Zookeeper\u914d\u7f6e\u4ecb\u7ecd",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5\u90e8\u7f72",permalink:"/zh-CN/docs/1.0.0/modules/sort/quick_start"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/1.0.0/modules/manager/overview"}},c={},s=[{value:"1 Zookeeper\u7ed3\u6784",id:"1-zookeeper\u7ed3\u6784",level:2},{value:"2 \u534f\u8bae\u8bbe\u8ba1",id:"2-\u534f\u8bae\u8bbe\u8ba1",level:2}],p={toc:s};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,n.kt)("p",null,"\u5f53\u524dinlong-sort\u7684\u5143\u6570\u636e\u7ba1\u7406\u4f9d\u8d56inlong-manager\u3002"),(0,n.kt)("p",null,"inlong-sort\u4e0einlong-manager\u4e4b\u95f4\u901a\u8fc7zk\u8fdb\u884c\u5143\u6570\u636e\u7684\u4ea4\u4e92\u3002"),(0,n.kt)("h2",{id:"1-zookeeper\u7ed3\u6784"},"1 Zookeeper\u7ed3\u6784"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img.png",src:r(29057).Z,width:"663",height:"130"})),(0,n.kt)("p",null,"cluster\u4ee3\u8868\u4e00\u4e2aflink\u4f5c\u4e1a\uff0c\u540c\u4e00\u4e2acluster\u4e2d\u53ef\u4ee5\u5904\u7406\u591a\u4e2a\u6d41\u5411\uff0c\u4f46\u662f\u8fd9\u4e9b\u6d41\u5411\u5fc5\u987b\u662f\u540c\u6784\u7684\uff08source\u4e0esink\u76f8\u540c\uff09\u3002"),(0,n.kt)("p",null,"dataflow\u4ee3\u8868\u4e00\u4e2a\u5177\u4f53\u7684\u6d41\u5411\uff0c\u6bcf\u4e2a\u6d41\u5411\u6709\u4e00\u4e2a\u5168\u5c40\u552f\u4e00\u7684id\u6765\u6807\u8bc6\u3002\u6d41\u5411\u7531source + sink\u7ec4\u6210\u3002"),(0,n.kt)("p",null,"\u4e0a\u56fe\u4e2d\u4e0a\u65b9\u7684\u4e00\u6761\u8def\u5f84\u7528\u6765\u8868\u793a\u67d0\u4e2acluster\u4e2d\u8fd0\u884c\u4e86\u54ea\u4e9bdataflow\u7684\u4f5c\u4e1a\uff0c\u8282\u70b9\u4e0b\u5747\u4e0d\u542b\u5143\u6570\u636e\u3002"),(0,n.kt)("p",null,"\u4e0b\u65b9\u7684\u8def\u5f84\u7528\u6765\u5b58\u50a8dataflow\u7684\u5177\u4f53\u4fe1\u606f\uff0c\u5373\u771f\u6b63\u7684\u5143\u6570\u636e\u5b58\u653e\u3002"),(0,n.kt)("p",null,"\u5143\u6570\u636e\u7ba1\u7406\u903b\u8f91\u53ef\u4ee5\u67e5\u770b\u7c7b",(0,n.kt)("inlineCode",{parentName:"p"},"org.apache.inlong.sort.meta.MetaManager")),(0,n.kt)("h2",{id:"2-\u534f\u8bae\u8bbe\u8ba1"},"2 \u534f\u8bae\u8bbe\u8ba1"),(0,n.kt)("p",null,"\u5177\u4f53\u7684\u534f\u8bae\u53ef\u4ee5\u67e5\u770b\u7c7b",(0,n.kt)("inlineCode",{parentName:"p"},"org.apache.inlong.sort.protocol.DataFlowInfo")))}u.isMDXComponent=!0},29057:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/img-344b6f587c065734ac081babe17c0b2c.png"}}]);