import{u as a}from"./useCustomFetch.C4rKAARt.js";import{_ as r}from"./PageHeader.vue.CctY3luL.js";import{_ as o}from"./ServiceGrid.vue.n3riP3ea.js";import{f as c,r as i,o as m,c as n,b as t,i as l}from"./entry.D6qKh-EG.js";import"./fetch.BLobzZpr.js";import"./BackIcon.B3Oi9U0y.js";import"./_plugin-vue_export-helper.DlAUqK2U.js";import"./ServiceItem.vue.Ccb6WjNx.js";const p={class:"flex flex-col px-[23px] py-[10px] h-full"},B=c({__name:"index",setup(f){const s=i([]);return(async()=>{const e=await a("/services",{method:"GET"});e.data.value&&(s.value=e.data.value.data)})(),(e,u)=>(m(),n("div",p,[t(r,{title:"سرویس ها",class:"mb-[60px]"}),t(o,{services:l(s),circle:!1},null,8,["services"])]))}});export{B as default};