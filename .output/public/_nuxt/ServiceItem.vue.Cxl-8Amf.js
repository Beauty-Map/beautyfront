import{f as l,s as n,o,c as u,a,y as d,t as p}from"./entry.BZBDKKIU.js";const m=["src"],f={class:"text-center leading-[18px] text-xs whitespace-nowrap"},g=l({__name:"ServiceItem",props:{id:{type:Number,required:!0},title:{type:String,default:""},image:{type:String,default:""},circle:{type:Boolean,default:!0},isLink:{type:Boolean,default:!0},callParent:{type:Boolean,default:!1}},emits:["click"],setup(e,{emit:i}){const c=i,t=e,s=n(),r=()=>{if(t.callParent){c("click");return}t.isLink?s.push(`/services/${t.id}`):s.push(`/search?service=${t.id}`)};return(x,y)=>(o(),u("div",{onClick:r,class:"flex flex-col items-center justify-start"},[a("img",{src:e.image,alt:"",class:d(["w-[57px] h-[57px] mb-2",[e.circle?"rounded-[50%]":"rounded-[8px]"]])},null,10,m),a("div",f,p(e.title),1)]))}});export{g as _};