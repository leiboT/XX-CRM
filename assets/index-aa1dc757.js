import{i as Ee,a as Ie,I as z,t as we,b as Pe,u as Re,f as Be,C as Me,c as Fe,r as ae,_ as Ne}from"./index-d37e3852.js";import{A as ee,N as le,i as q,t as E,v as k,q as f,cj as ve,cf as ke,r as R,ck as Ve,cl as ue,aa as je,ch as Oe,c0 as Ce,ba as J,a7 as $e,aR as _e,c5 as De,w as Ge,cm as Q,cg as ce}from"./index-21a21b77.js";import He from"./SearchOutlined-0f9fab11.js";import{B as Ue,w as H}from"./index-f7addbc8.js";import{c as Ze,o as se,b as Ye}from"./index-ad717cd4.js";const Ke=ee({compatConfig:{MODE:3},name:"AInputGroup",props:{prefixCls:String,size:{type:String},compact:{type:Boolean,default:void 0},onMouseenter:{type:Function},onMouseleave:{type:Function},onFocus:{type:Function},onBlur:{type:Function}},setup:function(e,o){var r=o.slots,m=le("input-group",e),g=m.prefixCls,h=m.direction,n=q(function(){var i,v=g.value;return i={},E(i,"".concat(v),!0),E(i,"".concat(v,"-lg"),e.size==="large"),E(i,"".concat(v,"-sm"),e.size==="small"),E(i,"".concat(v,"-compact"),e.compact),E(i,"".concat(v,"-rtl"),h.value==="rtl"),i});return function(){var i;return k("span",{class:n.value,onMouseenter:e.onMouseenter,onMouseleave:e.onMouseleave,onFocus:e.onFocus,onBlur:e.onBlur},[(i=r.default)===null||i===void 0?void 0:i.call(r)])}}});var ne=/iPhone/i,de=/iPod/i,fe=/iPad/i,re=/\bAndroid(?:.+)Mobile\b/i,me=/Android/i,Z=/\bAndroid(?:.+)SD4930UR\b/i,X=/\bAndroid(?:.+)(?:KF[A-Z]{2,4})\b/i,N=/Windows Phone/i,ge=/\bWindows(?:.+)ARM\b/i,he=/BlackBerry/i,pe=/BB10/i,be=/Opera Mini/i,xe=/\b(CriOS|Chrome)(?:.+)Mobile/i,ye=/Mobile(?:.+)Firefox\b/i;function a(s,e){return s.test(e)}function Se(s){var e=s||(typeof navigator<"u"?navigator.userAgent:""),o=e.split("[FBAN");if(typeof o[1]<"u"){var r=o,m=ve(r,1);e=m[0]}if(o=e.split("Twitter"),typeof o[1]<"u"){var g=o,h=ve(g,1);e=h[0]}var n={apple:{phone:a(ne,e)&&!a(N,e),ipod:a(de,e),tablet:!a(ne,e)&&a(fe,e)&&!a(N,e),device:(a(ne,e)||a(de,e)||a(fe,e))&&!a(N,e)},amazon:{phone:a(Z,e),tablet:!a(Z,e)&&a(X,e),device:a(Z,e)||a(X,e)},android:{phone:!a(N,e)&&a(Z,e)||!a(N,e)&&a(re,e),tablet:!a(N,e)&&!a(Z,e)&&!a(re,e)&&(a(X,e)||a(me,e)),device:!a(N,e)&&(a(Z,e)||a(X,e)||a(re,e)||a(me,e))||a(/\bokhttp\b/i,e)},windows:{phone:a(N,e),tablet:a(ge,e),device:a(N,e)||a(ge,e)},other:{blackberry:a(he,e),blackberry10:a(pe,e),opera:a(be,e),firefox:a(ye,e),chrome:a(xe,e),device:a(he,e)||a(pe,e)||a(be,e)||a(ye,e)||a(xe,e)},any:null,phone:null,tablet:null};return n.any=n.apple.device||n.android.device||n.windows.device||n.other.device,n.phone=n.apple.phone||n.android.phone||n.windows.phone,n.tablet=n.apple.tablet||n.android.tablet||n.windows.tablet,n}var Le=f(f({},Se()),{},{isMobile:Se});const We=Le;var Xe=["disabled","loading","addonAfter","suffix"];const qe=ee({compatConfig:{MODE:3},name:"AInputSearch",inheritAttrs:!1,props:f(f({},Ee()),{},{inputPrefixCls:String,enterButton:ke.any,onSearch:{type:Function}}),setup:function(e,o){var r=o.slots,m=o.attrs,g=o.expose,h=o.emit,n=R(),i=function(){var u;(u=n.value)===null||u===void 0||u.focus()},v=function(){var u;(u=n.value)===null||u===void 0||u.blur()};g({focus:i,blur:v});var x=function(u){h("update:value",u.target.value),u&&u.target&&u.type==="click"&&h("search",u.target.value,u),h("change",u)},p=function(u){var A;document.activeElement===((A=n.value)===null||A===void 0?void 0:A.input)&&u.preventDefault()},C=function(u){var A;h("search",(A=n.value)===null||A===void 0?void 0:A.stateValue,u),We.tablet||n.value.focus()},I=le("input-search",e),_=I.prefixCls,V=I.getPrefixCls,B=I.direction,T=I.size,S=q(function(){return V("input",e.inputPrefixCls)});return function(){var y,u,A,j,M,O=e.disabled,F=e.loading,Y=e.addonAfter,U=Y===void 0?(y=r.addonAfter)===null||y===void 0?void 0:y.call(r):Y,L=e.suffix,W=L===void 0?(u=r.suffix)===null||u===void 0?void 0:u.call(r):L,te=Ve(e,Xe),c=e.enterButton,t=c===void 0?(A=(j=r.enterButton)===null||j===void 0?void 0:j.call(r))!==null&&A!==void 0?A:!1:c;t=t||t==="";var l=typeof t=="boolean"?k(He,null,null):null,d="".concat(_.value,"-button"),b=Array.isArray(t)?t[0]:t,w,G=b.type&&Ie(b.type)&&b.type.__ANT_BUTTON;if(G||b.tagName==="button")w=Ze(b,f({onMousedown:p,onClick:C,key:"enterButton"},G?{class:d,size:T.value}:{}),!1);else{var $=l&&!t;w=k(Ue,{class:d,type:t?"primary":void 0,size:T.value,disabled:O,key:"enterButton",onMousedown:p,onClick:C,loading:F,icon:$?l:null},{default:function(){return[$?null:l||t]}})}U&&(w=[w,U]);var D=ue(_.value,(M={},E(M,"".concat(_.value,"-rtl"),B.value==="rtl"),E(M,"".concat(_.value,"-").concat(T.value),!!T.value),E(M,"".concat(_.value,"-with-button"),!!t),M),m.class);return k(z,f(f(f({ref:n},se(te,["onUpdate:value","onSearch","enterButton"])),m),{},{onPressEnter:C,size:T.value,prefixCls:S.value,addonAfter:w,suffix:W,onChange:x,class:D,disabled:O}),r)}}});var Je=`
 min-height:0 !important;
 max-height:none !important;
 height:0 !important;
 visibility:hidden !important;
 overflow:hidden !important;
 position:absolute !important;
 z-index:-1000 !important;
 top:0 !important;
 right:0 !important
`,Qe=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break"],ie={},P;function et(s){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=s.getAttribute("id")||s.getAttribute("data-reactid")||s.getAttribute("name");if(e&&ie[o])return ie[o];var r=window.getComputedStyle(s),m=r.getPropertyValue("box-sizing")||r.getPropertyValue("-moz-box-sizing")||r.getPropertyValue("-webkit-box-sizing"),g=parseFloat(r.getPropertyValue("padding-bottom"))+parseFloat(r.getPropertyValue("padding-top")),h=parseFloat(r.getPropertyValue("border-bottom-width"))+parseFloat(r.getPropertyValue("border-top-width")),n=Qe.map(function(v){return"".concat(v,":").concat(r.getPropertyValue(v))}).join(";"),i={sizingStyle:n,paddingSize:g,borderSize:h,boxSizing:m};return e&&o&&(ie[o]=i),i}function tt(s){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;P||(P=document.createElement("textarea"),P.setAttribute("tab-index","-1"),P.setAttribute("aria-hidden","true"),document.body.appendChild(P)),s.getAttribute("wrap")?P.setAttribute("wrap",s.getAttribute("wrap")):P.removeAttribute("wrap");var m=et(s,e),g=m.paddingSize,h=m.borderSize,n=m.boxSizing,i=m.sizingStyle;P.setAttribute("style","".concat(i,";").concat(Je)),P.value=s.value||s.placeholder||"";var v=Number.MIN_SAFE_INTEGER,x=Number.MAX_SAFE_INTEGER,p=P.scrollHeight,C;if(n==="border-box"?p+=h:n==="content-box"&&(p-=g),o!==null||r!==null){P.value=" ";var I=P.scrollHeight-g;o!==null&&(v=I*o,n==="border-box"&&(v=v+g+h),p=Math.max(v,p)),r!==null&&(x=I*r,n==="border-box"&&(x=x+g+h),C=p>x?"":"hidden",p=Math.min(x,p))}return{height:"".concat(p,"px"),minHeight:"".concat(v,"px"),maxHeight:"".concat(x,"px"),overflowY:C,resize:"none"}}var oe=0,ze=1,at=2,nt=ee({compatConfig:{MODE:3},name:"ResizableTextArea",inheritAttrs:!1,props:we(),setup:function(e,o){var r=o.attrs,m=o.emit,g=o.expose,h,n,i=R(),v=R({}),x=R(oe);je(function(){H.cancel(h),H.cancel(n)});var p=function(){try{if(document.activeElement===i.value){var S=i.value.selectionStart,y=i.value.selectionEnd;i.value.setSelectionRange(S,y)}}catch{}},C=function(){var S=e.autoSize||e.autosize;if(!(!S||!i.value)){var y=S.minRows,u=S.maxRows;v.value=tt(i.value,!1,y,u),x.value=ze,H.cancel(n),n=H(function(){x.value=at,n=H(function(){x.value=oe,p()})})}},I=function(){H.cancel(h),h=H(C)},_=function(S){if(x.value===oe){m("resize",S);var y=e.autoSize||e.autosize;y&&I()}};Oe(e.autosize===void 0,"Input.TextArea","autosize is deprecated, please use autoSize instead.");var V=function(){var S=e.prefixCls,y=e.autoSize,u=e.autosize,A=e.disabled,j=se(e,["prefixCls","onPressEnter","autoSize","autosize","defaultValue","allowClear","type","lazy","maxlength","valueModifiers"]),M=ue(S,r.class,E({},"".concat(S,"-disabled"),A)),O=[r.style,v.value,x.value===ze?{overflowX:"hidden",overflowY:"hidden"}:null],F=f(f(f({},j),r),{},{style:O,class:M});return F.autofocus||delete F.autofocus,F.rows===0&&delete F.rows,k(Ye,{onResize:_,disabled:!(y||u)},{default:function(){return[De(k("textarea",f(f({},F),{},{ref:i}),null),[[Pe]])]}})};Ce(function(){return e.value},function(){J(function(){C()})}),$e(function(){J(function(){C()})});var B=_e();return g({resizeTextarea:C,textArea:i,instance:B}),function(){return V()}}});const rt=nt;function Te(s,e){return Q(s||"").slice(0,e).join("")}function Ae(s,e,o,r){var m=o;return s?m=Te(o,r):Q(e||"").length<o.length&&Q(o||"").length>r&&(m=e),m}const it=ee({compatConfig:{MODE:3},name:"ATextarea",inheritAttrs:!1,props:we(),setup:function(e,o){var r=o.attrs,m=o.expose,g=o.emit,h=Re(),n=R(e.value===void 0?e.defaultValue:e.value),i=R(),v=R(""),x=le("input",e),p=x.prefixCls,C=x.size,I=x.direction,_=q(function(){return e.showCount===""||e.showCount||!1}),V=q(function(){return Number(e.maxlength)>0}),B=R(!1),T=R(),S=R(0),y=function(t){B.value=!0,T.value=v.value,S.value=t.currentTarget.selectionStart,g("compositionstart",t)},u=function(t){B.value=!1;var l=t.currentTarget.value;if(V.value){var d,b=S.value>=e.maxlength+1||S.value===((d=T.value)===null||d===void 0?void 0:d.length);l=Ae(b,T.value,l,e.maxlength)}l!==v.value&&(O(l),ae(t.currentTarget,t,U,l)),g("compositionend",t)},A=_e();Ce(function(){return e.value},function(){"value"in A.vnode.props;var c;n.value=(c=e.value)!==null&&c!==void 0?c:""});var j=function(t){var l;Fe((l=i.value)===null||l===void 0?void 0:l.textArea,t)},M=function(){var t,l;(t=i.value)===null||t===void 0||(l=t.textArea)===null||l===void 0||l.blur()},O=function(t,l){n.value!==t&&(e.value===void 0?n.value=t:J(function(){if(i.value.textArea.value!==v.value){var d,b,w;(d=i.value)===null||d===void 0||(b=(w=d.instance).update)===null||b===void 0||b.call(w)}}),J(function(){l&&l()}))},F=function(t){t.keyCode===13&&g("pressEnter",t),g("keydown",t)},Y=function(t){var l=e.onBlur;l==null||l(t),h.onFieldBlur()},U=function(t){g("update:value",t.target.value),g("change",t),g("input",t),h.onFieldChange()},L=function(t){ae(i.value.textArea,t,U),O("",function(){j()})},W=function(t){var l=t.target.composing,d=t.target.value;if(B.value=!!(t.isComposing||l),!(B.value&&e.lazy||n.value===d)){if(V.value){var b=t.target,w=b.selectionStart>=e.maxlength+1||b.selectionStart===d.length||!b.selectionStart;d=Ae(w,v.value,d,e.maxlength)}ae(t.currentTarget,t,U,d),O(d)}},te=function(){var t,l,d,b=r.style,w=r.class,G=e.bordered,$=G===void 0?!0:G,D=f(f(f({},se(e,["allowClear"])),r),{},{style:_.value?{}:b,class:(t={},E(t,"".concat(p.value,"-borderless"),!$),E(t,"".concat(w),w&&!_.value),E(t,"".concat(p.value,"-sm"),C.value==="small"),E(t,"".concat(p.value,"-lg"),C.value==="large"),t),showCount:null,prefixCls:p.value,onInput:W,onChange:W,onBlur:Y,onKeydown:F,onCompositionstart:y,onCompositionend:u});return(l=e.valueModifiers)!==null&&l!==void 0&&l.lazy&&delete D.onInput,k(rt,f(f({},D),{},{id:(d=D.id)!==null&&d!==void 0?d:h.id.value,ref:i,maxlength:e.maxlength}),null)};return m({focus:j,blur:M,resizableTextArea:i}),Ge(function(){var c=Be(n.value);!B.value&&V.value&&(e.value===null||e.value===void 0)&&(c=Te(c,e.maxlength)),v.value=c}),function(){var c=e.maxlength,t=e.bordered,l=t===void 0?!0:t,d=e.hidden,b=r.style,w=r.class,G=f(f(f({},e),r),{},{prefixCls:p.value,inputType:"text",handleReset:L,direction:I.value,bordered:l,style:_.value?void 0:b}),$=k(Me,f(f({},G),{},{value:v.value}),{element:te});if(_.value){var D=Q(v.value).length,K="";ce(_.value)==="object"?K=_.value.formatter({count:D,maxlength:c}):K="".concat(D).concat(V.value?" / ".concat(c):""),$=k("div",{hidden:d,class:ue("".concat(p.value,"-textarea"),E({},"".concat(p.value,"-textarea-rtl"),I.value==="rtl"),"".concat(p.value,"-textarea-show-count"),w),style:b,"data-count":ce(K)!=="object"?K:void 0},[$])}return $}}});z.Group=Ke;z.Search=qe;z.TextArea=it;z.Password=Ne;z.install=function(s){return s.component(z.name,z),s.component(z.Group.name,z.Group),s.component(z.Search.name,z.Search),s.component(z.TextArea.name,z.TextArea),s.component(z.Password.name,z.Password),s};export{it as _,qe as a};
