import{A as F}from"./index-2c0254e6.js";import{r as g}from"./utils-45c6749f.js";import{a as _}from"./AntdIcon-4b813a09.js";function b(a,f){for(var o=0;o<f.length;o++){const n=f[o];if(typeof n!="string"&&!Array.isArray(n)){for(const l in n)if(l!=="default"&&!(l in a)){const i=Object.getOwnPropertyDescriptor(n,l);i&&Object.defineProperty(a,l,i.get?i:{enumerable:!0,get:()=>n[l]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var s={},p={};Object.defineProperty(p,"__esModule",{value:!0});var O={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M349 838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V642H349v196zm531.1-684H143.9c-24.5 0-39.8 26.7-27.5 48l221.3 376h348.8l221.3-376c12.1-21.3-3.2-48-27.7-48z"}}]},name:"filter",theme:"filled"};p.default=O;(function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var f=g,o=l(p),n=l(_);function l(e){return e&&e.__esModule?e:{default:e}}function i(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},u=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(u=u.concat(Object.getOwnPropertySymbols(r).filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable}))),u.forEach(function(c){m(e,c,r[c])})}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=function(t,r){var u=i({},t,r.attrs);return(0,f.createVNode)(n.default,i({},u,{icon:o.default}),null)};d.displayName="FilterFilled",d.inheritAttrs=!1;var v=d;a.default=v})(s);const y=F(s),A=b({__proto__:null,default:y},[s]);export{A as F,y as a,s as b};
