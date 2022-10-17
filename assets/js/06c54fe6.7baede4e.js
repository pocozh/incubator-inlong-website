"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[89701],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,f=m["".concat(i,".").concat(d)]||m[d]||c[d]||o;return t?a.createElement(f,l(l({ref:n},u),{},{components:t})):a.createElement(f,l({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},69326:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const o={title:"Example",sidebar_position:3},l=void 0,s={unversionedId:"modules/sort/example",id:"version-1.3.0/modules/sort/example",title:"Example",description:"Overview",source:"@site/versioned_docs/version-1.3.0/modules/sort/example.md",sourceDirName:"modules/sort",slug:"/modules/sort/example",permalink:"/docs/modules/sort/example",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.3.0/modules/sort/example.md",tags:[],version:"1.3.0",sidebarPosition:3,frontMatter:{title:"Example",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Deployment",permalink:"/docs/modules/sort/quick_start"},next:{title:"Monitor Metrics",permalink:"/docs/modules/sort/metrics"}},i={},p=[{value:"Overview",id:"overview",level:2},{value:"Environment Requirements",id:"environment-requirements",level:2},{value:"Prepare InLong Sort And Connectors",id:"prepare-inlong-sort-and-connectors",level:2},{value:"Usage for SQL API",id:"usage-for-sql-api",level:2},{value:"MySQL to Kafka",id:"mysql-to-kafka",level:3},{value:"Kafka to Hive",id:"kafka-to-hive",level:3},{value:"Usage for Dashboard",id:"usage-for-dashboard",level:2},{value:"Usage for Manager Client Tools",id:"usage-for-manager-client-tools",level:2}],u={toc:p};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"To make it easier for you to create InLong Sort jobs, here we list some data stream configuration examples.\nThe following will introduce SQL, Dashboard, Manager Client Tools methods to use Inlong Sort."),(0,r.kt)("h2",{id:"environment-requirements"},"Environment Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JDK 1.8.x"),(0,r.kt)("li",{parentName:"ul"},"Flink 1.13.5"),(0,r.kt)("li",{parentName:"ul"},"MySQL"),(0,r.kt)("li",{parentName:"ul"},"Kafka"),(0,r.kt)("li",{parentName:"ul"},"Hadoop"),(0,r.kt)("li",{parentName:"ul"},"Hive 3.x")),(0,r.kt)("h2",{id:"prepare-inlong-sort-and-connectors"},"Prepare InLong Sort And Connectors"),(0,r.kt)("p",null,"You can prepare InLong Sort and Data Node Connectors by referring to ",(0,r.kt)("a",{parentName:"p",href:"/docs/modules/sort/quick_start"},"Deployment Guide"),"."),(0,r.kt)("h2",{id:"usage-for-sql-api"},"Usage for SQL API"),(0,r.kt)("p",null,"This example defines the data flow for a single table(mysql--\x3ekafka--\x3ehive). "),(0,r.kt)("h3",{id:"mysql-to-kafka"},"MySQL to Kafka"),(0,r.kt)("p",null,"Single table sync example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./bin/flink run -c org.apache.inlong.sort.Entrance FLINK_HOME/lib/sort-dist-[version].jar \\\n--sql.script.file /YOUR_SQL_SCRIPT_DIR/mysql-to-kafka.sql\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"mysql-to-kafka.sql")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `table_1`(\n    PRIMARY KEY (`id`) NOT ENFORCED,\n    `id` BIGINT,\n    `name` STRING,\n    `age` INT,\n    `salary` FLOAT,\n    `ts` TIMESTAMP(2),\n    `event_type` STRING)\n    WITH (\n    'append-mode' = 'true',\n    'connector' = 'mysql-cdc-inlong',\n    'hostname' = 'localhost',\n    'username' = 'root',\n    'password' = 'password',\n    'database-name' = 'dbName',\n    'table-name' = 'tableName'\n);\n\nCREATE TABLE `table_2`(\n    `id` BIGINT,\n    `name` STRING,\n    `age` INT,\n    `salary` FLOAT,\n    `ts` TIMESTAMP(2))\n    WITH (\n    'topic' = 'topicName',-- Your kafka topic\n    'properties.bootstrap.servers' = 'localhost:9092',\n    'connector' = 'kafka',\n    'json.timestamp-format.standard' = 'SQL',\n    'json.encode.decimal-as-plain-number' = 'true',\n    'json.map-null-key.literal' = 'null',\n    'json.ignore-parse-errors' = 'true',\n    'json.map-null-key.mode' = 'DROP',\n    'format' = 'json',\n    'json.fail-on-missing-field' = 'false'\n);\n\nINSERT INTO `table_2` \n    SELECT \n    `id` AS `id`,\n    `name` AS `name`,\n    `age` AS `age`,\n    CAST(NULL as FLOAT) AS `salary`,\n    `ts` AS `ts`\n    FROM `table_1`;\n\n")),(0,r.kt)("h3",{id:"kafka-to-hive"},"Kafka to Hive"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:"),"  First you need to create user table in Hive."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./bin/flink run -c org.apache.inlong.sort.Entrance FLINK_HOME/lib/sort-dist-[version].jar \\\n--sql.script.file /YOUR_SQL_SCRIPT_DIR/kafka-to-hive.sql\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"kafka-to-hive.sql")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `table_1`(\n    `id` BIGINT,\n    `name` STRING,\n    `age` INT,\n    `salary` FLOAT,\n    `ts` TIMESTAMP(2)\n    WITH (\n    'topic' = 'topicName',-- Your kafka topic\n    'properties.bootstrap.servers' = 'localhost:9092',\n    'connector' = 'kafka',\n    'scan.startup.mode' = 'earliest-offset',\n    'json.timestamp-format.standard' = 'SQL',\n    'json.encode.decimal-as-plain-number' = 'true',\n    'json.map-null-key.literal' = 'null',\n    'json.ignore-parse-errors' = 'true',\n    'json.map-null-key.mode' = 'DROP',\n    'format' = 'json',\n    'json.fail-on-missing-field' = 'false',\n    'properties.group.id' = 'groupId'-- Your group id\n);\n\nCREATE TABLE `user`(\n    `id` BIGINT,\n    `name` STRING,\n    `age` INT,\n    `salary` FLOAT,\n    `ts` TIMESTAMP(9))\n    WITH (\n    'connector' = 'hive',\n    'default-database' = 'default',\n    'hive-version' = '3.1.2',\n    'hive-conf-dir' = 'hdfs://ip:9000/.../hive-site.xml' -- Put your hive-site.xml into HDFS\n);\n\nINSERT INTO `user` \n    SELECT \n    `id` AS `id`,\n    `name` AS `name`,\n    `age` AS `age`,\n    CAST(NULL as FLOAT) AS `salary`,\n    `ts` AS `ts`\n    FROM `table_1`;\n\n")),(0,r.kt)("p",null,"Note: Of course you can also put all the SQL in one file."),(0,r.kt)("h2",{id:"usage-for-dashboard"},"Usage for Dashboard"),(0,r.kt)("p",null,"The underlying capabilities are already available and will complement the Dashboard capabilities in the future."),(0,r.kt)("h2",{id:"usage-for-manager-client-tools"},"Usage for Manager Client Tools"),(0,r.kt)("p",null,"TODO: It will be supported in the future."))}c.isMDXComponent=!0}}]);