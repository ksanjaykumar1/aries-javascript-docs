"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[196],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return l}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=p(n),l=r,h=g["".concat(c,".").concat(l)]||g[l]||d[l]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function l(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8856:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return l},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={},c="Updating AFJ",p={unversionedId:"updating/index",id:"updating/index",title:"Updating AFJ",description:"This section will cover everything you need to know about updating Aries Framework JavaScript to a newer version.",source:"@site/guides/updating/index.md",sourceDirName:"updating",slug:"/updating/",permalink:"/aries-javascript-docs/guides/updating/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Postgres Setup for macOS",permalink:"/aries-javascript-docs/guides/tutorials/postgres-database-nodejs/macos"},next:{title:"Update Assistant",permalink:"/aries-javascript-docs/guides/updating/update-assistant"}},u={},d=[{value:"Versioning",id:"versioning",level:2},{value:"Types of breaking changes",id:"types-of-breaking-changes",level:2},{value:"Breaking Code Changes",id:"breaking-code-changes",level:3},{value:"Breaking Storage Changes",id:"breaking-storage-changes",level:3},{value:"Migration Guides",id:"migration-guides",level:2}],g={toc:d};function l(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"updating-afj"},"Updating AFJ"),(0,i.kt)("p",null,"This section will cover everything you need to know about updating Aries Framework JavaScript to a newer version."),(0,i.kt)("h2",{id:"versioning"},"Versioning"),(0,i.kt)("p",null,"Aries Framework JavaScript follows ",(0,i.kt)("a",{parentName:"p",href:"https://semver.org/"},"semantic versioning"),". This means that major version changes (",(0,i.kt)("strong",{parentName:"p"},"1"),".0.0) are considered breaking changes. When features are added this is a minor version change (0.",(0,i.kt)("strong",{parentName:"p"},"1"),".0). For bug fixes the patch version change is used (0.0.",(0,i.kt)("strong",{parentName:"p"},"1"),")."),(0,i.kt)("p",null,"While AFJ is still in pre-1.0.0 version, the version change types are shifted to the right. This means a major version change is now a minor change (0.",(0,i.kt)("strong",{parentName:"p"},"1"),".0) and a minor change is now a patch change (0.0.",(0,i.kt)("strong",{parentName:"p"},"1"),"). This is done to keep the version below 1.0.0, indicating the framework is still in early development and users can expect more breaking changes that when the version has already reached 1.0.0."),(0,i.kt)("p",null,"This means if the second number in the version (0.",(0,i.kt)("strong",{parentName:"p"},"1"),".0) changes, you need to be careful with updating and always consult this page for update instructions. If only the third number changes (0.0.",(0,i.kt)("strong",{parentName:"p"},"1"),"), you can update without any issues."),(0,i.kt)("h2",{id:"types-of-breaking-changes"},"Types of breaking changes"),(0,i.kt)("p",null,"Updates to AFJ bring new features and improvements to the framework. To better adapt the framework to new features we sometimes make breaking changes that will improve how AFJ works. There's two parts to updates with breaking changes:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Breaking code changes"),(0,i.kt)("li",{parentName:"ol"},"Breaking storage changes")),(0,i.kt)("h3",{id:"breaking-code-changes"},"Breaking Code Changes"),(0,i.kt)("p",null,"Breaking changes to code means changes to how you interact with AFJ. This includes methods being renamed, moved to another module or extended to better integrate with new features. We'll try to cover all breaking changes in migration guides, so you know exactly what is needed to update to a new version and keep the same functionality."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},"\u2757\ufe0f"),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you encounter any breaking changes that aren't mentioned in the migration docs, please open an issue in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/animo/aries-javascript-docs/issues"},"Aries JavaScript Docs")," repository, or directly create a PR describing the change."))),(0,i.kt)("h3",{id:"breaking-storage-changes"},"Breaking Storage Changes"),(0,i.kt)("p",null,"Breaking changes to storage are a bit more complex to deal with. While breaking changes to code only require you to update your code once, breaking changes to storage needs to be updated for every agent instance. Luckily, we've made the migration as easy as possible for you using the ",(0,i.kt)("a",{parentName:"p",href:"/aries-javascript-docs/guides/updating/update-assistant"},"Update Assistant"),". The Update Assistant will update all storage objects to the storage model that is expected by the newest version. If a version made changes to the storage, this will be explicitly mentioned in the migration guide. See the ",(0,i.kt)("a",{parentName:"p",href:"/aries-javascript-docs/guides/updating/update-assistant"},"Update Assistant")," documentation for detailed instructions on how to use the update assistant."),(0,i.kt)("h2",{id:"migration-guides"},"Migration Guides"),(0,i.kt)("p",null,"Currently the following migration guides are available:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/aries-javascript-docs/guides/updating/versions/0.1-to-0.2"},"Migrating from AFJ 0.1.0 to 0.2.x"))))}l.isMDXComponent=!0}}]);