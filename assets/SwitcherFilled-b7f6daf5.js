import{T as m}from"./index-d1d705d5.js";import{r as g}from"./utils-e0d14c97.js";import{a as _}from"./AntdIcon-eb4c4eff.js";function b(a,u){for(var i=0;i<u.length;i++){const c=u[i];if(typeof c!="string"&&!Array.isArray(c)){for(const n in c)if(n!=="default"&&!(n in a)){const l=Object.getOwnPropertyDescriptor(c,n);l&&Object.defineProperty(a,n,l.get?l:{enumerable:!0,get:()=>c[n]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var s={},v={};Object.defineProperty(v,"__esModule",{value:!0});var O={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M752 240H144c-17.7 0-32 14.3-32 32v608c0 17.7 14.3 32 32 32h608c17.7 0 32-14.3 32-32V272c0-17.7-14.3-32-32-32zM596 606c0 4.4-3.6 8-8 8H308c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h280c4.4 0 8 3.6 8 8v48zm284-494H264c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h576v576c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V144c0-17.7-14.3-32-32-32z"}}]},name:"switcher",theme:"filled"};v.default=O;(function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var u=g,i=n(v),c=n(_);function n(e){return e&&e.__esModule?e:{default:e}}function l(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},o=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(f){return Object.getOwnPropertyDescriptor(r,f).enumerable}))),o.forEach(function(f){p(e,f,r[f])})}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=function(t,r){var o=l({},t,r.attrs);return(0,u.createVNode)(c.default,l({},o,{icon:i.default}),null)};d.displayName="SwitcherFilled",d.inheritAttrs=!1;var h=d;a.default=h})(s);const S=m(s),P=b({__proto__:null,default:S},[s]);export{P as S,s as a};
