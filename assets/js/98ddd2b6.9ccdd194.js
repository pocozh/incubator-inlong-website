"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8411],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11072:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(87462),i=n(63366),l=(n(67294),n(3905)),o=["components"],a={title:"Kubernetes",sidebar_position:3},c=void 0,u={unversionedId:"deployment/k8s",id:"deployment/k8s",isDocsHomePage:!1,title:"Kubernetes",description:"Prerequisites",source:"@site/docs/deployment/k8s.md",sourceDirName:"deployment",slug:"/deployment/k8s",permalink:"/docs/next/deployment/k8s",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/docs/deployment/k8s.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Kubernetes",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Docker",permalink:"/docs/next/deployment/docker"},next:{title:"Bare Metal",permalink:"/docs/next/deployment/bare_metal"}},s=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install",id:"install",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Uninstall",id:"uninstall",children:[]}],p={toc:s};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Kubernetes 1.10+"),(0,l.kt)("li",{parentName:"ul"},"Helm 3.0+"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-inlong/tree/master/docker/kubernetes"},"InLong Helm Chart")),(0,l.kt)("li",{parentName:"ul"},"A dynamic provisioner for the PersistentVolumes(",(0,l.kt)("inlineCode",{parentName:"li"},"production environment"),")")),(0,l.kt)("h2",{id:"install"},"Install"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create namespace inlong\nhelm upgrade inlong --install -n inlong ./\n")),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("h2",{id:"uninstall"},"Uninstall"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm uninstall inlong -n inlong\n")),(0,l.kt)("p",null,"You can delete all ",(0,l.kt)("inlineCode",{parentName:"p"},"PVC ")," if any persistent volume claims used, it will lose all data."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl delete pvc -n inlong --all\n")))}d.isMDXComponent=!0}}]);