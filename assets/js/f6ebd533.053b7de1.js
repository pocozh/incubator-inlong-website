"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3851],{3905:(e,n,r)=>{r.d(n,{Zo:()=>m,kt:()=>g});var t=r(67294);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,s=function(e,n){if(null==e)return{};var r,t,s={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(s[r]=e[r]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var i=t.createContext({}),l=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):u(u({},n),e)),r},m=function(e){var n=l(e.components);return t.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),p=l(r),g=s,d=p["".concat(i,".").concat(g)]||p[g]||c[g]||o;return r?t.createElement(d,u(u({ref:n},m),{},{components:r})):t.createElement(d,u({ref:n},m))}));function g(e,n){var r=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=r.length,u=new Array(o);u[0]=p;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a.mdxType="string"==typeof e?e:s,u[1]=a;for(var l=2;l<o;l++)u[l]=r[l];return t.createElement.apply(null,u)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},20616:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>u,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var t=r(87462),s=(r(67294),r(3905));const o={title:"Consumer Example",sidebar_position:5},u=void 0,a={unversionedId:"modules/tubemq/consumer_example",id:"version-1.1.0/modules/tubemq/consumer_example",title:"Consumer Example",description:"1 Consumer Example",source:"@site/versioned_docs/version-1.1.0/modules/tubemq/consumer_example.md",sourceDirName:"modules/tubemq",slug:"/modules/tubemq/consumer_example",permalink:"/docs/1.1.0/modules/tubemq/consumer_example",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.1.0/modules/tubemq/consumer_example.md",tags:[],version:"1.1.0",sidebarPosition:5,frontMatter:{title:"Consumer Example",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Producer Example",permalink:"/docs/1.1.0/modules/tubemq/producer_example"},next:{title:"Overview",permalink:"/docs/1.1.0/modules/tubemq/tubemq-manager/overview"}},i={},l=[{value:"1 Consumer Example",id:"1-consumer-example",level:2},{value:"1.1 PullConsumer",id:"11-pullconsumer",level:3},{value:"1.2 PushConsumer",id:"12-pushconsumer",level:3}],m={toc:l};function c(e){let{components:n,...r}=e;return(0,s.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"1-consumer-example"},"1 Consumer Example"),(0,s.kt)("p",null,"  TubeMQ provides two ways to consumer message, PullConsumer and PushConsumer:"),(0,s.kt)("h3",{id:"11-pullconsumer"},"1.1 PullConsumer"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'   public class PullConsumerExample {\n       public static void main(String[] args) throws Throwable {\n           final String masterHostAndPort = "localhost:8000";\n           final String topic = "test";\n           final String group = "test-group";\n           final ConsumerConfig consumerConfig = new ConsumerConfig(masterHostAndPort, group);\n           consumerConfig.setConsumePosition(ConsumePosition.CONSUMER_FROM_LATEST_OFFSET);\n           final MessageSessionFactory messageSessionFactory = new TubeSingleSessionFactory(consumerConfig);\n           final PullMessageConsumer messagePullConsumer = messageSessionFactory.createPullConsumer(consumerConfig);\n           messagePullConsumer.subscribe(topic, null);\n           messagePullConsumer.completeSubscribe();\n           // wait for client to join the exact consumer queue that consumer group allocated\n           while (!messagePullConsumer.isPartitionsReady(1000)) {\n               ThreadUtils.sleep(1000);\n           }\n           while (true) {\n               ConsumerResult result = messagePullConsumer.getMessage();\n               if (result.isSuccess()) {\n                   List<Message> messageList = result.getMessageList();\n                   for (Message message : messageList) {\n                       System.out.println("received message : " + message);\n                   }\n                   messagePullConsumer.confirmConsume(result.getConfirmContext(), true);\n               }\n           }\n       }   \n   }\n')),(0,s.kt)("h3",{id:"12-pushconsumer"},"1.2 PushConsumer"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'   public class PushConsumerExample {\n  \n       public static void test(String[] args) throws Throwable {\n           final String masterHostAndPort = "localhost:8000";\n           final String topic = "test";\n           final String group = "test-group";\n           final ConsumerConfig consumerConfig = new ConsumerConfig(masterHostAndPort, group);\n           consumerConfig.setConsumePosition(ConsumePosition.CONSUMER_FROM_LATEST_OFFSET);\n           final MessageSessionFactory messageSessionFactory = new TubeSingleSessionFactory(consumerConfig);\n           final PushMessageConsumer pushConsumer = messageSessionFactory.createPushConsumer(consumerConfig);\n           pushConsumer.subscribe(topic, null, new MessageListener() {\n               @Override\n               public void receiveMessages(PeerInfo peerInfo, List<Message> messages) throws InterruptedException {\n                   for (Message message : messages) {\n                       System.out.println("received message : " + new String(message.getData()));\n                   }\n               }\n               @Override\n               public Executor getExecutor() {\n                   return null;\n               }\n               @Override\n               public void stop() {\n                   //\n               }\n           });\n           pushConsumer.completeSubscribe();\n           CountDownLatch latch = new CountDownLatch(1);\n           latch.await(10, TimeUnit.MINUTES);\n       }\n   }\n')))}c.isMDXComponent=!0}}]);