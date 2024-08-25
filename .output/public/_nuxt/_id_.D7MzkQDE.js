import{f as J,s as K,z as Q,r,g as W,v as Y,x as Z,o as c,c as p,a as o,b as u,j as v,Q as j,i as a,t as g,F as R,k as U,C as ee,R as te,m as se,q as oe,S as ae,y as le,H as ne}from"./entry.BZBDKKIU.js";import{B as ie}from"./BackIcon.C0Ymq8Pt.js";import{C as F}from"./CloseIcon.D3jclcHp.js";import{_ as re,a as ce,b as ue,c as pe}from"./ChooseCallNumberInput.vue.DTki-IpL.js";import{u as I}from"./useCustomFetch.Kl33KG4X.js";import"./_plugin-vue_export-helper.DlAUqK2U.js";import"./ServiceItem.vue.Cxl-8Amf.js";import"./ArrowUpIcon.C_DBot5Z.js";import"./DoneCheckIcon.CEdYJ3I8.js";import"./Modal.vue.DR1Z-I9v.js";import"./CheckBox.vue.B2hWPfZ6.js";import"./fetch.BsvUWtk-.js";const de={class:"mt-[20px] w-full flex flex-col items-start justify-start pb-[108px] relative"},me={class:"w-full relative flex flex-row items-center justify-center py-[23px]"},xe=o("div",{class:"font-semibold text-[16px] text-[#141414] leading-[24px]"},"نمونه کار",-1),fe={class:"w-full flex flex-col my-[21px]"},he={class:"w-full flex flex-col gap-[12px] px-[14px] border-b border-b-[#A9A7A7]"},_e={class:"w-full flex flex-row items-start justify-between gap-[12px]"},ve={class:"w-full flex-col justify-start items-start"},ge=o("div",{class:"font-medium text-right text-black text-[16px] leading-[21px]"},"عنوان",-1),be={class:"w-full text-right text-[#828282] text-[14px] font-medium leading-[21px]"},we=["src"],ye={class:"w-full flex flex-row justify-start items-start gap-[12px] mt-[7px] flex-wrap"},Ce=["src"],ke=["src"],je={class:"w-[80px] h-[80px] flex flex-col justify-center items-center px-[10px] absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,.5)]"},Re={class:"h-[5px] w-full ltr-dir bg-white rounded-[5px] relative"},Ue={class:"text-center text-white text-[12px] mt-2"},Fe={class:"w-full flex flex-row items-start justify-between gap-[12px] mt-[7px]"},Ie={class:"w-full flex-col justify-start items-start"},Pe=o("div",{class:"font-medium text-right text-black text-[16px] leading-[21px]"},"افزودن توضیحات",-1),Te={class:"w-full text-right text-[#828282] text-[14px] font-medium leading-[21px]"},Ve={class:"w-full flex flex-col"},Ge=J({__name:"[id]",setup($e){const b=ne(),w=K(),y=Q().params.id,C=r(),e=r({title:"",description:"",maintenance:"",service:null,price:0,discount_price:0,has_tel:!1,has_phone_number:!1,second_phone_number:"",images:[]}),d=r([]),m=r([]),x=r([]),f=r([]),h=r([]),_=r([]),P=()=>{w.replace("/panel/artist/portfolios")},T=s=>{e.value.price=s},V=s=>{e.value.discount_price=s},$=s=>{e.value.second_phone_number=s},N=s=>{e.value.has_phone_number=s},A=s=>{e.value.has_tel=s},S=()=>{var s;(s=C.value)==null||s.click()},B=async s=>{var l;x.value=[],m.value=[];const t=(l=s.target)==null?void 0:l.files;if(t.length!=0){for(let n=0;n<t.length;n++){const i=new FileReader;i.onload=()=>{m.value.push(i.result)},i.readAsDataURL(t[n])}x.value=t,await z()}},H=s=>{m.value.splice(s,1),h.value.splice(s,1)},D=s=>{d.value.splice(s,1)},q=s=>!_.value[s],z=async()=>{const s=x.value.length;f.value=Array(s).fill("0%"),h.value=Array(s).fill(null),_.value=Array(s).fill(!0);for(let t=0;t<s;t++)await L(x.value[t],t)},L=async(s,t)=>{const l=te(),n=new FormData;n.append("file",s),n.append("type","portfolio");const i=new XMLHttpRequest,O=ee("XSRF-TOKEN");i.open("post",l.public.uploadURL,!0),i.withCredentials=!0,i.setRequestHeader("accept","application/json"),i.setRequestHeader("X-Xsrf-Token",O.value),i.upload.onprogress=function(k){const G=k.loaded/k.total*100;f.value[t]=G+"%"},i.onreadystatechange=function(){i.readyState},i.onload=()=>{i.status===200&&(h.value[t]=JSON.parse(i.responseText),setTimeout(()=>{_.value[t]=!1},1e3))},i.send(n)},X=W(()=>e.value.images.length>0?e.value.images[0]:"/panel/choose-image.png"),E=async()=>{var l;const s={title:e.value.title,description:e.value.description,maintenance:e.value.maintenance,service_id:(l=e.value.service)==null?void 0:l.id,price:e.value.price,discount_price:e.value.discount_price,has_tel:e.value.has_tel,has_phone_number:e.value.has_phone_number,second_phone_number:e.value.second_phone_number,images:[...d.value,...h.value.map(n=>n.url)]},t=await I(`/own/portfolios/${y}`,{method:"PUT",body:s});t.error.value&&b.$toast.error("متاسفانه خطایی رخ داده است"),t.data.value&&(b.$toast.success("نمونه کار با موفقیت ثبت شد"),await w.push("/panel/artist/portfolios"))},M=async()=>{const s=await I(`/own/portfolios/${y}`,{method:"GET"});if(s.data.value){const t=s.data.value.data;e.value.title=t.title,e.value.description=t.description,e.value.maintenance=t.maintenance,e.value.price=t.price,e.value.discount_price=t.discount_price,e.value.has_tel=t.has_tel,e.value.has_phone_number=t.has_phone_number,e.value.second_phone_number=t.showing_phone_number,e.value.service=t.service,d.value=t.images}};return Y(()=>{Z(()=>{M()})}),(s,t)=>(c(),p("div",de,[o("div",me,[xe,u(ie,{onClick:P,class:"absolute left-[30px]"})]),o("div",fe,[o("div",he,[o("div",_e,[o("div",ve,[ge,v(o("input",{"onUpdate:modelValue":t[0]||(t[0]=l=>a(e).title=l),class:"w-full px-[10px] py-[4px] mx-[10px] mt-[10px] outline-none focus:outline-none text-[16px]",placeholder:"کراتینه مو,کاشت مژه و...",maxlength:"40"},null,512),[[j,a(e).title]]),o("span",be,"40 / "+g(a(e).title.length),1)]),o("img",{onClick:S,src:a(X),alt:"",class:"w-[80px] h-[80px]"},null,8,we),o("input",{onChange:B,type:"file",hidden:"",multiple:"",accept:"image/png, images/jpeg",ref_key:"galleryChooser",ref:C},null,544)]),o("div",ye,[(c(!0),p(R,null,U(a(d),(l,n)=>(c(),p("div",{class:"relative",key:n},[u(F,{onClick:i=>D(n),class:"absolute top-[-12px] right-[-12px] z-10"},null,8,["onClick"]),o("img",{class:"w-[80px] h-[80px]",src:l,alt:""},null,8,Ce)]))),128)),(c(!0),p(R,null,U(a(m),(l,n)=>(c(),p("div",{class:"relative",key:n},[q(n)?(c(),se(F,{key:0,onClick:i=>H(n),class:"absolute top-[-12px] right-[-12px] z-10"},null,8,["onClick"])):oe("",!0),o("img",{class:"w-[80px] h-[80px]",src:l,alt:""},null,8,ke),v(o("div",je,[o("div",Re,[o("div",{class:le(`bg-green-300 rounded-[5px] h-[5px] w-[${a(f)[n]}]`)},null,2),o("div",Ue,g(a(f)[n]),1)])],512),[[ae,a(_)[n]]])]))),128))]),o("div",Fe,[o("div",Ie,[Pe,v(o("textarea",{"onUpdate:modelValue":t[1]||(t[1]=l=>a(e).description=l),class:"w-full px-[10px] py-[4px] mx-[10px] mt-[10px] outline-none focus:outline-none text-[16px]",placeholder:"کراتینه مو یک روش موثر برای صافی، درخشندگی و شادابی موهای فر ...",maxlength:"200",rows:"2"},`\r
          `,512),[[j,a(e).description]]),o("span",Te,"200 / "+g(a(e).description.length),1)])])]),o("div",Ve,[u(re,{modelValue:a(e).service,"onUpdate:modelValue":t[2]||(t[2]=l=>a(e).service=l)},null,8,["modelValue"]),u(ce,{modelValue:a(e).maintenance,"onUpdate:modelValue":t[3]||(t[3]=l=>a(e).maintenance=l)},null,8,["modelValue"]),u(ue,{"has-tel":a(e).has_tel,"has-phone-number":a(e).has_phone_number,"second-phone-number":a(e).second_phone_number,"onUpdate:hasTel":A,"onUpdate:hasPhoneNumber":N,"onUpdate:secondPhoneNumber":$},null,8,["has-tel","has-phone-number","second-phone-number"]),u(pe,{price:a(e).price,"discount-price":a(e).discount_price,"onUpdate:price":T,"onUpdate:discountPrice":V},null,8,["price","discount-price"])])]),o("button",{onClick:E,class:"absolute bottom-[30px] left-[22px] right-[22px] cursor-pointer font-semibold text-center text-[14px] leading-[22px] flex justify-center items-center text-white bg-[#FF3CA0] mt-[10px] rounded-full h-[44px]"}," انتشار ")]))}});export{Ge as default};