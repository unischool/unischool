import{Q as d}from"./QPage.023073e0.js";import{_ as i,d as c,U as n,c as u,M as s,N as p,O as l,a1 as o,S as a,W as t}from"./index.84926572.js";import"./render.18f06b7e.js";const m=c({name:"IndexPage",props:["courseItems"],setup(){const e=n();return{cid:u(()=>e.params.cid)}},methods:{}}),I={class:"row"},f={class:"col-12"},_={id:"header",class:"text-h6"},h={key:0,class:"p-text"},v=["innerHTML"];function g(e,r,$,k,y,B){return s(),p(d,{id:"c-page",class:"flex flex-center"},{default:l(()=>[o("div",I,[o("div",f,[o("div",_,a(e.$t(e.courseItems&&e.courseItems[e.cid]&&e.courseItems[e.cid].title)),1),e.courseItems&&e.courseItems[e.cid]&&!e.courseItems[e.cid].useHTML?(s(),t("p",h,a(e.$t(e.courseItems&&e.courseItems[e.cid]&&e.courseItems[e.cid].description)),1)):(s(),t("p",{key:1,innerHTML:e.$t(e.courseItems[e.cid].description)},null,8,v))])])]),_:1})}var H=i(m,[["render",g],["__scopeId","data-v-abfda374"]]);export{H as default};
