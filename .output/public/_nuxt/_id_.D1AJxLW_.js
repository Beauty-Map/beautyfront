import{_ as p}from"./ServiceGrid.vue.n3riP3ea.js";import{f as _,z as f,r as u,A as d,o as v,c as x,b as r,i as c}from"./entry.D6qKh-EG.js";import{_ as h}from"./PageHeader.vue.CctY3luL.js";import{u as y}from"./useCustomFetch.C4rKAARt.js";import"./ServiceItem.vue.Ccb6WjNx.js";import"./BackIcon.B3Oi9U0y.js";import"./_plugin-vue_export-helper.DlAUqK2U.js";import"./fetch.BLobzZpr.js";const k={class:"flex flex-col px-[23px] py-[10px] h-full"},g=_({__name:"[id]",async setup(w){let a,o;const i=f(),e=u(),n=i.params.id,l=async()=>{var s;const t=await y(`/services/${n}`,{method:"GET"});t.data.value&&(e.value=(s=t.data.value)==null?void 0:s.data)};return[a,o]=d(()=>l()),await a,o(),(t,s)=>{const m=p;return v(),x("div",k,[r(h,{title:c(e).title,class:"mb-[60px]"},null,8,["title"]),r(m,{services:c(e).children,circle:!1,"is-link":!1},null,8,["services"])])}}});export{g as default};