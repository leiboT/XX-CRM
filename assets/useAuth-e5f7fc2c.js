import{m as s,n as l}from"./index-28615fcb.js";const i=t=>t===0,c=()=>{const{name:t}=s(),u=l();let a={};const n=o=>{for(let r=0;r<o.length;r++){const e=o[r];if(e.pageUrl&&e.pageUrl.split("/")[1]===t){e.operateAuth&&(a=e.operateAuth);break}else e.children&&e.children.length&&n(e.children)}};return n(u.menuData),{operateAuth:a}};export{i as o,c as u};
