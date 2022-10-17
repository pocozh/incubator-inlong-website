"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[96450],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),g=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=g(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=g(t),u=o,h=d["".concat(s,".").concat(u)]||d[u]||p[u]||a;return t?r.createElement(h,i(i({ref:n},c),{},{components:t})):r.createElement(h,i({ref:n},c))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var g=2;g<a;g++)i[g]=t[g];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},40014:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>g});var r=t(87462),o=(t(67294),t(3905));const a={title:"Build && Deployment"},i=void 0,l={unversionedId:"modules/agent/quick_start",id:"version-0.11.0/modules/agent/quick_start",title:"Build && Deployment",description:"1\u3001Configuration",source:"@site/versioned_docs/version-0.11.0/modules/agent/quick_start.md",sourceDirName:"modules/agent",slug:"/modules/agent/quick_start",permalink:"/docs/0.11.0/modules/agent/quick_start",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-0.11.0/modules/agent/quick_start.md",tags:[],version:"0.11.0",frontMatter:{title:"Build && Deployment"},sidebar:"version-0.11.0/tutorialSidebar",previous:{title:"Architecture",permalink:"/docs/0.11.0/modules/agent/architecture"},next:{title:"Architecture",permalink:"/docs/0.11.0/modules/dataproxy/architecture"}},s={},g=[{value:"1\u3001Configuration",id:"1configuration",level:2},{value:"Agent configuration",id:"agent-configuration",level:3},{value:"2\u3001run",id:"2run",level:2},{value:"3\u3001Add job configuration in real time",id:"3add-job-configuration-in-real-time",level:2},{value:"3.1 agent.properties Modify the following two places",id:"31-agentproperties-modify-the-following-two-places",level:4},{value:"3.2 Execute the following command",id:"32-execute-the-following-command",level:4},{value:"4\u3001eg for directory config",id:"4eg-for-directory-config",level:2},{value:"5. Support to get data time from file name",id:"5-support-to-get-data-time-from-file-name",level:2},{value:"6. Support time offset reading",id:"6-support-time-offset-reading",level:2}],c={toc:g};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1configuration"},"1\u3001Configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd inlong-agent\n")),(0,o.kt)("p",null,"The agent supports two modes of operation: local operation and online operation"),(0,o.kt)("h3",{id:"agent-configuration"},"Agent configuration"),(0,o.kt)("p",null,"Online operation needs to pull the configuration from inlong-manager, the configuration conf/agent.properties is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"agent.fetcher.classname=org.apache.inlong.agent.plugin.fetcher.ManagerFetcher (the class name for fetch tasks, default ManagerFetcher\uff09\nagent.local.ip=Write local ip\nagent.manager.vip.http.host=manager web host\nagent.manager.vip.http.port=manager web port\n")),(0,o.kt)("h2",{id:"2run"},"2\u3001run"),(0,o.kt)("p",null,"After decompression, run the following command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sh agent.sh start\n")),(0,o.kt)("h2",{id:"3add-job-configuration-in-real-time"},"3\u3001Add job configuration in real time"),(0,o.kt)("h4",{id:"31-agentproperties-modify-the-following-two-places"},"3.1 agent.properties Modify the following two places"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"# whether enable http service\nagent.http.enable=true\n# http default port\nagent.http.port=Available ports\n")),(0,o.kt)("h4",{id:"32-execute-the-following-command"},"3.2 Execute the following command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'    curl --location --request POST \'http://localhost:8008/config/job\' \\\n    --header \'Content-Type: application/json\' \\\n    --data \'{\n    "job": {\n    "dir": {\n    "path": "",\n    "pattern": "/data/inlong-agent/test.log"\n    },\n    "trigger": "org.apache.inlong.agent.plugin.trigger.DirectoryTrigger",\n    "id": 1,\n    "thread": {\n    "running": {\n    "core": "4"\n    },\n    "onejob": true\n    },\n    "name": "fileAgentTest",\n    "source": "org.apache.inlong.agent.plugin.sources.TextFileSource",\n    "sink": "org.apache.inlong.agent.plugin.sinks.ProxySink",\n    "channel": "org.apache.inlong.agent.plugin.channel.MemoryChannel"\n    },\n    "proxy": {\n  "groupId": "groupId10",\n  "streamId": "groupId10"\n    },\n    "op": "add"\n    }\'\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"The meaning of each parameter is \uff1a\n- job.dir.pattern: Configure the read file path, which can include regular expressions\n- job.trigger: Trigger name, the default is DirectoryTrigger, the function is to monitor the files under the folder to generate events\n- job.source: The type of data source used, the default is TextFileSource, which reads text files\n- job.sink\uff1aThe type of writer used, the default is ProxySink, which sends messages to the proxy\n- proxy.groupId: The groupId type used when writing proxy, groupId is group id showed on data access in inlong-manager, not the topic name.\n- proxy.streamId: The streamId type used when writing proxy, streamId is the data flow id showed on data flow window in inlong-manager\n")),(0,o.kt)("h2",{id:"4eg-for-directory-config"},"4\u3001eg for directory config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'E.g:\n/data/inlong-agent/test.log //Represents reading the new file test.log in the inlong-agent folder\n/data/inlong-agent/test[0-9]{1} // means to read the new file test in the inlong-agent folder followed by a number at the end\n/data/inlong-agent/test //If test is a directory, it means to read all new files under test\n/data/inlong-agent/^\\\\d+(\\\\.\\\\d+)? // Start with one or more digits, followed by. or end with one. or more digits (? stands for optional, can match Examples: "5", "1.5" and "2.21"\n')),(0,o.kt)("h2",{id:"5-support-to-get-data-time-from-file-name"},"5. Support to get data time from file name"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Agent supports obtaining the time from the file name as the production time of the data. The configuration instructions are as follows:\n/data/inlong-agent/***YYYYMMDDHH***\nWhere YYYYDDMMHH represents the data time, YYYY represents the year, MM represents the month, DD represents the day, and HH represents the hour\nWhere *** is any character\n\nAt the same time, you need to add the current data cycle to the job conf, the current support day cycle and hour cycle,\nWhen adding a task, add the property job.cycleUnit\n\njob.cycleUnit contains the following two types:\n1. D: Represents the data time and day dimension\n2. H: Represents the data time and hour dimension\n\nE.g:\nThe configuration data source is\n/data/inlong-agent/YYYYMMDDHH.log\nWrite data to 2021020211.log\nConfigure job.cycleUnit as D\nThen the agent will try the 202020211.log file at the time of 202020211. When reading the data in the file, it will write all the data to the backend proxy at the time of 20210202.\nIf job.cycleUnit is configured as H\nWhen collecting data in the 2021020211.log file, all data will be written to the backend proxy at the time of 2021020211\n\n\nExamples of job submission\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST\'http://localhost:8008/config/job\' \\\n--header\'Content-Type: application/json\' \\\n--data\'{\n"job": {\n"dir": {\n"path": "",\n"pattern": "/data/inlong-agent/test.log"\n},\n"trigger": "org.apache.inlong.agent.plugin.trigger.DirectoryTrigger",\n"id": 1,\n"thread": {\n"running": {\n"core": "4"\n}\n},\n"name": "fileAgentTest",\n"cycleUnit": "D",\n"source": "org.apache.inlong.agent.plugin.sources.TextFileSource",\n"sink": "org.apache.inlong.agent.plugin.sinks.ProxySink",\n"channel": "org.apache.inlong.agent.plugin.channel.MemoryChannel"\n},\n"proxy": {\n"group": "group10",\n"group": "group10"\n},\n"op": "add"\n}\'\n')),(0,o.kt)("h2",{id:"6-support-time-offset-reading"},"6. Support time offset reading"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"After the configuration is read by time, if you want to read data at other times than the current time, you can configure the time offset to complete\nConfigure the job attribute name as job.timeOffset, the value is number + time dimension, time dimension includes day and hour\nFor example, the following settings are supported\n1. 1d Read the data one day after the current time\n2. -1h read the data one hour before the current time\n\n\nExamples of job submission\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST\'http://localhost:8008/config/job\' \\\n--header\'Content-Type: application/json\' \\\n--data\'{\n"job": {\n"dir": {\n"path": "",\n"pattern": "/data/inlong-agent/test.log"\n},\n"trigger": "org.apache.inlong.agent.plugin.trigger.DirectoryTrigger",\n"id": 1,\n"thread": {\n"running": {\n"core": "4"\n}\n},\n"name": "fileAgentTest",\n"cycleUnit": "D",\n"timeOffset": "-1d",\n"source": "org.apache.inlong.agent.plugin.sources.TextFileSource",\n"sink": "org.apache.inlong.agent.plugin.sinks.ProxySink",\n"channel": "org.apache.inlong.agent.plugin.channel.MemoryChannel"\n},\n"proxy": {\n"groupId": "groupId10",\n"streamId": "streamId10"\n},\n"op": "add"\n}\'\n')))}p.isMDXComponent=!0}}]);