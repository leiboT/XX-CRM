import{A as F}from"./index-2c0254e6.js";import{r as g}from"./utils-45c6749f.js";import{a as _}from"./AntdIcon-4b813a09.js";function b(a,f){for(var i=0;i<f.length;i++){const l=f[i];if(typeof l!="string"&&!Array.isArray(l)){for(const n in l)if(n!=="default"&&!(n in a)){const o=Object.getOwnPropertyDescriptor(l,n);o&&Object.defineProperty(a,n,o.get?o:{enumerable:!0,get:()=>l[n]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var s={},p={};Object.defineProperty(p,"__esModule",{value:!0});var O={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM288 421a48.01 48.01 0 0196 0 48.01 48.01 0 01-96 0zm376 272h-48.1c-4.2 0-7.8-3.2-8.1-7.4C604 636.1 562.5 597 512 597s-92.1 39.1-95.8 88.6c-.3 4.2-3.9 7.4-8.1 7.4H360a8 8 0 01-8-8.4c4.4-84.3 74.5-151.6 160-151.6s155.6 67.3 160 151.6a8 8 0 01-8 8.4zm24-224a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"frown",theme:"filled"};p.default=O;(function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var f=g,i=n(p),l=n(_);function n(e){return e&&e.__esModule?e:{default:e}}function o(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?Object(arguments[r]):{},u=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(u=u.concat(Object.getOwnPropertySymbols(t).filter(function(c){return Object.getOwnPropertyDescriptor(t,c).enumerable}))),u.forEach(function(c){m(e,c,t[c])})}return e}function m(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var d=function(r,t){var u=o({},r,t.attrs);return(0,f.createVNode)(l.default,o({},u,{icon:i.default}),null)};d.displayName="FrownFilled",d.inheritAttrs=!1;var v=d;a.default=v})(s);const w=F(s),j=b({__proto__:null,default:w},[s]);export{j as F,w as a,s as b};
