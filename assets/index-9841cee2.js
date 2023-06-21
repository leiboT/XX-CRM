import{A as T,r as k,R as z,i as Q,cg as Y,c0 as q,ba as W,a7 as ne,cL as E,t as S,v as l,q as x,cf as B,M as oe,cn as se,cM as le,co as K,af as ie,S as U,ck as Z,ch as ue,au as ce,cm as ve}from"./index-a05a5fe7.js";import{a as fe,e as de,D as pe}from"./useDestroyed-31aac9c6.js";import{r as me}from"./responsiveObserve-b74060fe.js";import{b as ge,t as ye,o as he,T as be,d as Ce,c as xe,D as Pe,M as X}from"./index-cd217ec7.js";import{u as _e,a as Se}from"./useSize-b63fe3a6.js";var Ae=function(){return{prefixCls:String,shape:{type:String,default:"circle"},size:{type:[Number,String,Object],default:function(){return"default"}},src:String,srcset:String,icon:B.any,alt:String,gap:Number,draggable:{type:Boolean,default:void 0},crossOrigin:String,loadError:{type:Function}}},Re=T({compatConfig:{MODE:3},name:"AAvatar",inheritAttrs:!1,props:Ae(),slots:["icon"],setup:function(e,g){var c=g.slots,a=g.attrs,v=k(!0),f=k(!1),h=k(1),d=k(null),b=k(null),p=z("avatar",e),t=p.prefixCls,s=_e(),r=Q(function(){return e.size==="default"?s.value:e.size}),m=fe(),i=de(function(){if(Y(e.size)==="object"){var u=me.find(function(y){return m.value[y]}),n=e.size[u];return n}}),A=function(n){return i.value?{width:"".concat(i.value,"px"),height:"".concat(i.value,"px"),lineHeight:"".concat(i.value,"px"),fontSize:"".concat(n?i.value/2:18,"px")}:{}},C=function(){if(!(!d.value||!b.value)){var n=d.value.offsetWidth,y=b.value.offsetWidth;if(n!==0&&y!==0){var _=e.gap,R=_===void 0?4:_;R*2<y&&(h.value=y-R*2<n?(y-R*2)/n:1)}}},P=function(){var n=e.loadError,y=n==null?void 0:n();y!==!1&&(v.value=!1)};return q(function(){return e.src},function(){W(function(){v.value=!0,h.value=1})}),q(function(){return e.gap},function(){W(function(){C()})}),ne(function(){W(function(){C(),f.value=!0})}),function(){var u,n,y=e.shape,_=e.src,R=e.alt,w=e.srcset,O=e.draggable,H=e.crossOrigin,D=E(c,e,"icon"),N=t.value,ee=(u={},S(u,"".concat(a.class),!!a.class),S(u,N,!0),S(u,"".concat(N,"-lg"),r.value==="large"),S(u,"".concat(N,"-sm"),r.value==="small"),S(u,"".concat(N,"-").concat(y),y),S(u,"".concat(N,"-image"),_&&v.value),S(u,"".concat(N,"-icon"),D),u),re=typeof r.value=="number"?{width:"".concat(r.value,"px"),height:"".concat(r.value,"px"),lineHeight:"".concat(r.value,"px"),fontSize:D?"".concat(r.value/2,"px"):"18px"}:{},V=(n=c.default)===null||n===void 0?void 0:n.call(c),I;if(_&&v.value)I=l("img",{draggable:O,src:_,srcset:w,onError:P,alt:R,crossorigin:H},null);else if(D)I=D;else if(f.value||h.value!==1){var F="scale(".concat(h.value,") translateX(-50%)"),ae={msTransform:F,WebkitTransform:F,transform:F},te=typeof r.value=="number"?{lineHeight:"".concat(r.value,"px")}:{};I=l(ge,{onResize:C},{default:function(){return[l("span",{class:"".concat(N,"-string"),ref:d,style:x(x({},te),ae)},[V])]}})}else I=l("span",{class:"".concat(N,"-string"),ref:d,style:{opacity:0}},[V]);return l("span",x(x({},a),{},{ref:b,class:ee,style:[re,A(!!D),a.style]}),[I])}}});const j=Re;var Ne=function(){return x(x({},Ce()),{},{content:B.any,title:B.any})},Ee=T({compatConfig:{MODE:3},name:"APopover",props:se(Ne(),x(x({},ye()),{},{trigger:"hover",transitionName:"zoom-big",placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1})),setup:function(e,g){var c=g.expose,a=g.slots,v=k();c({getPopupDomNode:function(){var s,r;return(s=v.value)===null||s===void 0||(r=s.getPopupDomNode)===null||r===void 0?void 0:r.call(s)}});var f=z("popover",e),h=f.prefixCls,d=f.configProvider,b=Q(function(){return d.getPrefixCls()}),p=function(){var s,r,m=e.title,i=m===void 0?K((s=a.title)===null||s===void 0?void 0:s.call(a)):m,A=e.content,C=A===void 0?K((r=a.content)===null||r===void 0?void 0:r.call(a)):A,P=!!(Array.isArray(i)?i.length:i),u=!!(Array.isArray(C)?C.length:i);if(!(!P&&!u))return l(ie,null,[P&&l("div",{class:"".concat(h.value,"-title")},[i]),l("div",{class:"".concat(h.value,"-inner-content")},[C])])};return function(){return l(be,x(x({},he(e,["title","content"])),{},{prefixCls:h.value,ref:v,transitionName:le(b.value,"zoom-big",e.transitionName)}),{title:p,default:a.default})}}});const Be=oe(Ee);var Oe=function(){return{prefixCls:String,maxCount:Number,maxStyle:{type:Object,default:void 0},maxPopoverPlacement:{type:String,default:"top"},maxPopoverTrigger:String,size:{type:[Number,String,Object],default:"default"}}},ke=T({compatConfig:{MODE:3},name:"AAvatarGroup",inheritAttrs:!1,props:Oe(),setup:function(e,g){var c=g.slots,a=g.attrs,v=z("avatar-group",e),f=v.prefixCls,h=v.direction;return Se(e),function(){var d,b=e.maxPopoverPlacement,p=b===void 0?"top":b,t=e.maxCount,s=e.maxStyle,r=e.maxPopoverTrigger,m=r===void 0?"hover":r,i=(d={},S(d,f.value,!0),S(d,"".concat(f.value,"-rtl"),h.value==="rtl"),S(d,"".concat(a.class),!!a.class),d),A=E(c,e),C=U(A).map(function(y,_){return xe(y,{key:"avatar-key-".concat(_)})}),P=C.length;if(t&&t<P){var u=C.slice(0,t),n=C.slice(t,P);return u.push(l(Be,{key:"avatar-popover-key",content:n,trigger:m,placement:p,overlayClassName:"".concat(f.value,"-popover")},{default:function(){return[l(j,{style:s},{default:function(){return["+".concat(P-t)]}})]}})),l("div",x(x({},a),{},{class:i,style:a.style}),[u])}return l("div",x(x({},a),{},{class:i,style:a.style}),[C])}}});const L=ke;j.Group=L;j.install=function(o){return o.component(j.name,j),o.component(L.name,L),o};var Te=["class","style"],ze=function(){return{prefixCls:String,href:String,separator:B.any,overlay:B.any,onClick:Function}};const M=T({compatConfig:{MODE:3},name:"ABreadcrumbItem",inheritAttrs:!1,__ANT_BREADCRUMB_ITEM:!0,props:ze(),slots:["separator","overlay"],setup:function(e,g){var c=g.slots,a=g.attrs,v=z("breadcrumb",e),f=v.prefixCls,h=function(b,p){var t=E(c,e,"overlay");return t?l(Pe,{overlay:t,placement:"bottom"},{default:function(){return[l("span",{class:"".concat(p,"-overlay-link")},[b,l(pe,null,null)])]}}):b};return function(){var d,b=(d=E(c,e,"separator"))!==null&&d!==void 0?d:"/",p=E(c,e),t=a.class,s=a.style,r=Z(a,Te),m;return e.href!==void 0?m=l("a",x({class:"".concat(f.value,"-link"),onClick:e.onClick},r),[p]):m=l("span",x({class:"".concat(f.value,"-link"),onClick:e.onClick},r),[p]),m=h(m,f.value),p?l("span",{class:t,style:s},[m,b&&l("span",{class:"".concat(f.value,"-separator")},[b])]):null}}});var De=function(){return{prefixCls:String,routes:{type:Array},params:B.any,separator:B.any,itemRender:{type:Function}}};function Ie(o,e){if(!o.breadcrumbName)return null;var g=Object.keys(e).join("|"),c=o.breadcrumbName.replace(new RegExp(":(".concat(g,")"),"g"),function(a,v){return e[v]||a});return c}function J(o){var e=o.route,g=o.params,c=o.routes,a=o.paths,v=c.indexOf(e)===c.length-1,f=Ie(e,g);return v?l("span",null,[f]):l("a",{href:"#/".concat(a.join("/"))},[f])}const $=T({compatConfig:{MODE:3},name:"ABreadcrumb",props:De(),slots:["separator","itemRender"],setup:function(e,g){var c=g.slots,a=z("breadcrumb",e),v=a.prefixCls,f=a.direction,h=function(t,s){return t=(t||"").replace(/^\//,""),Object.keys(s).forEach(function(r){t=t.replace(":".concat(r),s[r])}),t},d=function(t,s,r){var m=ve(t),i=h(s||"",r);return i&&m.push(i),m},b=function(t){var s=t.routes,r=s===void 0?[]:s,m=t.params,i=m===void 0?{}:m,A=t.separator,C=t.itemRender,P=C===void 0?J:C,u=[];return r.map(function(n){var y=h(n.path,i);y&&u.push(y);var _=[].concat(u),R=null;return n.children&&n.children.length&&(R=l(X,null,{default:function(){return[n.children.map(function(O){return l(X.Item,{key:O.path||O.breadcrumbName},{default:function(){return[P({route:O,params:i,routes:r,paths:d(_,O.path,i)})]}})})]}})),l(M,{overlay:R,separator:A,key:y||n.breadcrumbName},{default:function(){return[P({route:n,params:i,routes:r,paths:_})]}})})};return function(){var p,t,s,r=e.routes,m=e.params,i=m===void 0?{}:m,A=U(E(c,e)),C=(p=E(c,e,"separator"))!==null&&p!==void 0?p:"/",P=e.itemRender||c.itemRender||J;r&&r.length>0?s=b({routes:r,params:i,separator:C,itemRender:P}):A.length&&(s=A.map(function(n,y){return ue(Y(n.type)==="object"&&(n.type.__ANT_BREADCRUMB_ITEM||n.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),ce(n,{separator:C,key:y})}));var u=(t={},S(t,v.value,!0),S(t,"".concat(v.value,"-rtl"),f.value==="rtl"),t);return l("div",{class:u},[s])}}});var je=["separator","class"],$e=function(){return{prefixCls:String}};const G=T({compatConfig:{MODE:3},name:"ABreadcrumbSeparator",__ANT_BREADCRUMB_SEPARATOR:!0,inheritAttrs:!1,props:$e(),setup:function(e,g){var c=g.slots,a=g.attrs,v=z("breadcrumb",e),f=v.prefixCls;return function(){var h;a.separator;var d=a.class,b=Z(a,je),p=U((h=c.default)===null||h===void 0?void 0:h.call(c));return l("span",x({class:["".concat(f.value,"-separator"),d]},b),[p.length>0?p:"/"])}}});$.Item=M;$.Separator=G;$.install=function(o){return o.component($.name,$),o.component(M.name,M),o.component(G.name,G),o};export{j as A,$ as B,M as _};
