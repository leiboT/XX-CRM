import{T as v}from"./index-18212a7e.js";import{r as g}from"./utils-187827b7.js";import{a as _}from"./AntdIcon-26d254ec.js";function b(a,f){for(var o=0;o<f.length;o++){const i=f[o];if(typeof i!="string"&&!Array.isArray(i)){for(const n in i)if(n!=="default"&&!(n in a)){const l=Object.getOwnPropertyDescriptor(i,n);l&&Object.defineProperty(a,n,l.get?l:{enumerable:!0,get:()=>i[n]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var s={},p={};Object.defineProperty(p,"__esModule",{value:!0});var y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"}}]},name:"info-circle",theme:"outlined"};p.default=y;(function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var f=g,o=n(p),i=n(_);function n(e){return e&&e.__esModule?e:{default:e}}function l(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},u=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(u=u.concat(Object.getOwnPropertySymbols(r).filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable}))),u.forEach(function(c){O(e,c,r[c])})}return e}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=function(t,r){var u=l({},t,r.attrs);return(0,f.createVNode)(i.default,l({},u,{icon:o.default}),null)};d.displayName="InfoCircleOutlined",d.inheritAttrs=!1;var m=d;a.default=m})(s);const I=v(s),j=b({__proto__:null,default:I},[s]);export{j as I,s as a};
