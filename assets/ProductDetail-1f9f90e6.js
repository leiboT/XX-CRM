import{_ as ue,S as de}from"./index-01c89c36.js";import{v as n,t as D,j as fe,r as O,af as ve,cc as pe,cd as me,ce as ye,q as S,cf as M,A as G,R as be,be as _e,cg as re,aa as Se,p as Ce,bI as ne,i as ge,S as xe,ch as he,m as we,W as Pe,ci as $e,a7 as De,c0 as ke,F as je,G as v,u as L,o as Ie,H as C,J as g}from"./index-a05a5fe7.js";import"./index-9841cee2.js";/* empty css              */import{c as Ae}from"./index-cd217ec7.js";import{B as Oe}from"./index-49f92daa.js";import{u as Re,o as Be}from"./useAuth-59ff2005.js";import{u as Ee,g as Le}from"./productAddOrEditDone-f251ad6e.js";import{R as le,r as oe}from"./responsiveObserve-b74060fe.js";import"./ArrowLeftOutlined-a0239c24.js";import"./ArrowRightOutlined-ebba2232.js";import"./useDestroyed-31aac9c6.js";import"./useSize-b63fe3a6.js";import"./ResizeObserver.es-0f9f8adb.js";function N(a){return a!=null}var Ne=function(e){var t=e.itemPrefixCls,l=e.component,s=e.span,o=e.labelStyle,d=e.contentStyle,m=e.bordered,r=e.label,c=e.content,i=e.colon,u=l;if(m){var p;return n(u,{class:[(p={},D(p,"".concat(t,"-item-label"),N(r)),D(p,"".concat(t,"-item-content"),N(c)),p)],colSpan:s},{default:function(){return[N(r)&&n("span",{style:o},[r]),N(c)&&n("span",{style:d},[c])]}})}return n(u,{class:["".concat(t,"-item")],colSpan:s},{default:function(){return[n("div",{class:"".concat(t,"-item-container")},[r&&n("span",{class:["".concat(t,"-item-label"),D({},"".concat(t,"-item-no-colon"),!i)],style:o},[r]),c&&n("span",{class:"".concat(t,"-item-content"),style:d},[c])])]}})};const q=Ne;var Me=function(e){var t=function(p,f,y){var k=f.colon,R=f.prefixCls,x=f.bordered,h=y.component,B=y.type,T=y.showLabel,E=y.showContent,w=y.labelStyle,j=y.contentStyle;return p.map(function(b,I){var P,A,_=b.props||{},H=_.prefixCls,z=H===void 0?R:H,J=_.span,W=J===void 0?1:J,K=_.labelStyle,Q=K===void 0?_["label-style"]:K,X=_.contentStyle,Y=X===void 0?_["content-style"]:X,Z=_.label,ee=Z===void 0?(P=b.children)===null||P===void 0||(A=P.label)===null||A===void 0?void 0:A.call(P):Z,te=pe(b),F=me(b),U=ye(b),V=b.key;return typeof h=="string"?n(q,{key:"".concat(B,"-").concat(String(V)||I),class:F,style:U,labelStyle:S(S({},w),Q),contentStyle:S(S({},j),Y),span:W,colon:k,component:h,itemPrefixCls:z,bordered:x,label:T?ee:null,content:E?te:null},null):[n(q,{key:"label-".concat(String(V)||I),class:F,style:S(S(S({},w),U),Q),span:1,colon:k,component:h[0],itemPrefixCls:z,bordered:x,label:ee},null),n(q,{key:"content-".concat(String(V)||I),class:F,style:S(S(S({},j),U),Y),span:W*2-1,component:h[1],itemPrefixCls:z,bordered:x,content:te},null)]})},l=e.prefixCls,s=e.vertical,o=e.row,d=e.index,m=e.bordered,r=fe(ie,{labelStyle:O({}),contentStyle:O({})}),c=r.labelStyle,i=r.contentStyle;return s?n(ve,null,[n("tr",{key:"label-".concat(d),class:"".concat(l,"-row")},[t(o,e,{component:"th",type:"label",showLabel:!0,labelStyle:c.value,contentStyle:i.value})]),n("tr",{key:"content-".concat(d),class:"".concat(l,"-row")},[t(o,e,{component:"td",type:"content",showContent:!0,labelStyle:c.value,contentStyle:i.value})])]):n("tr",{key:d,class:"".concat(l,"-row")},[t(o,e,{component:m?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0,labelStyle:c.value,contentStyle:i.value})])};const Te=Me;M.any;var ze=function(){return{prefixCls:String,label:M.any,labelStyle:{type:Object,default:void 0},contentStyle:{type:Object,default:void 0},span:{type:Number,default:1}}},se=G({compatConfig:{MODE:3},name:"ADescriptionsItem",props:ze(),slots:["label"],setup:function(e,t){var l=t.slots;return function(){var s;return(s=l.default)===null||s===void 0?void 0:s.call(l)}}}),ce={xxxl:3,xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function Fe(a,e){if(typeof a=="number")return a;if(re(a)==="object")for(var t=0;t<oe.length;t++){var l=oe[t];if(e[l]&&a[l]!==void 0)return a[l]||ce[l]}return 3}function ae(a,e,t){var l=a;return(e===void 0||e>t)&&(l=Ae(a,{span:t}),he(e===void 0,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),l}function Ue(a,e){var t=xe(a),l=[],s=[],o=e;return t.forEach(function(d,m){var r,c=(r=d.props)===null||r===void 0?void 0:r.span,i=c||1;if(m===t.length-1){s.push(ae(d,c,o)),l.push(s);return}i<o?(o-=i,s.push(d)):(s.push(ae(d,i,o)),l.push(s),o=e,s=[])}),l}var Ve=function(){return{prefixCls:String,bordered:{type:Boolean,default:void 0},size:{type:String,default:"default"},title:M.any,extra:M.any,column:{type:[Number,Object],default:function(){return ce}},layout:String,colon:{type:Boolean,default:void 0},labelStyle:{type:Object,default:void 0},contentStyle:{type:Object,default:void 0}}},ie=Symbol("descriptionsContext"),$=G({compatConfig:{MODE:3},name:"ADescriptions",props:Ve(),slots:["title","extra"],Item:se,setup:function(e,t){var l=t.slots,s=be("descriptions",e),o=s.prefixCls,d=s.direction,m,r=O({});_e(function(){m=le.subscribe(function(i){re(e.column)==="object"&&(r.value=i)})}),Se(function(){le.unsubscribe(m)}),Ce(ie,{labelStyle:ne(e,"labelStyle"),contentStyle:ne(e,"contentStyle")});var c=ge(function(){return Fe(e.column,r.value)});return function(){var i,u,p,f,y=e.size,k=e.bordered,R=k===void 0?!1:k,x=e.layout,h=x===void 0?"horizontal":x,B=e.colon,T=B===void 0?!0:B,E=e.title,w=E===void 0?(i=l.title)===null||i===void 0?void 0:i.call(l):E,j=e.extra,b=j===void 0?(u=l.extra)===null||u===void 0?void 0:u.call(l):j,I=(p=l.default)===null||p===void 0?void 0:p.call(l),P=Ue(I,c.value);return n("div",{class:[o.value,(f={},D(f,"".concat(o.value,"-").concat(y),y!=="default"),D(f,"".concat(o.value,"-bordered"),!!R),D(f,"".concat(o.value,"-rtl"),d.value==="rtl"),f)]},[(w||b)&&n("div",{class:"".concat(o.value,"-header")},[w&&n("div",{class:"".concat(o.value,"-title")},[w]),b&&n("div",{class:"".concat(o.value,"-extra")},[b])]),n("div",{class:"".concat(o.value,"-view")},[n("table",null,[n("tbody",null,[P.map(function(A,_){return n(Te,{key:_,index:_,colon:T,prefixCls:o.value,vertical:h==="vertical",bordered:R,row:A},null)})])])])])}}});$.install=function(a){return a.component($.name,$),a.component($.Item.name,$.Item),a};const qe=$;const at=G({__name:"ProductDetail",setup(a){const e=O(!1),t=O({name:"",brand:"",category:"",price:0,color:"",style:"",enable:!0,inventory:0,describe:""}),{operateAuth:l}=Re(),s=we(),{t:o}=Pe(),{productAddOrEditDone:d}=$e(Ee()),m=async()=>{if(s.params.id){e.value=!0;try{const r=await Le(s.params.id);t.value=r.data,e.value=!1}catch{e.value=!1}}};return De(()=>{m()}),ke(d,r=>{r&&m()}),(r,c)=>{const i=Oe,u=se,p=qe,f=de,y=ue;return Ie(),je(y,{ghost:!1,title:L(o)("detail"),onBack:c[1]||(c[1]=()=>r.$router.back())},{extra:v(()=>[n(i,{type:"primary",disabled:L(Be)(L(l).edit),onClick:c[0]||(c[0]=()=>{r.$router.push({name:"ProductAddOrEdit",params:{id:t.value.id}})})},{default:v(()=>[C(g(L(o)("edit")),1)]),_:1},8,["disabled"])]),default:v(()=>[n(f,{loading:e.value},{default:v(()=>[n(p,{bordered:""},{default:v(()=>[n(u,{label:"name"},{default:v(()=>[C(g(t.value.name),1)]),_:1}),n(u,{label:"brand"},{default:v(()=>[C(g(t.value.brand),1)]),_:1}),n(u,{label:"category"},{default:v(()=>[C(g(t.value.category),1)]),_:1}),n(u,{label:"price"},{default:v(()=>[C(g(t.value.price),1)]),_:1}),n(u,{label:"color"},{default:v(()=>[C(g(t.value.color),1)]),_:1}),n(u,{label:"inventory"},{default:v(()=>[C(g(t.value.inventory),1)]),_:1}),n(u,{label:"style",span:3},{default:v(()=>[C(g(t.value.style),1)]),_:1}),n(u,{label:"describe"},{default:v(()=>[C(g(t.value.describe),1)]),_:1})]),_:1})]),_:1},8,["loading"])]),_:1},8,["title"])}}});export{at as default};
