import{T as m}from"./index-18212a7e.js";import{r as g}from"./utils-187827b7.js";import{a as _}from"./AntdIcon-26d254ec.js";function b(a,d){for(var l=0;l<d.length;l++){const o=d[l];if(typeof o!="string"&&!Array.isArray(o)){for(const n in o)if(n!=="default"&&!(n in a)){const u=Object.getOwnPropertyDescriptor(o,n);u&&Object.defineProperty(a,n,u.get?u:{enumerable:!0,get:()=>o[n]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var s={},O={};Object.defineProperty(O,"__esModule",{value:!0});var y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"}}]},name:"border",theme:"outlined"};O.default=y;(function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var d=g,l=n(O),o=n(_);function n(e){return e&&e.__esModule?e:{default:e}}function u(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?Object(arguments[r]):{},i=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(t).filter(function(f){return Object.getOwnPropertyDescriptor(t,f).enumerable}))),i.forEach(function(f){p(e,f,t[f])})}return e}function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var c=function(r,t){var i=u({},r,t.attrs);return(0,d.createVNode)(o.default,u({},i,{icon:l.default}),null)};c.displayName="BorderOutlined",c.inheritAttrs=!1;var v=c;a.default=v})(s);const B=m(s),$=b({__proto__:null,default:B},[s]);export{$ as B,s as a};
