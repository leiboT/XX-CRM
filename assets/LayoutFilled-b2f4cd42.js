import{T as m}from"./index-d1d705d5.js";import{r as g}from"./utils-e0d14c97.js";import{a as _}from"./AntdIcon-eb4c4eff.js";function b(n,f){for(var u=0;u<f.length;u++){const l=f[u];if(typeof l!="string"&&!Array.isArray(l)){for(const a in l)if(a!=="default"&&!(a in n)){const o=Object.getOwnPropertyDescriptor(l,a);o&&Object.defineProperty(n,a,o.get?o:{enumerable:!0,get:()=>l[a]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var s={},p={};Object.defineProperty(p,"__esModule",{value:!0});var O={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M384 912h496c17.7 0 32-14.3 32-32V340H384v572zm496-800H384v164h528V144c0-17.7-14.3-32-32-32zm-768 32v736c0 17.7 14.3 32 32 32h176V112H144c-17.7 0-32 14.3-32 32z"}}]},name:"layout",theme:"filled"};p.default=O;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var f=g,u=a(p),l=a(_);function a(e){return e&&e.__esModule?e:{default:e}}function o(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},i=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(r).filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable}))),i.forEach(function(c){y(e,c,r[c])})}return e}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=function(t,r){var i=o({},t,r.attrs);return(0,f.createVNode)(l.default,o({},i,{icon:u.default}),null)};d.displayName="LayoutFilled",d.inheritAttrs=!1;var v=d;n.default=v})(s);const h=m(s),j=b({__proto__:null,default:h},[s]);export{j as L,s as a};
