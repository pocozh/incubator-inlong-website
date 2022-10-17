"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[84872],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),d=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=d(t.components);return n.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),g=d(a),m=r,c=g["".concat(s,".").concat(m)]||g[m]||p[m]||l;return a?n.createElement(c,i(i({ref:e},u),{},{components:a})):n.createElement(c,i({ref:e},u))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},85162:(t,e,a)=>{a.d(e,{Z:()=>i});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function i(t){let{children:e,hidden:a,className:i}=t;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},e)}},65488:(t,e,a)=>{a.d(e,{Z:()=>m});var n=a(87462),r=a(67294),l=a(86010),i=a(72389),o=a(67392),s=a(7094),d=a(12466);const u="tabList__CuJ",p="tabItem_LNqP";function g(t){var e;const{lazy:a,block:i,defaultValue:g,values:m,groupId:c,className:k}=t,h=r.Children.map(t.children,(t=>{if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=m??h.map((t=>{let{props:{value:e,label:a,attributes:n}}=t;return{value:e,label:a,attributes:n}})),b=(0,o.l)(N,((t,e)=>t.value===e.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===g?g:g??(null==(e=h.find((t=>t.props.default)))?void 0:e.props.value)??h[0].props.value;if(null!==f&&!N.some((t=>t.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${N.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:y}=(0,s.U)(),[w,L]=(0,r.useState)(f),I=[],{blockElementScrollPositionUntilNextRender:S}=(0,d.o5)();if(null!=c){const t=v[c];null!=t&&t!==w&&N.some((e=>e.value===t))&&L(t)}const x=t=>{const e=t.currentTarget,a=I.indexOf(e),n=N[a].value;n!==w&&(S(e),L(n),null!=c&&y(c,String(n)))},T=t=>{var e;let a=null;switch(t.key){case"ArrowRight":{const e=I.indexOf(t.currentTarget)+1;a=I[e]??I[0];break}case"ArrowLeft":{const e=I.indexOf(t.currentTarget)-1;a=I[e]??I[I.length-1];break}}null==(e=a)||e.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},k)},N.map((t=>{let{value:e,label:a,attributes:i}=t;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:t=>I.push(t),onKeyDown:T,onFocus:x,onClick:x},i,{className:(0,l.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":w===e})}),a??e)}))),a?(0,r.cloneElement)(h.filter((t=>t.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==w})))))}function m(t){const e=(0,i.Z)();return r.createElement(g,(0,n.Z)({key:String(e)},t))}},85755:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),l=a(65488),i=a(85162);const o={title:"InLong Introduction",sidebar_position:1},s=void 0,d={unversionedId:"introduction",id:"version-1.3.0/introduction",title:"InLong Introduction",description:"InLong (\u5e94\u9f99) is a divine beast in Chinese mythology who guides the river into the sea,",source:"@site/versioned_docs/version-1.3.0/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/docs/introduction",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.3.0/introduction.md",tags:[],version:"1.3.0",sidebarPosition:1,frontMatter:{title:"InLong Introduction",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Basic Concept",permalink:"/docs/design_and_concept/basic_concept"}},u={},p=[{value:"About InLong",id:"about-inlong",level:2},{value:"Features",id:"features",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Modules",id:"modules",level:2},{value:"Supported Data Nodes (Updating)",id:"supported-data-nodes-updating",level:2}],g={toc:p};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},g,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"InLong (\u5e94\u9f99) is a divine beast in Chinese mythology who guides the river into the sea,\nand it is regarded as a metaphor of the InLong system for reporting data streams.")),(0,r.kt)("h2",{id:"about-inlong"},"About InLong"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://inlong.apache.org"},"Apache InLong")," is a one-stop integration framework for massive data ,it provides automatic, safe, reliable, and high-performance data transmission capabilities to\nfacilitate the construction of streaming-based data analysis, modeling, and applications. The Apache InLong project was originally called TubeMQ, focusing on high-performance,\nlow-cost message queuing services. To further release the surrounding ecological capabilities of TubeMQ, the community upgraded the project to InLong, focusing on creating a one-stop integration framework for massive data.\nApache InLong relies on 10 trillion-level data ingestion and processing capabilities to integrate the entire process of data collection, aggregation, storage, and sorting data processing. It is simple, flexible, stable, and reliable.\nThe project was initially donated to the Apache incubator by the Tencent Big Data team in November 2019 and officially graduated as an Apache top-level project in June 2022. Currently, InLong is widely used in various industries such as advertising,\npayment, social networking, games, artificial intelligence, etc., to provide efficient and convenient customer services in multiple fields."),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ease of Use"),(0,r.kt)("p",{parentName:"li"},"InLong is a SaaS-based service platform. Users can easily and quickly report, transfer, and distribute data by publishing and subscribing to data based on topics.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Stability & Reliability"),(0,r.kt)("p",{parentName:"li"},"InLong is derived from the actual online production environment. It delivers high-performance processing capabilities for 100 trillion-level data streams and highly reliable services for 100 billion-level data streams.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Comprehensive Features"),(0,r.kt)("p",{parentName:"li"},"InLong supports various types of data access methods and can be integrated with different types of Message Queue (MQ). It also provides real-time data extract, transform, and load (ETL) and sorting capabilities based on rules. InLong also allows users to plug features to extend system capabilities.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Service Integration"),(0,r.kt)("p",{parentName:"li"},"InLong provides unified system monitoring and alert services. It provides fine-grained metrics to facilitate data visualization. Users can view the running status of queues and topic-based data statistics in a unified data metric platform. Users can also configure the alert service based on their business requirements so that users can be alerted when errors occur.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Scalability"),(0,r.kt)("p",{parentName:"li"},"InLong adopts a pluggable architecture that allows you to plug modules into the system based on specific protocols. Users can replace components and add features based on their business requirements."))),(0,r.kt)("h2",{id:"architecture"},"Architecture"),(0,r.kt)(l.Z,{defaultValue:"standard",values:[{label:"Standard",value:"standard"},{label:"Lightweight",value:"lightweight"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"standard",mdxType:"TabItem"},(0,r.kt)("img",{src:"/img/inlong-structure-en.png",align:"center",alt:"Apache InLong"})),(0,r.kt)(i.Z,{value:"lightweight",mdxType:"TabItem"},(0,r.kt)("img",{src:"/img/inlong-structure-light.png",align:"center",style:{objectFit:"cover",height:"460px",width:"860px"},alt:"Apache InLong"}))),(0,r.kt)("h2",{id:"modules"},"Modules"),(0,r.kt)("p",null,"Apache InLong serves the entire life cycle from data collection to landing,  and provides different processing modules according to different stages of data,  including the next modules:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"inlong-agent"),",  data collection agent, supports reading regular logs from specified directories or files and reporting data one by one.  In the future,  DB collection capabilities will also be expanded."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"inlong-dataproxy"),",  a Proxy component based on Flume-ng,  supports data transmission blocking,  placing retransmission, and has the ability to forward received data to different MQ (message queues)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"inlong-tubemq"),",  Tencent's self-developed message queuing service,  focuses on high-performance storage and transmission of massive data in big data scenarios and has a relatively good core advantage in mass practice and low cost."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"inlong-sort"),",  after consuming data from different MQ services,  perform ETL processing,  and then aggregate and write the data into Apache Hive, ClickHouse,  Hbase,  IceBerg,  etc."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"inlong-manager"),", provides complete data service management and control capabilities,  including metadata,  OpenAPI,  task flow,  authority,  etc."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"inlong-dashboard"),", a front-end page for managing data access,  simplifying the use of the entire InLong control platform."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"inlong-audit"),", performs real-time audit and reconciliation on the incoming and outgoing traffic of the Agent, DataProxy, and Sort modules of the InLong system.")),(0,r.kt)("h2",{id:"supported-data-nodes-updating"},"Supported Data Nodes (Updating)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Architecture"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Extract Node"),(0,r.kt)("td",{parentName:"tr",align:null},"Auto Push"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"File"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Kafka"),(0,r.kt)("td",{parentName:"tr",align:null},"2.x"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"MySQL"),(0,r.kt)("td",{parentName:"tr",align:null},"5.6, 5.7, 8.0.x"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"MongoDB"),(0,r.kt)("td",{parentName:"tr",align:null},">= 3.6"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Oracle"),(0,r.kt)("td",{parentName:"tr",align:null},"11,12,19"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"PostgreSQL"),(0,r.kt)("td",{parentName:"tr",align:null},"9.6, 10, 11, 12"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Pulsar"),(0,r.kt)("td",{parentName:"tr",align:null},"2.8.x"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"SQLServer"),(0,r.kt)("td",{parentName:"tr",align:null},"2012, 2014, 2016, 2017, 2019"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Load Node"),(0,r.kt)("td",{parentName:"tr",align:null},"Auto Consumption"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Hive"),(0,r.kt)("td",{parentName:"tr",align:null},"1.x, 2.x, 3.x"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Iceberg"),(0,r.kt)("td",{parentName:"tr",align:null},"0.12.x"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"ClickHouse"),(0,r.kt)("td",{parentName:"tr",align:null},"20.7+"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Kafka"),(0,r.kt)("td",{parentName:"tr",align:null},"2.x"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"HBase"),(0,r.kt)("td",{parentName:"tr",align:null},"2.2.x"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"PostgreSQL"),(0,r.kt)("td",{parentName:"tr",align:null},"9.6, 10, 11, 12"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Oracle"),(0,r.kt)("td",{parentName:"tr",align:null},"11, 12, 19"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"MySQL"),(0,r.kt)("td",{parentName:"tr",align:null},"5.6, 5.7, 8.0.x"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"TDSQL-PostgreSQL"),(0,r.kt)("td",{parentName:"tr",align:null},"10.17"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Greenplum"),(0,r.kt)("td",{parentName:"tr",align:null},"4.x, 5.x, 6.x"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Elasticsearch"),(0,r.kt)("td",{parentName:"tr",align:null},"6.x, 7.x"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"SQLServer"),(0,r.kt)("td",{parentName:"tr",align:null},"2012, 2014, 2016, 2017, 2019"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"HDFS"),(0,r.kt)("td",{parentName:"tr",align:null},"2.x, 3.x"),(0,r.kt)("td",{parentName:"tr",align:null},"Lightweight, Standard")))))}m.isMDXComponent=!0}}]);