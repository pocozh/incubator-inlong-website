"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5686],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,h=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},66157:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],l={title:"Build && Deployment"},u=void 0,s={unversionedId:"modules/website/quick_start",id:"version-0.11.0/modules/website/quick_start",isDocsHomePage:!1,title:"Build && Deployment",description:"About WebSite",source:"@site/versioned_docs/version-0.11.0/modules/website/quick_start.md",sourceDirName:"modules/website",slug:"/modules/website/quick_start",permalink:"/docs/modules/website/quick_start",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/versioned_docs/version-0.11.0/modules/website/quick_start.md",tags:[],version:"0.11.0",frontMatter:{title:"Build && Deployment"},sidebar:"version-0.11.0/tutorialSidebar",previous:{title:"Build && Deployment",permalink:"/docs/modules/manager/quick_start"},next:{title:"Architecture",permalink:"/docs/modules/agent/architecture"}},p=[{value:"About WebSite",id:"about-website",children:[]},{value:"Build",id:"build",children:[]},{value:"Run",id:"run",children:[]},{value:"Guide For Developer",id:"guide-for-developer",children:[{value:"Test",id:"test",children:[]},{value:"Build",id:"build-1",children:[]}]}],d={toc:p};function c(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"about-website"},"About WebSite"),(0,o.kt)("p",null,"This is a website console for us to use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-inlong"},"Apache InLong incubator"),"."),(0,o.kt)("h2",{id:"build"},"Build"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mvn package -DskipTests -Pdocker -pl inlong-website\n")),(0,o.kt)("h2",{id:"run"},"Run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -d --name website -e MANAGER_API_ADDRESS=127.0.0.1:8083 -p 80:80 inlong/website\n")),(0,o.kt)("h2",{id:"guide-for-developer"},"Guide For Developer"),(0,o.kt)("p",null,"You should check that ",(0,o.kt)("inlineCode",{parentName:"p"},"nodejs >= 12.0")," is installed."),(0,o.kt)("p",null,"In the project, you can run some built-in commands:"),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," is not installed, you should first run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn install"),"."),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run dev")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn dev")," to run the application in development mode."),(0,o.kt)("p",null,"If the server runs successfully, the browser will open ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080")," to view in the browser."),(0,o.kt)("p",null,"If you edit, the page will reload.\nYou will also see any lint errors in the console."),(0,o.kt)("p",null,"The start of the web server depends on the back-end server ",(0,o.kt)("inlineCode",{parentName:"p"},"manger api")," interface."),(0,o.kt)("p",null,"You should start the backend server first, and then set the variable ",(0,o.kt)("inlineCode",{parentName:"p"},"target")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"/inlong-website/src/setupProxy.js")," to the address of the api service."),(0,o.kt)("h3",{id:"test"},"Test"),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm test")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn test")),(0,o.kt)("p",null,"Start the test runner in interactive observation mode.\nFor more information, see the section on ",(0,o.kt)("a",{parentName:"p",href:"https://create-react-app.dev/docs/running-tests/"},"Running Tests"),"."),(0,o.kt)("h3",{id:"build-1"},"Build"),(0,o.kt)("p",null,"First, make sure that the project has run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn install")," to install ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules"),"."),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run build")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn build"),"."),(0,o.kt)("p",null,"Build the application for production into the build folder.\nBetter page performance can be obtained in the constructed production mode."),(0,o.kt)("p",null,"After the build, the code is compressed, and the file name includes the hash value.\nYour application is ready to be deployed!"),(0,o.kt)("p",null,"For details, see the section on ",(0,o.kt)("a",{parentName:"p",href:"https://create-react-app.dev/docs/deployment/"},"deployment"),"."))}c.isMDXComponent=!0}}]);