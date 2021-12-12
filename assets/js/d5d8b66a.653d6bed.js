"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3132],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,b=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return r?n.createElement(b,o(o({ref:t},s),{},{components:r})):n.createElement(b,o({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},58251:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],u={title:"Deployment"},l=void 0,c={unversionedId:"modules/tubemq/tubemq-manager/quick_start",id:"modules/tubemq/tubemq-manager/quick_start",isDocsHomePage:!1,title:"Deployment",description:"1 Deploy TubeMQ Manager",source:"@site/docs/modules/tubemq/tubemq-manager/quick_start.md",sourceDirName:"modules/tubemq/tubemq-manager",slug:"/modules/tubemq/tubemq-manager/quick_start",permalink:"/docs/next/modules/tubemq/tubemq-manager/quick_start",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/docs/modules/tubemq/tubemq-manager/quick_start.md",tags:[],version:"current",frontMatter:{title:"Deployment"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/next/modules/tubemq/tubemq-manager/overview"},next:{title:"client partition assign",permalink:"/docs/next/modules/tubemq/client_partition_assign_introduction"}},s=[{value:"1 Deploy TubeMQ Manager",id:"1-deploy-tubemq-manager",children:[{value:"1.1 configuration",id:"11-configuration",children:[]},{value:"1.2 start service",id:"12-start-service",children:[]},{value:"1.3 register TubeMQ cluster",id:"13-register-tubemq-cluster",children:[]}]}],m={toc:s};function p(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-deploy-tubemq-manager"},"1 Deploy TubeMQ Manager"),(0,i.kt)("p",null,"All deploying files at ",(0,i.kt)("inlineCode",{parentName:"p"},"inlong-tubemq-manager")," directory."),(0,i.kt)("h3",{id:"11-configuration"},"1.1 configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"create ",(0,i.kt)("inlineCode",{parentName:"li"},"tubemanager")," and account in MySQL."),(0,i.kt)("li",{parentName:"ul"},"Add mysql information in conf/application.properties:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"# mysql configuration for manager\nspring.datasource.url=jdbc:mysql://mysql_ip:mysql_port/tubemanager\nspring.datasource.username=mysql_username\nspring.datasource.password=mysql_password\n")),(0,i.kt)("h3",{id:"12-start-service"},"1.2 start service"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ bin/start-manager.sh \n")),(0,i.kt)("h3",{id:"13-register-tubemq-cluster"},"1.3 register TubeMQ cluster"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"vim bin/init-tube-cluster.sh\n")),(0,i.kt)("p",null,"replace the parameters below"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"TUBE_MANAGER_IP=  \nTUBE_MANAGER_PORT=   \nTUBE_MASTER_IP=   \nTUBE_MASTER_PORT=\nTUBE_MASTER_WEB_PORT=\nTUBE_MASTER_TOKEN=\n")),(0,i.kt)("p",null,"then run\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sh bin/init-tube-cluster.sh\n")),(0,i.kt)("p",null,"this will create a cluster with id = 1, note that this operation should not be executed repeatedly."))}p.isMDXComponent=!0}}]);