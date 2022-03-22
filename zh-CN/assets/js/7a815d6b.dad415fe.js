"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4495],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},49772:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],c={title:"\u5b89\u88c5\u90e8\u7f72",sidebar_position:2},s=void 0,u={unversionedId:"modules/website/quick_start",id:"version-0.12.0/modules/website/quick_start",title:"\u5b89\u88c5\u90e8\u7f72",description:"\u51c6\u5907\u955c\u50cf",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.12.0/modules/website/quick_start.md",sourceDirName:"modules/website",slug:"/modules/website/quick_start",permalink:"/zh-CN/docs/0.12.0/modules/website/quick_start",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/versioned_docs/version-0.12.0/modules/website/quick_start.md",tags:[],version:"0.12.0",sidebarPosition:2,frontMatter:{title:"\u5b89\u88c5\u90e8\u7f72",sidebar_position:2},sidebar:"version-0.12.0/tutorialSidebar",previous:{title:"\u6982\u89c8",permalink:"/zh-CN/docs/0.12.0/modules/website/overview"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/0.12.0/sdk/dataproxy-sdk/overview"}},l={},p=[{value:"\u51c6\u5907\u955c\u50cf",id:"\u51c6\u5907\u955c\u50cf",level:2},{value:"\u8fd0\u884c",id:"\u8fd0\u884c",level:2}],d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u51c6\u5907\u955c\u50cf"},"\u51c6\u5907\u955c\u50cf"),(0,i.kt)("p",null,"\u4ece\u4ed3\u5e93\u62c9\u8d77\u6700\u65b0\u955c\u50cf\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker pull inlong/website:latest\n")),(0,i.kt)("p",null,"\u6216\u8005\u4ece\u6e90\u7801\u7f16\u8bd1\u955c\u50cf\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mvn package -DskipTests -Pdocker -pl inlong-website\n")),(0,i.kt)("h2",{id:"\u8fd0\u884c"},"\u8fd0\u884c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# MANAGER_API_ADDRESS \u73af\u5883\u53d8\u91cf \u4f7f\u7528inlong-manager-web \u90e8\u7f72\u5730\u5740\u66ff\u6362\ndocker run -d --name website -e MANAGER_API_ADDRESS=127.0.0.1:8083 -p 80:80 inlong/website\n")))}f.isMDXComponent=!0}}]);