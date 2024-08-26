import{f as H,s as L,r,g as X,o as x,c as h,a as o,b as c,j as _,P as C,i as l,t as v,F as q,k as O,C as z,Q as E,m as M,R as G,y as J,G as K}from"./entry.BhzJJFkY.js";import{B as Q}from"./BackIcon.zzzK3w4D.js";import{C as W}from"./CloseIcon.CYpG6E25.js";import{_ as Y,a as Z,b as ee,c as te}from"./ChooseCallNumberInput.vue.DocN3HX6.js";import{u as se}from"./useCustomFetch.CO6-WbY-.js";import"./_plugin-vue_export-helper.DlAUqK2U.js";import"./ServiceItem.vue.6XCD4y-h.js";import"./ArrowUpIcon.4y5lopA1.js";import"./DoneCheckIcon.CkoRlOlF.js";import"./Modal.vue.4aqS48RY.js";import"./CheckBox.vue.Dst8rdU_.js";import"./Auth.9DilZTvr.js";import"./fetch.D3fBeFz4.js";const oe={class:"mt-[20px] w-full flex flex-col items-start justify-start pb-[108px] relative"},le={class:"w-full relative flex flex-row items-center justify-center py-[23px]"},ae=o("div",{class:"font-semibold text-[16px] text-[#141414] leading-[24px]"},"نمونه کار",-1),ne={class:"w-full flex flex-col my-[21px]"},ie={class:"w-full flex flex-col gap-[12px] px-[14px] border-b border-b-[#A9A7A7]"},re={class:"w-full flex flex-row items-start justify-between gap-[12px]"},ce={class:"w-full flex-col justify-start items-start"},pe=o("div",{class:"font-medium text-right text-black text-[16px] leading-[21px]"},"عنوان",-1),ue={class:"w-full text-right text-[#828282] text-[14px] font-medium leading-[21px]"},de=["src"],me={class:"w-full flex flex-row justify-start items-start gap-[12px] mt-[7px] flex-wrap"},xe=["src"],fe={class:"w-[80px] h-[80px] flex flex-col justify-center items-center px-[10px] absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,.5)]"},he={class:"h-[5px] w-full ltr-dir bg-white rounded-[5px] relative"},_e={class:"text-center text-white text-[12px] mt-2"},ve={class:"w-full flex flex-row items-start justify-between gap-[12px] mt-[7px]"},ge={class:"w-full flex-col justify-start items-start"},be=o("div",{class:"font-medium text-right text-black text-[16px] leading-[21px]"},"افزودن توضیحات",-1),we={class:"w-full text-right text-[#828282] text-[14px] font-medium leading-[21px]"},ye={class:"w-full flex flex-col"},Be=H({__name:"create",setup(Ce){const g=K(),b=L(),w=r(),e=r({title:"",description:"",maintenance:"",service:null,price:0,discount_price:0,has_tel:!1,has_phone_number:!1,second_phone_number:"",images:[]}),p=r([]),u=r([]),d=r([]),m=r([]),f=r([]),k=()=>{b.replace("/panel/artist/portfolios")},j=t=>{e.value.price=t},F=t=>{e.value.discount_price=t},U=t=>{e.value.second_phone_number=t},P=t=>{e.value.has_phone_number=t},R=t=>{e.value.has_tel=t},V=()=>{var t;(t=w.value)==null||t.click()},A=async t=>{var a;u.value=[],p.value=[];const s=(a=t.target)==null?void 0:a.files;if(s.length!=0){for(let i=0;i<s.length;i++){const n=new FileReader;n.onload=()=>{p.value.push(n.result)},n.readAsDataURL(s[i])}u.value=s,await T()}},N=t=>{p.value.splice(t,1),m.value.splice(t,1)},T=async()=>{const t=u.value.length;d.value=Array(t).fill("0%"),m.value=Array(t).fill(null),f.value=Array(t).fill(!0);for(let s=0;s<t;s++)await I(u.value[s],s)},I=async(t,s)=>{const a=E(),i=new FormData;i.append("file",t),i.append("type","portfolio");const n=new XMLHttpRequest,B=z("XSRF-TOKEN");n.open("post",a.public.uploadURL,!0),n.withCredentials=!0,n.setRequestHeader("accept","application/json"),n.setRequestHeader("X-Xsrf-Token",B.value),n.upload.onprogress=function(y){const D=y.loaded/y.total*100;d.value[s]=D+"%"},n.onreadystatechange=function(){n.readyState},n.onload=()=>{n.status===200&&(m.value[s]=JSON.parse(n.responseText),setTimeout(()=>{f.value[s]=!1},1e3))},n.send(i)},S=X(()=>e.value.images.length>0?e.value.images[0]:"/panel/choose-image.png"),$=async()=>{var a;const t={title:e.value.title,description:e.value.description,maintenance:e.value.maintenance,service_id:(a=e.value.service)==null?void 0:a.id,price:e.value.price,discount_price:e.value.discount_price,has_tel:e.value.has_tel,has_phone_number:e.value.has_phone_number,second_phone_number:e.value.second_phone_number,images:m.value.map(i=>i.url)},s=await se("/own/portfolios",{method:"POST",body:t});s.error.value&&g.$toast.error("متاسفانه خطایی رخ داده است"),s.data.value&&(g.$toast.success("نمونه کار با موفقیت ثبت شد"),await b.push("/panel/artist/portfolios"))};return(t,s)=>(x(),h("div",oe,[o("div",le,[ae,c(Q,{onClick:k,class:"absolute left-[30px]"})]),o("div",ne,[o("div",ie,[o("div",re,[o("div",ce,[pe,_(o("input",{"onUpdate:modelValue":s[0]||(s[0]=a=>l(e).title=a),class:"w-full px-[10px] py-[4px] mx-[10px] mt-[10px] outline-none focus:outline-none text-[16px]",placeholder:"کراتینه مو,کاشت مژه و...",maxlength:"40"},null,512),[[C,l(e).title]]),o("span",ue,"40 / "+v(l(e).title.length),1)]),o("img",{onClick:V,src:l(S),alt:"",class:"w-[80px] h-[80px]"},null,8,de),o("input",{onChange:A,type:"file",hidden:"",multiple:"",accept:"image/png, images/jpeg",ref_key:"galleryChooser",ref:w},null,544)]),o("div",me,[(x(!0),h(q,null,O(l(p),(a,i)=>(x(),h("div",{class:"relative",key:i},[(x(),M(W,{key:0,onClick:n=>N(i),class:"absolute top-[-12px] right-[-12px] z-10"},null,8,["onClick"])),o("img",{class:"w-[80px] h-[80px]",src:a,alt:"",onClick:s[1]||(s[1]=()=>{})},null,8,xe),_(o("div",fe,[o("div",he,[o("div",{class:J(`bg-green-300 rounded-[5px] h-[5px] w-[${l(d)[i]}]`)},null,2),o("div",_e,v(l(d)[i]),1)])],512),[[G,l(f)[i]]])]))),128))]),o("div",ve,[o("div",ge,[be,_(o("textarea",{"onUpdate:modelValue":s[2]||(s[2]=a=>l(e).description=a),class:"w-full px-[10px] py-[4px] mx-[10px] mt-[10px] outline-none focus:outline-none text-[16px]",placeholder:"کراتینه مو یک روش موثر برای صافی، درخشندگی و شادابی موهای فر ...",maxlength:"200",rows:"2"},`\r
          `,512),[[C,l(e).description]]),o("span",we,"200 / "+v(l(e).description.length),1)])])]),o("div",ye,[c(Y,{modelValue:l(e).service,"onUpdate:modelValue":s[3]||(s[3]=a=>l(e).service=a)},null,8,["modelValue"]),c(Z,{modelValue:l(e).maintenance,"onUpdate:modelValue":s[4]||(s[4]=a=>l(e).maintenance=a)},null,8,["modelValue"]),c(ee,{"has-tel":l(e).has_tel,"has-phone-number":l(e).has_phone_number,"second-phone-number":l(e).second_phone_number,"onUpdate:hasTel":R,"onUpdate:hasPhoneNumber":P,"onUpdate:secondPhoneNumber":U},null,8,["has-tel","has-phone-number","second-phone-number"]),c(te,{price:l(e).price,"discount-price":l(e).discount_price,"onUpdate:price":j,"onUpdate:discountPrice":F},null,8,["price","discount-price"])])]),o("button",{onClick:$,class:"absolute bottom-[30px] left-[22px] right-[22px] cursor-pointer font-semibold text-center text-[14px] leading-[22px] flex justify-center items-center text-white bg-[#FF3CA0] mt-[10px] rounded-full h-[44px]"}," انتشار ")]))}});export{Be as default};
