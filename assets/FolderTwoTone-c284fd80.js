import{T as m}from"./index-d1d705d5.js";import{r as T}from"./utils-e0d14c97.js";import{a as _}from"./AntdIcon-eb4c4eff.js";function b(o,u){for(var a=0;a<u.length;a++){const l=u[a];if(typeof l!="string"&&!Array.isArray(l)){for(const n in l)if(n!=="default"&&!(n in o)){const f=Object.getOwnPropertyDescriptor(l,n);f&&Object.defineProperty(o,n,f.get?f:{enumerable:!0,get:()=>l[n]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}var s={},p={};Object.defineProperty(p,"__esModule",{value:!0});var O={icon:function(u,a){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z",fill:u}},{tag:"path",attrs:{d:"M372.5 256H184v512h656V370.4H492.1z",fill:a}}]}},name:"folder",theme:"twotone"};p.default=O;(function(o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var u=T,a=n(p),l=n(_);function n(e){return e&&e.__esModule?e:{default:e}}function f(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},c=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(c=c.concat(Object.getOwnPropertySymbols(r).filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable}))),c.forEach(function(i){v(e,i,r[i])})}return e}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=function(t,r){var c=f({},t,r.attrs);return(0,u.createVNode)(l.default,f({},c,{icon:a.default}),null)};d.displayName="FolderTwoTone",d.inheritAttrs=!1;var g=d;o.default=g})(s);const w=m(s),P=b({__proto__:null,default:w},[s]);export{P as F,s as a};
