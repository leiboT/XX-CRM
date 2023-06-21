import{T as L}from"./index-a05a5fe7.js";import{r as R,a as V}from"./utils-8db58b1a.js";import{a as F}from"./IconBase-5f521c46.js";import{a as H}from"./twoTonePrimaryColor-88a06a9d.js";function U(c,s){for(var p=0;p<s.length;p++){const i=s[p];if(typeof i!="string"&&!Array.isArray(i)){for(const u in i)if(u!=="default"&&!(u in c)){const d=Object.getOwnPropertyDescriptor(i,u);d&&Object.defineProperty(c,u,d.get?d:{enumerable:!0,get:()=>i[u]})}}}return Object.freeze(Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}))}var g={};(function(c){Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var s=R,p=j(F),i=H,u=V,d=["class","icon","spin","rotate","tabindex","twoToneColor","onClick"];function j(e){return e&&e.__esModule?e:{default:e}}function h(e,t){return S(e)||I(e,t)||P(e,t)||A()}function A(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P(e,t){if(e){if(typeof e=="string")return _(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _(e,t)}}function _(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function I(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var o=[],n=!0,a=!1,l,y;try{for(r=r.call(e);!(n=(l=r.next()).done)&&(o.push(l.value),!(t&&o.length===t));n=!0);}catch(m){a=!0,y=m}finally{try{!n&&r.return!=null&&r.return()}finally{if(a)throw y}}return o}}function S(e){if(Array.isArray(e))return e}function T(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},o=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable}))),o.forEach(function(n){b(e,n,r[n])})}return e}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function x(e,t){if(e==null)return{};var r=k(e,t),o,n;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}function k(e,t){if(e==null)return{};var r={},o=Object.keys(e),n,a;for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&(r[n]=e[n]);return r}(0,i.setTwoToneColor)("#1890ff");var f=function(t,r){var o,n=T({},t,r.attrs),a=n.class,l=n.icon,y=n.spin,m=n.rotate,N=n.tabindex,z=n.twoToneColor,O=n.onClick,C=x(n,d),B=(o={anticon:!0},b(o,"anticon-".concat(l.name),!!l.name),b(o,a,a),o),D=y===""||y||l.name==="loading"?"anticon-spin":"",v=N;v===void 0&&O&&(v=-1,C.tabindex=v);var E=m?{msTransform:"rotate(".concat(m,"deg)"),transform:"rotate(".concat(m,"deg)")}:void 0,M=(0,u.normalizeTwoToneColors)(z),w=h(M,2),W=w[0],q=w[1];return(0,s.createVNode)("span",T({role:"img","aria-label":l.name},C,{onClick:O,class:B}),[(0,s.createVNode)(p.default,{class:D,icon:l,primaryColor:W,secondaryColor:q,style:E},null)])};f.props={spin:Boolean,rotate:Number,icon:Object,twoToneColor:String},f.displayName="AntdIcon",f.inheritAttrs=!1,f.getTwoToneColor=i.getTwoToneColor,f.setTwoToneColor=i.setTwoToneColor;var $=f;c.default=$})(g);const G=L(g),Z=U({__proto__:null,default:G},[g]);export{Z as A,g as a};
