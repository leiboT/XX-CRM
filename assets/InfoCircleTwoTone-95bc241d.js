import{T as g}from"./index-d1d705d5.js";import{r as T}from"./utils-e0d14c97.js";import{a as _}from"./AntdIcon-eb4c4eff.js";function b(n,a){for(var c=0;c<a.length;c++){const f=a[c];if(typeof f!="string"&&!Array.isArray(f)){for(const o in f)if(o!=="default"&&!(o in n)){const l=Object.getOwnPropertyDescriptor(f,o);l&&Object.defineProperty(n,o,l.get?l:{enumerable:!0,get:()=>f[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var d={},p={};Object.defineProperty(p,"__esModule",{value:!0});var O={icon:function(a,c){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z",fill:a}},{tag:"path",attrs:{d:"M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm32 588c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z",fill:c}},{tag:"path",attrs:{d:"M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z",fill:a}}]}},name:"info-circle",theme:"twotone"};p.default=O;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=T,c=o(p),f=o(_);function o(e){return e&&e.__esModule?e:{default:e}}function l(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},i=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(r).filter(function(u){return Object.getOwnPropertyDescriptor(r,u).enumerable}))),i.forEach(function(u){m(e,u,r[u])})}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=function(t,r){var i=l({},t,r.attrs);return(0,a.createVNode)(f.default,l({},i,{icon:c.default}),null)};s.displayName="InfoCircleTwoTone",s.inheritAttrs=!1;var v=s;n.default=v})(d);const w=g(d),C=b({__proto__:null,default:w},[d]);export{C as I,d as a};
