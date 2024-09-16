import{_ as Z,o as a,c,A as G,q as _,C as j,r as f,b as r,v as p,J as U,K as F,D as b,E as $,a as i,t as x,B as w,z as y,G as V,L as N,M as E,h as C,F as S,y as L,w as v,s as A}from"./entry.BwfMk_n7.js";import{_ as q,u as T}from"./Search.Yb5b9NzS.js";import{u as z}from"./useDevice.Bnlvm6Wz.js";import{H as R,S as H,a as D}from"./splide.min.B0W67e5q.js";import{_ as W}from"./ChooseCityDrawer.vue.LOO-Tlxn.js";import{N as J}from"./NotificationIcon.CX9ncqHN.js";import{u as O}from"./Drawer.CsVUNjjo.js";import{u as K}from"./Auth.D2bTyn-5.js";import{_ as M}from"./Title.vue.9qxrRJh6.js";import{_ as Q}from"./ServiceGrid.vue.Cpj38MLq.js";import{u as B}from"./useCustomFetch.CauNvmae.js";import{_ as X}from"./ArtistItem.vue.D-VDCI75.js";import{l as Y,j as tt,u as et}from"./jalaliday.esm.BvLc6cOD.js";import{_ as st}from"./Bookmark.vue.GxbudYft.js";import{_ as it}from"./MainActionButton.vue.C0aw8PO8.js";import"./SearchIcon.1pEN29ul.js";import"./debounce.BMmXVQ06.js";import"./ErrorRedIcon.B6LDzKdG.js";import"./LeftArrow.COoNThPf.js";import"./ServiceItem.vue.D0cx6qdD.js";import"./fetch.vQosQKJt.js";import"./Rating.vue.2sU9bfAs.js";import"./nuxt-link.CkW8QqOK.js";import"./BlueTick.DOWfCEv0.js";const nt={},lt={class:"cursor-pointer",width:"29",height:"29",viewBox:"0 0 29 29",fill:"none",xmlns:"http://www.w3.org/2000/svg"},at=G('<mask id="path-1-inside-1_162_622" fill="white"><rect x="0.5" y="0.5" width="28" height="28" rx="3"></rect></mask><rect x="0.5" y="0.5" width="28" height="28" rx="3" stroke="black" stroke-width="28" mask="url(#path-1-inside-1_162_622)"></rect><path d="M12.1666 9.83325L23.8333 9.83325" stroke="white" stroke-linecap="round"></path><path d="M5.16663 19.1667L16.8333 19.1667" stroke="white" stroke-linecap="round"></path><ellipse cx="8.66663" cy="9.83325" rx="3.5" ry="3.5" transform="rotate(90 8.66663 9.83325)" stroke="white" stroke-linecap="round"></ellipse><ellipse cx="20.3334" cy="19.1667" rx="3.5" ry="3.5" transform="rotate(90 20.3334 19.1667)" stroke="white" stroke-linecap="round"></ellipse>',6),ot=[at];function rt(e,t){return a(),c("svg",lt,ot)}const ct=Z(nt,[["render",rt]]),ut={class:"flex flex-row w-full gap-4 items-center justify-start"},dt=_({__name:"SearchBox",setup(e){const t=j(),l=f(""),s=n=>{t.push(`/search?term=${n}`)};return(n,o)=>{const m=ct,d=q;return a(),c("div",ut,[r(m),r(d,{modelValue:p(l),"onUpdate:modelValue":[o[0]||(o[0]=u=>U(l)?l.value=u:null),s]},null,8,["modelValue"])])}}}),mt={class:"select-location flex gap-0.5 flex-row items-center cursor-pointer"},pt=i("p",{class:"text-xs text-zinc-500 en-title"},"انتخاب شهر",-1),_t={key:0,class:"mt-1.5 text-sm text-neutral-900 city-name"},xt=_({__name:"SelectLocation",setup(e){const t=f(!1),l=f(null),s=f(null),n=T(),o=F("selectedLocation"),m=()=>{t.value=!0},d=()=>{t.value=!1},u=(g,k)=>{l.value=g,s.value=k,o.value=JSON.stringify({province:{id:g.id,name:g.name},city:{id:k.id,name:k.name}})},h=g=>{n.setUserCurrentLocation(g.coords.latitude,g.coords.longitude)},P=g=>{};return b(()=>{$(async()=>{if(navigator.geolocation.getCurrentPosition(h,P),o.value){const g=o.value.province,k=o.value.city;u(g,k)}})}),(g,k)=>(a(),c("div",mt,[i("div",{class:"flex flex-col ml-2 text-left",onClick:m},[pt,p(l)&&p(s)?(a(),c("p",_t,x(`${p(l).name} - ${p(s).name}`),1)):w("",!0)]),r(R,{onClick:m}),r(W,{"is-open":p(t),onClose:d,onChoose:u},null,8,["is-open"])]))}}),ft=_({__name:"MainHeader",setup(e){const t=O(),l=K(),s=f(l.user),n=()=>{t.closeAllDrawers(),t.openNotificationDrawer()};return(o,m)=>{const d=xt;return a(),c("div",{class:V(["flex gap-5 font-medium text-center w-full",[p(s)?"justify-between":"justify-end"]])},[p(s)?(a(),y(J,{key:0,onClick:n})):w("",!0),r(d)],2)}}}),ht={class:"sm:max-w-[60%] max-w-[75%] pt-[10px] px-[15px] md:pt-[25px] md:px-[30px] absolute top-0 left-0 right-0 bottom-0 flex flex-col items-start justify-start"},gt={key:0,class:"text-base font-medium text-right text-white mb-2"},wt={key:1,class:"text-sm font-normal text-right text-white mb-2"},vt={key:2,class:"text-xs font-normal text-right text-white mb-2"},kt=["href"],yt=_({__name:"PopularArtistSliderItem",props:{image:{type:String,default:"/images/artist-slider/1.png"},mainTitle:{type:String,default:""},subTitle:{type:String,default:""},description:{type:String,default:""},linkUrl:{type:String,default:"/"},linkTitle:{type:String,default:""}},setup(e){return(t,l)=>(a(),c("div",{class:"flex flex-col w-full relative min-h-[150px] bg-center bg-no-repeat bg-cover rounded-[8px]",style:N(`background-image: url(${e.image})`)},[i("div",ht,[e.mainTitle?(a(),c("div",gt,x(e.mainTitle),1)):w("",!0),e.subTitle?(a(),c("div",wt,x(e.subTitle),1)):w("",!0),e.description?(a(),c("div",vt,x(e.description),1)):w("",!0),i("a",{href:e.linkUrl,target:"_blank",class:"rounded-3xl py-[7px] px-[35px] text-center bg-[#FF3CA0] min-h-[22px] text-white text-sm"},x(e.linkTitle??"مشاهده"),9,kt)])],4))}}),Ct={class:"w-full flex flex-col items-start justify-start"},bt=_({__name:"PopularArtistSlider",setup(e){const t={image:"/images/artist-slider/1.png",main_title:"هنرمندان محبوب",sub_title:"متخصصان خدمات زیبایی",description:"با هنرمندان محبوب خدمات خیلی خاص و همین طور تخفیفات ویژه برای کاربران دارد",link_url:"/",link_title:"هنرمندان"};return(l,s)=>{const n=M;return a(),c("div",Ct,[r(n,{title:"هنرمندان محبوب",class:"mb-[8px]"}),r(yt,{image:t.image,"main-title":t.main_title,"sub-title":t.sub_title,description:t.description,"link-url":t.link_url,"link-title":t.link_title},null,8,["image","main-title","sub-title","description","link-url","link-title"])])}}}),$t={class:"main-desktop-slider-left-box pt-[10px] px-[15px] md:pt-[25px] md:px-[30px] absolute top-0 left-0 bottom-0 flex flex-col items-center justify-center"},St={key:0,class:"text-base font-medium text-right text-[40px] leading-[60px] text-white mb-2"},jt={key:1,class:"text-sm font-normal text-right text-[24px] leading-[40px] text-white mb-2"},Lt={key:2,class:"text-xs font-normal text-right text-white mb-2"},Tt=["href"],Bt=_({__name:"PopularArtistDesktopSliderItem",props:{image:{type:String,default:"/images/artist-slider/1.png"},mainTitle:{type:String,default:""},subTitle:{type:String,default:""},description:{type:String,default:""},linkUrl:{type:String,default:"/"},linkTitle:{type:String,default:""}},setup(e){return(t,l)=>(a(),c("div",{class:"flex flex-col w-full relative bg-center bg-no-repeat bg-cover",style:N(`background-image: url(${e.image})`)},[i("div",$t,[e.mainTitle?(a(),c("div",St,x(e.mainTitle),1)):w("",!0),e.subTitle?(a(),c("div",jt,x(e.subTitle),1)):w("",!0),e.description?(a(),c("div",Lt,x(e.description),1)):w("",!0),i("a",{href:e.linkUrl,target:"_blank",class:"rounded-3xl mt-[20px] py-[7px] px-[35px] flex justify-center items-center text-center bg-[#FF3CA0] text-[28px] min-h-[44px] text-white text-sm"},x(e.linkTitle??"مشاهده"),9,Tt)])],4))}}),At={class:"w-full flex flex-col items-start justify-start main-desktop-slider"},Ht=_({__name:"PopularArtistDesktopSlider",setup(e){const t={image:"/images/artist-slider/desktop-1.png",main_title:"هنرمندان محبوب",sub_title:"متخصصان خدمات زیبایی",description:"با هنرمندان محبوب خدمات خیلی خاص و همین طور تخفیفات ویژه برای کاربران دارد",link_url:"/",link_title:"هنرمندان"};return(l,s)=>(a(),c("div",At,[r(Bt,{image:t.image,"main-title":t.main_title,"sub-title":t.sub_title,description:t.description,"link-url":t.link_url,"link-title":t.link_title},null,8,["image","main-title","sub-title","description","link-url","link-title"])]))}}),Dt={class:"w-full flex flex-col items-start justify-start"},Mt=_({__name:"ServiceBox",setup(e){const t=f([]),l=async()=>{const{$getRequest:s}=E();s("/services").then(n=>{t.value=n.data})};return b(()=>{$(()=>l())}),(s,n)=>{const o=M,m=Q;return a(),c("div",Dt,[r(o,{title:"خدمات",class:"mb-[8px]"}),r(m,{services:p(t)},null,8,["services"])])}}}),Ft={class:"w-full flex flex-col items-start justify-start"},Vt={class:"grid grid-cols-1 md:grid-cols-2 w-full"},Nt=_({__name:"NearestArtistListBox",setup(e){const t=f([]),l=T(),s=async()=>{const n=l.lat,o=l.lng;setTimeout(async()=>{var u;let m="/nearest";n&&o&&(m+=`?lat=${n}&lng=${o}`);const d=await B(m,{method:"GET"});d.data.value&&(t.value=(u=d.data.value)==null?void 0:u.data)},500)};return b(()=>{$(()=>{s()})}),C(()=>l.lat,s),C(()=>l.lng,s),(n,o)=>{const m=M;return a(),c("div",Ft,[r(m,{title:"نزدیک ترین هنرمندان",class:"mb-[8px]"}),i("div",Vt,[(a(!0),c(S,null,L(p(t),(d,u)=>(a(),y(X,{key:u,artist:d},null,8,["artist"]))),128))])])}}}),Et=["src"],It={class:"text-center leading-[18px] text-xs whitespace-nowrap"},Pt=_({__name:"ServiceDesktopItem",props:{id:{type:Number,required:!0},title:{type:String,default:""},image:{type:String,default:""},circle:{type:Boolean,default:!0},isLink:{type:Boolean,default:!0},callParent:{type:Boolean,default:!1}},emits:["click"],setup(e,{emit:t}){const l=t,s=e,n=j(),o=()=>{if(s.callParent){l("click");return}s.isLink?n.push(`/services/${s.id}`):n.push(`/search?service=${s.id}`)};return(m,d)=>(a(),c("div",{onClick:o,class:"flex flex-col mx-3 items-center justify-start"},[i("img",{src:e.image,alt:"",class:V(["w-[85px] h-[85px] mb-2",[e.circle?"rounded-[50%]":"rounded-[8px]"]])},null,10,Et),i("div",It,x(e.title),1)]))}}),Zt=_({__name:"ServiceDesktopGrid",props:{circle:{type:Boolean,default:!0},services:{type:Array,default:()=>[]},isLink:{type:Boolean,default:!0}},setup(e){const t=f({direction:"rtl",autoWidth:!0,pagination:!1,arrows:!1,focus:"center"});return(l,s)=>(a(),y(p(D),{options:p(t),"aria-label":""},{default:v(()=>[(a(!0),c(S,null,L(e.services,(n,o)=>(a(),y(p(H),{key:o},{default:v(()=>[r(Pt,{id:n.id,title:n.title,image:n.image,circle:e.circle,"is-link":e.isLink},null,8,["id","title","image","circle","is-link"])]),_:2},1024))),128))]),_:1},8,["options"]))}}),Gt={class:"w-full max-w-[80%] mx-auto"},Ut=_({__name:"ServiceDesktopBox",setup(e){const t=f([]),l=async()=>{var n;const s=await B("/services",{method:"GET"});s.data.value&&(t.value=(n=s.data.value)==null?void 0:n.data)};return b(()=>{$(()=>l())}),(s,n)=>(a(),c("div",Gt,[r(Zt,{services:p(t)},null,8,["services"])]))}}),qt={class:"flex flex-col shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-[8px] w-full h-full"},zt=["src","alt"],Rt={class:"w-full h-full px-[15px] py-[10px] flex flex-col justify-start items-start"},Wt={class:"w-full flex flex-row justify-between items-center"},Jt={class:"w-full text-[#141414] text-right font-semibold text-[24px] leading-[32px]"},Ot={class:"w-full mb-[10px] flex flex-row justify-start items-center"},Kt=i("svg",{width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[i("path",{d:"M5.41667 22.75C4.82083 22.75 4.31076 22.5378 3.88646 22.1135C3.46215 21.6892 3.25 21.1792 3.25 20.5833V5.41667C3.25 4.82083 3.46215 4.31076 3.88646 3.88646C4.31076 3.46215 4.82083 3.25 5.41667 3.25H20.5833C21.1792 3.25 21.6892 3.46215 22.1135 3.88646C22.5378 4.31076 22.75 4.82083 22.75 5.41667V20.5833C22.75 21.1792 22.5378 21.6892 22.1135 22.1135C21.6892 22.5378 21.1792 22.75 20.5833 22.75H5.41667ZM5.41667 19.5833C5.41667 20.1356 5.86438 20.5833 6.41667 20.5833H19.5833C20.1356 20.5833 20.5833 20.1356 20.5833 19.5833V6.41667C20.5833 5.86438 20.1356 5.41667 19.5833 5.41667H6.41667C5.86438 5.41667 5.41667 5.86438 5.41667 6.41667V19.5833ZM7.7 16.8167C7.20557 17.4759 7.67595 18.4167 8.5 18.4167H17.5C18.324 18.4167 18.7944 17.4759 18.3 16.8167L16.2375 14.0667C15.8375 13.5333 15.0375 13.5333 14.6375 14.0667L12.9875 16.2667C12.5875 16.8 11.7875 16.8 11.3875 16.2667L10.55 15.15C10.15 14.6167 9.35 14.6167 8.95 15.15L7.7 16.8167Z",fill:"#1EFF81"})],-1),Qt={class:"mr-2"},Xt=i("span",{class:"whitespace-nowrap mr-2"},"نمونه کار",-1),Yt={class:"w-full mb-[10px] flex flex-row justify-start items-center"},te=i("svg",{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[i("path",{d:"M4.58329 20.1667L0.916626 10.0834L5.49996 7.33337V1.83337H9.16663V7.33337L13.75 10.0834L10.0833 20.1667H4.58329ZM15.5833 20.1667C15.3236 20.1667 15.1059 20.0789 14.9302 19.9032C14.7545 19.7275 14.6666 19.5098 14.6666 19.25C14.6666 18.9903 14.7545 18.7726 14.9302 18.5969C15.1059 18.4212 15.3236 18.3334 15.5833 18.3334H18.3333V16.5H15.5833C15.3236 16.5 15.1059 16.4122 14.9302 16.2365C14.7545 16.0608 14.6666 15.8431 14.6666 15.5834C14.6666 15.3237 14.7545 15.1059 14.9302 14.9302C15.1059 14.7546 15.3236 14.6667 15.5833 14.6667H18.3333V12.8334H15.5833C15.3236 12.8334 15.1059 12.7455 14.9302 12.5698C14.7545 12.3941 14.6666 12.1764 14.6666 11.9167C14.6666 11.657 14.7545 11.4393 14.9302 11.2636C15.1059 11.0879 15.3236 11 15.5833 11H18.3333V9.16671H15.5833C15.3236 9.16671 15.1059 9.07886 14.9302 8.90317C14.7545 8.72747 14.6666 8.50976 14.6666 8.25004C14.6666 7.99032 14.7545 7.77261 14.9302 7.59692C15.1059 7.42122 15.3236 7.33337 15.5833 7.33337H18.3333V5.50004H15.5833C15.3236 5.50004 15.1059 5.41219 14.9302 5.2365C14.7545 5.0608 14.6666 4.8431 14.6666 4.58337C14.6666 4.32365 14.7545 4.10594 14.9302 3.93025C15.1059 3.75455 15.3236 3.66671 15.5833 3.66671H19.25C19.7541 3.66671 20.1857 3.84622 20.5448 4.20525C20.9038 4.56428 21.0833 4.99587 21.0833 5.50004V18.3334C21.0833 18.8375 20.9038 19.2691 20.5448 19.6282C20.1857 19.9872 19.7541 20.1667 19.25 20.1667H15.5833ZM5.86663 18.3334H8.79996L11.5041 10.8625L8.66246 9.16671H6.00413L3.16246 10.8625L5.86663 18.3334Z",fill:"#1EFF81"})],-1),ee={class:"flex flex-row justify-start items-start flex-grow whitespace-nowrap mr-2"},se={class:"whitespace-nowrap text-ellipsis w-full"},ie={class:"w-full mb-[10px] flex flex-row justify-start items-center"},ne=i("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[i("path",{d:"M17.657 16.657L13.414 20.9C13.2284 21.0857 13.0081 21.233 12.7656 21.3336C12.523 21.4341 12.2631 21.4859 12.0005 21.4859C11.738 21.4859 11.478 21.4341 11.2354 21.3336C10.9929 21.233 10.7726 21.0857 10.587 20.9L6.343 16.657C5.22422 15.5381 4.46234 14.1127 4.15369 12.5608C3.84504 11.009 4.00349 9.40047 4.60901 7.93868C5.21452 6.4769 6.2399 5.22749 7.55548 4.34846C8.87107 3.46943 10.4178 3.00024 12 3.00024C13.5822 3.00024 15.1289 3.46943 16.4445 4.34846C17.7601 5.22749 18.7855 6.4769 19.391 7.93868C19.9965 9.40047 20.155 11.009 19.8463 12.5608C19.5377 14.1127 18.7758 15.5381 17.657 16.657Z",stroke:"#1EFF81","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),i("path",{d:"M15 11C15 11.7956 14.6839 12.5587 14.1213 13.1213C13.5587 13.6839 12.7956 14 12 14C11.2044 14 10.4413 13.6839 9.87868 13.1213C9.31607 12.5587 9 11.7956 9 11C9 10.2044 9.31607 9.44129 9.87868 8.87868C10.4413 8.31607 11.2044 8 12 8C12.7956 8 13.5587 8.31607 14.1213 8.87868C14.6839 9.44129 15 10.2044 15 11Z",stroke:"#1EFF81","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),le={class:"mr-2"},ae=i("div",{class:"text-white text-center text-[20px] leading-[30px]"},"پروفایل",-1),I=_({__name:"ArtistDesktopItem",props:{artist:{type:Object,required:!0}},setup(e){const t=e,l=j(),s=et();s.locale("fa"),s.extend(Y),s.extend(tt);const n=A(()=>t.artist.avatar?t.artist.avatar:"/images/artist/2.png"),o=()=>{l.push(`/artists/${t.artist.id}`)},m=u=>{t.artist.is_bookmarked=u};A(()=>t.artist.created_at==""?"-":s(t.artist.created_at).locale("fa").fromNow());const d=A(()=>t.artist.services.length==0?"تخصصی انتخاب نشده":t.artist.services.map(u=>u.title).join(" , "));return(u,h)=>(a(),c("div",{onClick:o,class:"min-h-[531px] mx-[10px] min-w-[384px] w-full flex rounded-[8px] px-[10px] py-[10px] mb-[25px]"},[i("div",qt,[i("img",{src:p(n),alt:e.artist.full_name,class:"w-full h-[275px] rounded-t-[8px]"},null,8,zt),i("div",Rt,[i("div",Wt,[i("h1",Jt,x(e.artist.full_name),1),r(st,{onBookmark:m,bookmarked:e.artist.is_bookmarked},null,8,["bookmarked"])]),i("div",Ot,[Kt,i("span",Qt,x(e.artist.portfolios_count),1),Xt]),i("div",Yt,[te,i("div",ee,[i("span",se,x(p(d)),1)])]),i("div",ie,[ne,i("span",le,x(e.artist.address),1)]),r(it,{class:"mt-[24px] rounded-[8px]",onClick:o},{default:v(()=>[ae]),_:1})])])]))}}),oe={class:"w-full flex flex-col items-start justify-start bg-[#EBF3F580] py-[64px] px-[64px]"},re=i("div",{class:"w-full flex justify-center"},[i("div",{class:"text-[#133C3E] font-semibold text-center text-[40px] max-w-[60%] w-full"}," با نزدیک ترین هنرمندان شهر خود آشناشوید ")],-1),ce={class:"w-full mt-[40px]"},ue=_({__name:"NearestArtistDesktopListBox",setup(e){const t=f([]),l=f({direction:"rtl",autoWidth:!0,pagination:!1,arrows:!0}),s=T(),n=async()=>{const o=s.lat,m=s.lng;setTimeout(async()=>{var h;let d="/nearest";o&&m&&(d+=`?lat=${o}&lng=${m}`);const u=await B(d,{method:"GET"});u.data.value&&(t.value=(h=u.data.value)==null?void 0:h.data)},500)};return b(()=>{$(()=>{n()})}),C(()=>s.lat,n),C(()=>s.lng,n),(o,m)=>{const d=I;return a(),c("div",oe,[re,i("div",ce,[r(p(D),{options:p(l),"aria-label":""},{default:v(()=>[(a(!0),c(S,null,L(p(t),(u,h)=>(a(),y(p(H),{key:h},{default:v(()=>[r(d,{id:u.id,artist:u},null,8,["id","artist"])]),_:2},1024))),128))]),_:1},8,["options"])])])}}}),de={class:"w-full flex flex-col items-start justify-start bg-white py-[64px] px-[64px]"},me=i("div",{class:"w-full flex justify-center"},[i("div",{class:"text-[#133C3E] font-semibold text-center text-[40px] max-w-[60%] w-full"}," هنرمندان ")],-1),pe={class:"w-full mt-[40px]"},_e=_({__name:"RandomArtistDesktopListBox",setup(e){const t=f([]),l=f({direction:"rtl",autoWidth:!0,pagination:!1,arrows:!0}),s=T(),n=async()=>{const o=s.lat,m=s.lng;setTimeout(async()=>{var h;let d="/nearest";o&&m&&(d+=`?lat=${o}&lng=${m}`);const u=await B(d,{method:"GET"});u.data.value&&(t.value=(h=u.data.value)==null?void 0:h.data)},500)};return b(()=>{$(()=>{n()})}),C(()=>s.lat,n),C(()=>s.lng,n),(o,m)=>{const d=I;return a(),c("div",de,[me,i("div",pe,[r(p(D),{options:p(l),"aria-label":""},{default:v(()=>[(a(!0),c(S,null,L(p(t),(u,h)=>(a(),y(p(H),{key:h},{default:v(()=>[r(d,{id:u.id,artist:u},null,8,["id","artist"])]),_:2},1024))),128))]),_:1},8,["options"])])])}}}),xe={class:"flex w-full flex-col px-[23px] py-[10px] h-full md:hidden"},fe={class:"hidden w-full flex-col h-full md:flex"},Ze=_({__name:"index",setup(e){const{isMobile:t}=z(),l=F("seenIntro",{maxAge:60*60*24*1e4}),s=j();return E().hook("page:finish",()=>{t&&(!l||!l.value)&&(l.value=!0,s.replace("/intro"))}),(o,m)=>{const d=dt;return a(),c(S,null,[i("div",xe,[r(ft,{class:"mb-15"}),r(d,{class:"mb-15"}),r(bt,{class:"mb-10"}),r(Mt,{class:"mb-15"}),r(Nt,{class:"mb-15"})]),i("div",fe,[r(Ht,{class:"mb-10"}),r(Ut,{class:"mb-10"}),r(ue,{class:"mb-10"}),r(_e,{class:"mb-10"})])],64)}}});export{Ze as default};