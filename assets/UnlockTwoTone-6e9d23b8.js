import{A as m}from"./index-2c0254e6.js";import{r as T}from"./utils-45c6749f.js";import{a as _}from"./AntdIcon-4b813a09.js";function b(n,a){for(var c=0;c<a.length;c++){const l=a[c];if(typeof l!="string"&&!Array.isArray(l)){for(const o in l)if(o!=="default"&&!(o in n)){const u=Object.getOwnPropertyDescriptor(l,o);u&&Object.defineProperty(n,o,u.get?u:{enumerable:!0,get:()=>l[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var d={},v={};Object.defineProperty(v,"__esModule",{value:!0});var h={icon:function(a,c){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M232 840h560V536H232v304zm280-226a48.01 48.01 0 0128 87v53c0 4.4-3.6 8-8 8h-40c-4.4 0-8-3.6-8-8v-53a48.01 48.01 0 0128-87z",fill:c}},{tag:"path",attrs:{d:"M484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z",fill:a}},{tag:"path",attrs:{d:"M832 464H332V240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v68c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-68c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zm-40 376H232V536h560v304z",fill:a}}]}},name:"unlock",theme:"twotone"};v.default=h;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=T,c=o(v),l=o(_);function o(e){return e&&e.__esModule?e:{default:e}}function u(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},f=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(f=f.concat(Object.getOwnPropertySymbols(r).filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable}))),f.forEach(function(i){p(e,i,r[i])})}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=function(t,r){var f=u({},t,r.attrs);return(0,a.createVNode)(l.default,u({},f,{icon:c.default}),null)};s.displayName="UnlockTwoTone",s.inheritAttrs=!1;var g=s;n.default=g})(d);const O=m(d),U=b({__proto__:null,default:O},[d]);export{U,O as a,d as b};
