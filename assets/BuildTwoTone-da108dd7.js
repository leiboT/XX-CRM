import{T as g}from"./index-18212a7e.js";import{r as T}from"./utils-187827b7.js";import{a as _}from"./AntdIcon-26d254ec.js";function b(n,l){for(var a=0;a<l.length;a++){const u=l[a];if(typeof u!="string"&&!Array.isArray(u)){for(const o in u)if(o!=="default"&&!(o in n)){const i=Object.getOwnPropertyDescriptor(u,o);i&&Object.defineProperty(n,o,i.get?i:{enumerable:!0,get:()=>u[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var s={},v={};Object.defineProperty(v,"__esModule",{value:!0});var h={icon:function(l,a){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M144 546h200v200H144zm268-268h200v200H412z",fill:a}},{tag:"path",attrs:{d:"M916 210H376c-17.7 0-32 14.3-32 32v236H108c-17.7 0-32 14.3-32 32v272c0 17.7 14.3 32 32 32h540c17.7 0 32-14.3 32-32V546h236c17.7 0 32-14.3 32-32V242c0-17.7-14.3-32-32-32zM344 746H144V546h200v200zm268 0H412V546h200v200zm0-268H412V278h200v200zm268 0H680V278h200v200z",fill:l}}]}},name:"build",theme:"twotone"};v.default=h;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var l=T,a=o(v),u=o(_);function o(e){return e&&e.__esModule?e:{default:e}}function i(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},f=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(f=f.concat(Object.getOwnPropertySymbols(r).filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable}))),f.forEach(function(c){p(e,c,r[c])})}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=function(t,r){var f=i({},t,r.attrs);return(0,l.createVNode)(u.default,i({},f,{icon:a.default}),null)};d.displayName="BuildTwoTone",d.inheritAttrs=!1;var m=d;n.default=m})(s);const O=g(s),P=b({__proto__:null,default:O},[s]);export{P as B,s as a};
