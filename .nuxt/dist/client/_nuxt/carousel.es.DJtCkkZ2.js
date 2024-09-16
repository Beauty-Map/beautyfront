import{q as K,r as v,Z as N,N as w,D as be,E as ye,$ as xe,s as _,h as q,a0 as fe,a1 as O,S as T,F as Ae}from"./entry.BwfMk_n7.js";/**
 * Vue 3 Carousel 0.3.3
 * (c) 2024
 * @license MIT
 */const d={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0,i18n:{ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"}},me={itemsToShow:{default:d.itemsToShow,type:Number},itemsToScroll:{default:d.itemsToScroll,type:Number},wrapAround:{default:d.wrapAround,type:Boolean},throttle:{default:d.throttle,type:Number},snapAlign:{default:d.snapAlign,validator(e){return["start","end","center","center-even","center-odd"].includes(e)}},transition:{default:d.transition,type:Number},breakpoints:{default:d.breakpoints,type:Object},autoplay:{default:d.autoplay,type:Number},pauseAutoplayOnHover:{default:d.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:d.mouseDrag,type:Boolean},touchDrag:{default:d.touchDrag,type:Boolean},dir:{default:d.dir,validator(e){return["rtl","ltr"].includes(e)}},i18n:{default:d.i18n,type:Object},settings:{default(){return{}},type:Object}};function Te({config:e,slidesCount:a}){const{snapAlign:n,wrapAround:l,itemsToShow:o=1}=e;if(l)return Math.max(a-1,0);let r;switch(n){case"start":r=a-o;break;case"end":r=a-1;break;case"center":case"center-odd":r=a-Math.ceil((o-.5)/2);break;case"center-even":r=a-Math.ceil(o/2);break;default:r=0;break}return Math.max(r,0)}function ke({config:e,slidesCount:a}){const{wrapAround:n,snapAlign:l,itemsToShow:o=1}=e;let r=0;if(n||o>a)return r;switch(l){case"start":r=0;break;case"end":r=o-1;break;case"center":case"center-odd":r=Math.floor((o-1)/2);break;case"center-even":r=Math.floor((o-2)/2);break;default:r=0;break}return r}function Z({val:e,max:a,min:n}){return a<n?e:Math.min(Math.max(e,n),a)}function Ce({config:e,currentSlide:a,slidesCount:n}){const{snapAlign:l,wrapAround:o,itemsToShow:r=1}=e;let g=a;switch(l){case"center":case"center-odd":g-=(r-1)/2;break;case"center-even":g-=(r-2)/2;break;case"end":g-=r-1;break}return o?g:Z({val:g,max:n-r,min:0})}function ge(e){return e?e.reduce((a,n)=>{var l;return n.type===Ae?[...a,...ge(n.children)]:((l=n.type)===null||l===void 0?void 0:l.name)==="CarouselSlide"?[...a,n]:a},[]):[]}function J({val:e,max:a,min:n=0}){return e>a?J({val:e-(a+1),max:a,min:n}):e<n?J({val:e+(a+1),max:a,min:n}):e}function _e(e,a){let n;return a?function(...l){const o=this;n||(e.apply(o,l),n=!0,setTimeout(()=>n=!1,a))}:e}function Oe(e,a){let n;return function(...l){n&&clearTimeout(n),n=setTimeout(()=>{e(...l),n=null},a)}}function Me(e="",a={}){return Object.entries(a).reduce((n,[l,o])=>n.replace(`{${l}}`,String(o)),e)}var je=K({name:"ARIA",setup(){const e=T("config",N(Object.assign({},d))),a=T("currentSlide",v(0)),n=T("slidesCount",v(0));return()=>O("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},Me(e.i18n.itemXofY,{currentSlide:a.value+1,slidesCount:n.value}))}}),Ne=K({name:"Carousel",props:me,setup(e,{slots:a,emit:n,expose:l}){var o;const r=v(null),g=v([]),h=v(0),f=v(0),i=N(Object.assign({},d));let p=Object.assign({},d),b;const u=v((o=e.modelValue)!==null&&o!==void 0?o:0),X=v(0),Q=v(0),k=v(0),M=v(0);let C,$;w("config",i),w("slidesCount",f),w("currentSlide",u),w("maxSlide",k),w("minSlide",M),w("slideWidth",h);function B(){b=Object.assign({},e.breakpoints),p=Object.assign(Object.assign(Object.assign({},p),e),{i18n:Object.assign(Object.assign({},p.i18n),e.i18n),breakpoints:void 0}),ee(p)}function D(){if(!b||!Object.keys(b).length)return;const t=Object.keys(b).map(s=>Number(s)).sort((s,S)=>+S-+s);let c=Object.assign({},p);t.some(s=>{const S=window.matchMedia(`(min-width: ${s}px)`).matches;return S&&(c=Object.assign(Object.assign({},c),b[s])),S}),ee(c)}function ee(t){Object.entries(t).forEach(([c,s])=>i[c]=s)}const te=Oe(()=>{D(),I(),j()},16);function j(){if(!r.value)return;const t=r.value.getBoundingClientRect();h.value=t.width/i.itemsToShow}function I(){f.value<=0||(Q.value=Math.ceil((f.value-1)/2),k.value=Te({config:i,slidesCount:f.value}),M.value=ke({config:i,slidesCount:f.value}),i.wrapAround||(u.value=Z({val:u.value,max:k.value,min:M.value})))}be(()=>{ye(()=>j()),setTimeout(()=>j(),1e3),D(),re(),window.addEventListener("resize",te,{passive:!0}),n("init")}),xe(()=>{$&&clearTimeout($),C&&clearInterval(C),window.removeEventListener("resize",te,{passive:!0})});let m=!1;const L={x:0,y:0},V={x:0,y:0},y=N({x:0,y:0}),P=v(!1),Y=v(!1),he=()=>{P.value=!0},Se=()=>{P.value=!1};function ne(t){["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||(m=t.type==="touchstart",m||t.preventDefault(),!(!m&&t.button!==0||x.value)&&(L.x=m?t.touches[0].clientX:t.clientX,L.y=m?t.touches[0].clientY:t.clientY,document.addEventListener(m?"touchmove":"mousemove",ae,!0),document.addEventListener(m?"touchend":"mouseup",ie,!0)))}const ae=_e(t=>{Y.value=!0,V.x=m?t.touches[0].clientX:t.clientX,V.y=m?t.touches[0].clientY:t.clientY;const c=V.x-L.x,s=V.y-L.y;y.y=s,y.x=c},i.throttle);function ie(){const t=i.dir==="rtl"?-1:1,c=Math.sign(y.x)*.4,s=Math.round(y.x/h.value+c)*t;if(s&&!m){const S=ve=>{window.removeEventListener("click",S,!0)};window.addEventListener("click",S,!0)}A(u.value-s),y.x=0,y.y=0,Y.value=!1,document.removeEventListener(m?"touchmove":"mousemove",ae,!0),document.removeEventListener(m?"touchend":"mouseup",ie,!0)}function re(){!i.autoplay||i.autoplay<=0||(C=setInterval(()=>{i.pauseAutoplayOnHover&&P.value||R()},i.autoplay))}function le(){C&&(clearInterval(C),C=null),re()}const x=v(!1);function A(t){const c=i.wrapAround?t:Z({val:t,max:k.value,min:M.value});u.value===c||x.value||(n("slide-start",{slidingToIndex:t,currentSlideIndex:u.value,prevSlideIndex:X.value,slidesCount:f.value}),x.value=!0,X.value=u.value,u.value=c,$=setTimeout(()=>{if(i.wrapAround){const s=J({val:c,max:k.value,min:0});s!==u.value&&(u.value=s,n("loop",{currentSlideIndex:u.value,slidingToIndex:t}))}n("update:modelValue",u.value),n("slide-end",{currentSlideIndex:u.value,prevSlideIndex:X.value,slidesCount:f.value}),x.value=!1,le()},i.transition))}function R(){A(u.value+i.itemsToScroll)}function H(){A(u.value-i.itemsToScroll)}const oe={slideTo:A,next:R,prev:H};w("nav",oe),w("isSliding",x);const se=_(()=>Ce({config:i,currentSlide:u.value,slidesCount:f.value}));w("slidesToScroll",se);const we=_(()=>{const t=i.dir==="rtl"?-1:1,c=se.value*h.value*t;return{transform:`translateX(${y.x-c}px)`,transition:`${x.value?i.transition:0}ms`,margin:i.wrapAround?`0 -${f.value*h.value}px`:"",width:"100%"}});function ue(){B(),D(),I(),j(),le()}Object.keys(me).forEach(t=>{["modelValue"].includes(t)||q(()=>e[t],ue)}),q(()=>e.modelValue,t=>{t!==u.value&&A(Number(t))}),q(f,I),n("before-init"),B();const ce={config:i,slidesCount:f,slideWidth:h,next:R,prev:H,slideTo:A,currentSlide:u,maxSlide:k,minSlide:M,middleSlide:Q};l({updateBreakpointsConfigs:D,updateSlidesData:I,updateSlideWidth:j,initDefaultConfigs:B,restartCarousel:ue,slideTo:A,next:R,prev:H,nav:oe,data:ce});const U=a.default||a.slides,W=a.addons,de=N(ce);return()=>{const t=ge(U==null?void 0:U(de)),c=(W==null?void 0:W(de))||[];t.forEach((z,F)=>z.props.index=F);let s=t;if(i.wrapAround){const z=t.map((G,E)=>fe(G,{index:-t.length+E,isClone:!0,key:`clone-before-${E}`})),F=t.map((G,E)=>fe(G,{index:t.length+E,isClone:!0,key:`clone-after-${E}`}));s=[...z,...t,...F]}g.value=t,f.value=Math.max(t.length,1);const S=O("ol",{class:"carousel__track",style:we.value,onMousedownCapture:i.mouseDrag?ne:null,onTouchstartPassiveCapture:i.touchDrag?ne:null},s),ve=O("div",{class:"carousel__viewport"},S);return O("section",{ref:r,class:{carousel:!0,"is-sliding":x.value,"is-dragging":Y.value,"is-hover":P.value,"carousel--rtl":i.dir==="rtl"},dir:i.dir,"aria-label":i.i18n.ariaGallery,tabindex:"0",onMouseenter:he,onMouseleave:Se},[ve,c,O(je)])}}}),pe;(function(e){e.arrowUp="arrowUp",e.arrowDown="arrowDown",e.arrowRight="arrowRight",e.arrowLeft="arrowLeft"})(pe||(pe={}));var De=K({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(e,{slots:a}){const n=T("config",N(Object.assign({},d))),l=T("currentSlide",v(0)),o=T("slidesToScroll",v(0)),r=T("isSliding",v(!1)),g=_(()=>e.index===l.value),h=_(()=>e.index===l.value-1),f=_(()=>e.index===l.value+1),i=_(()=>{const p=Math.floor(o.value),b=Math.ceil(o.value+n.itemsToShow-1);return e.index>=p&&e.index<=b});return()=>{var p;return O("li",{style:{width:`${100/n.itemsToShow}%`},class:{carousel__slide:!0,"carousel__slide--clone":e.isClone,"carousel__slide--visible":i.value,"carousel__slide--active":g.value,"carousel__slide--prev":h.value,"carousel__slide--next":f.value,"carousel__slide--sliding":r.value},"aria-hidden":!i.value},(p=a.default)===null||p===void 0?void 0:p.call(a,{isActive:g.value,isClone:e.isClone,isPrev:h.value,isNext:f.value,isSliding:r.value,isVisible:i.value}))}}});export{Ne as C,De as S};
