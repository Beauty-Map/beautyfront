import{q as m,C as _,r as l,o as e,c as s,a as t,b as w,F as b,y as g,v as a,t as y}from"./entry.BwfMk_n7.js";import{B as h}from"./BackIcon.f37TPWn0.js";import{u as k}from"./Auth.D2bTyn-5.js";const v={class:"pt-[20px] w-full flex flex-col items-start justify-start"},B={class:"relative w-full flex flex-row items-center justify-center py-[23px]"},j=t("div",{class:"font-semibold text-[16px] text-[#141414] leading-[24px]"},"دریافت بنر تبلیغاتی",-1),C={class:"w-full text-center flex flex-col justify-start items-center px-[10px] mt-[45px]"},F=["src"],E={class:"mt-[10px] font-semibold text-[16px] leading-[24px] text-center"},q=m({__name:"index",setup(L){const i=_(),c=k(),n=l(c.user),p=l([{id:1,image:"/panel/banner.png"}]),x=()=>{i.replace("/panel/artist")},u=async r=>{await navigator.share({url:r})};return(r,o)=>(e(),s("div",v,[t("div",B,[j,w(h,{onClick:x,class:"absolute left-[10px]"})]),t("div",C,[(e(!0),s(b,null,g(a(p),(f,d)=>(e(),s("div",{key:d,class:"w-full flex flex-col justify-start items-center"},[t("img",{src:f.image,alt:"",class:"w-full max-h-[242px]"},null,8,F),t("p",E,"www.beautymap.ir/"+y(a(n).id),1),t("button",{onClick:o[0]||(o[0]=N=>u(`www.beautymap.ir/${a(n).id}`)),class:"cursor-pointer mt-[30px] w-full max-w-[260px] bg-[#1EFF81] text-[16px] leading-[24px] font-semibold text-black text-center rounded-[20px] py-[12px] px-[18px]"},"اشتراک گذاری")]))),128))])]))}});export{q as default};
