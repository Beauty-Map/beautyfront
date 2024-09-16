function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./SupportItem.BkUYw56d.js","./entry.BwfMk_n7.js","./entry.CorxdfQS.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{q as n,C as i,o as l,c as p,a as e,b as o,X as _,Y as m}from"./entry.BwfMk_n7.js";import{B as d}from"./BackIcon.f37TPWn0.js";import{H as u}from"./Header.oiPsaERq.js";const f=_(()=>m(()=>import("./SupportItem.BkUYw56d.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(t=>t.default||t)),x={class:"flex flex-col px-[17px] w-full h-screen md:h-auto"},h={class:"flex flex-col justify-start items-start mt-[17px]"},k={class:"w-full flex flex-row justify-start items-center"},y={class:"w-full flex-col min-h-[400px] justify-start items-start mt-[35px] md:border md:border-gray-500 md:rounded-[50px] md:py-[25px] px-[20px]"},g=n({__name:"index",setup(t){const s=i(),a=()=>{s.back()},r=()=>{s.push("/support/ticket")};return(v,B)=>{const c=f;return l(),p("div",x,[e("div",h,[e("div",k,[o(u),o(d,{onClick:a})]),e("div",y,[o(c,{title:"تیکت به پشتیبانی",onClick:r})])])])}}});export{g as default};
