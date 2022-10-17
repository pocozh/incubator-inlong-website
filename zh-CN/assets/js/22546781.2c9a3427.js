"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[32751],{3905:(e,t,l)=>{l.d(t,{Zo:()=>u,kt:()=>k});var i=l(67294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,i)}return l}function s(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?n(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function r(e,t){if(null==e)return{};var l,i,a=function(e,t){if(null==e)return{};var l,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)l=n[i],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)l=n[i],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var d=i.createContext({}),p=function(e){var t=i.useContext(d),l=t;return e&&(l="function"==typeof e?e(t):s(s({},t),e)),l},u=function(e){var t=p(e.components);return i.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var l=e.components,a=e.mdxType,n=e.originalType,d=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),g=p(l),k=a,m=g["".concat(d,".").concat(k)]||g[k]||c[k]||n;return l?i.createElement(m,s(s({ref:t},u),{},{components:l})):i.createElement(m,s({ref:t},u))}));function k(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=l.length,s=new Array(n);s[0]=g;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var p=2;p<n;p++)s[p]=l[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,l)}g.displayName="MDXCreateElement"},75416:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>n,metadata:()=>r,toc:()=>p});var i=l(87462),a=(l(67294),l(3905));const n={title:"\u7528\u6237\u624b\u518c",sidebar_position:2},s="1. \u7528\u6237\u767b\u5f55",r={unversionedId:"user_guide/user_manual",id:"version-0.11.0/user_guide/user_manual",title:"\u7528\u6237\u624b\u518c",description:"\u9700\u7cfb\u7edf\u4f7f\u7528\u7528\u6237\u8f93\u5165\u8d26\u53f7\u540d\u79f0\u548c\u5bc6\u7801\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.11.0/user_guide/user_manual.md",sourceDirName:"user_guide",slug:"/user_guide/user_manual",permalink:"/zh-CN/docs/0.11.0/user_guide/user_manual",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-0.11.0/user_guide/user_manual.md",tags:[],version:"0.11.0",sidebarPosition:2,frontMatter:{title:"\u7528\u6237\u624b\u518c",sidebar_position:2},sidebar:"version-0.11.0/tutorialSidebar",previous:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/zh-CN/docs/0.11.0/user_guide/quick_start"},next:{title:"\u5165\u5e93 Hive \u793a\u4f8b",permalink:"/zh-CN/docs/0.11.0/user_guide/example"}},d={},p=[{value:"2.1 \u4e1a\u52a1\u4fe1\u606f",id:"21-\u4e1a\u52a1\u4fe1\u606f",level:2},{value:"2.1.1 \u4e1a\u52a1\u4fe1\u606f",id:"211-\u4e1a\u52a1\u4fe1\u606f",level:3},{value:"2.1.2 \u63a5\u5165\u8981\u6c42",id:"212-\u63a5\u5165\u8981\u6c42",level:3},{value:"2.1.3 \u63a5\u5165\u89c4\u6a21",id:"213-\u63a5\u5165\u89c4\u6a21",level:3},{value:"2.2 \u6570\u636e\u6d41",id:"22-\u6570\u636e\u6d41",level:2},{value:"2.2.1 \u57fa\u7840\u4fe1\u606f",id:"221-\u57fa\u7840\u4fe1\u606f",level:3},{value:"2.2.2 \u6570\u636e\u6765\u6e90",id:"222-\u6570\u636e\u6765\u6e90",level:3},{value:"2.2.3 \u6570\u636e\u4fe1\u606f",id:"223-\u6570\u636e\u4fe1\u606f",level:3},{value:"2.2.4 \u6570\u636e\u6d41\u5411",id:"224-\u6570\u636e\u6d41\u5411",level:3},{value:"3.1 \u6267\u884c\u65e5\u5fd7",id:"31-\u6267\u884c\u65e5\u5fd7",level:2},{value:"3.2 \u4efb\u52a1\u8be6\u60c5",id:"32-\u4efb\u52a1\u8be6\u60c5",level:2},{value:"3.2.1 \u4e1a\u52a1\u4fe1\u606f",id:"321-\u4e1a\u52a1\u4fe1\u606f",level:3},{value:"3.2.2 \u6570\u636e\u6d41",id:"322-\u6570\u636e\u6d41",level:3},{value:"3.2.3 \u6d41\u5411",id:"323-\u6d41\u5411",level:3},{value:"4.1 \u6d88\u8d39\u4fe1\u606f",id:"41-\u6d88\u8d39\u4fe1\u606f",level:2},{value:"5.1 \u6211\u7684\u7533\u8bf7",id:"51-\u6211\u7684\u7533\u8bf7",level:2},{value:"5.1.1 \u6570\u636e\u63a5\u5165\u8be6\u60c5",id:"511-\u6570\u636e\u63a5\u5165\u8be6\u60c5",level:3},{value:"5.1.2 \u6570\u636e\u6d88\u8d39\u8be6\u60c5",id:"512-\u6570\u636e\u6d88\u8d39\u8be6\u60c5",level:3},{value:"5.2 \u6211\u7684\u5ba1\u6279",id:"52-\u6211\u7684\u5ba1\u6279",level:2},{value:"5.2.1 \u6570\u636e\u63a5\u5165\u5ba1\u6279",id:"521-\u6570\u636e\u63a5\u5165\u5ba1\u6279",level:3},{value:"5.2.2 \u65b0\u5efa\u6570\u636e\u6d88\u8d39\u5ba1\u6279",id:"522-\u65b0\u5efa\u6570\u636e\u6d88\u8d39\u5ba1\u6279",level:3},{value:"6.1 \u65b0\u5efa\u7528\u6237",id:"61-\u65b0\u5efa\u7528\u6237",level:2},{value:"6.2 \u5220\u9664\u7528\u6237",id:"62-\u5220\u9664\u7528\u6237",level:2},{value:"6.3 \u4fee\u6539\u7528\u6237",id:"63-\u4fee\u6539\u7528\u6237",level:2},{value:"6.4 \u66f4\u6539\u5bc6\u7801",id:"64-\u66f4\u6539\u5bc6\u7801",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"1-\u7528\u6237\u767b\u5f55"},"1. \u7528\u6237\u767b\u5f55"),(0,a.kt)("p",null,"\u9700\u7cfb\u7edf\u4f7f\u7528\u7528\u6237\u8f93\u5165\u8d26\u53f7\u540d\u79f0\u548c\u5bc6\u7801\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:l(97585).Z,width:"868",height:"490"})),(0,a.kt)("h1",{id:"2-\u6570\u636e\u63a5\u5165"},"2. \u6570\u636e\u63a5\u5165"),(0,a.kt)("p",null,"\u6570\u636e\u63a5\u5165\u6a21\u5757\u5c55\u793a\u76ee\u524d\u7528\u6237\u6743\u9650\u5185\u63a5\u5165\u7cfb\u7edf\u6240\u6709\u4efb\u52a1\u5217\u8868\uff0c\u53ef\u4ee5\u5bf9\u8fd9\u4e9b\u4efb\u52a1\u8be6\u60c5\u67e5\u770b\u3001\u7f16\u8f91\u66f4\u65b0\u548c\u5220\u9664\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,"\u70b9\u51fb\u3010\u6570\u636e\u63a5\u5165\u3011\u63a5\u5165\u6d41\u7a0b\uff0c\u6570\u636e\u63a5\u5165\u4fe1\u606f\u586b\u5199\u6709\u4e24\u4e2a\u6b65\u9aa4\uff1a\u4e1a\u52a1\u4fe1\u606f\u3001\u6570\u636e\u6d41\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:l(71482).Z,width:"1549",height:"982"})),(0,a.kt)("h2",{id:"21-\u4e1a\u52a1\u4fe1\u606f"},"2.1 \u4e1a\u52a1\u4fe1\u606f"),(0,a.kt)("h3",{id:"211-\u4e1a\u52a1\u4fe1\u606f"},"2.1.1 \u4e1a\u52a1\u4fe1\u606f"),(0,a.kt)("p",null,"\u9700\u8981\u7528\u6237\u5bf9\u63a5\u5165\u4efb\u52a1\u586b\u5199\u57fa\u7840\u4e1a\u52a1\u4fe1\u606f\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:l(51958).Z,width:"739",height:"345"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e1a\u52a1ID\uff1a\u7edf\u4e00\u5c0f\u5199\u82f1\u6587\u540d\u79f0\uff0c\u8bf7\u5c3d\u91cf\u5305\u542b\u4ea7\u54c1\u540d\u548c\u7b80\u6d01\u89c4\u8303\uff0c\u5982pay_base"),(0,a.kt)("li",{parentName:"ul"},"\u4e1a\u52a1\u4e2d\u6587\u540d\u79f0\uff1a\u4e1a\u52a1\u7684\u4e2d\u6587\u63cf\u8ff0\uff0c\u4fbf\u4e8e\u4f7f\u7528\u4e0e\u68c0\u7d22\uff0c\u6700\u591a128\u4e2a\u5b57"),(0,a.kt)("li",{parentName:"ul"},"\u4e1a\u52a1\u8d23\u4efb\u4eba\uff1a\u81f3\u5c112\u4eba\uff0c\u4e1a\u52a1\u8d23\u4efb\u4eba\u53ef\u67e5\u770b\u3001\u4fee\u6539\u4e1a\u52a1\u4fe1\u606f\uff0c\u65b0\u589e\u548c\u4fee\u6539\u6240\u6709\u63a5\u5165\u914d\u7f6e\u9879"),(0,a.kt)("li",{parentName:"ul"},"\u4e1a\u52a1\u4ecb\u7ecd\uff1a\u526a\u77ed\u4fe1\u5bf9\u6b64\u6b21\u63a5\u5165\u4efb\u52a1\u8fdb\u884c\u4e1a\u52a1\u80cc\u666f\u548c\u5e94\u7528\u4ecb\u7ecd\uff1a")),(0,a.kt)("h3",{id:"212-\u63a5\u5165\u8981\u6c42"},"2.1.2 \u63a5\u5165\u8981\u6c42"),(0,a.kt)("p",null,"\u63a5\u5165\u8981\u6c42\u9700\u8981\u7528\u6237\u8fdb\u884c\u9009\u62e9\u6d88\u606f\u4e2d\u95f4\u4ef6\uff1a\u9ad8\u541e\u5410\uff08TUBE\uff09\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:l(21401).Z,width:"1313",height:"211"})),(0,a.kt)("p",null,"\u9ad8\u541e\u5410\u2014Tube \uff1a\u9ad8\u541e\u5410\u6d88\u606f\u4f20\u8f93\u7ec4\u4ef6\uff0c\u9002\u7528\u4e8e\u65e5\u5fd7\u7c7b\u7684\u6d88\u606f\u4f20\u9012\u3002"),(0,a.kt)("h3",{id:"213-\u63a5\u5165\u89c4\u6a21"},"2.1.3 \u63a5\u5165\u89c4\u6a21"),(0,a.kt)("p",null,"\u63a5\u5165\u89c4\u6a21\u9700\u8981\u7528\u6237\u9884\u5148\u9488\u5bf9\u63a5\u5165\u6570\u636e\u8fdb\u884c\u89c4\u6a21\u5224\u65ad\uff0c\u4ee5\u4fbf\u540e\u7eed\u5206\u914d\u8ba1\u7b97\u548c\u5b58\u50a8\u8d44\u6e90\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:l(91113).Z,width:"796",height:"268"})),(0,a.kt)("h2",{id:"22-\u6570\u636e\u6d41"},"2.2 \u6570\u636e\u6d41"),(0,a.kt)("p",null,"\u70b9\u51fb\u3010\u4e0b\u4e00\u6b65\u3011\u8fdb\u5165\u5230\u6570\u636e\u6d41\u4fe1\u606f\u586b\u5199\u6b65\u9aa4\uff0c\u6570\u636e\u6d41\u4fe1\u606f\u586b\u5199\u6709\u56db\u4e2a\u6a21\u5757\uff1a\u57fa\u7840\u4fe1\u606f\u3001\u6570\u636e\u6765\u6e90\u3001\u6570\u636e\u4fe1\u606f\u3001\u6570\u636e\u6d41\u5411\u3002"),(0,a.kt)("p",null,"\u5728\u6570\u636e\u6d41\u6d41\u7a0b\u4e2d\u53ef\u4ee5\u70b9\u51fb\u3010\u65b0\u5efa\u6570\u636e\u6d41\u3011\uff0c\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u6570\u636e\u6d41\u4fe1\u606f\u586b\u5199\u9875\u9762\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:l(66107).Z,width:"1560",height:"141"})),(0,a.kt)("h3",{id:"221-\u57fa\u7840\u4fe1\u606f"},"2.2.1 \u57fa\u7840\u4fe1\u606f"),(0,a.kt)("p",null,"\u9700\u7528\u6237\u5bf9\u8be5\u63a5\u5165\u4efb\u52a1\u4e2d\u6570\u636e\u6d41\u7684\u57fa\u7840\u4fe1\u606f\u8fdb\u884c\u586b\u5199\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:l(48387).Z,width:"1463",height:"385"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u6d41ID\uff1a\u524d\u7f00\u6839\u636e\u4ea7\u54c1/\u9879\u76ee\u81ea\u52a8\u751f\u6210\uff0c\u8fd9\u5728\u67d0\u4e2a\u5177\u4f53\u7684\u63a5\u5165\u4e2d\u662f\u552f\u4e00\u7684\uff0c\u4e0e\u6570\u636e\u6e90\u548c\u5165\u5e93\u7684\u8868\u4e2d\u7684\u6570\u636e\u6d41ID\u4fdd\u6301\u4e00\u81f4"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u6d41\u540d\u79f0\uff1a\u63a5\u53e3\u4fe1\u606f\u8bf4\u660e\uff0c\u957f\u5ea6\u9650\u5236\u4e3a64\u4e2a\u82f1\u6587\u5b57\u7b26\uff08\u5bf9\u5e9432\u4e2a\u4e2d\u6587\u5b57\u7b26\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u6d41\u8d23\u4efb\u4eba\uff1a\u6570\u636e\u6d41\u8d23\u4efb\u4eba\u53ef\u67e5\u770b\u3001\u4fee\u6539\u6570\u636e\u6d41\u4fe1\u606f\uff0c\u65b0\u589e\u548c\u4fee\u6539\u6240\u6709\u63a5\u5165\u914d\u7f6e\u9879"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u6d41\u4ecb\u7ecd\uff1a\u6570\u636e\u6d41\u7b80\u5355\u6587\u672c\u4ecb\u7ecd")),(0,a.kt)("h3",{id:"222-\u6570\u636e\u6765\u6e90"},"2.2.2 \u6570\u636e\u6765\u6e90"),(0,a.kt)("p",null,"\u9700\u7528\u6237\u9009\u62e9\u8be5\u6570\u636e\u6d41\u7684\u6d88\u606f\u6765\u6e90\uff0c\u76ee\u524d\u652f\u6301\u6587\u4ef6\u3001\u81ea\u4e3b\u63a8\u9001\u4e09\u79cd\u65b9\u5f0f\uff0c\u5e76\u4e14\u53ef\u4ee5\u5728\u9ad8\u7ea7\u9009\u9879\u4e2d\u8865\u5145\u8be5\u6570\u636e\u6765\u6e90\u8be6\u7ec6\u4fe1\u606f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6587\u4ef6\uff1a\u4e1a\u52a1\u6570\u636e\u4ee5\u6587\u4ef6\u5f62\u5f0f\u5b58\u653e\uff0c\u4e1a\u52a1\u673a\u5668\u90e8\u7f72 InLong Agent\uff0c\u6839\u636e\u5b9a\u5236\u7684\u7b56\u7565\u89c4\u5219\u8fdb\u884c\u8bfb\u53d6")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u81ea\u4e3b\u63a8\u9001\uff1a\u901a\u8fc7 SDK \u5411\u6d88\u606f\u4e2d\u95f4\u4ef6\u63a8\u9001\u6570\u636e"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:l(39107).Z,width:"1016",height:"141"})))),(0,a.kt)("h3",{id:"223-\u6570\u636e\u4fe1\u606f"},"2.2.3 \u6570\u636e\u4fe1\u606f"),(0,a.kt)("p",null,"\u9700\u7528\u6237\u586b\u5199\u8be5\u6570\u636e\u6d41\u4e2d\u6570\u636e\u76f8\u5173\u4fe1\u606f\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:l(60103).Z,width:"990",height:"346"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u683c\u5f0f\uff1a\u6570\u636e\u6765\u6e90\u683c\u5f0f\uff0c\u662f\u666e\u901a\u6587\u672c\u7c7b\u578b\uff0c\u6216\u8005KV\u952e\u503c\u5bf9\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u7f16\u7801\uff1a\u5982\u6570\u636e\u6e90\u542b\u4e2d\u6587\uff0c\u9700\u8981\u9009UTF-8\u6216GBK\uff0c\u5426\u5219\u7f16\u7801\u683c\u5f0f\u4e0d\u5bf9\uff0c\u5165\u5e93\u540e\u4f1a\u4e71\u7801"),(0,a.kt)("li",{parentName:"ul"},"\u6e90\u5b57\u6bb5\u5206\u9694\u7b26\uff1a\u6570\u636e\u53d1\u9001\u5230 MQ \u91cc\u7684\u683c\u5f0f"),(0,a.kt)("li",{parentName:"ul"},"\u6e90\u6570\u636e\u5b57\u6bb5\uff1a\u6570\u636e\u5728 MQ \u91cc\u6309\u67d0\u79cd\u683c\u5f0f\u5212\u5206\u7684\u4e0d\u540c\u542b\u4e49\u7684\u5c5e\u6027")),(0,a.kt)("h3",{id:"224-\u6570\u636e\u6d41\u5411"},"2.2.4 \u6570\u636e\u6d41\u5411"),(0,a.kt)("p",null,"\u9700\u7528\u6237\u5bf9\u6b64\u4efb\u52a1\u7684\u6d41\u5411\u7ec8\u6d41\u5411\u8fdb\u884c\u9009\u62e9\uff0c\u6b64\u90e8\u5206\u4e3a\u975e\u5fc5\u586b\u9879\uff0c\u76ee\u524d\u652f\u6301Hive\u548c\u81ea\u4e3b\u63a8\u9001\u4e24\u79cd\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:l(22985).Z,width:"1012",height:"347"})),(0,a.kt)("p",null,"HIVE\u6d41\u5411\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:l(53779).Z,width:"621",height:"610"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u76ee\u6807\u5e93\uff1ahive\u6570\u636e\u5e93\u540d\uff08\u9700\u8981\u63d0\u524d\u51c6\u5907\u521b\u5efa\u597d\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u76ee\u6807\u8868\uff1ahive\u8868\u540d"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u7ea7\u5206\u533a\uff1ahive\u6570\u636e\u5212\u5206hdfs\u6570\u636e\u4e00\u7ea7\u5b50\u76ee\u5f55\u7684\u5b57\u6bb5\u540d"),(0,a.kt)("li",{parentName:"ul"},"\u4e8c\u7ea7\u5206\u533a\uff1ahive\u6570\u636e\u5212\u5206hdfs\u6570\u636e\u4e00\u7ea7\u5b50\u76ee\u5f55\u7684\u5b57\u6bb5\u540d"),(0,a.kt)("li",{parentName:"ul"},"\u7528\u6237\u540d\uff1ahiveserver\u8fde\u63a5\u8d26\u6237\u540d"),(0,a.kt)("li",{parentName:"ul"},"\u7528\u6237\u5bc6\u7801\uff1ahiveserver\u8fde\u63a5\u8d26\u5bc6\u7801"),(0,a.kt)("li",{parentName:"ul"},"HDFS url\uff1ahive\u5e95\u5c42hdfs\u8fde\u63a5"),(0,a.kt)("li",{parentName:"ul"},"JDBC url\uff1ahiveserver \u7684jdbcurl"),(0,a.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u76f8\u5173\u4fe1\u606f\uff1a \u6e90\u5b57\u6bb5\u540d\u3001\u6e90\u5b57\u6bb5\u7c7b\u578b\u3001HIVE\u5b57\u6bb5\u540d\u3001HIVE\u5b57\u6bb5\u7c7b\u578b\u3001\u5b57\u6bb5\u63cf\u8ff0\uff0c\u5e76\u652f\u6301\u5220\u9664\u548c\u65b0\u589e\u5b57\u6bb5")),(0,a.kt)("h1",{id:"3-\u63a5\u5165\u8be6\u60c5"},"3. \u63a5\u5165\u8be6\u60c5"),(0,a.kt)("h2",{id:"31-\u6267\u884c\u65e5\u5fd7"},"3.1 \u6267\u884c\u65e5\u5fd7"),(0,a.kt)("p",null,"\u5f53\u6570\u636e\u63a5\u5165\u4efb\u52a1\u72b6\u6001\u4e3a\u201d\u6279\u51c6\u6210\u529f\u201c\u548c\u201d\u914d\u7f6e\u5931\u8d25\u201c\u72b6\u6001\uff0c\u53ef\u901a\u8fc7\u201d\u6267\u884c\u65e5\u5fd7\u201c\u529f\u80fd\uff0c\u4ee5\u4fbf\u7528\u6237\u67e5\u770b\u4efb\u52a1\u6267\u884c\u8fdb\u7a0b\u8fdb\u7a0b\u548c\u8be6\u60c5\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:l(46284).Z,width:"3132",height:"1810"})),(0,a.kt)("p",null,"\u70b9\u51fb\u3010\u6267\u884c\u65e5\u5fd7\u3011\u5c06\u4ee5\u5f39\u7a97\u5f62\u5f0f\u5c55\u793a\u8be5\u4efb\u52a1\u6267\u884c\u65e5\u5fd7\u8be6\u60c5\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:l(63728).Z,width:"2018",height:"1434"})),(0,a.kt)("p",null,"\u6267\u884c\u65e5\u5fd7\u4e2d\u5c06\u5c55\u793a\u8be5\u63a5\u5165\u6d41\u7a0b\u6267\u884c\u4e2d\u4efb\u52a1\u7c7b\u578b\u3001\u6267\u884c\u7ed3\u679c\u3001\u6267\u884c\u65e5\u5fd7\u5185\u5bb9\u3001\u7ed3\u675f\u65f6\u95f4\u3001\u5982\u679c\u6267\u884c\u5931\u8d25\u53ef\u4ee5\u201d\u91cd\u542f\u201c\u8be5\u4efb\u52a1\u518d\u6b21\u6267\u884c\u3002"),(0,a.kt)("h2",{id:"32-\u4efb\u52a1\u8be6\u60c5"},"3.2 \u4efb\u52a1\u8be6\u60c5"),(0,a.kt)("p",null,"\u4e1a\u52a1\u8d1f\u8d23\u4eba/\u5173\u6ce8\u4eba\u53ef\u4ee5\u67e5\u770b\u8be5\u4efb\u52a1\u63a5\u5165\u8be6\u60c5\uff0c\u5e76\u5728\u3010\u5f85\u63d0\u4ea4\u3011\u3001\u3010\u914d\u7f6e\u6210\u529f\u3011\u3001\u3010\u914d\u7f6e\u5931\u8d25\u3011\u72b6\u6001\u4e0b\u53ef\u5bf9\u90e8\u5206\u4fe1\u606f\u8fdb\u884c\u4fee\u6539\u66f4\u65b0\u63a5\u5165\u4efb\u52a1\u8be6\u60c5\u4e2d\u5177\u6709\u4e1a\u52a1\u4fe1\u606f\u3001\u6570\u636e\u6d41\u3001\u6d41\u5411\u4e09\u4e2a\u6a21\u5757\u3002"),(0,a.kt)("h3",{id:"321-\u4e1a\u52a1\u4fe1\u606f"},"3.2.1 \u4e1a\u52a1\u4fe1\u606f"),(0,a.kt)("p",null,"\u5c55\u793a\u63a5\u5165\u4efb\u52a1\u4e2d\u57fa\u7840\u4e1a\u52a1\u4fe1\u606f\uff0c\u70b9\u51fb\u3010\u7f16\u8f91\u3011\u53ef\u5bf9\u90e8\u5206\u5185\u5bb9\u8fdb\u884c\u4fee\u6539\u66f4\u6539\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:l(98652).Z,width:"1162",height:"995"})),(0,a.kt)("h3",{id:"322-\u6570\u636e\u6d41"},"3.2.2 \u6570\u636e\u6d41"),(0,a.kt)("p",null,"\u5c55\u793a\u8be5\u63a5\u5165\u4efb\u52a1\u4e0b\u6570\u636e\u6d41\u57fa\u7840\u4fe1\u606f\uff0c\u70b9\u51fb\u3010\u65b0\u5efa\u6570\u636e\u6d41\u3011\u53ef\u65b0\u5efa\u4e00\u6761\u6570\u636e\u6d41\u4fe1\u606f\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:l(58338).Z,width:"1544",height:"1248"})),(0,a.kt)("h3",{id:"323-\u6d41\u5411"},"3.2.3 \u6d41\u5411"),(0,a.kt)("p",null,"\u5c55\u793a\u8be5\u63a5\u5165\u4efb\u52a1\u4e2d\u6570\u636e\u6d41\u5411\u57fa\u7840\u4fe1\u606f\uff0c\u901a\u8fc7\u901a\u8fc7\u4e0b\u62c9\u6846\u9009\u62e9\u4e0d\u540c\u6d41\u5411\u7c7b\u578b\uff0c\u70b9\u51fb\u3010\u65b0\u5efa\u6d41\u5411\u914d\u7f6e\u3011\u53ef\u65b0\u5efa\u4e00\u6761\u6570\u636e\u6d41\u5411\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:l(89708).Z,width:"1546",height:"377"})),(0,a.kt)("h1",{id:"4-\u6570\u636e\u6d88\u8d39"},"4. \u6570\u636e\u6d88\u8d39"),(0,a.kt)("p",null,"\u6570\u636e\u6d88\u8d39\u76ee\u524d\u4e0d\u652f\u6301\u76f4\u63a5\u6d88\u8d39\u63a5\u5165\u6570\u636e\uff0c\u9700\u8d70\u6570\u636e\u5ba1\u6279\u6d41\u7a0b\u540e\u65b9\u53ef\u6b63\u5e38\u6d88\u8d39\u6570\u636e\uff1b \u70b9\u51fb\u3010\u65b0\u5efa\u6d88\u8d39\u3011\uff0c\u8fdb\u5165\u6570\u636e\u6d88\u8d39\u6d41\u7a0b\uff0c\u9700\u8981\u5bf9\u6d88\u8d39\u4fe1\u606f\u76f8\u5173\u4fe1\u606f\u8fdb\u884c\u586b\u5199\uff1a\n",(0,a.kt)("img",{src:l(48593).Z,width:"1552",height:"591"})),(0,a.kt)("h2",{id:"41-\u6d88\u8d39\u4fe1\u606f"},"4.1 \u6d88\u8d39\u4fe1\u606f"),(0,a.kt)("p",null,"\u7533\u8bf7\u4eba\u9700\u5728\u8be5\u4fe1\u606f\u586b\u5199\u6a21\u5757\u4e2d\u9010\u6b65\u586b\u5199\u6570\u636e\u6d88\u8d39\u7533\u8bf7\u76f8\u5173\u57fa\u7840\u6d88\u8d39\u4e1a\u52a1\u4fe1\u606f\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:l(95285).Z,width:"1188",height:"498"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6d88\u8d39\u7ec4\u540d\u79f0\uff1a\u524d\u7f00\u6839\u636eBG/\u4ea7\u54c1/\u9879\u76ee\u81ea\u52a8\u751f\u6210\uff0c\u6d88\u8d39\u8005\u7684\u7b80\u8981\u540d\u79f0\uff0c\u5fc5\u987b\u662f\u5c0f\u5199\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u4e0b\u5212\u7ebf\u7ec4\u6210\uff0c\u6700\u540e\u5ba1\u6279\u4f1a\u6839\u636e\u7b80\u79f0\u62fc\u63a5\u5206\u914d\u51fa\u6d88\u8d39\u8005\u540d\u79f0"),(0,a.kt)("li",{parentName:"ul"},"\u6d88\u8d39\u8d23\u4efb\u4eba\uff1a\u81ea\u884c\u9009\u62e9\u8d23\u4efb\u4eba\uff0c\u5fc5\u987b\u81f3\u5c112\u4eba\uff1b\u8d23\u4efb\u4eba\u53ef\u67e5\u770b\u3001\u4fee\u6539\u6d88\u8d39\u4fe1\u606f"),(0,a.kt)("li",{parentName:"ul"},"\u6d88\u8d39\u76ee\u6807\u4e1a\u52a1ID\uff1a\u9700\u8981\u9009\u62e9\u6d88\u8d39\u6570\u636e\u7684\u4e1a\u52a1ID\uff0c\u53ef\u4ee5\u70b9\u51fb\u3010\u67e5\u8be2\u3011\u540e\uff0c\u5728\u5f39\u7a97\u9875\u9762\u4e2d\u9009\u62e9\u5408\u9002\u7684\u4e1a\u52a1ID\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u7528\u9014\uff1a\u9009\u62e9\u6570\u636e\u4f7f\u7528\u7528\u9014"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u7528\u9014\u8bf4\u660e\uff1a\u9700\u7533\u8bf7\u4eba\u6839\u636e\u81ea\u8eab\u6d88\u8d39\u573a\u666f\uff0c\u7b80\u8981\u8bf4\u660e\u4f7f\u7528\u7684\u9879\u76ee\u548c\u6570\u636e\u7684\u7528\u9014")),(0,a.kt)("p",null,"\u4fe1\u606f\u586b\u5b8c\u5b8c\u6210\u540e\uff0c\u70b9\u51fb\u3010\u63d0\u4ea4\u3011\u540e\uff0c\u4f1a\u5c06\u6b21\u6570\u636e\u6d88\u8d39\u6d41\u7a0b\u6b63\u5f0f\u63d0\u4ea4\u5f85\u5ba1\u6279\u4eba\u5ba1\u6279\u540e\u65b9\u53ef\u751f\u6548\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:l(78902).Z,width:"669",height:"309"})),(0,a.kt)("h1",{id:"5-\u5ba1\u6279\u7ba1\u7406"},"5. \u5ba1\u6279\u7ba1\u7406"),(0,a.kt)("p",null,"\u5ba1\u6279\u7ba1\u7406\u529f\u80fd\u6a21\u5757\u76ee\u524d\u5305\u542b\u4e86\u6211\u7684\u7533\u8bf7\u548c\u6211\u7684\u5ba1\u6279\uff0c\u7ba1\u7406\u7cfb\u7edf\u4e2d\u6570\u636e\u63a5\u5165\u548c\u6570\u636e\u6d88\u8d39\u7533\u8bf7\u5ba1\u6279\u5168\u90e8\u4efb\u52a1\u3002"),(0,a.kt)("h2",{id:"51-\u6211\u7684\u7533\u8bf7"},"5.1 \u6211\u7684\u7533\u8bf7"),(0,a.kt)("p",null,"\u5c55\u793a\u76ee\u524d\u7533\u8bf7\u4eba\u5728\u7cfb\u7edf\u4e2d\u6570\u636e\u63a5\u5165\u3001\u6d88\u8d39\u63d0\u4ea4\u7684\u4efb\u52a1\u5217\u8868\uff0c\u70b9\u51fb\u3010\u8be6\u60c5\u3011\u53ef\u4ee5\u67e5\u770b\u76ee\u524d\u8be5\u4efb\u52a1\u57fa\u7840\u4fe1\u548c\u5ba1\u6279\u8fdb\u7a0b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:l(61045).Z,width:"1556",height:"1154"})),(0,a.kt)("h3",{id:"511-\u6570\u636e\u63a5\u5165\u8be6\u60c5"},"5.1.1 \u6570\u636e\u63a5\u5165\u8be6\u60c5"),(0,a.kt)("p",null,"\u6570\u636e\u63a5\u5165\u4efb\u52a1\u8be6\u7ec6\u5c55\u793a\u76ee\u524d\u8be5\u7533\u8bf7\u4efb\u52a1\u57fa\u7840\u4fe1\u606f\u5305\u62ec\uff1a\u7533\u8bf7\u4eba\u76f8\u5173\u4fe1\u606f\u3001\u7533\u8bf7\u63a5\u5165\u57fa\u7840\u4fe1\u606f\uff0c\u4ee5\u53ca\u76ee\u524d\u5ba1\u6279\u8fdb\u7a0b\u8282\u70b9\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:l(44138).Z,width:"1554",height:"966"})),(0,a.kt)("h3",{id:"512-\u6570\u636e\u6d88\u8d39\u8be6\u60c5"},"5.1.2 \u6570\u636e\u6d88\u8d39\u8be6\u60c5"),(0,a.kt)("p",null,"\u6570\u636e\u6d88\u8d39\u4efb\u52a1\u8be6\u60c5\u5c55\u793a\u76ee\u524d\u7533\u8bf7\u4efb\u52a1\u57fa\u7840\u4fe1\u606f\u5305\u62ec\uff1a\u7533\u8bf7\u4eba\u4fe1\u606f\u3001\u57fa\u7840\u6d88\u8d39\u4fe1\u606f\uff0c\u4ee5\u53ca\u76ee\u524d\u5ba1\u6279\u8fdb\u7a0b\u8282\u70b9\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:l(592).Z,width:"1554",height:"477"})),(0,a.kt)("h2",{id:"52-\u6211\u7684\u5ba1\u6279"},"5.2 \u6211\u7684\u5ba1\u6279"),(0,a.kt)("p",null,"\u4f5c\u4e3a\u5177\u6709\u5ba1\u6279\u6743\u9650\u7684\u6570\u636e\u63a5\u5165\u5458\u548c\u7cfb\u7edf\u6210\u5458\uff0c\u5177\u5907\u5bf9\u6570\u636e\u63a5\u5165\u6216\u8005\u6d88\u8d39\u5ba1\u6279\u804c\u8d23\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:l(54596).Z,width:"1550",height:"947"})),(0,a.kt)("h3",{id:"521-\u6570\u636e\u63a5\u5165\u5ba1\u6279"},"5.2.1 \u6570\u636e\u63a5\u5165\u5ba1\u6279"),(0,a.kt)("p",null,"\u65b0\u5efa\u6570\u636e\u63a5\u5165\u5ba1\u6279\uff1a\u76ee\u524d\u4e3a\u4e00\u7ea7\u5ba1\u6279\uff0c\u7531\u7cfb\u7edf\u7ba1\u7406\u5458\u5ba1\u6279\u3002"),(0,a.kt)("p",null,"\u7cfb\u7edf\u7ba1\u7406\u5458\u5c06\u6839\u636e\u6570\u636e\u63a5\u5165\u4e1a\u52a1\u4fe1\u606f\uff0c\u5ba1\u6838\u6b64\u6b21\u63a5\u5165\u6d41\u7a0b\u662f\u5426\u7b26\u5408\u63a5\u5165\u8981\u6c42\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:l(48109).Z,width:"1552",height:"1221"})),(0,a.kt)("h3",{id:"522-\u65b0\u5efa\u6570\u636e\u6d88\u8d39\u5ba1\u6279"},"5.2.2 \u65b0\u5efa\u6570\u636e\u6d88\u8d39\u5ba1\u6279"),(0,a.kt)("p",null,"\u65b0\u5efa\u6570\u636e\u6d88\u8d39\u5ba1\u6279\uff1a\u76ee\u524d\u4e3a\u4e00\u7ea7\u5ba1\u6279\uff0c\u7531\u4e1a\u52a1\u8d1f\u8d23\u4eba\u5ba1\u6279\u3002"),(0,a.kt)("p",null,"\u4e1a\u52a1\u5ba1\u6279\uff1a\u7531\u6570\u636e\u63a5\u5165\u4e1a\u52a1\u8d1f\u8d23\u4eba\u6839\u636e\u63a5\u5165\u4fe1\u606f\u5224\u65ad\u6b64\u6d88\u8d39\u662f\u5426\u7b26\u5408\u4e1a\u52a1\u8981\u6c42\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:l(86442).Z,width:"1554",height:"629"})),(0,a.kt)("h1",{id:"6-\u7cfb\u7edf\u7ba1\u7406"},"6. \u7cfb\u7edf\u7ba1\u7406"),(0,a.kt)("p",null,"\u89d2\u8272\u4e3a\u7cfb\u7edf\u7ba1\u7406\u5458\u7684\u7528\u6237\u624d\u53ef\u4ee5\u4f7f\u7528\u6b64\u529f\u80fd\uff0c\u4ed6\u4eec\u53ef\u4ee5\u521b\u5efa\u3001\u4fee\u6539\u3001\u5220\u9664\u7528\u6237\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:l(23221).Z,width:"1530",height:"732"})),(0,a.kt)("h2",{id:"61-\u65b0\u5efa\u7528\u6237"},"6.1 \u65b0\u5efa\u7528\u6237"),(0,a.kt)("p",null,"\u5177\u6709\u7cfb\u7edf\u7ba1\u7406\u5458\u6743\u9650\u7528\u6237\uff0c\u53ef\u4ee5\u8fdb\u884c\u521b\u5efa\u65b0\u7528\u6237\u8d26\u53f7\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:l(47797).Z,width:"1288",height:"731"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8d26\u53f7\u7c7b\u578b\uff1a \u666e\u901a\u7528\u6237\uff08\u5177\u6709\u6570\u636e\u63a5\u5165\u548c\u6570\u636e\u6d88\u8d39\u6743\u9650\uff0c\u4e0d\u5177\u6709\u6570\u636e\u63a5\u5165\u5ba1\u6279\u548c\u8d26\u53f7\u7ba1\u7406\u6743\u9650\uff09\uff1b\u7cfb\u7edf\u7ba1\u7406\u5458\uff08\u5177\u6709\u6570\u636e\u63a5\u5165\u548c\u6570\u636e\u6d88\u8d39\u6743\u9650\u3001\u6570\u636e\u63a5\u5165\u5ba1\u6279\u548c\u7ba1\u7406\u8d26\u53f7\u7684\u6743\u9650\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u7528\u6237\u540d\u79f0\uff1a\u7528\u6237\u767b\u5f55\u8d26\u53f7ID"),(0,a.kt)("li",{parentName:"ul"},"\u7528\u6237\u5bc6\u7801\uff1a\u7528\u6237\u767b\u5f55\u5bc6\u7801"),(0,a.kt)("li",{parentName:"ul"},"\u6709\u6548\u65f6\u957f\uff1a\u8be5\u8d26\u53f7\u53ef\u5728\u7cfb\u7edf\u4f7f\u7528\u671f\u9650")),(0,a.kt)("p",null,(0,a.kt)("img",{src:l(12397).Z,width:"1288",height:"567"})),(0,a.kt)("h2",{id:"62-\u5220\u9664\u7528\u6237"},"6.2 \u5220\u9664\u7528\u6237"),(0,a.kt)("p",null,"\u7cfb\u7edf\u7ba1\u7406\u5458\u53ef\u4ee5\u5bf9\u5df2\u521b\u5efa\u7684\u7528\u6237\u8fdb\u884c\u8d26\u6237\u5220\u9664\uff0c\u5220\u9664\u540e\u6b64\u8d26\u53f7\u5c06\u505c\u6b62\u4f7f\u7528\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:l(46301).Z,width:"1249",height:"332"})),(0,a.kt)("h2",{id:"63-\u4fee\u6539\u7528\u6237"},"6.3 \u4fee\u6539\u7528\u6237"),(0,a.kt)("p",null,"\u7cfb\u7edf\u7ba1\u7406\u5458\u53ef\u4ee5\u4fee\u6539\u5df2\u521b\u5efa\u7684\u8d26\u53f7\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:l(23055).Z,width:"1213",height:"406"})),(0,a.kt)("p",null,"\u7cfb\u7edf\u7ba1\u7406\u5458\u53ef\u4ee5\u4fee\u6539\u8d26\u53f7\u7c7b\u578b\u548c\u6709\u6548\u65f6\u957f\u8fdb\u884c\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:l(84338).Z,width:"1284",height:"562"})),(0,a.kt)("h2",{id:"64-\u66f4\u6539\u5bc6\u7801"},"6.4 \u66f4\u6539\u5bc6\u7801"),(0,a.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u4fee\u6539\u8d26\u53f7\u5bc6\u7801\uff0c\u70b9\u51fb\u3010\u4fee\u6539\u5bc6\u7801\u3011\uff0c\u8f93\u5165\u65e7\u5bc6\u7801\u548c\u65b0\u5bc6\u7801\uff0c\u786e\u8ba4\u540e\u6b64\u8d26\u53f7\u65b0\u5bc6\u7801\u5c06\u751f\u6548\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:l(50552).Z,width:"1318",height:"452"})))}c.isMDXComponent=!0},71482:(e,t,l)=>{l.d(t,{Z:()=>i});const i=l.p+"assets/images/image-1624431177918-95ea081c82d148e01848987443a7793c.png"},51958:(e,t,l)=>{l.d(t,{Z:()=>i});const i=l.p+"assets/images/image-1624431271642-7325ee6a704dae17a4d1b7baa6c55ce1.png"},21401:(e,t,l)=>{l.d(t,{Z:()=>i});const i=l.p+"assets/images/image-1624431306077-fd91379e6cef0ef7fb0834b390d26081.png"},91113:(e,t,l)=>{l.d(t,{Z:()=>i});const i=l.p+"assets/images/image-1624431333949-43ad52b3ffa3e01329822b38dde5d277.png"},66107:(e,t,l)=>{l.d(t,{Z:()=>i});const i=l.p+"assets/images/image-1624431416449-d3d59918a7bd08f2deb481e5fd4cbd98.png"},48387:(e,t,l)=>{l.d(t,{Z:()=>i});const i=l.p+"assets/images/image-1624431435574-ed243ae88a9be5511b1c7511cf1d5e87.png"},39107:(e,t,l)=>{l.d(t,{Z:()=>i});const i=l.p+"assets/images/image-1624431594406-df78435a37da265110e6f5dcc5ea3236.png"},60103:(e,t,l)=>{l.d(t,{Z:()=>i});const i=l.p+"assets/images/image-1624431617259-79c1f0881394a8e1e8fda58ff443e9a6.png"},22985:(e,t,l)=>{l.d(t,{Z:()=>i});const i=l.p+"assets/images/image-1624431713360-73fcde085496fcff476e72ece79a3074.png"},53779:(e,t,l)=>{l.d(t,{Z:()=>i});const i=l.p+"assets/images/image-1624431787323-5c358330aa9d98a28f887c6bc699d383.png"},46284:(e,t,l)=>{l.d(t,{Z:()=>i});const i=l.p+"assets/images/image-1624432002615-5d1986e99c99a7c8410656ab2676f920.png"},63728:(e,t,l)=>{l.d(t,{Z:()=>i});const i=l.p+"assets/images/image-1624432022859-896538dcdc53d0dd834d60dd5cec5ef1.png"},98652:(e,t,l)=>{l.d(t,{Z:()=>i});const i=l.p+"assets/images/image-1624432076857-79e107534d47594e26e66a6e61aede7b.png"},58338:(e,t,l)=>{l.d(t,{Z:()=>i});const i=l.p+"assets/images/image-1624432092795-4ffb5c6560a1b876ee985389f4674f46.png"},89708:(e,t,l)=>{l.d(t,{Z:()=>i});const i=l.p+"assets/images/image-1624432114765-5a8af6d09d59ec308f3ef7f2063b13f9.png"},48593:(e,t,l)=>{l.d(t,{Z:()=>i});const i=l.p+"assets/images/image-1624432235900-f71edf583b188793707e0f561ee3ba06.png"},95285:(e,t,l)=>{l.d(t,{Z:()=>i});const i=l.p+"assets/images/image-1624432254118-33a6d97d973e2872e9e53d4cbebe8d3f.png"},78902:(e,t,l)=>{l.d(t,{Z:()=>i});const i=l.p+"assets/images/image-1624432286674-9853d11f33318f394eea705d9cfcd140.png"},61045:(e,t,l)=>{l.d(t,{Z:()=>i});const i=l.p+"assets/images/image-1624432445002-b6cd6262bbb9012f06a72091a5ec9298.png"},44138:(e,t,l)=>{l.d(t,{Z:()=>i});const i=l.p+"assets/images/image-1624432458971-d9f910891c45e7ed95a005c276a3181e.png"},592:(e,t,l)=>{l.d(t,{Z:()=>i});const i=l.p+"assets/images/image-1624432474526-62d8f0211df39af00583e77669d84dcd.png"},54596:(e,t,l)=>{l.d(t,{Z:()=>i});const i=l.p+"assets/images/image-1624432496461-8451c9c09d3a3fe90b1660ec1d94a22b.png"},48109:(e,t,l)=>{l.d(t,{Z:()=>i});const i=l.p+"assets/images/image-1624432515850-29364ea956882287ca1b8bb48b5a1a17.png"},86442:(e,t,l)=>{l.d(t,{Z:()=>i});const i=l.p+"assets/images/image-1624432535541-b2ca3753d7d7ce8b9f95739f7c69a6eb.png"},23221:(e,t,l)=>{l.d(t,{Z:()=>i});const i=l.p+"assets/images/image-1624432652141-835dbf13a80b62324a1c20e6526b2404.png"},47797:(e,t,l)=>{l.d(t,{Z:()=>i});const i=l.p+"assets/images/image-1624432668340-4bc249db829ea832b475565b480f1451.png"},12397:(e,t,l)=>{l.d(t,{Z:()=>i});const i=l.p+"assets/images/image-1624432740241-902d6ac30fca2f18083d8ddecbd50180.png"},46301:(e,t,l)=>{l.d(t,{Z:()=>i});const i=l.p+"assets/images/image-1624432759224-fe8616b872ae8c1426f1f47f46b5847a.png"},23055:(e,t,l)=>{l.d(t,{Z:()=>i});const i=l.p+"assets/images/image-1624432778845-5913d51b7905a265aa0b40e98a80628e.png"},84338:(e,t,l)=>{l.d(t,{Z:()=>i});const i=l.p+"assets/images/image-1624432797226-7e39cadb9746f2745b341a0313b1b39c.png"},50552:(e,t,l)=>{l.d(t,{Z:()=>i});const i=l.p+"assets/images/image-1624432829313-74769de3ddbe89790bfbb54a8c6df399.png"},97585:(e,t,l)=>{l.d(t,{Z:()=>i});const i=l.p+"assets/images/image-1624433272455-9859de21dc5c9fbf72c091610aa7a535.png"}}]);