import{A as m}from"./index-2c0254e6.js";import{r as g}from"./utils-45c6749f.js";import{a as _}from"./AntdIcon-4b813a09.js";function b(i,c){for(var u=0;u<c.length;u++){const a=c[u];if(typeof a!="string"&&!Array.isArray(a)){for(const n in a)if(n!=="default"&&!(n in i)){const o=Object.getOwnPropertyDescriptor(a,n);o&&Object.defineProperty(i,n,o.get?o:{enumerable:!0,get:()=>a[n]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}var s={},O={};Object.defineProperty(O,"__esModule",{value:!0});var y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 112c-3.8 0-7.7.7-11.6 2.3L292 345.9H128c-8.8 0-16 7.4-16 16.6v299c0 9.2 7.2 16.6 16 16.6h101.7c-3.7 11.6-5.7 23.9-5.7 36.4 0 65.9 53.8 119.5 120 119.5 55.4 0 102.1-37.6 115.9-88.4l408.6 164.2c3.9 1.5 7.8 2.3 11.6 2.3 16.9 0 32-14.2 32-33.2V145.2C912 126.2 897 112 880 112zM344 762.3c-26.5 0-48-21.4-48-47.8 0-11.2 3.9-21.9 11-30.4l84.9 34.1c-2 24.6-22.7 44.1-47.9 44.1zm496 58.4L318.8 611.3l-12.9-5.2H184V417.9h121.9l12.9-5.2L840 203.3v617.4z"}}]},name:"notification",theme:"outlined"};O.default=y;(function(i){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var c=g,u=n(O),a=n(_);function n(t){return t&&t.__esModule?t:{default:t}}function o(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?Object(arguments[e]):{},f=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(f=f.concat(Object.getOwnPropertySymbols(r).filter(function(l){return Object.getOwnPropertyDescriptor(r,l).enumerable}))),f.forEach(function(l){p(t,l,r[l])})}return t}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var d=function(e,r){var f=o({},e,r.attrs);return(0,c.createVNode)(a.default,o({},f,{icon:u.default}),null)};d.displayName="NotificationOutlined",d.inheritAttrs=!1;var v=d;i.default=v})(s);const N=m(s),A=b({__proto__:null,default:N},[s]);export{A as N,N as a,s as b};
