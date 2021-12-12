"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[926],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},22606:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],u={title:"Overview"},l=void 0,s={unversionedId:"modules/tubemq/tubemq-manager/overview",id:"modules/tubemq/tubemq-manager/overview",isDocsHomePage:!1,title:"Overview",description:"Operation interface",source:"@site/docs/modules/tubemq/tubemq-manager/overview.md",sourceDirName:"modules/tubemq/tubemq-manager",slug:"/modules/tubemq/tubemq-manager/overview",permalink:"/docs/next/modules/tubemq/tubemq-manager/overview",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/docs/modules/tubemq/tubemq-manager/overview.md",tags:[],version:"current",frontMatter:{title:"Overview"},sidebar:"tutorialSidebar",previous:{title:"Consumer Example",permalink:"/docs/next/modules/tubemq/consumer_example"},next:{title:"Deployment",permalink:"/docs/next/modules/tubemq/tubemq-manager/quick_start"}},c=[],p={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Operation interface"),(0,o.kt)("h4",{id:"cluster"},"cluster"),(0,o.kt)("p",null,"Query full data of clusterId and clusterName (get)"),(0,o.kt)("p",null,"Example"),(0,o.kt)("p",null,"\u3010GET\u3011 /v1/cluster"),(0,o.kt)("p",null,"return value"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n"errMsg": "",\n"errCode": 0,\n"result": true,\n"data": "[{\\"clusterId\\":1,\\"clusterName\\":\\"1124\\", \\"masterIp\\":\\"127.0.0.1\\"}]"\n}\n')),(0,o.kt)("h4",{id:"topic"},"topic"),(0,o.kt)("h5",{id:"add-topictask"},"add topicTask"),(0,o.kt)("p",null,"parameter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"type     (required) request type, fill in the field: op_query\nclusterId   (required) Request cluster id\naddTopicTasks (required) topicTasks, create task task json\nuser    (required) After the access authorization verification needs to verify the user, it is reserved here\n")),(0,o.kt)("p",null,"addTopicTasks currently only includes one field as topicName\nAfter accessing the region design, a new region field will be added to represent brokers in different regions\nCurrently an addTopicTask will create topics in all brokers in the cluster"),(0,o.kt)("p",null,"AddTopicTasks is a list of the following objects, which can carry multiple create topic requests"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"topicName (required) topic name\n")),(0,o.kt)("p",null,"Example"),(0,o.kt)("p",null,"\u3010POST\u3011 /v1/task?method=addTopicTask"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n"clusterId": "1",\n"addTopicTasks": [{"topicName": "1"}],\n"user": "test"\n}\n')),(0,o.kt)("p",null,"return json"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n"errMsg": "There are topic tasks [a12322] already in adding status",\n"errCode": 200,\n"result": false,\n"data": ""\n}\n')),(0,o.kt)("p",null,"If result is false, the writing task failed"),(0,o.kt)("h5",{id:"query-whether-a-topic-is-successfully-created-business-can-be-written"},"Query whether a topic is successfully created (business can be written)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"clusterId   (Required) Request cluster id\ntopicName   (Required) Query topic name\nuser    (Required) After the access authorization verification needs to verify the user, it is reserved here\n")),(0,o.kt)("p",null,"example"),(0,o.kt)("p",null,"\u3010POST\u3011 /v1/topic?method=queryCanWrite"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n"clusterId": "1",\n"topicName": "1",\n"user": "test"\n}\n')),(0,o.kt)("p",null,"return json"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{ "result":true, "errCode":0, "errMsg":"OK", }\n{ "result":false, "errCode": 100, "errMsg":"topic test is not writable"}\n{ "result":false, "errCode": 101, "errMsg":"no such topic in master"}\n')),(0,o.kt)("p",null,"result is false as not writable"))}d.isMDXComponent=!0}}]);