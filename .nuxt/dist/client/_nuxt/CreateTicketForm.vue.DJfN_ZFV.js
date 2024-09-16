import{_ as $,o as a,c,a as t,q as g,b as d,P as S,G as I,ax as j,r as u,v as e,t as w,B as V,w as L,F as B,y as D,x as k,U as F,J as M,C as U,M as R}from"./entry.BtNxfFXi.js";import{E as b}from"./ErrorRedIcon.CwFyxL7s.js";import{u as T}from"./useCustomFetch.CTNm-nVq.js";import{C as N}from"./CloseIcon.ObWUlk8i.js";import{d as E}from"./debounce.BMmXVQ06.js";import{A as z}from"./AddTicketIcon.CQNK00Qj.js";const O={},P={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},q=t("path",{d:"M3 21V7H7V3H17V11H21V21H13V17H11V21H3ZM5 19H7V17H5V19ZM5 15H7V13H5V15ZM5 11H7V9H5V11ZM9 15H11V13H9V15ZM9 11H11V9H9V11ZM9 7H11V5H9V7ZM13 15H15V13H13V15ZM13 11H15V9H13V11ZM13 7H15V5H13V7ZM17 19H19V17H17V19ZM17 15H19V13H17V15Z",fill:"#133C3E"},null,-1),G=[q];function J(m,x){return a(),c("svg",P,G)}const K=$(O,[["render",J]]),Q={class:"bg-white mx-[20px] max-h-[70%] relative rounded-[12px] min-w-[200px] min-h-[150px] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]"},W=t("div",{class:"bg-[#133C3E] text-white font-semibold text-[14px] leading-[21px] rounded-t-[12px] h-[60px] flex flex-row justify-center items-center"},[t("span",null,"انتخاب موصوع")],-1),X=g({__name:"SubjectModal",props:{open:{type:Boolean,default:!1}},emits:["close"],setup(m,{emit:x}){const p=x,s=()=>{p("close")};return(i,_)=>(a(),c("div",{class:I(["bg-[rgba(0,0,0,.4)] duration-500 transition-all fixed top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center z-[9999]",[m.open?"flex":"hidden"]]),onClick:j(s,["stop"])},[t("div",Q,[d(N,{onClick:s,class:"absolute top-[14px] right-[14px]"}),W,S(i.$slots,"default")])],2))}}),Y={class:"flex flex-col items-start justify-start w-full"},ee={class:"flex flex-row grow mr-[10px]"},te={key:0},se={key:1},oe={key:0,class:"w-full flex flex-row justify-start items-center"},le={class:"mr-1 text-[#F44336] text-[10px] leading-[12px]"},ne={class:"w-full h-full min-h-[293px] justify-center items-start gap-x-[5px] gap-y-[5px] px-[28px] py-[28px] flex flex-row flex-wrap"},re=["onClick"],ie=g({__name:"ChooseTicketSubjectInput",props:{modelValue:{type:Object,default:""}},emits:["update:modelValue"],setup(m,{emit:x}){const p=x,i=u(m.modelValue),_=u(""),C=u(!1),r=u(!1),l=u([]),n=async()=>{var y;const h=await T("/subjects",{method:"get"});h.data.value&&(l.value=(y=h.data.value)==null?void 0:y.data)},o=()=>{r.value=!0},f=()=>{r.value=!1},v=h=>{i.value=h,p("update:modelValue",h),f()};return n(),(h,y)=>(a(),c("div",Y,[t("div",{onClick:o,class:"w-full text-[#133C3E] rounded-[12px] font-medium text-[15px] text-right leading-[23px] border border-[#A9A7A7] bg-[#F7F5C4] py-[20px] px-[20px] cursor-pointer flex flex-row justify-start items-center"},[d(K),t("div",ee,[e(i)?(a(),c("span",te,w(e(i).title),1)):(a(),c("span",se,"انتخاب موضوع"))])]),e(C)?(a(),c("div",oe,[d(b),t("span",le,w(e(_)),1)])):V("",!0),d(X,{open:e(r),onClose:f},{default:L(()=>[t("div",ne,[(a(!0),c(B,null,D(e(l),(H,A)=>(a(),c("div",{onClick:j(Be=>v(H),["stop"]),class:"min-h-[45px] flex justify-center items-center border border-[#133C3E] text-[#133C3E] font-medium text-[12px] leading-[18px] text-center bg-[#F7F5C4] w-[125px] py-[8px] px-[16px] rounded-[10px]",key:A},w(H.title),9,re))),128))])]),_:1},8,["open"])]))}}),ae={},ce={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ue=t("path",{d:"M8 11C8.28333 11 8.52083 10.9042 8.7125 10.7125C8.90417 10.5208 9 10.2833 9 10C9 9.71667 8.90417 9.47917 8.7125 9.2875C8.52083 9.09583 8.28333 9 8 9C7.71667 9 7.47917 9.09583 7.2875 9.2875C7.09583 9.47917 7 9.71667 7 10C7 10.2833 7.09583 10.5208 7.2875 10.7125C7.47917 10.9042 7.71667 11 8 11ZM12 11C12.2833 11 12.5208 10.9042 12.7125 10.7125C12.9042 10.5208 13 10.2833 13 10C13 9.71667 12.9042 9.47917 12.7125 9.2875C12.5208 9.09583 12.2833 9 12 9C11.7167 9 11.4792 9.09583 11.2875 9.2875C11.0958 9.47917 11 9.71667 11 10C11 10.2833 11.0958 10.5208 11.2875 10.7125C11.4792 10.9042 11.7167 11 12 11ZM16 11C16.2833 11 16.5208 10.9042 16.7125 10.7125C16.9042 10.5208 17 10.2833 17 10C17 9.71667 16.9042 9.47917 16.7125 9.2875C16.5208 9.09583 16.2833 9 16 9C15.7167 9 15.4792 9.09583 15.2875 9.2875C15.0958 9.47917 15 9.71667 15 10C15 10.2833 15.0958 10.5208 15.2875 10.7125C15.4792 10.9042 15.7167 11 16 11ZM2 22V4C2 3.45 2.19583 2.97917 2.5875 2.5875C2.97917 2.19583 3.45 2 4 2H20C20.55 2 21.0208 2.19583 21.4125 2.5875C21.8042 2.97917 22 3.45 22 4V16C22 16.55 21.8042 17.0208 21.4125 17.4125C21.0208 17.8042 20.55 18 20 18H6L2 22ZM5.15 16H20V4H4V17.125L5.15 16Z",fill:"#133C3E"},null,-1),pe=[ue];function de(m,x){return a(),c("svg",ce,pe)}const Z=$(ae,[["render",de]]),xe={class:"flex flex-col items-start justify-start w-full"},fe={class:"w-full text-[#133C3E] rounded-[12px] font-medium text-[15px] text-right leading-[23px] border border-[#A9A7A7] bg-[#F7F5C4] py-[20px] px-[20px] cursor-pointer flex flex-row justify-start items-center"},me={class:"flex flex-row grow mr-[10px]"},_e={key:0,class:"w-full flex flex-row justify-start items-center"},Ce={class:"mr-1 text-[#F44336] text-[10px] leading-[12px]"},he=g({__name:"TicketTitleInput",props:{modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(m,{emit:x}){const p=x,i=u(m.modelValue),_=u(""),C=u(!1),l=E(n=>{var o;p("update:modelValue",(o=n.target)==null?void 0:o.value)},500);return(n,o)=>(a(),c("div",xe,[t("div",fe,[d(Z),t("div",me,[k(t("input",{type:"text",class:"text-right h-full bg-transparent w-full outline-none focus:outline-none placeholder:text-[#133C3E]",onInput:o[0]||(o[0]=(...f)=>e(l)&&e(l)(...f)),"onUpdate:modelValue":o[1]||(o[1]=f=>M(i)?i.value=f:null),placeholder:"عنوان"},null,544),[[F,e(i)]])])]),e(C)?(a(),c("div",_e,[d(b),t("span",Ce,w(e(_)),1)])):V("",!0)]))}}),we={class:"flex flex-col items-start justify-start w-full"},ge={class:"w-full text-[#133C3E] rounded-[12px] font-medium text-[15px] text-right leading-[23px] border border-[#A9A7A7] bg-[#F7F5C4] py-[20px] px-[20px] cursor-pointer flex flex-row justify-start items-start"},ve={class:"flex flex-row grow mr-[10px]"},Ve={key:0,class:"w-full flex flex-row justify-start items-center"},be={class:"mr-1 text-[#F44336] text-[10px] leading-[12px]"},ye=g({__name:"TicketDescriptionInput",props:{modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(m,{emit:x}){const p=x,i=u(m.modelValue),_=u(""),C=u(!1),l=E(n=>{var o;p("update:modelValue",(o=n.target)==null?void 0:o.value)},500);return(n,o)=>(a(),c("div",we,[t("div",ge,[d(Z),t("div",ve,[k(t("textarea",{type:"text",class:"text-right h-full bg-transparent w-full outline-none focus:outline-none placeholder:text-[#133C3E]",onInput:o[0]||(o[0]=(...f)=>e(l)&&e(l)(...f)),"onUpdate:modelValue":o[1]||(o[1]=f=>M(i)?i.value=f:null),placeholder:"توضیحات",rows:"5"},null,544),[[F,e(i)]])])]),e(C)?(a(),c("div",Ve,[d(b),t("span",be,w(e(_)),1)])):V("",!0)]))}}),$e={},He={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},je=t("path",{d:"M6.5 20C4.98333 20 3.6875 19.475 2.6125 18.425C1.5375 17.375 1 16.0917 1 14.575C1 13.275 1.39167 12.1167 2.175 11.1C2.95833 10.0833 3.98333 9.43333 5.25 9.15C5.66667 7.61667 6.5 6.375 7.75 5.425C9 4.475 10.4167 4 12 4C13.95 4 15.6042 4.67917 16.9625 6.0375C18.3208 7.39583 19 9.05 19 11C20.15 11.1333 21.1042 11.6292 21.8625 12.4875C22.6208 13.3458 23 14.35 23 15.5C23 16.75 22.5625 17.8125 21.6875 18.6875C20.8125 19.5625 19.75 20 18.5 20H13C12.45 20 11.9792 19.8042 11.5875 19.4125C11.1958 19.0208 11 18.55 11 18V12.85L9.4 14.4L8 13L12 9L16 13L14.6 14.4L13 12.85V18H18.5C19.2 18 19.7917 17.7583 20.275 17.275C20.7583 16.7917 21 16.2 21 15.5C21 14.8 20.7583 14.2083 20.275 13.725C19.7917 13.2417 19.2 13 18.5 13H17V11C17 9.61667 16.5125 8.4375 15.5375 7.4625C14.5625 6.4875 13.3833 6 12 6C10.6167 6 9.4375 6.4875 8.4625 7.4625C7.4875 8.4375 7 9.61667 7 11H6.5C5.53333 11 4.70833 11.3417 4.025 12.025C3.34167 12.7083 3 13.5333 3 14.5C3 15.4667 3.34167 16.2917 4.025 16.975C4.70833 17.6583 5.53333 18 6.5 18H9V20H6.5Z",fill:"#0E391D"},null,-1),ke=[je];function Fe(m,x){return a(),c("svg",He,ke)}const Me=$($e,[["render",Fe]]),Te={class:"cursor-pointer flex flex-col items-start justify-start max-w-[200px] mx-auto"},Ee=t("span",null,"فایل پیوست (اختیاری)",-1),Ze={key:0,class:"w-full flex flex-row justify-start items-center"},Ae={class:"mr-1 text-[#F44336] text-[10px] leading-[12px]"},Se=g({__name:"TicketChooseFile",emits:["choose"],setup(m,{emit:x}){const p=x,s=u(""),i=u(!1),_=u(),C=u(null),r=()=>{var n;(n=_.value)==null||n.click()},l=n=>{var v;const o=(v=n.target)==null?void 0:v.files[0];if(!o){p("choose","");return}const f=new FileReader;f.onload=()=>{C.value=f.result,p("choose",C.value)},f.readAsDataURL(o)};return(n,o)=>(a(),c("div",Te,[t("div",{onClick:r,class:"text-[#133C3E] rounded-[25px] font-medium text-[15px] text-center leading-[23px] border border-[#A9A7A7] bg-[#F7F5C4] py-[8px] px-[12px] cursor-pointer flex flex-row justify-start items-center"},[d(Me),Ee]),e(i)?(a(),c("div",Ze,[d(b),t("span",Ae,w(e(s)),1)])):V("",!0),t("input",{accept:"application/pdf,image/jpeg,image/png",hidden:"",type:"file",ref_key:"file",ref:_,onChange:l},null,544)]))}}),Ie={class:"w-full"},Le=t("span",{class:"mr-[4px] whitespace-nowrap"},"ثبت تیکت",-1),Pe=g({__name:"CreateTicketForm",setup(m){const x=U(),p=R(),s=u({subject:null,title:"",description:"",new_file:""});u({subject:"",title:"",description:""});const i=async()=>{var r;if(!_()){const l=await T("/own/tickets",{method:"POST",body:{title:s.value.title,subject_id:(r=s.value.subject)==null?void 0:r.id,description:s.value.description,new_file:s.value.new_file}});l.error.value&&p.$toast.error("متاسفانه خطایی رخ داده است. بعدا امتحان کنید",{rtl:!0}),l.data.value&&(p.$toast.error("درخواست شما با موفقیت ثبت شد",{rtl:!0}),x.back())}},_=()=>{let r=!1;return s.value.subject||(p.$toast.error("لطفا موضوع را وارد کنید",{rtl:!0}),r=!0),s.value.title||(p.$toast.error("لطفا عنوان را وارد کنید",{rtl:!0}),r=!0),s.value.title||(p.$toast.error("لطفا توضیحات را وارد کنید",{rtl:!0}),r=!0),r},C=r=>{s.value.new_file=r};return(r,l)=>(a(),c("div",Ie,[d(ie,{class:"mb-[20px]",modelValue:e(s).subject,"onUpdate:modelValue":l[0]||(l[0]=n=>e(s).subject=n)},null,8,["modelValue"]),d(he,{class:"mb-[20px]",modelValue:e(s).title,"onUpdate:modelValue":l[1]||(l[1]=n=>e(s).title=n)},null,8,["modelValue"]),d(ye,{class:"mb-[20px]",modelValue:e(s).description,"onUpdate:modelValue":l[2]||(l[2]=n=>e(s).description=n)},null,8,["modelValue"]),d(Se,{class:"mb-[20px]",onChoose:C}),t("div",{onClick:i,class:"cursor-pointer flex flex-row items-center justify-center px-[10px] py-[10px] bg-[#FF3CA0] text-white text-[15px] leading-[22px] text-center font-medium rounded-[12px] h-[62px] w-full"},[d(z),Le])]))}});export{Pe as _};
