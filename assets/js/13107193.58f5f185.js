"use strict";(self.webpackChunkmoopay_documents=self.webpackChunkmoopay_documents||[]).push([[798],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||l[f]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6547:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],c={sidebar_label:"Create product",sidebar_position:2},s="Create product",u={unversionedId:"product integration/create-product",id:"product integration/create-product",isDocsHomePage:!1,title:"Create product",description:"Create product steps",source:"@site/docs/product integration/create-product.md",sourceDirName:"product integration",slug:"/product integration/create-product",permalink:"/product integration/create-product",editUrl:"https://github.com/MooPay/docs/docs/product integration/create-product.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Create product",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Setup Instructions",permalink:"/product integration/products"},next:{title:"Integrate into your site",permalink:"/product integration/integrate-site"}},p=[{value:"Create product steps",id:"create-product-steps",children:[]},{value:"Usage Instructions",id:"usage-instructions",children:[]}],l={toc:p};function d(e){var t=e.components,c=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},l,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-product"},"Create product"),(0,i.kt)("h3",{id:"create-product-steps"},"Create product steps"),(0,i.kt)("p",null,"Please follow the instructions to setup a new ",(0,i.kt)("strong",{parentName:"p"},"quickpay")," product on the site."),(0,i.kt)("p",null,"Click on ",(0,i.kt)("strong",{parentName:"p"},"QuickPay")," from the sidebar to access quickpay options."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Access QuickPay",src:r(3292).Z})),(0,i.kt)("p",null,"Click on ",(0,i.kt)("strong",{parentName:"p"},"Create Quickpay")," to access the details form to fill"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create QuickPay",src:r(2730).Z})),(0,i.kt)("p",null,"Add quickpay details to the form. You will be to specify the price for the ",(0,i.kt)("strong",{parentName:"p"},"quickpay")," in the specified currency. Click ",(0,i.kt)("strong",{parentName:"p"},"Create")," after filling the details. System will setup a corresponding onchain contract for the product to use."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Fill Details",src:r(7134).Z})),(0,i.kt)("p",null,"Click on ",(0,i.kt)("em",{parentName:"p"},"View Instructions")," once you are able to see the newly created product in the list."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"View Instructions",src:r(3364).Z})),(0,i.kt)("h3",{id:"usage-instructions"},"Usage Instructions"),(0,i.kt)("p",null,"MooPay allows you to use the new Product in two different ways."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Via Embedding in an iframe on your site. (",(0,i.kt)("em",{parentName:"li"},"Website Embed")," in the screenshot)."),(0,i.kt)("li",{parentName:"ol"},"Via MooPay Hosted page(",(0,i.kt)("em",{parentName:"li"},"Payment Link")," in the screenshot).")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Instructions",src:r(2662).Z})),(0,i.kt)("p",null,"You can use the MooPay Hosted page option to share the page link directly via email, social media.\nClick ",(0,i.kt)("strong",{parentName:"p"},"See Preview")," to see how that hosted page will look like."),(0,i.kt)("p",null,"To Learn how to use the Embed Option continue to next page."))}d.isMDXComponent=!0},2730:function(e,t,r){t.Z=r.p+"assets/images/screen-create-button-496a0983492f09eea66e12059f5e13e1.png"},7134:function(e,t,r){t.Z=r.p+"assets/images/screen-fill-details-e1be38316687f47728a94a8a8b158e8c.png"},2662:function(e,t,r){t.Z=r.p+"assets/images/screen-instructions-23f08d42cef80897bfee3404d3e4bd3a.png"},3292:function(e,t,r){t.Z=r.p+"assets/images/screen-sidebar-option-7731d4930d996c116e75250700df0656.png"},3364:function(e,t,r){t.Z=r.p+"assets/images/screen-view-instructions-77fb6dac3206b53f91fa4d40fd1455fa.png"}}]);