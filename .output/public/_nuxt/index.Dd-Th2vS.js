import{f as x,z as B,s as N,r as h,G as g,v as R,x as A,o as c,c as _,a as l,b as r,i as n,B as E,F as G,k as L,m as k,q as z}from"./entry.BZBDKKIU.js";import{u as H}from"./useCustomFetch.Kl33KG4X.js";import{u as q,_ as M}from"./Search.Dl_7jR5y.js";import{F as U,A as C,_ as W}from"./FilterPortfolioDrawer.vue.CVW5wU5Z.js";import{S as J,_ as K}from"./SortPortfolioDrawer.vue.BbwIooy_.js";import{d as w}from"./debounce.BMmXVQ06.js";import{_ as O}from"./PortfolioItem.vue.CU8Hf3on.js";import{W as Q}from"./v3-infinite-loading.es.s8-wYQ3V.js";import"./fetch.BsvUWtk-.js";import"./SearchIcon.-mY2GwOx.js";import"./_plugin-vue_export-helper.DlAUqK2U.js";import"./ArrowUpIcon.C_DBot5Z.js";import"./DoneCheckIcon.CEdYJ3I8.js";import"./Rating.vue.DbCL2cbY.js";import"./Tick.vue.cyugBTDL.js";import"./nuxt-link.7VtGiUgi.js";import"./Bookmark.vue.OPJXj2mM.js";import"./Drawer.DTnn6uZc.js";const X={class:"w-full flex flex-col"},Y={class:"w-full flex flex-row items-center justify-start"},Z={class:"w-full flex flex-row gap-[10px] justify-start items-center mt-2 py-2"},ee=l("span",null,"فیلتر",-1),te=l("span",null,"مرتب سازی",-1),oe=x({__name:"PageHeader",setup(v){const o=B(),i=N(),a=h(o.query.term??""),s=q(),p=h(!1),u=h(!1),d=()=>{p.value=!0},y=()=>{p.value=!1},D=async t=>{let e={...o.query};delete e.page,t.id==-1?delete e.services:e.services=t.id.toString(),s.reset(),await i.replace({query:e})},I=()=>{u.value=!0},F=()=>{u.value=!1},$=async t=>{let e={...o.query};switch(delete e.page,t.id){case 1:delete e.order_by,delete e.sort_by;break;case 2:e.order_by="created_at",e.sort_by="desc";break;case 3:e.order_by="price",e.sort_by="asc";break;case 4:e.order_by="price",e.sort_by="desc";break;case 5:e.order_by="discount",e.sort_by="desc";break}s.reset(),await i.replace({query:e})},f=async()=>{var m,b;const t=o.query??{};t.page&&delete t.page,t.page=s.page.toString();const e=await H("/search",{method:"GET",query:t});if(e.data.value){let S=e.data.value?(m=e.data.value)==null?void 0:m.data:[];if(S.length==0){s.showInfiniteScroll=!1;return}s.portfolios=[...s.portfolios,...S],s.lastPage=(b=e.data.value)==null?void 0:b.last_page,setTimeout(()=>{s.showInfiniteScroll=!0},300)}},P=async()=>{let t={...o.query};a.value?t.term=a.value:delete t.term,await i.replace({query:t}),await f()},T=async()=>{await f()},V=w(P,500),j=w(T,500);return g(()=>o.query,f),g(()=>a.value,V),g(()=>s.page,j),R(()=>{A(()=>f())}),(t,e)=>(c(),_("div",X,[l("div",Y,[r(M,{modelValue:n(a),"onUpdate:modelValue":e[0]||(e[0]=m=>E(a)?a.value=m:null)},null,8,["modelValue"])]),l("div",Z,[l("div",{onClick:d,class:"cursor-pointer flex flex-row gap-[4px] justify-start items-center"},[r(U),ee,r(C)]),l("div",{onClick:I,class:"cursor-pointer flex flex-row gap-[4px] justify-start items-center"},[r(J),te,r(C)])]),r(W,{onClose:y,onChoose:D,"is-open":n(p)},null,8,["is-open"]),r(K,{onClose:F,onChoose:$,"is-open":n(u)},null,8,["is-open"])]))}}),se={class:"flex flex-col justify-start items-start"},re=x({__name:"PortfolioSearchList",setup(v){const o=q(),a=w(async()=>{o.page<=o.lastPage&&o.paginate()},500);return(s,p)=>{const u=O;return c(),_("div",se,[(c(!0),_(G,null,L(n(o).portfolios,(d,y)=>(c(),k(u,{key:y,portfolio:d},null,8,["portfolio"]))),128)),n(o).showInfiniteScroll?(c(),k(n(Q),{key:0,firstload:!0,class:"mx-auto",onInfinite:n(a)},null,8,["onInfinite"])):z("",!0)])}}}),ae={class:"flex flex-col px-[23px] py-[10px] h-full"},ke=x({__name:"index",setup(v){return(o,i)=>(c(),_("div",ae,[r(oe,{class:"mb-4"}),r(re)]))}});export{ke as default};
