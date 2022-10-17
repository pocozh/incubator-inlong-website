"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[39183],{3905:(t,e,l)=>{l.d(e,{Zo:()=>k,kt:()=>p});var n=l(67294);function r(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function i(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function a(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?i(Object(l),!0).forEach((function(e){r(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function o(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)l=i[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)l=i[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var s=n.createContext({}),d=function(t){var e=n.useContext(s),l=e;return t&&(l="function"==typeof t?t(e):a(a({},e),t)),l},k=function(t){var e=d(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var l=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,k=o(t,["components","mdxType","originalType","parentName"]),c=d(l),p=r,m=c["".concat(s,".").concat(p)]||c[p]||u[p]||i;return l?n.createElement(m,a(a({ref:e},k),{},{components:l})):n.createElement(m,a({ref:e},k))}));function p(t,e){var l=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=l.length,a=new Array(i);a[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,a[1]=o;for(var d=2;d<i;d++)a[d]=l[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,l)}c.displayName="MDXCreateElement"},87883:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=l(87462),r=(l(67294),l(3905));const i={title:"HDFS",sidebar_position:7},a=void 0,o={unversionedId:"data_node/load_node/hdfs",id:"version-1.3.0/data_node/load_node/hdfs",title:"HDFS",description:"\u6982\u89c8",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.0/data_node/load_node/hdfs.md",sourceDirName:"data_node/load_node",slug:"/data_node/load_node/hdfs",permalink:"/zh-CN/docs/data_node/load_node/hdfs",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.3.0/data_node/load_node/hdfs.md",tags:[],version:"1.3.0",sidebarPosition:7,frontMatter:{title:"HDFS",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"HBase",permalink:"/zh-CN/docs/data_node/load_node/hbase"},next:{title:"Hive",permalink:"/zh-CN/docs/data_node/load_node/hive"}},s={},d=[{value:"\u6982\u89c8",id:"\u6982\u89c8",level:2},{value:"\u5982\u4f55\u521b\u5efa HDFS \u52a0\u8f7d\u8282\u70b9",id:"\u5982\u4f55\u521b\u5efa-hdfs-\u52a0\u8f7d\u8282\u70b9",level:2},{value:"SQL API \u7684\u4f7f\u7528",id:"sql-api-\u7684\u4f7f\u7528",level:3},{value:"File Formats",id:"file-formats",level:4},{value:"\u6eda\u52a8\u7b56\u7565",id:"\u6eda\u52a8\u7b56\u7565",level:4},{value:"\u6587\u4ef6\u5408\u5e76",id:"\u6587\u4ef6\u5408\u5e76",level:4},{value:"\u5206\u533a\u63d0\u4ea4",id:"\u5206\u533a\u63d0\u4ea4",level:4},{value:"\u5206\u533a\u63d0\u4ea4\u7b56\u7565",id:"\u5206\u533a\u63d0\u4ea4\u7b56\u7565",level:4}],k={toc:d};function u(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},k,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,r.kt)("p",null,"HDFS \u8fde\u63a5\u5668\u4e3a Flink \u5185\u90e8\u4f9d\u8d56\uff0c\u652f\u6301\u5206\u533a\u6587\u4ef6\u3002\n\u5728 Flink \u4e2d\u5305\u542b\u4e86\u8be5\u6587\u4ef6\u7cfb\u7edf\u8fde\u63a5\u5668\uff0c\u4e0d\u9700\u8981\u6dfb\u52a0\u989d\u5916\u7684\u4f9d\u8d56\u3002\n\u76f8\u5e94\u7684 jar \u5305\u53ef\u4ee5\u5728 Flink \u5de5\u7a0b\u9879\u76ee\u7684 /lib \u76ee\u5f55\u4e0b\u627e\u5230\u3002\n\u4ece\u6587\u4ef6\u7cfb\u7edf\u4e2d\u8bfb\u53d6\u6216\u8005\u5411\u6587\u4ef6\u7cfb\u7edf\u4e2d\u5199\u5165\u884c\u65f6\uff0c\u9700\u8981\u6307\u5b9a\u76f8\u5e94\u7684 format\u3002"),(0,r.kt)("h2",{id:"\u5982\u4f55\u521b\u5efa-hdfs-\u52a0\u8f7d\u8282\u70b9"},"\u5982\u4f55\u521b\u5efa HDFS \u52a0\u8f7d\u8282\u70b9"),(0,r.kt)("h3",{id:"sql-api-\u7684\u4f7f\u7528"},"SQL API \u7684\u4f7f\u7528"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Flink SQL Cli")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE hdfs_load_node (\n  id STRING,\n  name STRING,\n  uv BIGINT,\n  pv BIGINT,\n  dt STRING,\n `hour` STRING\n  ) PARTITIONED BY (dt, `hour`) WITH (\n    'connector'='filesystem-inlong',\n    'path'='...',\n    'format'='orc',\n    'sink.partition-commit.delay'='1 h',\n    'sink.partition-commit.policy.kind'='success-file'\n  );\n")),(0,r.kt)("h4",{id:"file-formats"},"File Formats"),(0,r.kt)("ul",null,(0,r.kt)("li",null,"CSV(\u975e\u538b\u7f29\u683c\u5f0f)"),(0,r.kt)("li",null,"JSON(\u6587\u4ef6\u7cfb\u7edf\u8fde\u63a5\u5668\u7684 JSON format \u4e0e\u4f20\u7edf\u7684\u6807\u51c6\u7684 JSON file \u7684\u4e0d\u540c\uff0c\u800c\u662f\u975e\u538b\u7f29\u7684\u3002\u6362\u884c\u7b26\u5206\u5272\u7684 JSON)"),(0,r.kt)("li",null,"Avro(\u901a\u8fc7\u914d\u7f6e avro.codec \u5c5e\u6027\u652f\u6301\u538b\u7f29)"),(0,r.kt)("li",null,"Parquet(\u4e0e hive \u517c\u5bb9)"),(0,r.kt)("li",null,"Orc(\u4e0e hive \u517c\u5bb9)"),(0,r.kt)("li",null,"Debezium-JSON"),(0,r.kt)("li",null,"Canal-JSON"),(0,r.kt)("li",null,"Raw")),(0,r.kt)("p",null,"\u5907\u6ce8\uff1a\u6587\u4ef6\u683c\u5f0f\u660e\u7ec6\u53ef\u4ee5\u67e5\u770b",(0,r.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-master/zh/docs/connectors/table/formats/overview/"},"Flink Formats")),(0,r.kt)("h4",{id:"\u6eda\u52a8\u7b56\u7565"},"\u6eda\u52a8\u7b56\u7565"),(0,r.kt)("p",null,"\u6570\u636e\u4f1a\u88ab\u52a0\u8f7d\u5230\u6587\u4ef6\u7684\u76ee\u5f55\u4e0b\u7684 part \u6587\u4ef6\u4e2d\uff0c\u6bcf\u4e2a\u5206\u533a\u63a5\u6536\u5230\u6765\u4e4b subtask \u7684\u6570\u636e\u81f3\u5c11\u4f1a\u4e3a\u8be5\u5206\u533a\u751f\u6210\u4e00\u4e2a part \u6587\u4ef6\u3002\u540c\u65f6\u53ef\u4ee5\u914d\u7f6e\u6eda\u52a8\u7b56\u7565\n\u6765\u751f\u6210 part \u6587\u4ef6\uff0c\u751f\u6210 part \u6587\u4ef6\u4f1a\u5c06 in-progress part \u6587\u4ef6\u5173\u95ed\u3002\u8be5\u7b56\u7565\u57fa\u4e8e\u5927\u5c0f\u548c\u6307\u5b9a\u6587\u4ef6\u88ab\u6253\u5f00\u7684\u8d85\u65f6\u65f6\u95f4\u6765\u751f\u6210 part \u6587\u4ef6\u3002"),(0,r.kt)("table",{class:"table table-bordered"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{class:"text-left",style:{width:"10%"}},"\u53c2\u6570"),(0,r.kt)("th",{class:"text-left",style:{width:"7%"}},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{class:"text-left",style:{width:"10%"}},"\u6570\u636e\u7c7b\u578b"),(0,r.kt)("th",{class:"text-left",style:{width:"65%"}},"\u63cf\u8ff0"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"sink.rolling-policy.file-size")),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"128MB"),(0,r.kt)("td",null,"MemorySize"),(0,r.kt)("td",null,"\u6eda\u52a8\u524d part \u6587\u4ef6\u7684\u6700\u5927\u503c\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"sink.rolling-policy.rollover-interval")),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"30 min"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"\u6eda\u52a8\u524d\uff0cpart \u6587\u4ef6\u5904\u4e8e\u6253\u5f00\u72b6\u6001\u7684\u6700\u5927\u65f6\u957f\uff08\u9ed8\u8ba4\u503c30\u5206\u949f\uff0c\u4ee5\u907f\u514d\u4ea7\u751f\u5927\u91cf\u5c0f\u6587\u4ef6\uff09\u3002 \u68c0\u67e5\u9891\u7387\u662f\u7531 'sink.rolling-policy.check-interval' \u5c5e\u6027\u63a7\u5236\u7684\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"sink.rolling-policy.check-interval")),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"1 min"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"\u57fa\u4e8e\u65f6\u95f4\u7684\u6eda\u52a8\u7b56\u7565\u7684\u68c0\u67e5\u95f4\u9694\u3002 \u8be5\u5c5e\u6027\u63a7\u5236\u4e86\u57fa\u4e8e 'sink.rolling-policy.rollover-interval' \u5c5e\u6027\u68c0\u67e5\u6587\u4ef6\u662f\u5426\u8be5\u88ab\u6eda\u52a8\u7684\u68c0\u67e5\u9891\u7387\u3002")))),(0,r.kt)("h4",{id:"\u6587\u4ef6\u5408\u5e76"},"\u6587\u4ef6\u5408\u5e76"),(0,r.kt)("p",null,"\u652f\u6301\u6587\u4ef6\u80fd\u529b\uff0c\u5141\u8bb8\u5728\u8f83\u5c0f\u7684 checkpoint \u4e0b\u4e0d\u4ea7\u751f\u5927\u91cf\u7684\u5c0f\u6587\u4ef6\u3002"),(0,r.kt)("table",{class:"table table-bordered"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{class:"text-left",style:{width:"10%"}},"\u53c2\u6570"),(0,r.kt)("th",{class:"text-left",style:{width:"7%"}},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{class:"text-left",style:{width:"10%"}},"\u6570\u636e\u7c7b\u578b"),(0,r.kt)("th",{class:"text-left",style:{width:"65%"}},"\u63cf\u8ff0"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"auto-compaction")),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"false"),(0,r.kt)("td",null,"Boolean"),(0,r.kt)("td",null,"\u5728\u6d41\u5f0f sink \u4e2d\u662f\u5426\u5f00\u542f\u81ea\u52a8\u5408\u5e76\u529f\u80fd\uff0c\u6570\u636e\u9996\u5148\u4f1a\u88ab\u5199\u5165\u4e34\u65f6\u6587\u4ef6\u3002 \u5f53 checkpoint \u5b8c\u6210\u540e\uff0c\u8be5\u68c0\u67e5\u70b9\u4ea7\u751f\u7684\u4e34\u65f6\u6587\u4ef6\u4f1a\u88ab\u5408\u5e76\uff0c\u8fd9\u4e9b\u4e34\u65f6\u6587\u4ef6\u5728\u5408\u5e76\u524d\u4e0d\u53ef\u89c1\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"compaction.file-size")),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"\u5408\u5e76\u76ee\u6807\u6587\u4ef6\u5927\u5c0f\uff0c\u9ed8\u8ba4\u503c\u4e3a\u6eda\u52a8\u6587\u4ef6\u5927\u5c0f\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"inlong.metric"),(0,r.kt)("td",null,"\u53ef\u9009"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"inlong metric \u7684\u6807\u7b7e\u503c\uff0c\u8be5\u503c\u7684\u6784\u6210\u4e3agroupId&streamId&nodeId\u3002")))),(0,r.kt)("h4",{id:"\u5206\u533a\u63d0\u4ea4"},"\u5206\u533a\u63d0\u4ea4"),(0,r.kt)("p",null,"\u5206\u533a\u6570\u636e\u5199\u5165\u5b8c\u6210\u540e\uff0c\u4e00\u822c\u9700\u8981\u901a\u77e5\u4e0b\u6d41\u5e94\u7528\u3002\u5982\uff1a\u66f4\u65b0 hive \u7684\u5143\u6570\u636e\u4fe1\u606f\u6216\u8005 hdfs \u76ee\u5f55\u751f\u6210 _SUCCESS \u6587\u4ef6\u3002\n\u5206\u533a\u63d0\u4ea4\u7b56\u7565\u662f\u914d\u7f6e\u7684\uff0c\u5206\u533a\u63d0\u4ea4\u884c\u4e3a\u57fa\u4e8e triggers \u548c policies \u7684\u7ec4\u5408\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Trigger :\u5206\u533a\u63d0\u4ea4\u65f6\u673a\u53ef\u4ee5\u57fa\u4e8e\u5206\u533a\u7684 watermark \u6216\u8005\u57fa\u4e8e\u5904\u7406\u65f6\u95f4\uff08process-time\uff09\u3002"),(0,r.kt)("li",{parentName:"ul"},"Policy :\u5206\u533a\u63d0\u4ea4\u7b56\u7565\uff0c\u5185\u7f6e\u7b56\u7565\u5305\u62ec\u63d0\u4ea4 hive \u5143\u6570\u636e\u548c\u751f\u6210 _SUCCESS \u6587\u4ef6\uff0c\u540c\u65f6\u652f\u6301\u81ea\u5b9a\u7b56\u7565\uff0c\u5982\u751f\u6210 hive \u7684\u7edf\u8ba1\u4fe1\u606f\u3001\u5408\u5e76\u5c0f\u6587\u4ef6\u7b49\u3002")),(0,r.kt)("p",null,"\u5907\u6ce8\uff1a\u5206\u533a\u63d0\u4ea4\u4ec5\u652f\u6301\u52a8\u6001\u5206\u533a\u63d2\u5165\u3002"),(0,r.kt)("table",{class:"table table-bordered"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{class:"text-left",style:{width:"10%"}},"\u53c2\u6570"),(0,r.kt)("th",{class:"text-left",style:{width:"7%"}},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{class:"text-left",style:{width:"10%"}},"\u6570\u636e\u7c7b\u578b"),(0,r.kt)("th",{class:"text-left",style:{width:"65%"}},"\u63cf\u8ff0"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"sink.partition-commit.trigger")),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"process-time"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"\u5206\u533a\u63d0\u4ea4\u89e6\u53d1\u5668\u7c7b\u578b\uff1a 'process-time'\uff1a\u57fa\u4e8e\u673a\u5668\u65f6\u95f4\u65e2\u4e0d\u9700\u8981\u5206\u533a\u65f6\u95f4\u63d0\u53d6\u5668\u4e5f\u4e0d\u9700\u8981 watermark \u751f\u6210\u5668\u3002 \u4e00\u65e6 \"\u5f53\u524d\u7cfb\u7edf\u65f6\u95f4\" \u8d85\u8fc7\u4e86 \"\u5206\u533a\u521b\u5efa\u7cfb\u7edf\u65f6\u95f4\" \u548c 'sink.partition-commit.delay' \u4e4b\u548c\u7acb\u5373\u63d0\u4ea4\u5206\u533a\u3002",(0,r.kt)("br",null),"'partition-time'\uff1a\u57fa\u4e8e\u63d0\u53d6\u7684\u5206\u533a\u65f6\u95f4\uff0c\u9700\u8981 watermark \u751f\u6210\u3002\u4e00\u65e6 watermark \u8d85\u8fc7\u4e86 \"\u5206\u533a\u521b\u5efa\u7cfb\u7edf\u65f6\u95f4\" \u548c 'sink.partition-commit.delay' \u4e4b\u548c\u7acb\u5373\u63d0\u4ea4\u5206\u533a\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"sink.partition-commit.delay")),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"0 s"),(0,r.kt)("td",null,"Duration"),(0,r.kt)("td",null,"\u5982\u679c\u8bbe\u7f6e\u5206\u533a\u5ef6\u8fdf\u63d0\u4ea4\uff0c\u8fd9\u4e2a\u5ef6\u8fdf\u65f6\u95f4\u4e4b\u524d\u4e0d\u4f1a\u63d0\u4ea4\u3002\u5929\uff1a'd'\uff1b\u5c0f\u65f6\uff1a'h';\u79d2\uff1a's'\u7b49")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"sink.partition-commit.watermark-time-zone")),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"UTC"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null," \u89e3\u6790 Long \u7c7b\u578b\u7684 watermark \u5230 TIMESTAMP \u7c7b\u578b\u65f6\u6240\u91c7\u7528\u7684\u65f6\u533a\uff0c \u89e3\u6790\u5f97\u5230\u7684 watermark \u7684 TIMESTAMP \u4f1a\u88ab\u7528\u6765\u8ddf\u5206\u533a\u65f6\u95f4\u8fdb\u884c\u6bd4\u8f83\u4ee5\u5224\u65ad\u662f\u5426\u8be5\u88ab\u63d0\u4ea4\u3002 \u8fd9\u4e2a\u5c5e\u6027\u4ec5\u5f53 `sink.partition-commit.trigger` \u88ab\u8bbe\u7f6e\u4e3a 'partition-time' \u65f6\u6709\u6548\u3002 \u5982\u679c\u8fd9\u4e2a\u5c5e\u6027\u8bbe\u7f6e\u7684\u4e0d\u6b63\u786e\uff0c\u4f8b\u5982\u5728 TIMESTAMP_LTZ \u7c7b\u578b\u7684\u5217\u4e0a\u5b9a\u4e49\u4e86 source rowtime\uff0c \u5982\u679c\u6ca1\u6709\u8bbe\u7f6e\u8be5\u5c5e\u6027\uff0c\u90a3\u4e48\u7528\u6237\u53ef\u80fd\u4f1a\u5728\u82e5\u5e72\u4e2a\u5c0f\u65f6\u540e\u624d\u770b\u5230\u5206\u533a\u7684\u63d0\u4ea4\u3002 \u9ed8\u8ba4\u503c\u4e3a 'UTC' \u610f\u5473\u7740 watermark \u662f\u5b9a\u4e49\u5728 TIMESTAMP \u7c7b\u578b\u7684\u5217\u4e0a\u6216\u8005\u6ca1\u6709\u5b9a\u4e49 watermark\u3002 \u5982\u679c watermark \u5b9a\u4e49\u5728 TIMESTAMP_LTZ \u7c7b\u578b\u7684\u5217\u4e0a\uff0cwatermark \u65f6\u533a\u5fc5\u987b\u662f\u4f1a\u8bdd\u65f6\u533a\uff08session time zone\uff09\u3002 \u8be5\u5c5e\u6027\u7684\u53ef\u9009\u503c\u8981\u4e48\u662f\u5b8c\u6574\u7684\u65f6\u533a\u540d\u6bd4\u5982 'America/Los_Angeles'\uff0c\u8981\u4e48\u662f\u81ea\u5b9a\u4e49\u65f6\u533a\uff0c\u4f8b\u5982 'GMT-08:00'\u3002")))),(0,r.kt)("h4",{id:"\u5206\u533a\u63d0\u4ea4\u7b56\u7565"},"\u5206\u533a\u63d0\u4ea4\u7b56\u7565"),(0,r.kt)("p",null,"\u5206\u533a\u63d0\u4ea4\u7b56\u7565\u5b9a\u4e49\u4e86\u5206\u533a\u63d0\u4ea4\u4f7f\u7528\u7684\u5177\u4f53\u7b56\u7565\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"metastore\uff1a\u4ec5\u5728 hive \u65f6\u652f\u6301\u8be5\u7b56\u7565\u3002"),(0,r.kt)("li",{parentName:"ul"},"success: part \u6587\u4ef6\u751f\u6210\u540e\u4f1a\u751f\u6210 '_SUCCESS' \u6587\u4ef6\u3002")),(0,r.kt)("table",{class:"table table-bordered"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{class:"text-left",style:{width:"25%"}},"\u53c2\u6570"),(0,r.kt)("th",{class:"text-left",style:{width:"8%"}},"\u662f\u5426\u5fc5\u987b"),(0,r.kt)("th",{class:"text-center",style:{width:"7%"}},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{class:"text-center",style:{width:"10%"}},"\u6570\u636e\u7c7b\u578b"),(0,r.kt)("th",{class:"text-center",style:{width:"50%"}},"\u63cf\u8ff0"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"sink.partition-commit.policy.kind")),(0,r.kt)("td",null,"\u53ef\u9009"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"\u5206\u533a\u7b56\u7565\u901a\u77e5\u5206\u533a part \u751f\u6210\u53ef\u4ee5\u88ab\u8bbf\u95ee\uff0c\u4ec5 hive \u652f\u6301 metastore \u7b56\u7565\uff0c\u6587\u4ef6\u7cfb\u7edf\u751f\u6210 '_success' \u6587\u4ef6\u8868\u793a\u6587\u4ef6\u5199\u5165\u5b8c\u6210\u3002 \u4e24\u79cd\u7b56\u7565\u7684\u6307\u5b9a\u5206\u522b\u4e3a 'metastore,success-file' \uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 custom \u7684\u6307\u5b9a\u7684\u7c7b\u521b\u5efa\u63d0\u4ea4\u7b56\u7565\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"sink.partition-commit.policy.class")),(0,r.kt)("td",null,"\u53ef\u9009"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"\u5b9e\u73b0 PartitionCommitPolicy \u63a5\u53e3\u7684\u5206\u533a\u63d0\u4ea4\u7b56\u7565\u7c7b\uff0c\u53ea\u6709\u5728 custom \u63d0\u4ea4\u7b56\u7565\u4e0b\u624d\u4f7f\u7528\u8be5\u7c7b\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h5",null,"sink.partition-commit.success-file.name")),(0,r.kt)("td",null,"\u53ef\u9009"),(0,r.kt)("td",{style:{wordWrap:"break-word"}},"_SUCCESS"),(0,r.kt)("td",null,"String"),(0,r.kt)("td",null,"\u4f7f\u7528 success-file \u5206\u533a\u63d0\u4ea4\u7b56\u7565\u65f6\u7684\u6587\u4ef6\u540d\uff0c\u9ed8\u8ba4\u503c\u662f '_SUCCESS'\u3002")))))}u.isMDXComponent=!0}}]);