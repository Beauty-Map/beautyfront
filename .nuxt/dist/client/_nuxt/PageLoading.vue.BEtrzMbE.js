import{_ as l,x as c,W as p,o as s,c as a,a as n,L as i,q as y,b as d}from"./entry.BtNxfFXi.js";const m=""+new URL("logo.CWtAjNaY.png",import.meta.url).href,u={name:"SyncLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},data(){return{spinnerStyle:{backgroundColor:this.color,height:this.size,width:this.size,margin:this.margin,borderRadius:this.radius,display:"inline-block",animationName:"v-syncStretchDelay",animationDuration:"0.6s",animationIterationCount:"infinite",animationTimingFunction:"ease-in-out",animationFillMode:"both"},spinnerDelay1:{animationDelay:"0.07s"},spinnerDelay2:{animationDelay:"0.14s"},spinnerDelay3:{animationDelay:"0.21s"}}}},_={class:"v-spinner"};function f(o,r,t,S,e,x){return c((s(),a("div",_,[n("div",{class:"v-sync v-sync1",style:i([e.spinnerStyle,e.spinnerDelay1])},null,4),n("div",{class:"v-sync v-sync2",style:i([e.spinnerStyle,e.spinnerDelay2])},null,4),n("div",{class:"v-sync v-sync3",style:i([e.spinnerStyle,e.spinnerDelay3])},null,4)],512)),[[p,t.loading]])}const g=l(u,[["render",f]]),h={class:"splash_page fixed top-0 bottom-0 left-0 right-0 z-[100000000] flex flex-col justify-center items-center"},v=n("img",{src:m,alt:"Beauty Map"},null,-1),b=y({__name:"PageLoading",setup(o){return(r,t)=>(s(),a("div",h,[v,d(g,{class:"mt-8",loading:!0,color:"#fff",size:"20px",margin:"10px"})]))}});export{b as _};
