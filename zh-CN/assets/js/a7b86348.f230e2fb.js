"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[13441],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),k=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=k(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=k(n),c=a,u=m["".concat(p,".").concat(c)]||m[c]||s[c]||l;return n?r.createElement(u,i(i({ref:e},d),{},{components:n})):r.createElement(u,i({ref:e},d))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var k=2;k<l;k++)i[k]=n[k];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13454:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>k});var r=n(87462),a=(n(67294),n(3905));const l={title:"\u5b89\u88c5\u90e8\u7f72",sidebar_position:2},i=void 0,o={unversionedId:"modules/sort/quick_start",id:"version-1.1.0/modules/sort/quick_start",title:"\u5b89\u88c5\u90e8\u7f72",description:"\u914d\u7f6eflink\u8fd0\u884c\u73af\u5883",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.0/modules/sort/quick_start.md",sourceDirName:"modules/sort",slug:"/modules/sort/quick_start",permalink:"/zh-CN/docs/1.1.0/modules/sort/quick_start",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.1.0/modules/sort/quick_start.md",tags:[],version:"1.1.0",sidebarPosition:2,frontMatter:{title:"\u5b89\u88c5\u90e8\u7f72",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/1.1.0/modules/sort/overview"},next:{title:"\u6570\u636e\u6d41\u793a\u4f8b",permalink:"/zh-CN/docs/1.1.0/modules/sort/dataflow_example"}},p={},k=[{value:"\u914d\u7f6eflink\u8fd0\u884c\u73af\u5883",id:"\u914d\u7f6eflink\u8fd0\u884c\u73af\u5883",level:2},{value:"\u51c6\u5907\u5b89\u88c5\u6587\u4ef6",id:"\u51c6\u5907\u5b89\u88c5\u6587\u4ef6",level:2},{value:"\u542f\u52a8inlong-sort\u5e94\u7528",id:"\u542f\u52a8inlong-sort\u5e94\u7528",level:2},{value:"\u5fc5\u8981\u7684\u914d\u7f6e",id:"\u5fc5\u8981\u7684\u914d\u7f6e",level:2},{value:"\u6240\u6709\u652f\u6301\u7684\u914d\u7f6e",id:"\u6240\u6709\u652f\u6301\u7684\u914d\u7f6e",level:2}],d={toc:k};function s(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u914d\u7f6eflink\u8fd0\u884c\u73af\u5883"},"\u914d\u7f6eflink\u8fd0\u884c\u73af\u5883"),(0,a.kt)("p",null,"\u5f53\u524dinlong-sort\u662f\u57fa\u4e8eflink\u7684\u4e00\u4e2a\u5e94\u7528\uff0c\u56e0\u6b64\u8fd0\u884cinlong-sort\u5e94\u7528\u524d\uff0c\u9700\u8981\u51c6\u5907\u597d",(0,a.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/deployment/overview/"},"flink \u73af\u5883"),"\u3002"),(0,a.kt)("p",null,"\u7531\u4e8e\u5f53\u524dinlong-sort\u4f9d\u8d56\u7684\u662fflink1.13.5\u7248\u672c\uff0c\u56e0\u6b64\u5728\u4e0b\u8f7d\u90e8\u7f72\u5305\u65f6\uff0c\u8bf7\u9009\u62e9",(0,a.kt)("inlineCode",{parentName:"p"},"flink-1.13.5-bin-scala_2.11.tgz")),(0,a.kt)("p",null,"flink\u73af\u5883\u914d\u7f6e\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u6d4f\u89c8\u5668\u8bbf\u95eeflink\u7684web ui\uff0c\u5bf9\u5e94\u7684\u5730\u5740\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"/{flink\u90e8\u7f72\u8def\u5f84}/conf/masters"),"\u6587\u4ef6\u4e2d\u7684\u5730\u5740"),(0,a.kt)("h2",{id:"\u51c6\u5907\u5b89\u88c5\u6587\u4ef6"},"\u51c6\u5907\u5b89\u88c5\u6587\u4ef6"),(0,a.kt)("p",null,"\u5b89\u88c5\u6587\u4ef6\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"inlong-sort"),"\u76ee\u5f55\u3002"),(0,a.kt)("h2",{id:"\u542f\u52a8inlong-sort\u5e94\u7528"},"\u542f\u52a8inlong-sort\u5e94\u7528"),(0,a.kt)("p",null,"\u6709\u4e86\u4e0a\u8ff0\u7f16\u8bd1\u9636\u6bb5\u4ea7\u51fa\u7684jar\u5305\u540e\uff0c\u5c31\u53ef\u4ee5\u542f\u52a8inlong-sort\u7684\u5e94\u7528\u4e86\u3002\u63d0\u4ea4\u65b9\u5f0f\u53ef\u4ee5\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/deployment/cli/#submitting-a-job"},"\u5982\u4f55\u63d0\u4ea4flink\u4f5c\u4e1a"),"\u3002"),(0,a.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./bin/flink run -c org.apache.inlong.sort.singletenant.flink.Entrance inlong-sort/sort-[version].jar \\\n--cluster-id debezium2hive --dataflow.info.file /YOUR_DATAFLOW_INFO_DIR/debezium-to-hive.json \\\n--source.type pulsar --sink.type hive --sink.hive.rolling-policy.rollover-interval 60000 \\\n--metrics.audit.proxy.hosts 127.0.0.1:10081 --sink.hive.rolling-policy.check-interval 30000\n")),(0,a.kt)("p",null,"\u6ce8\u610f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"-c org.apache.inlong.sort.singletenant.flink.Entrance")," \u8868\u793amain class name")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"inlong-sort/sort-[version].jar")," \u4e3a\u7f16\u8bd1\u9636\u6bb5\u4ea7\u51fa\u7684jar\u5305"))),(0,a.kt)("h2",{id:"\u5fc5\u8981\u7684\u914d\u7f6e"},"\u5fc5\u8981\u7684\u914d\u7f6e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--cluster-id")," \u7528\u6765\u552f\u4e00\u6807\u8bc6\u4e00\u4e2ainlong-sort\u4f5c\u4e1a\uff0c\u540cinlong-manager\u4e2d",(0,a.kt)("inlineCode",{parentName:"li"},"sort.appName"),"\u914d\u7f6e\u4e00\u81f4"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--dataflow.info.file")," \u6d41\u914d\u7f6e\u6587\u4ef6\u8def\u5f84"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--source.type"),' \u6570\u636e\u6e90\u7684\u79cd\u7c7b, \u5f53\u524d\u652f\u6301\uff1a"pulsar"'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--sink.type"),' \u5b58\u50a8\u7cfb\u7edf\u7684\u79cd\u7c7b\uff0c\u5f53\u524d\u652f\u6301\uff1a"clickhouse"\u3001"hive"\u3001"iceberg"\u3001"kafka"'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--metrics.audit.proxy.hosts")," audit proxy \u5730\u5740\u7528\u4e8e\u4e0a\u62a5\u5ba1\u8ba1\u6307\u6807\u6570\u636e")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u542f\u52a8\u53c2\u6570\u914d\u7f6e\u793a\u4f8b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--cluster-id debezium2kafka-canal --dataflow.info.file /YOUR_DATAFLOW_INFO_DIR/debezium-to-kafka-canal.json \\\n--source.type pulsar --sink.type kafka\n")),(0,a.kt)("h2",{id:"\u6240\u6709\u652f\u6301\u7684\u914d\u7f6e"},"\u6240\u6709\u652f\u6301\u7684\u914d\u7f6e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u540d"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u5fc5\u987b"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"cluster-id"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,a.kt)("td",{parentName:"tr",align:"center"},"NA"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7528\u6765\u552f\u4e00\u6807\u8bc6\u4e00\u4e2ainlong-sort\u4f5c\u4e1a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"source.type"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,a.kt)("td",{parentName:"tr",align:"center"},"NA"),(0,a.kt)("td",{parentName:"tr",align:null},'\u6570\u636e\u6e90\u7684\u79cd\u7c7b, \u5f53\u524d\u652f\u6301"pulsar"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sink.type"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,a.kt)("td",{parentName:"tr",align:"center"},"NA"),(0,a.kt)("td",{parentName:"tr",align:null},'\u5b58\u50a8\u7cfb\u7edf\u7684\u79cd\u7c7b\uff0c\u5f53\u524d\u652f\u6301"clickhouse"\u3001"hive"\u3001"iceberg"\u548c"kafka"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"source.parallelism"),(0,a.kt)("td",{parentName:"tr",align:"center"},"N"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"source\u7684\u5e76\u884c\u5ea6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"deserialization.parallelism"),(0,a.kt)("td",{parentName:"tr",align:"center"},"N"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"deserialization\u7684\u5e76\u884c\u5ea6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"transformation.parallelism"),(0,a.kt)("td",{parentName:"tr",align:"center"},"N"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"transformation\u7684\u5e76\u884c\u5ea6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sink.parallelism"),(0,a.kt)("td",{parentName:"tr",align:"center"},"N"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"sink\u7684\u5e76\u884c\u5ea6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"checkpoint.interval"),(0,a.kt)("td",{parentName:"tr",align:"center"},"N"),(0,a.kt)("td",{parentName:"tr",align:"center"},"600000"),(0,a.kt)("td",{parentName:"tr",align:null},"checkpoint\u95f4\u9694\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"min.pause.between.checkpoints.ms"),(0,a.kt)("td",{parentName:"tr",align:"center"},"N"),(0,a.kt)("td",{parentName:"tr",align:"center"},"500"),(0,a.kt)("td",{parentName:"tr",align:null},"checkpoint\u4e4b\u95f4\u7684\u6700\u5c0f\u95f4\u9694\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"checkpoint.timeout.ms"),(0,a.kt)("td",{parentName:"tr",align:"center"},"N"),(0,a.kt)("td",{parentName:"tr",align:"center"},"600000"),(0,a.kt)("td",{parentName:"tr",align:null},"checkpoint\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sink.field.type.string.nullable"),(0,a.kt)("td",{parentName:"tr",align:"center"},"N"),(0,a.kt)("td",{parentName:"tr",align:"center"},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"string\u7c7b\u578b\u7684sink field\u662f\u5426\u53ef\u4ee5\u4e3a\u7a7a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sink.field.type.int.nullable"),(0,a.kt)("td",{parentName:"tr",align:"center"},"N"),(0,a.kt)("td",{parentName:"tr",align:"center"},"true"),(0,a.kt)("td",{parentName:"tr",align:null},"int\u7c7b\u578b\u7684sink field\u662f\u5426\u53ef\u4ee5\u4e3a\u7a7a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sink.field.type.short.nullable"),(0,a.kt)("td",{parentName:"tr",align:"center"},"N"),(0,a.kt)("td",{parentName:"tr",align:"center"},"true"),(0,a.kt)("td",{parentName:"tr",align:null},"short\u7c7b\u578b\u7684sink field\u662f\u5426\u53ef\u4ee5\u4e3a\u7a7a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sink.field.type.long.nullable"),(0,a.kt)("td",{parentName:"tr",align:"center"},"N"),(0,a.kt)("td",{parentName:"tr",align:"center"},"true"),(0,a.kt)("td",{parentName:"tr",align:null},"long\u7c7b\u578b\u7684sink field\u662f\u5426\u53ef\u4ee5\u4e3a\u7a7a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sink.hive.rolling-policy.file-size"),(0,a.kt)("td",{parentName:"tr",align:"center"},"N"),(0,a.kt)("td",{parentName:"tr",align:"center"},"134217728"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5199hive\u65f6\u7684\u6587\u4ef6\u6eda\u52a8\u5927\u5c0f\uff0c\u5355\u4f4d\uff1a\u5b57\u8282")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sink.hive.rolling-policy.rollover-interval"),(0,a.kt)("td",{parentName:"tr",align:"center"},"N"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1800000"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5199hive\u65f6\u7684\u6587\u4ef6\u6eda\u52a8\u65f6\u95f4\u95f4\u9694\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sink.hive.rolling-policy.check-interval"),(0,a.kt)("td",{parentName:"tr",align:"center"},"N"),(0,a.kt)("td",{parentName:"tr",align:"center"},"60000"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5199hive\u65f6\u7684\u6587\u4ef6\u6eda\u52a8\u68c0\u67e5\u95f4\u9694\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2")))))}s.isMDXComponent=!0}}]);