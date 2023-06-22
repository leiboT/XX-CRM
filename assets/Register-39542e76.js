import{A as h,B as N,D as P,F as b,G as o,o as z,v as e,u as c,H as u,J as p}from"./index-28615fcb.js";import{_ as k,F as C}from"./index-bcce8ef3.js";import"./index-47ffcd0b.js";import{B as q}from"./index-b8f211c1.js";import{I as y,_ as B}from"./index-4934892e.js";import E from"./Layout-c3a7147f.js";import{_ as U,a as A}from"./index-6c1f8cb3.js";import"./responsiveObserve-a5ccd290.js";import"./styleChecker-cc2a5e94.js";import"./useSize-e9fa1bdb.js";import"./ResizeObserver.es-0f9f8adb.js";import"./EyeOutlined-125dcb21.js";import"./EyeInvisibleOutlined-e78157ec.js";import"./index-5f804082.js";import"./index.vue_vue_type_script_setup_true_lang-f859ec80.js";/* empty css              */import"./index-8637779f.js";const Y=h({__name:"Register",setup(F){const t=N({userName:"",password:"",confirmPassword:"",phone:void 0,code:void 0}),v=()=>{},i=Promise;return(r,a)=>{const l=y,n=k,m=B,d=U,_=q,g=A,w=P("router-link"),$=C;return z(),b(E,null,{default:o(()=>[e($,{model:t,onFinish:v},{default:o(()=>[e(n,{name:"userName",rules:[{required:!0,message:r.$t("pleaseEnterAccount")}]},{default:o(()=>[e(l,{size:"large",placeholder:r.$t("account"),value:t.userName,"onUpdate:value":a[0]||(a[0]=s=>t.userName=s)},null,8,["placeholder","value"])]),_:1},8,["rules"]),e(n,{name:"password",rules:[{required:!0,message:r.$t("pleaseEnterPassword")}]},{default:o(()=>[e(m,{size:"large",placeholder:r.$t("password"),value:t.password,"onUpdate:value":a[1]||(a[1]=s=>t.password=s)},null,8,["placeholder","value"])]),_:1},8,["rules"]),e(n,{name:"confirmPassword",rules:[{required:!0,validator:(s,f)=>{if(!f)return c(i).reject(r.$t("pleaseEnterPassword"));if(t.password&&f!==t.password)return c(i).reject(r.$t("twoPasswordsDoNotMatch"))}}]},{default:o(()=>[e(m,{size:"large",placeholder:r.$t("confirmPassword"),value:t.confirmPassword,"onUpdate:value":a[2]||(a[2]=s=>t.confirmPassword=s)},null,8,["placeholder","value"])]),_:1},8,["rules"]),e(n,{name:"phone",rules:[{required:!0,message:r.$t("pleaseEnterMobileNumber")}]},{default:o(()=>[e(l,{size:"large",placeholder:r.$t("mobileNumber"),value:t.phone,"onUpdate:value":a[3]||(a[3]=s=>t.phone=s)},null,8,["placeholder","value"])]),_:1},8,["rules"]),e(g,{gutter:16},{default:o(()=>[e(d,{span:16},{default:o(()=>[e(n,{name:"code",rules:[{required:!0,message:r.$t("pleaseEnterVerificationCode")}]},{default:o(()=>[e(l,{size:"large",placeholder:r.$t("verificationCode"),value:t.code,"onUpdate:value":a[4]||(a[4]=s=>t.code=s)},null,8,["placeholder","value"])]),_:1},8,["rules"])]),_:1}),e(d,{span:8},{default:o(()=>[e(_,{block:"",size:"large"},{default:o(()=>[u(p(r.$t("getVerificationCode")),1)]),_:1})]),_:1})]),_:1}),e(n,null,{default:o(()=>[e(w,{to:{name:"Login"}},{default:o(()=>[u(p(r.$t("haveAnAccount")),1)]),_:1})]),_:1}),e(n,null,{default:o(()=>[e(_,{size:"large",block:"",type:"primary","html-type":"submit"},{default:o(()=>[u(p(r.$t("register")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})}}});export{Y as default};
