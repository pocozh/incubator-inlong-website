"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[47695],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),g=a,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39358:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"Deployment"},l=void 0,i={unversionedId:"modules/dataproxy/quick_start",id:"version-1.3.0/modules/dataproxy/quick_start",title:"Deployment",description:"All deploying files at inlong-dataproxy directory.",source:"@site/versioned_docs/version-1.3.0/modules/dataproxy/quick_start.md",sourceDirName:"modules/dataproxy",slug:"/modules/dataproxy/quick_start",permalink:"/docs/modules/dataproxy/quick_start",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.3.0/modules/dataproxy/quick_start.md",tags:[],version:"1.3.0",frontMatter:{title:"Deployment"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/modules/dataproxy/overview"},next:{title:"Overview",permalink:"/docs/modules/tubemq/overview"}},s={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Configure InLong-Manager URL",id:"configure-inlong-manager-url",level:3},{value:"run",id:"run",level:2},{value:"check",id:"check",level:2},{value:"Add DataProxy configuration to InLong-Manager",id:"add-dataproxy-configuration-to-inlong-manager",level:2}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"All deploying files at ",(0,a.kt)("inlineCode",{parentName:"p"},"inlong-dataproxy")," directory."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"configure-inlong-manager-url"},"Configure InLong-Manager URL"),(0,a.kt)("p",null,"configuration file: ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/common.properties"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# local IP\nproxy.local.ip=127.0.0.1\n# manager address\nmanager.hosts=127.0.0.1:8083\n# audit proxy address\naudit.proxys=127.0.0.1:10081\n")),(0,a.kt)("h2",{id:"run"},"run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Default using Pulsar to cache data, and the dataproxy-pulsar.conf configuration file is loaded.\nbash +x bin/dataproxy-start.sh\n# or\nbash +x bin/dataproxy-start.sh pulsar\n# If using Inlong TubeMQ to cache data\n# bash +x bin/dataproxy-start.sh tube\n")),(0,a.kt)("h2",{id:"check"},"check"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"telnet 127.0.0.1 46801\n")),(0,a.kt)("h2",{id:"add-dataproxy-configuration-to-inlong-manager"},"Add DataProxy configuration to InLong-Manager"),(0,a.kt)("p",null,"After installing the DataProxy, you need to add the IP of the DataProxy service into the InLong-Manager."),(0,a.kt)("p",null,"Open the Inlong-Dashboard page (the default is ",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1"},"http://127.0.0.1"),"), and select to add a DataProxy cluster on the ","[Clusters]"," tab:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(67054).Z,width:"840",height:"373"})),(0,a.kt)("p",null,"Click the ","[Create]"," button, and fill in the cluster name, cluster label, and responsible person in the pop-up box to save."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: ","[Cluster Tag]"," is a logical concept. Tags with the same name will be regarded as the same cluster."),(0,a.kt)("p",{parentName:"blockquote"},"For example, the DataProxy cluster and the Pulsar cluster with the same cluster tag belong to the same cluster.")),(0,a.kt)("p",null,"Then add nodes to this DataProxy cluster - a DataProxy cluster can support adding multiple nodes:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(27584).Z,width:"840",height:"406"})),(0,a.kt)("p",null,"Just fill in the IP and port of the DataProxy node."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(26331).Z,width:"840",height:"429"})))}p.isMDXComponent=!0},67054:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dp_cluster-9ca83abff697fcd5f31cea7b2a77d893.png"},27584:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dp_cluster_node-600a1dbd2e1cd2b214b46e2630378b31.png"},26331:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dp_cluster_node_save-2f88e25a2d07a7392a4e16a049ce7eb6.png"}}]);