import{a as y}from"./IconBase-5f521c46.js";import{a as T}from"./utils-8db58b1a.js";function _(r,o){for(var e=0;e<o.length;e++){const t=o[e];if(typeof t!="string"&&!Array.isArray(t)){for(const n in t)if(n!=="default"&&!(n in r)){const a=Object.getOwnPropertyDescriptor(t,n);a&&Object.defineProperty(r,n,a.get?a:{enumerable:!0,get:()=>t[n]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var l={};Object.defineProperty(l,"__esModule",{value:!0});var d=l.setTwoToneColor=h,p=l.getTwoToneColor=O,s=C(y),m=T;function C(r){return r&&r.__esModule?r:{default:r}}function v(r,o){return A(r)||b(r,o)||g(r,o)||w()}function w(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g(r,o){if(r){if(typeof r=="string")return f(r,o);var e=Object.prototype.toString.call(r).slice(8,-1);if(e==="Object"&&r.constructor&&(e=r.constructor.name),e==="Map"||e==="Set")return Array.from(r);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return f(r,o)}}function f(r,o){(o==null||o>r.length)&&(o=r.length);for(var e=0,t=new Array(o);e<o;e++)t[e]=r[e];return t}function b(r,o){var e=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(e!=null){var t=[],n=!0,a=!1,u,i;try{for(e=e.call(r);!(n=(u=e.next()).done)&&(t.push(u.value),!(o&&t.length===o));n=!0);}catch(c){a=!0,i=c}finally{try{!n&&e.return!=null&&e.return()}finally{if(a)throw i}}return t}}function A(r){if(Array.isArray(r))return r}function h(r){var o=(0,m.normalizeTwoToneColors)(r),e=v(o,2),t=e[0],n=e[1];return s.default.setTwoToneColors({primaryColor:t,secondaryColor:n})}function O(){var r=s.default.getTwoToneColors();return r.calculated?[r.primaryColor,r.secondaryColor]:r.primaryColor}const P=_({__proto__:null,default:l,getTwoToneColor:p,setTwoToneColor:d},[l]);export{l as a,P as t};
