import{H as p}from"./Header.Dc9XooN9.js";import{_ as x}from"./MainActionButton.vue.C0aw8PO8.js";import{_ as v}from"./TelInput.vue.BFHFpZR0.js";import{u as d}from"./useCustomFetch.CauNvmae.js";import{b}from"./OtpForm.vue.OiogV79r.js";import{q as w,r as n,o as r,c as m,a as s,b as i,v as o,w as y,z as h,B as k}from"./entry.BwfMk_n7.js";import"./ContactIcon.CWU86pB8.js";import"./ErrorRedIcon.B6LDzKdG.js";import"./debounce.BMmXVQ06.js";import"./fetch.vQosQKJt.js";import"./Drawer.CsVUNjjo.js";const V={class:"flex flex-col justify-start items-center mt-[40px] md:px-[40px]"},C={class:"w-full flex flex-row justify-start items-center"},B=s("div",{class:"w-full flex flex-row justify-start items-center mt-[40px]"},[s("div",{class:"font-medium text-[13px] leading-[20px] text-[#A9A7A7] text-center mx-7"}," شما میتوانید جهت بالا بردن امنیت حساب کاربری خود و برای دسترسی همیشگی به حساب کاربری خود یک شماره به عنوان جایگزین به حساب کاربری خود اضافه کنید ")],-1),j={key:0,class:"w-full overflow-y-auto mt-[17px]"},A=s("div",{class:"text-white text-center text-[14px] leading-[21px]"}," ارسال کد ",-1),N={key:1,class:"w-full overflow-y-auto mt-[17px]"},R=w({__name:"alt-number",setup(S){const e=n({alt_number:""}),u=n({alt_number:""}),l=n(!1),c=async()=>{if(!e.value.alt_number){u.value.alt_number="شماره تماس را وارد کنید";return}const t=await d("/own/alt-number",{method:"POST",body:e.value});t.error.value,t.data.value&&(l.value=!0)},f=async t=>{const a=await d("/own/alt-number",{method:"PUT",body:{code:t,alt_number:e.value.alt_number}});a.error.value,a.data.value};return(t,a)=>(r(),m("div",V,[s("div",C,[i(p)]),B,o(l)?(r(),m("div",N,[o(l)?(r(),h(b,{key:0,onResend:c,onValidate:f})):k("",!0)])):(r(),m("div",j,[i(v,{error:o(u).alt_number,title:"شماره موبایل",modelValue:o(e).alt_number,"onUpdate:modelValue":a[0]||(a[0]=_=>o(e).alt_number=_)},null,8,["error","modelValue"]),i(x,{class:"mt-[48px] h-[44px]",onClick:c},{default:y(()=>[A]),_:1})]))]))}});export{R as default};