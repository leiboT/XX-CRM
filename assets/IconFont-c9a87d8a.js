import{T as E}from"./index-28615fcb.js";import{r as $}from"./utils-0ddcfc49.js";import{a as N}from"./Icon-48c627e8.js";function D(f,l){for(var s=0;s<l.length;s++){const u=l[s];if(typeof u!="string"&&!Array.isArray(u)){for(const i in u)if(i!=="default"&&!(i in f)){const c=Object.getOwnPropertyDescriptor(u,i);c&&Object.defineProperty(f,i,c.get?c:{enumerable:!0,get:()=>u[i]})}}}return Object.freeze(Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}))}var g={};(function(f){Object.defineProperty(f,"__esModule",{value:!0}),f.default=I;var l=$,s=i(N),u=["type"];function i(e){return e&&e.__esModule?e:{default:e}}function c(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable}))),n.forEach(function(o){h(e,o,r[o])})}return e}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function P(e,t){if(e==null)return{};var r=j(e,t),n,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function j(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}var y=new Set;function S(e){return typeof e=="string"&&e.length&&!y.has(e)}function p(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=e[t];if(S(r)){var n=document.createElement("script");n.setAttribute("src",r),n.setAttribute("data-namespace",r),e.length>t+1&&(n.onload=function(){p(e,t+1)},n.onerror=function(){p(e,t+1)}),y.add(r),document.body.appendChild(n)}}function I(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.scriptUrl,r=e.extraCommonProps,n=r===void 0?{}:r;typeof document<"u"&&typeof window<"u"&&typeof document.createElement=="function"&&(Array.isArray(t)?p(t.reverse()):p([t]));var o=function(w,v){var x=v.attrs,b=v.slots,O=c({},w,x),_=O.type,A=P(O,u),d=b.default&&b.default(),m=null;_&&(m=(0,l.createVNode)("use",{"xlink:href":"#".concat(_)},null)),d&&d.length&&(m=d);var C=c({},n,A);return(0,l.createVNode)(s.default,C,{default:function(){return[m]}})};return o.props={spin:Boolean,rotate:Number,type:String},o.inheritAttrs=!1,o.displayName="Iconfont",o}})(g);const F=E(g),T=D({__proto__:null,default:F},[g]);export{T as I,g as a};
