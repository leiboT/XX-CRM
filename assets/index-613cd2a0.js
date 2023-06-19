import{cs as c,ct as R,cu as x,cv as A,cw as I,cx as L,cy as V,cz as $,cA as q,cB as J,cC as K,cD as U,cE as W,cF as X,cG as Q,cH as Y,cI as Z,cJ as ee,cK as re,ca as ae}from"./index-18212a7e.js";function ne(e,n){for(var a=0;a<n.length;a++){const r=n[a];if(typeof r!="string"&&!Array.isArray(r)){for(const t in r)if(t!=="default"&&!(t in e)){const o=Object.getOwnPropertyDescriptor(r,t);o&&Object.defineProperty(e,t,o.get?o:{enumerable:!0,get:()=>r[t]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}function M(e,n){var a=new c(e),r=new c(n);return(Math.max(a.getLuminance(),r.getLuminance())+.05)/(Math.min(a.getLuminance(),r.getLuminance())+.05)}function S(e,n,a){var r,t;a===void 0&&(a={level:"AA",size:"small"});var o=M(e,n);switch(((r=a.level)!==null&&r!==void 0?r:"AA")+((t=a.size)!==null&&t!==void 0?t:"small")){case"AAsmall":case"AAAlarge":return o>=4.5;case"AAlarge":return o>=3;case"AAAsmall":return o>=7;default:return!1}}function D(e,n,a){a===void 0&&(a={includeFallbackColors:!1,level:"AA",size:"small"});for(var r=null,t=0,o=a.includeFallbackColors,i=a.level,s=a.size,v=0,d=n;v<d.length;v++){var f=d[v],m=M(e,f);m>t&&(t=m,r=new c(f))}return S(e,r,{level:i,size:s})||!o?r:(a.includeFallbackColors=!1,D(e,["#fff","#000"],a))}function te(e,n){var a=new c(e),r="#"+R(a.r,a.g,a.b,a.a),t=r,o=a.gradientType?"GradientType = 1, ":"";if(n){var i=new c(n);t="#"+R(i.r,i.g,i.b,i.a)}return"progid:DXImageTransform.Microsoft.gradient(".concat(o,"startColorstr=").concat(r,",endColorstr=").concat(t,")")}function oe(e,n){var a={r:x(e.r),g:x(e.g),b:x(e.b)};return e.a!==void 0&&(a.a=Number(e.a)),new c(a,n)}function ue(){return new c({r:Math.random(),g:Math.random(),b:Math.random()})}function _(e){if(e===void 0&&(e={}),e.count!==void 0&&e.count!==null){var n=e.count,a=[];for(e.count=void 0;n>a.length;)e.count=null,e.seed&&(e.seed+=1),a.push(_(e));return e.count=n,a}var r=le(e.hue,e.seed),t=ie(r,e),o=ve(r,t,e),i={h:r,s:t,v:o};return e.alpha!==void 0&&(i.a=e.alpha),new c(i)}function le(e,n){var a=se(e),r=w(a,n);return r<0&&(r=360+r),r}function ie(e,n){if(n.hue==="monochrome")return 0;if(n.luminosity==="random")return w([0,100],n.seed);var a=O(e).saturationRange,r=a[0],t=a[1];switch(n.luminosity){case"bright":r=55;break;case"dark":r=t-10;break;case"light":t=55;break}return w([r,t],n.seed)}function ve(e,n,a){var r=ce(e,n),t=100;switch(a.luminosity){case"dark":t=r+20;break;case"light":r=(t+r)/2;break;case"random":r=0,t=100;break}return w([r,t],a.seed)}function ce(e,n){for(var a=O(e).lowerBounds,r=0;r<a.length-1;r++){var t=a[r][0],o=a[r][1],i=a[r+1][0],s=a[r+1][1];if(n>=t&&n<=i){var v=(s-o)/(i-t),d=o-v*t;return v*n+d}}return 0}function se(e){var n=parseInt(e,10);if(!Number.isNaN(n)&&n<360&&n>0)return[n,n];if(typeof e=="string"){var a=k.find(function(i){return i.name===e});if(a){var r=j(a);if(r.hueRange)return r.hueRange}var t=new c(e);if(t.isValid){var o=t.toHsv().h;return[o,o]}}return[0,360]}function O(e){e>=334&&e<=360&&(e-=360);for(var n=0,a=k;n<a.length;n++){var r=a[n],t=j(r);if(t.hueRange&&e>=t.hueRange[0]&&e<=t.hueRange[1])return t}throw Error("Color not found")}function w(e,n){if(n===void 0)return Math.floor(e[0]+Math.random()*(e[1]+1-e[0]));var a=e[1]||1,r=e[0]||0;n=(n*9301+49297)%233280;var t=n/233280;return Math.floor(r+t*(a-r))}function j(e){var n=e.lowerBounds[0][0],a=e.lowerBounds[e.lowerBounds.length-1][0],r=e.lowerBounds[e.lowerBounds.length-1][1],t=e.lowerBounds[0][1];return{name:e.name,hueRange:e.hueRange,lowerBounds:e.lowerBounds,saturationRange:[n,a],brightnessRange:[r,t]}}var k=[{name:"monochrome",hueRange:null,lowerBounds:[[0,0],[100,0]]},{name:"red",hueRange:[-26,18],lowerBounds:[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]},{name:"orange",hueRange:[19,46],lowerBounds:[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]},{name:"yellow",hueRange:[47,62],lowerBounds:[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]},{name:"green",hueRange:[63,178],lowerBounds:[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]},{name:"blue",hueRange:[179,257],lowerBounds:[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]},{name:"purple",hueRange:[258,282],lowerBounds:[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]},{name:"pink",hueRange:[283,334],lowerBounds:[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]]}];const ge=Object.freeze(Object.defineProperty({__proto__:null,TinyColor:c,bounds:k,convertDecimalToHex:I,convertHexToDecimal:L,default:A,fromRatio:oe,hslToRgb:V,hsvToRgb:$,inputToRGB:q,isReadable:S,isValidCSSUnit:J,legacyRandom:ue,mostReadable:D,names:K,numberInputToObject:U,parseIntFromHex:W,random:_,readability:M,rgbToHex:X,rgbToHsl:Q,rgbToHsv:Y,rgbToRgb:Z,rgbaToArgbHex:R,rgbaToHex:ee,stringInputToObject:re,tinycolor:A,toMsFilter:te},Symbol.toStringTag,{value:"Module"}));var u={};const de=ae(ge);Object.defineProperty(u,"__esModule",{value:!0});var g=de,b=2,T=.16,fe=.05,me=.05,be=.15,z=5,G=4,pe=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function C(e){var n=e.r,a=e.g,r=e.b,t=g.rgbToHsv(n,a,r);return{h:t.h*360,s:t.s,v:t.v}}function p(e){var n=e.r,a=e.g,r=e.b;return"#".concat(g.rgbToHex(n,a,r,!1))}function he(e,n,a){var r=a/100,t={r:(n.r-e.r)*r+e.r,g:(n.g-e.g)*r+e.g,b:(n.b-e.b)*r+e.b};return t}function F(e,n,a){var r;return Math.round(e.h)>=60&&Math.round(e.h)<=240?r=a?Math.round(e.h)-b*n:Math.round(e.h)+b*n:r=a?Math.round(e.h)+b*n:Math.round(e.h)-b*n,r<0?r+=360:r>=360&&(r-=360),r}function H(e,n,a){if(e.h===0&&e.s===0)return e.s;var r;return a?r=e.s-T*n:n===G?r=e.s+T:r=e.s+fe*n,r>1&&(r=1),a&&n===z&&r>.1&&(r=.1),r<.06&&(r=.06),Number(r.toFixed(2))}function P(e,n,a){var r;return a?r=e.v+me*n:r=e.v-be*n,r>1&&(r=1),Number(r.toFixed(2))}function B(e){for(var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=[],r=g.inputToRGB(e),t=z;t>0;t-=1){var o=C(r),i=p(g.inputToRGB({h:F(o,t,!0),s:H(o,t,!0),v:P(o,t,!0)}));a.push(i)}a.push(p(r));for(var s=1;s<=G;s+=1){var v=C(r),d=p(g.inputToRGB({h:F(v,s),s:H(v,s),v:P(v,s)}));a.push(d)}return n.theme==="dark"?pe.map(function(f){var m=f.index,N=f.opacity,E=p(he(g.inputToRGB(n.backgroundColor||"#141414"),g.inputToRGB(a[m]),N*100));return E}):a}var h={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1890FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},l={},y={};Object.keys(h).forEach(function(e){l[e]=B(h[e]),l[e].primary=l[e][5],y[e]=B(h[e],{theme:"dark",backgroundColor:"#141414"}),y[e].primary=y[e][5]});var ye=l.red,we=l.volcano,xe=l.gold,Re=l.orange,Be=l.yellow,Me=l.lime,ke=l.green,Ae=l.cyan,Te=l.blue,Ce=l.geekblue,Fe=l.purple,He=l.magenta,Pe=l.grey,Se=u.blue=Te,De=u.cyan=Ae,_e=u.geekblue=Ce,Oe=u.generate=B,je=u.gold=xe,ze=u.green=ke,Ge=u.grey=Pe,Ne=u.lime=Me,Ee=u.magenta=He,Ie=u.orange=Re,Le=u.presetDarkPalettes=y,Ve=u.presetPalettes=l,$e=u.presetPrimaryColors=h,qe=u.purple=Fe,Je=u.red=ye,Ke=u.volcano=we,Ue=u.yellow=Be;const Xe=ne({__proto__:null,blue:Se,cyan:De,default:u,geekblue:_e,generate:Oe,gold:je,green:ze,grey:Ge,lime:Ne,magenta:Ee,orange:Ie,presetDarkPalettes:Le,presetPalettes:Ve,presetPrimaryColors:$e,purple:qe,red:Je,volcano:Ke,yellow:Ue},[u]);export{Xe as i};
