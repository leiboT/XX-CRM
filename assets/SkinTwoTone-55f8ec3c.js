import{T as g}from"./index-18212a7e.js";import{r as T}from"./utils-187827b7.js";import{a as _}from"./AntdIcon-26d254ec.js";function b(n,u){for(var o=0;o<u.length;o++){const i=u[o];if(typeof i!="string"&&!Array.isArray(i)){for(const a in i)if(a!=="default"&&!(a in n)){const f=Object.getOwnPropertyDescriptor(i,a);f&&Object.defineProperty(n,a,f.get?f:{enumerable:!0,get:()=>i[a]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var d={},v={};Object.defineProperty(v,"__esModule",{value:!0});var O={icon:function(u,o){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 318c-79.2 0-148.5-48.8-176.7-120H182v196h119v432h422V394h119V198H688.7c-28.2 71.2-97.5 120-176.7 120z",fill:o}},{tag:"path",attrs:{d:"M870 126H663.8c-17.4 0-32.9 11.9-37 29.3C614.3 208.1 567 246 512 246s-102.3-37.9-114.8-90.7a37.93 37.93 0 00-37-29.3H154a44 44 0 00-44 44v252a44 44 0 0044 44h75v388a44 44 0 0044 44h478a44 44 0 0044-44V466h75a44 44 0 0044-44V170a44 44 0 00-44-44zm-28 268H723v432H301V394H182V198h153.3c28.2 71.2 97.5 120 176.7 120s148.5-48.8 176.7-120H842v196z",fill:u}}]}},name:"skin",theme:"twotone"};v.default=O;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=T,o=a(v),i=a(_);function a(e){return e&&e.__esModule?e:{default:e}}function f(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},l=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(l=l.concat(Object.getOwnPropertySymbols(r).filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable}))),l.forEach(function(c){p(e,c,r[c])})}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=function(t,r){var l=f({},t,r.attrs);return(0,u.createVNode)(i.default,f({},l,{icon:o.default}),null)};s.displayName="SkinTwoTone",s.inheritAttrs=!1;var m=s;n.default=m})(d);const h=g(d),P=b({__proto__:null,default:h},[d]);export{P as S,d as a};
