import{T as g}from"./index-21a21b77.js";import{r as _}from"./utils-4568469f.js";import{a as b}from"./AntdIcon-20077663.js";function O(l,u){for(var i=0;i<u.length;i++){const n=u[i];if(typeof n!="string"&&!Array.isArray(n)){for(const a in n)if(a!=="default"&&!(a in l)){const o=Object.getOwnPropertyDescriptor(n,a);o&&Object.defineProperty(l,a,o.get?o:{enumerable:!0,get:()=>n[a]})}}}return Object.freeze(Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}))}var d={},p={};Object.defineProperty(p,"__esModule",{value:!0});var y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM327.3 702.4c-2 .9-4.4 0-5.3-2.1-.4-1-.4-2.2 0-3.2l98.7-225.5 132.1 132.1-225.5 98.7zm375.1-375.1l-98.7 225.5-132.1-132.1L697.1 322c2-.9 4.4 0 5.3 2.1.4 1 .4 2.1 0 3.2z"}}]},name:"compass",theme:"filled"};p.default=y;(function(l){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var u=_,i=a(p),n=a(b);function a(e){return e&&e.__esModule?e:{default:e}}function o(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},s=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(s=s.concat(Object.getOwnPropertySymbols(r).filter(function(f){return Object.getOwnPropertyDescriptor(r,f).enumerable}))),s.forEach(function(f){m(e,f,r[f])})}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=function(t,r){var s=o({},t,r.attrs);return(0,u.createVNode)(n.default,o({},s,{icon:i.default}),null)};c.displayName="CompassFilled",c.inheritAttrs=!1;var v=c;l.default=v})(d);const C=g(d),h=O({__proto__:null,default:C},[d]);export{h as C,d as a};
