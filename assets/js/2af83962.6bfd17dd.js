"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[62125],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),u=n,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return r?o.createElement(h,i(i({ref:t},p),{},{components:r})):o.createElement(h,i({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},74398:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));const a={title:"Overview",sidebar_position:1},i=void 0,s={unversionedId:"modules/tubemq/overview",id:"version-0.12.0/modules/tubemq/overview",title:"Overview",description:"1 TubeMQ Architecture:",source:"@site/versioned_docs/version-0.12.0/modules/tubemq/overview.md",sourceDirName:"modules/tubemq",slug:"/modules/tubemq/overview",permalink:"/docs/0.12.0/modules/tubemq/overview",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-0.12.0/modules/tubemq/overview.md",tags:[],version:"0.12.0",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"version-0.12.0/tutorialSidebar",previous:{title:"Deployment",permalink:"/docs/0.12.0/modules/dataproxy/quick_start"},next:{title:"Quick Start",permalink:"/docs/0.12.0/modules/tubemq/quick_start"}},l={},c=[{value:"1 TubeMQ Architecture:",id:"1-tubemq-architecture",level:2},{value:"2 Broker File Storage Scheme Improvement:",id:"2-broker-file-storage-scheme-improvement",level:2}],p={toc:c};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"1-tubemq-architecture"},"1 TubeMQ Architecture:"),(0,n.kt)("p",null,"After years of evolution, the TubeMQ cluster is divided into the following 5 parts:\n",(0,n.kt)("img",{src:r(58873).Z,width:"1031",height:"507"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Portal\uff1a")," The Portal part responsible for external interaction and maintenance operations, including API and Web.\nThe API connects to the management system outside the cluster. The Web is a page encapsulation of daily operation\nand maintenance functions based on the API;")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Master\uff1a")," It is responsible for the Control part of the cluster. This part is composed of one or more Master nodes.\nMaster HA performs heartbeat keep-alive and real-time hot standby switching between master nodes (This is the reason\nwhy everyone needs to fill in the addresses of all Master nodes corresponding to the cluster when using TubeMQ Lib).\nThe main master is responsible for managing the status of the entire cluster, resource scheduling, permission\nchecking, metadata query, etc.;")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Broker\uff1a")," The Store part responsible for data storage. This part is composed of independent Broker nodes.\nEach Broker node manages the Topic set in this node, including the addition, deletion, modification, and inquiring\nabout Topics. It is also responsible for message storage, consumption, aging, partition expansion, data consumption\noffset records, etc. On the topic, and the external capabilities of the cluster, including the number of topics,\nthroughput, and capacity, are completed by horizontally expanding the broker node;")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Client\uff1a")," The Client part responsible for data production and consumption. We provide this part in the form of Lib.\nThe most commonly used is the consumer. Compared with the previous, the consumer now supports Push and Pull data pull\nmodes, data consumption behavior support both order and filtered consumption. For the Pull consumption mode, the\nservice supports resetting the precise offset through the client to support the business extract-once consumption.\nAt the same time, the consumer has launched a new cross-cluster switch-free Consumer client;")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"ZooKeeper\uff1a")," Responsible for the ZooKeeper part of the offset storage. This part of the function has been weakened to only the persistent storage of the offset. Considering the next multi-node copy function, this module is temporarily reserved;"))),(0,n.kt)("h2",{id:"2-broker-file-storage-scheme-improvement"},"2 Broker File Storage Scheme Improvement:"),(0,n.kt)("p",null,"Systems that use disks as data persistence media are faced with various system performance problems caused by disk problems. The TubeMQ system is no exception, the performance improvement is largely to solve the problem of how to read, write and store message data. In this regard TubeMQ has made many improvements: storage instances is as the smallest Topic data management unit; each storage instance includes a file storage block and a memory cache block; each Topic can be assigned multiple storage instances. "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"File storage block:")," The disk storage solution of TubeMQ is similar to Kafka, but it is not the same, as shown in the following figure: each file storage block is composed of an index file and a data file; the partiton is a logical partition in the data file; each Topic maintains and manages the file storage block separately, the related mechanisms include the aging cycle, the number of partitions, whether it is readable and writable, etc.\n",(0,n.kt)("img",{src:r(91051).Z,width:"1211",height:"700"}))),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Memory cache block:")," We added a separate memory cache block on the file storage block, that is, add a block of memory to the original write disk to isolate the slow effect of the hard disk. The data is first flushed to the memory cache block, and then the memory cache block is batched flush the data to the disk file.\n",(0,n.kt)("img",{src:r(46593).Z,width:"794",height:"604"}))))}m.isMDXComponent=!0},91051:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/store_file-afacb93118082ca4afc7f0ee3176af70.png"},46593:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/store_mem-05a41b24e2b5e68a769c9236d1e063d4.png"},58873:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/sys_structure-8696e2c7dfebcbe30e47b2d99e185485.png"}}]);