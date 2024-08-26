import{f as u,r as c,o as i,c as m,b as e,w as n,i as f,a as s,m as g,q as A,K as v,G as y}from"./entry.BhzJJFkY.js";import{_ as D}from"./PageLoading.vue.C-8x-W7O.js";import{_ as $}from"./BottomNavigationBox.vue.C2i3ErWE.js";import{_ as k,a as C}from"./MainHeaderDesktop.vue.Dm1jvynD.js";import{u as b}from"./useSanctumAuth.BNswb3dP.js";import{_ as S,C as B,D as N,A as j}from"./DeleteAccountModal.vue.TLSde5of.js";import{u as I}from"./Drawer.BKuX64SN.js";import{a as V,_ as r}from"./SideBarLink.vue.4xralrZw.js";import{u as E}from"./Auth.9DilZTvr.js";import"./_plugin-vue_export-helper.DlAUqK2U.js";import"./nuxt-link.BechwPG3.js";import"./NotificationIcon.CgbP6KF0.js";const L={class:"flex flex-col justify-start items-start w-full max-w-[310px] pb-10"},P=s("div",{class:"w-full flex flex-col items-start justify-start pb-[18px]"},[s("h1",{class:"w-full font-semibold text-[#141414] text-right text-[17px] leading-[26px]"}," پاک کردن حساب کاربری "),s("h4",{class:"w-full font-semibold text-[#828282] text-right text-[14px] leading-[21px]"}," آیا مطمئن هستید که می خواهید این حساب را حذف کنید؟ این عمل قابل بازگشت نیست. "),s("div",{class:"w-full mt-[10px] font-normal text-right text-[#133C3E] text-[10px] leading-[15px]"})],-1),q=u({__name:"SecurityLinkSideBar",setup(_){const o=E(),t=c(o.user),a=I(),l=c(!1),p=()=>{l.value=!0},d=()=>{l.value=!1},x=()=>{b().logout()},h=()=>{if(!t.value){a.closeAllDrawers(),a.openLoginDrawer();return}p()};return(w,T)=>(i(),m("div",L,[e(V),e(r,{to:"/security/password",title:"تغییر رمز عبور",class:"mt-8"},{icon:n(()=>[e(B)]),_:1}),e(r,{to:"/security/delete","is-link":!1,onClick:h,title:"پاک کردن حساب کاربری"},{icon:n(()=>[e(N)]),_:1}),e(r,{to:"/security/alt-number",title:"شماره جایگزین ورود"},{icon:n(()=>[e(j)]),_:1}),e(S,{open:f(l),onClose:d,onDelete:x},{default:n(()=>[P]),_:1},8,["open"])]))}}),G={class:"page h-full w-full flex flex-col relative"},K={class:"w-full min-h-screen px-[34px] py-[20px] flex flex-row justify-start items-start"},Z=u({__name:"security",setup(_){const o=y(),t=c(!0);return o.hook("page:loading:start",()=>{t.value=!0}),o.hook("page:loading:end",()=>{setTimeout(()=>{t.value=!1},500)}),(a,l)=>(i(),m("div",G,[f(t)?(i(),g(D,{key:0})):A("",!0),e(k,{class:"md:flex hidden"}),s("div",K,[e(q,{class:"md:flex hidden"}),v(a.$slots,"default")]),e(C,{class:"hidden md:flex"}),e($,{class:"md:hidden"})]))}});export{Z as default};
