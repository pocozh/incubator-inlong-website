"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[25528],{3905:(e,t,A)=>{A.d(t,{Zo:()=>p,kt:()=>s});var a=A(67294);function l(e,t,A){return t in e?Object.defineProperty(e,t,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[t]=A,e}function n(e,t){var A=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),A.push.apply(A,a)}return A}function r(e){for(var t=1;t<arguments.length;t++){var A=null!=arguments[t]?arguments[t]:{};t%2?n(Object(A),!0).forEach((function(t){l(e,t,A[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(A)):n(Object(A)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(A,t))}))}return e}function i(e,t){if(null==e)return{};var A,a,l=function(e,t){if(null==e)return{};var A,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)A=n[a],t.indexOf(A)>=0||(l[A]=e[A]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)A=n[a],t.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(e,A)&&(l[A]=e[A])}return l}var u=a.createContext({}),o=function(e){var t=a.useContext(u),A=t;return e&&(A="function"==typeof e?e(t):r(r({},t),e)),A},p=function(e){var t=o(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var A=e.components,l=e.mdxType,n=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=o(A),s=l,c=g["".concat(u,".").concat(s)]||g[s]||d[s]||n;return A?a.createElement(c,r(r({ref:t},p),{},{components:A})):a.createElement(c,r({ref:t},p))}));function s(e,t){var A=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=A.length,r=new Array(n);r[0]=g;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var o=2;o<n;o++)r[o]=A[o];return a.createElement.apply(null,r)}return a.createElement.apply(null,A)}g.displayName="MDXCreateElement"},97424:(e,t,A)=>{A.r(t),A.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>o});var a=A(87462),l=(A(67294),A(3905));const n={title:"\u4f7f\u7528\u624b\u518c",sidebar_position:1},r=void 0,i={unversionedId:"user_guide/user_manual",id:"version-1.0.0/user_guide/user_manual",title:"\u4f7f\u7528\u624b\u518c",description:"\u7528\u6237\u767b\u5f55",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0.0/user_guide/user_manual.md",sourceDirName:"user_guide",slug:"/user_guide/user_manual",permalink:"/zh-CN/docs/1.0.0/user_guide/user_manual",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.0.0/user_guide/user_manual.md",tags:[],version:"1.0.0",sidebarPosition:1,frontMatter:{title:"\u4f7f\u7528\u624b\u518c",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/1.0.0/sdk/dataproxy-sdk/overview"},next:{title:"\u89e3\u6790 InLongMsg",permalink:"/zh-CN/docs/1.0.0/development/inlong_msg"}},u={},o=[{value:"\u7528\u6237\u767b\u5f55",id:"\u7528\u6237\u767b\u5f55",level:2},{value:"\u6570\u636e\u63a5\u5165",id:"\u6570\u636e\u63a5\u5165",level:2},{value:"\u6570\u636e\u6d41Group \u4fe1\u606f",id:"\u6570\u636e\u6d41group-\u4fe1\u606f",level:3},{value:"\u63a5\u5165\u8981\u6c42",id:"\u63a5\u5165\u8981\u6c42",level:4},{value:"Group \u4fe1\u606f",id:"group-\u4fe1\u606f",level:4},{value:"\u63a5\u5165\u89c4\u6a21",id:"\u63a5\u5165\u89c4\u6a21",level:4},{value:"\u6570\u636e\u6d41",id:"\u6570\u636e\u6d41",level:3},{value:"\u57fa\u7840\u4fe1\u606f",id:"\u57fa\u7840\u4fe1\u606f",level:4},{value:"\u6570\u636e\u6765\u6e90",id:"\u6570\u636e\u6765\u6e90",level:4},{value:"\u6570\u636e\u4fe1\u606f",id:"\u6570\u636e\u4fe1\u606f",level:4},{value:"\u6570\u636e\u6d41\u5411",id:"\u6570\u636e\u6d41\u5411",level:4},{value:"\u6211\u7684\u7533\u8bf7",id:"\u6211\u7684\u7533\u8bf7",level:2},{value:"\u7533\u8bf7\u6570\u636e\u63a5\u5165\u8be6\u60c5",id:"\u7533\u8bf7\u6570\u636e\u63a5\u5165\u8be6\u60c5",level:4},{value:"\u6570\u636e\u6d88\u8d39",id:"\u6570\u636e\u6d88\u8d39",level:2},{value:"\u6d88\u8d39\u4fe1\u606f",id:"\u6d88\u8d39\u4fe1\u606f",level:3}],p={toc:o};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u7528\u6237\u767b\u5f55"},"\u7528\u6237\u767b\u5f55"),(0,l.kt)("p",null,"\u9700\u7cfb\u7edf\u4f7f\u7528\u7528\u6237\u8f93\u5165\u8d26\u53f7\u540d\u79f0\u548c\u5bc6\u7801\uff0c\u9ed8\u8ba4\u8d26\u53f7\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"admin inlong"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"User login",src:A(39187).Z,width:"515",height:"297"})),(0,l.kt)("h2",{id:"\u6570\u636e\u63a5\u5165"},"\u6570\u636e\u63a5\u5165"),(0,l.kt)("p",null,"\u6570\u636e\u63a5\u5165\u6a21\u5757\u5c55\u793a\u76ee\u524d\u7528\u6237\u6743\u9650\u5185\u63a5\u5165\u7cfb\u7edf\u6240\u6709\u4efb\u52a1\u5217\u8868\uff0c\u53ef\u4ee5\u5bf9\u8fd9\u4e9b\u4efb\u52a1\u8be6\u60c5\u67e5\u770b\u3001\u7f16\u8f91\u66f4\u65b0\u548c\u5220\u9664\u64cd\u4f5c\u3002"),(0,l.kt)("p",null,"\u70b9\u51fb\u3010\u65b0\u5efa\u63a5\u5165\u3011\u63a5\u5165\u6d41\u7a0b\uff0c\u6570\u636e\u63a5\u5165\u4fe1\u606f\u586b\u5199\u6709\u4e24\u4e2a\u6b65\u9aa4\uff1aGroup \u4fe1\u606f\u3001\u6570\u636e\u6d41\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Create Group",src:A(93104).Z,width:"1585",height:"492"})),(0,l.kt)("h3",{id:"\u6570\u636e\u6d41group-\u4fe1\u606f"},"\u6570\u636e\u6d41Group \u4fe1\u606f"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Group information",src:A(38978).Z,width:"841",height:"757"})),(0,l.kt)("h4",{id:"\u63a5\u5165\u8981\u6c42"},"\u63a5\u5165\u8981\u6c42"),(0,l.kt)("p",null,"\u63a5\u5165\u8981\u6c42\u9700\u8981\u7528\u6237\u8fdb\u884c\u9009\u62e9\u6d88\u606f\u4e2d\u95f4\u4ef6\uff1a\u9ad8\u541e\u5410\uff08TUBE\uff09\u6216\u8005\u9ad8\u53ef\u9760\uff08PULSAR\uff09\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9ad8\u541e\u5410\uff08InLong TubeMQ\uff09\uff1a\u9ad8\u541e\u5410\u6d88\u606f\u4f20\u8f93\u7ec4\u4ef6\uff0c\u9002\u7528\u4e8e\u65e5\u5fd7\u7c7b\u7684\u6d88\u606f\u4f20\u9012\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u9ad8\u53ef\u9760\uff08Apache Pulsar\uff09\uff1a\u9ad8\u53ef\u9760\u6d88\u606f\u4f20\u8f93\u7ec4\u4ef6\uff0c\u9002\u7528\u4e8e\u8ba1\u8d39\u7b49\u573a\u666f\u3002")),(0,l.kt)("h4",{id:"group-\u4fe1\u606f"},"Group \u4fe1\u606f"),(0,l.kt)("p",null,"\u9700\u8981\u7528\u6237\u5bf9\u63a5\u5165\u4efb\u52a1\u586b\u5199\u57fa\u7840\u6570\u636e\u6d41Group \u4fe1\u606f\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Group \u82f1\u6587\u540d\u79f0\uff1a\u7edf\u4e00\u5c0f\u5199\u82f1\u6587\u540d\u79f0\uff0c\u8bf7\u5c3d\u91cf\u5305\u542b\u4ea7\u54c1\u540d\u548c\u7b80\u6d01\u89c4\u8303\uff0c\u5982pay_base"),(0,l.kt)("li",{parentName:"ul"},"Group \u4e2d\u6587\u540d\u79f0\uff1aGroup \u7684\u4e2d\u6587\u63cf\u8ff0\uff0c\u4fbf\u4e8e\u4f7f\u7528\u4e0e\u68c0\u7d22\uff0c\u6700\u591a128\u4e2a\u5b57"),(0,l.kt)("li",{parentName:"ul"},"Group \u8d23\u4efb\u4eba\uff1a\u81f3\u5c111\u4eba\uff0cGroup \u8d23\u4efb\u4eba\u53ef\u67e5\u770b\u3001\u4fee\u6539Group \u4fe1\u606f\uff0c\u65b0\u589e\u548c\u4fee\u6539\u6240\u6709\u63a5\u5165\u914d\u7f6e\u9879"),(0,l.kt)("li",{parentName:"ul"},"Group \u4ecb\u7ecd\uff1a\u7b80\u77ed\u5bf9\u6b64\u6b21\u63a5\u5165\u4efb\u52a1Group \u80cc\u666f\u548c\u5e94\u7528\u8fdb\u884c\u4ecb\u7ecd\uff1a")),(0,l.kt)("h4",{id:"\u63a5\u5165\u89c4\u6a21"},"\u63a5\u5165\u89c4\u6a21"),(0,l.kt)("p",null,"\u63a5\u5165\u89c4\u6a21\u9700\u8981\u7528\u6237\u9884\u5148\u9488\u5bf9\u63a5\u5165\u6570\u636e\u8fdb\u884c\u89c4\u6a21\u5224\u65ad\uff0c\u4ee5\u4fbf\u540e\u7eed\u5206\u914d\u8ba1\u7b97\u548c\u5b58\u50a8\u8d44\u6e90\u3002"),(0,l.kt)("h3",{id:"\u6570\u636e\u6d41"},"\u6570\u636e\u6d41"),(0,l.kt)("p",null,"\u70b9\u51fb\u3010\u4e0b\u4e00\u6b65\u3011\u8fdb\u5165\u5230\u6570\u636e\u6d41\u4fe1\u606f\u586b\u5199\u6b65\u9aa4\uff0c\u6570\u636e\u6d41\u4fe1\u606f\u586b\u5199\u6709\u56db\u4e2a\u6a21\u5757\uff1a\u57fa\u7840\u4fe1\u606f\u3001\u6570\u636e\u6765\u6e90\u3001\u6570\u636e\u4fe1\u606f\u3001\u6570\u636e\u6d41\u5411\u3002"),(0,l.kt)("p",null,"\u5728\u6570\u636e\u6d41\u6d41\u7a0b\u4e2d\u53ef\u4ee5\u70b9\u51fb\u3010\u65b0\u5efa\u3011\uff0c\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u6570\u636e\u6d41\u4fe1\u606f\u586b\u5199\u9875\u9762\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Create stream",src:A(66994).Z,width:"818",height:"526"})),(0,l.kt)("h4",{id:"\u57fa\u7840\u4fe1\u606f"},"\u57fa\u7840\u4fe1\u606f"),(0,l.kt)("p",null,"\u9700\u7528\u6237\u5bf9\u8be5\u63a5\u5165\u4efb\u52a1\u4e2d\u6570\u636e\u6d41\u7684\u57fa\u7840\u4fe1\u606f\u8fdb\u884c\u586b\u5199\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u6d41ID\uff1a\u524d\u7f00\u6839\u636e\u4ea7\u54c1/\u9879\u76ee\u81ea\u52a8\u751f\u6210\uff0c\u8fd9\u5728\u67d0\u4e2a\u5177\u4f53\u7684\u63a5\u5165\u4e2d\u662f\u552f\u4e00\u7684\uff0c\u4e0e\u6570\u636e\u6e90\u548c\u5165\u5e93\u7684\u8868\u4e2d\u7684\u6570\u636e\u6d41ID\u4fdd\u6301\u4e00\u81f4"),(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u6d41\u540d\u79f0\uff1a\u63a5\u53e3\u4fe1\u606f\u8bf4\u660e\uff0c\u957f\u5ea6\u9650\u5236\u4e3a64\u4e2a\u82f1\u6587\u5b57\u7b26\uff08\u5bf9\u5e9432\u4e2a\u4e2d\u6587\u5b57\u7b26\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u6d41\u8d23\u4efb\u4eba\uff1a\u6570\u636e\u6d41\u8d23\u4efb\u4eba\u53ef\u67e5\u770b\u3001\u4fee\u6539\u6570\u636e\u6d41\u4fe1\u606f\uff0c\u65b0\u589e\u548c\u4fee\u6539\u6240\u6709\u63a5\u5165\u914d\u7f6e\u9879"),(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u6d41\u4ecb\u7ecd\uff1a\u6570\u636e\u6d41\u7b80\u5355\u6587\u672c\u4ecb\u7ecd")),(0,l.kt)("h4",{id:"\u6570\u636e\u6765\u6e90"},"\u6570\u636e\u6765\u6e90"),(0,l.kt)("p",null,"\u9700\u7528\u6237\u9009\u62e9\u8be5\u6570\u636e\u6d41\u7684\u6d88\u606f\u6765\u6e90\uff0c\u76ee\u524d\u652f\u6301\u6587\u4ef6\u3001\u81ea\u4e3b\u63a8\u9001\u4e24\u79cd\u65b9\u5f0f\uff0c\u5e76\u4e14\u53ef\u4ee5\u5728\u9ad8\u7ea7\u9009\u9879\u4e2d\u8865\u5145\u8be5\u6570\u636e\u6765\u6e90\u8be6\u7ec6\u4fe1\u606f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6587\u4ef6\uff1a\u91c7\u96c6\u6570\u636e\u4ee5\u6587\u4ef6\u5f62\u5f0f\u5b58\u653e\uff0c\u91c7\u96c6\u673a\u5668\u90e8\u7f72 InLong Agent\uff0c\u6839\u636e\u5b9a\u5236\u7684\u7b56\u7565\u89c4\u5219\u8fdb\u884c\u8bfb\u53d6"),(0,l.kt)("li",{parentName:"ul"},"\u81ea\u4e3b\u63a8\u9001\uff1a\u901a\u8fc7 SDK \u5411\u6d88\u606f\u4e2d\u95f4\u4ef6\u63a8\u9001\u6570\u636e")),(0,l.kt)("h4",{id:"\u6570\u636e\u4fe1\u606f"},"\u6570\u636e\u4fe1\u606f"),(0,l.kt)("p",null,"\u9700\u7528\u6237\u586b\u5199\u8be5\u6570\u636e\u6d41\u4e2d\u6570\u636e\u76f8\u5173\u4fe1\u606f\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Data info",src:A(95522).Z,width:"1495",height:"460"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u683c\u5f0f\uff1a\u6570\u636e\u6765\u6e90\u683c\u5f0f\uff0c\u662f\u666e\u901a\u6587\u672c\u7c7b\u578b\uff0c\u6216\u8005KV\u952e\u503c\u5bf9\u6570\u636e"),(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u7f16\u7801"),(0,l.kt)("li",{parentName:"ul"},"\u6e90\u5b57\u6bb5\u5206\u9694\u7b26"),(0,l.kt)("li",{parentName:"ul"},"\u6e90\u6570\u636e\u5b57\u6bb5")),(0,l.kt)("h4",{id:"\u6570\u636e\u6d41\u5411"},"\u6570\u636e\u6d41\u5411"),(0,l.kt)("p",null,"\u9700\u7528\u6237\u5bf9\u6b64\u4efb\u52a1\u7684\u6d41\u5411\u7ec8\u6d41\u5411\u8fdb\u884c\u9009\u62e9\uff0c\u6b64\u90e8\u5206\u4e3a\u975e\u5fc5\u586b\u9879\uff0c\u76ee\u524d\u652f\u6301Hive\u548c\u81ea\u4e3b\u63a8\u9001\u4e24\u79cd\uff1a"),(0,l.kt)("p",null,"HIVE\u6d41\u5411\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Hive info",src:A(26988).Z,width:"1187",height:"727"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u76ee\u6807\u5e93\uff1ahive\u6570\u636e\u5e93\u540d\uff08\u9700\u8981\u63d0\u524d\u51c6\u5907\u521b\u5efa\u597d\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u76ee\u6807\u8868\uff1ahive\u8868\u540d"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u7ea7\u5206\u533a\uff1ahive\u6570\u636e\u5212\u5206hdfs\u6570\u636e\u4e00\u7ea7\u5b50\u76ee\u5f55\u7684\u5b57\u6bb5\u540d"),(0,l.kt)("li",{parentName:"ul"},"\u4e8c\u7ea7\u5206\u533a\uff1ahive\u6570\u636e\u5212\u5206hdfs\u6570\u636e\u4e00\u7ea7\u5b50\u76ee\u5f55\u7684\u5b57\u6bb5\u540d"),(0,l.kt)("li",{parentName:"ul"},"\u7528\u6237\u540d\uff1ahiveserver\u8fde\u63a5\u8d26\u6237\u540d"),(0,l.kt)("li",{parentName:"ul"},"\u7528\u6237\u5bc6\u7801\uff1ahiveserver\u8fde\u63a5\u8d26\u5bc6\u7801"),(0,l.kt)("li",{parentName:"ul"},"HDFS url\uff1ahive\u5e95\u5c42hdfs\u8fde\u63a5"),(0,l.kt)("li",{parentName:"ul"},"JDBC url\uff1ahiveserver \u7684jdbcurl"),(0,l.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u76f8\u5173\u4fe1\u606f\uff1a \u6e90\u5b57\u6bb5\u540d\u3001\u6e90\u5b57\u6bb5\u7c7b\u578b\u3001HIVE\u5b57\u6bb5\u540d\u3001HIVE\u5b57\u6bb5\u7c7b\u578b\u3001\u5b57\u6bb5\u63cf\u8ff0\uff0c\u5e76\u652f\u6301\u5220\u9664\u548c\u65b0\u589e\u5b57\u6bb5")),(0,l.kt)("h2",{id:"\u6211\u7684\u7533\u8bf7"},"\u6211\u7684\u7533\u8bf7"),(0,l.kt)("p",null,"\u5ba1\u6279\u7ba1\u7406\u529f\u80fd\u6a21\u5757\u76ee\u524d\u5305\u542b\u4e86\u6211\u7684\u7533\u8bf7\u548c\u6211\u7684\u5ba1\u6279\uff0c\u7ba1\u7406\u7cfb\u7edf\u4e2d\u6570\u636e\u63a5\u5165\u548c\u6570\u636e\u6d88\u8d39\u7533\u8bf7\u5ba1\u6279\u5168\u90e8\u4efb\u52a1\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"My application",src:A(82944).Z,width:"1557",height:"531"})),(0,l.kt)("p",null,"\u5c55\u793a\u76ee\u524d\u7533\u8bf7\u4eba\u5728\u7cfb\u7edf\u4e2d\u6570\u636e\u63a5\u5165\u3001\u6d88\u8d39\u63d0\u4ea4\u7684\u4efb\u52a1\u5217\u8868\uff0c\u70b9\u51fb\u3010\u8be6\u60c5\u3011\u53ef\u4ee5\u67e5\u770b\u76ee\u524d\u8be5\u4efb\u52a1\u57fa\u7840\u4fe1\u548c\u5ba1\u6279\u8fdb\u7a0b\uff1a"),(0,l.kt)("h4",{id:"\u7533\u8bf7\u6570\u636e\u63a5\u5165\u8be6\u60c5"},"\u7533\u8bf7\u6570\u636e\u63a5\u5165\u8be6\u60c5"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Application detail",src:A(32188).Z,width:"1540",height:"748"})),(0,l.kt)("p",null,"\u6570\u636e\u63a5\u5165\u4efb\u52a1\u8be6\u7ec6\u5c55\u793a\u76ee\u524d\u8be5\u7533\u8bf7\u4efb\u52a1\u57fa\u7840\u4fe1\u606f\u5305\u62ec\uff1a\u7533\u8bf7\u4eba\u76f8\u5173\u4fe1\u606f\u3001\u7533\u8bf7\u63a5\u5165\u57fa\u7840\u4fe1\u606f\uff0c\u4ee5\u53ca\u76ee\u524d\u5ba1\u6279\u8fdb\u7a0b\u8282\u70b9\uff1a"),(0,l.kt)("h2",{id:"\u6570\u636e\u6d88\u8d39"},"\u6570\u636e\u6d88\u8d39"),(0,l.kt)("p",null,"\u6570\u636e\u6d88\u8d39\u76ee\u524d\u4e0d\u652f\u6301\u76f4\u63a5\u6d88\u8d39\u63a5\u5165\u6570\u636e\uff0c\u9700\u8d70\u6570\u636e\u5ba1\u6279\u6d41\u7a0b\u540e\u65b9\u53ef\u6b63\u5e38\u6d88\u8d39\u6570\u636e\uff1b \u70b9\u51fb\u3010\u65b0\u5efa\u6d88\u8d39\u3011\uff0c\u8fdb\u5165\u6570\u636e\u6d88\u8d39\u6d41\u7a0b\uff0c\u9700\u8981\u5bf9\u6d88\u8d39\u4fe1\u606f\u76f8\u5173\u4fe1\u606f\u8fdb\u884c\u586b\u5199\uff1a"),(0,l.kt)("h3",{id:"\u6d88\u8d39\u4fe1\u606f"},"\u6d88\u8d39\u4fe1\u606f"),(0,l.kt)("p",null,"\u7533\u8bf7\u4eba\u9700\u5728\u8be5\u4fe1\u606f\u586b\u5199\u6a21\u5757\u4e2d\u9010\u6b65\u586b\u5199\u6570\u636e\u6d88\u8d39\u7533\u8bf7\u76f8\u5173\u57fa\u7840\u6d88\u8d39\u6570\u636e\u6d41Group \u4fe1\u606f\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Consumer info",src:A(87772).Z,width:"799",height:"476"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6d88\u8d39\u7ec4\u540d\u79f0\uff1a\u6d88\u8d39\u8005\u7684\u7b80\u8981\u540d\u79f0\uff0c\u5fc5\u987b\u662f\u5c0f\u5199\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u4e0b\u5212\u7ebf\u7ec4\u6210\uff0c\u6700\u540e\u5ba1\u6279\u4f1a\u6839\u636e\u7b80\u79f0\u62fc\u63a5\u5206\u914d\u51fa\u6d88\u8d39\u8005\u540d\u79f0"),(0,l.kt)("li",{parentName:"ul"},"\u6d88\u8d39\u8d23\u4efb\u4eba\uff1a\u81ea\u884c\u9009\u62e9\u8d23\u4efb\u4eba\uff0c\u5fc5\u987b\u81f3\u5c112\u4eba\uff1b\u8d23\u4efb\u4eba\u53ef\u67e5\u770b\u3001\u4fee\u6539\u6d88\u8d39\u4fe1\u606f"),(0,l.kt)("li",{parentName:"ul"},"\u6d88\u8d39\u76ee\u6807\u6570\u636e\u6d41Group ID\uff1a\u9700\u8981\u9009\u62e9\u6d88\u8d39\u6570\u636e\u7684\u6570\u636e\u6d41Group ID\uff0c\u53ef\u4ee5\u70b9\u51fb\u3010\u67e5\u8be2\u3011\u540e\uff0c\u5728\u5f39\u7a97\u9875\u9762\u4e2d\u9009\u62e9\u5408\u9002\u7684\u6570\u636e\u6d41Group ID\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u7528\u9014\uff1a\u9009\u62e9\u6570\u636e\u4f7f\u7528\u7528\u9014"),(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u7528\u9014\u8bf4\u660e\uff1a\u9700\u7533\u8bf7\u4eba\u6839\u636e\u81ea\u8eab\u6d88\u8d39\u573a\u666f\uff0c\u7b80\u8981\u8bf4\u660e\u4f7f\u7528\u7684\u9879\u76ee\u548c\u6570\u636e\u7684\u7528\u9014")),(0,l.kt)("p",null,"\u4fe1\u606f\u586b\u5b8c\u5b8c\u6210\u540e\uff0c\u70b9\u51fb\u3010\u63d0\u4ea4\u3011\u540e\uff0c\u4f1a\u5c06\u6b21\u6570\u636e\u6d88\u8d39\u6d41\u7a0b\u6b63\u5f0f\u63d0\u4ea4\u5f85\u5ba1\u6279\u4eba\u5ba1\u6279\u540e\u65b9\u53ef\u751f\u6548\u3002"))}d.isMDXComponent=!0},32188:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/application-detail-4f90ef12490d6ec4549b247a063c8273.png"},87772:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/consumer-info-5a734765a66f0a03c96c63b18c0fcd32.png"},93104:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/create-group-cf9e4460a7e932bcf729fa121855da46.png"},66994:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/create-stream-bdefdab10ca2b38ea31ae9d31af71b01.png"},95522:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/data-info-d5cc9ebc39ddbf244ee9bc8f5b4ee2bd.png"},38978:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/group-information-99c9cfafe34bb0d65e0f00693491bedf.png"},26988:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/hive-info-b286d06f2e6f431efc82ec1269bb1eab.png"},82944:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/my-application-e95eda782f1560b6a8bffc14363c16b5.png"},39187:(e,t,A)=>{A.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);