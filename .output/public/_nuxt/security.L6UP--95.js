import{f as i,D as w,r as u,o as c,c as m,b as e,w as l,i as f,a as o,m as g,q as A,L as v,H as D}from"./entry.BZBDKKIU.js";import{_ as y}from"./PageLoading.vue.DJQ5gRmq.js";import{_ as $}from"./BottomNavigationBox.vue.sBD4tNPP.js";import{_ as k,a as C}from"./MainHeaderDesktop.vue.CBmh5PE5.js";import{u as b}from"./useSanctumAuth.D_ZKC7qp.js";import{_ as S,C as B,D as N,A as j}from"./DeleteAccountModal.vue.EFivCpW-.js";import{u as I}from"./Drawer.DTnn6uZc.js";import{a as L,_ as n}from"./SideBarLink.vue.D88Yrk3A.js";import"./_plugin-vue_export-helper.DlAUqK2U.js";import"./nuxt-link.7VtGiUgi.js";import"./NotificationIcon.Dm1QwAT3.js";const V={class:"flex flex-col justify-start items-start w-full max-w-[310px] pb-10"},E=o("div",{class:"w-full flex flex-col items-start justify-start pb-[18px]"},[o("h1",{class:"w-full font-semibold text-[#141414] text-right text-[17px] leading-[26px]"}," پاک کردن حساب کاربری "),o("h4",{class:"w-full font-semibold text-[#828282] text-right text-[14px] leading-[21px]"}," آیا مطمئن هستید که می خواهید این حساب را حذف کنید؟ این عمل قابل بازگشت نیست. "),o("div",{class:"w-full mt-[10px] font-normal text-right text-[#133C3E] text-[10px] leading-[15px]"})],-1),P=i({__name:"SecurityLinkSideBar",setup(_){const a=w(),t=I(),s=u(!1),r=()=>{s.value=!0},p=()=>{s.value=!1},d=()=>{b().logout()},x=()=>{if(!a.value){t.closeAllDrawers(),t.openLoginDrawer();return}r()};return(h,T)=>(c(),m("div",V,[e(L),e(n,{to:"/security/password",title:"تغییر رمز عبور",class:"mt-8"},{icon:l(()=>[e(B)]),_:1}),e(n,{to:"/security/delete","is-link":!1,onClick:x,title:"پاک کردن حساب کاربری"},{icon:l(()=>[e(N)]),_:1}),e(n,{to:"/security/alt-number",title:"شماره جایگزین ورود"},{icon:l(()=>[e(j)]),_:1}),e(S,{open:f(s),onClose:p,onDelete:d},{default:l(()=>[E]),_:1},8,["open"])]))}}),q={class:"page h-full w-full flex flex-col relative"},H={class:"w-full min-h-screen px-[34px] py-[20px] flex flex-row justify-start items-start"},X=i({__name:"security",setup(_){const a=D(),t=u(!0);return a.hook("page:loading:start",()=>{t.value=!0}),a.hook("page:loading:end",()=>{setTimeout(()=>{t.value=!1},500)}),(s,r)=>(c(),m("div",q,[f(t)?(c(),g(y,{key:0})):A("",!0),e(k,{class:"md:flex hidden"}),o("div",H,[e(P,{class:"md:flex hidden"}),v(s.$slots,"default")]),e(C,{class:"hidden md:flex"}),e($,{class:"md:hidden"})]))}});export{X as default};
