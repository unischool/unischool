import{z as F,c as d,h as V,A as K,r as A,a6 as G,R as N,G as J,g as W,E as O,ab as I,w as R,o as Z,S as z,I as b,Y as m,ac as ee,aa as te,ad as le}from"./index.c648d158.js";import{u as oe,a as ne,v as ie,f as re,h as Y,i as se}from"./use-meta.ca21dbf0.js";let p=[],T=[];function j(e){T=T.filter(t=>t!==e)}function ge(e){j(e),T.push(e)}function ye(e){j(e),T.length===0&&p.length!==0&&(p[p.length-1](),p=[])}function qe(e){T.length===0?e():p.push(e)}function Le(e){p=p.filter(t=>t!==e)}var Te=F({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const l=d(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>V("div",{class:l.value},K(t.default))}}),ke=F({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const l=d(()=>parseInt(e.lines,10)),o=d(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(l.value===1?" ellipsis":"")),i=d(()=>e.lines!==void 0&&l.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":l.value}:null);return()=>V("div",{style:i.value,class:o.value},K(t.default))}});const ae={dark:{type:Boolean,default:null}};function ue(e,t){return d(()=>e.dark===null?t.dark.isActive:e.dark)}var Ee=F({name:"QItem",props:{...ae,...oe,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:l}){const{proxy:{$q:o}}=W(),i=ue(e,o),{hasLink:f,linkAttrs:s,linkClass:a,linkTag:c,navigateOnClick:k}=ne(),u=A(null),h=A(null),g=d(()=>e.clickable===!0||f.value===!0||e.tag==="label"),v=d(()=>e.disable!==!0&&g.value===!0),y=d(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(i.value===!0?" q-item--dark":"")+(f.value===!0&&e.active===null?a.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(v.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),E=d(()=>{if(e.insetLevel===void 0)return null;const r=o.lang.rtl===!0?"Right":"Left";return{["padding"+r]:16+e.insetLevel*56+"px"}});function S(r){v.value===!0&&(h.value!==null&&(r.qKeyEvent!==!0&&document.activeElement===u.value?h.value.focus():document.activeElement===h.value&&u.value.focus()),k(r))}function x(r){if(v.value===!0&&G(r,[13,32])===!0){N(r),r.qKeyEvent=!0;const M=new MouseEvent("click",r);M.qKeyEvent=!0,u.value.dispatchEvent(M)}l("keyup",r)}function n(){const r=J(t.default,[]);return v.value===!0&&r.unshift(V("div",{class:"q-focus-helper",tabindex:-1,ref:h})),r}return()=>{const r={ref:u,class:y.value,style:E.value,role:"listitem",onClick:S,onKeyup:x};return v.value===!0?(r.tabindex=e.tabindex||"0",Object.assign(r,s.value)):g.value===!0&&(r["aria-disabled"]="true"),V(c.value,r,n())}}});function Se(e,t,l){let o;function i(){o!==void 0&&(I.remove(o),o=void 0)}return O(()=>{e.value===!0&&i()}),{removeFromHistory:i,addToHistory(){o={condition:()=>l.value===!0,handler:t},I.add(o)}}}const xe={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},_e=["beforeShow","show","beforeHide","hide"];function Ce({showing:e,canShow:t,hideOnRouteChange:l,handleShow:o,handleHide:i,processOnMount:f}){const s=W(),{props:a,emit:c,proxy:k}=s;let u;function h(n){e.value===!0?y(n):g(n)}function g(n){if(a.disable===!0||n!==void 0&&n.qAnchorHandled===!0||t!==void 0&&t(n)!==!0)return;const r=a["onUpdate:modelValue"]!==void 0;r===!0&&(c("update:modelValue",!0),u=n,z(()=>{u===n&&(u=void 0)})),(a.modelValue===null||r===!1)&&v(n)}function v(n){e.value!==!0&&(e.value=!0,c("beforeShow",n),o!==void 0?o(n):c("show",n))}function y(n){if(a.disable===!0)return;const r=a["onUpdate:modelValue"]!==void 0;r===!0&&(c("update:modelValue",!1),u=n,z(()=>{u===n&&(u=void 0)})),(a.modelValue===null||r===!1)&&E(n)}function E(n){e.value!==!1&&(e.value=!1,c("beforeHide",n),i!==void 0?i(n):c("hide",n))}function S(n){a.disable===!0&&n===!0?a["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):n===!0!==e.value&&(n===!0?v:E)(u)}R(()=>a.modelValue,S),l!==void 0&&ie(s)===!0&&R(()=>k.$route.fullPath,()=>{l.value===!0&&e.value===!0&&y()}),f===!0&&Z(()=>{S(a.modelValue)});const x={show:g,hide:y,toggle:h};return Object.assign(k,x),x}const ce=[null,document,document.body,document.scrollingElement,document.documentElement];function Ve(e,t){let l=re(t);if(l===void 0){if(e==null)return window;l=e.closest(".scroll,.scroll-y,.overflow-auto")}return ce.includes(l)?window:l}function de(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function fe(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let _;function Be(){if(_!==void 0)return _;const e=document.createElement("p"),t=document.createElement("div");Y(e,{width:"100%",height:"200px"}),Y(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const l=e.offsetWidth;t.style.overflow="scroll";let o=e.offsetWidth;return l===o&&(o=t.clientWidth),t.remove(),_=l-o,_}function ve(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let q=0,B,H,L,P=!1,$,Q,U,w=null;function me(e){we(e)&&N(e)}function we(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=ee(e),l=e.shiftKey&&!e.deltaX,o=!l&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),i=l||o?e.deltaY:e.deltaX;for(let f=0;f<t.length;f++){const s=t[f];if(ve(s,o))return o?i<0&&s.scrollTop===0?!0:i>0&&s.scrollTop+s.clientHeight===s.scrollHeight:i<0&&s.scrollLeft===0?!0:i>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function X(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function C(e){P!==!0&&(P=!0,requestAnimationFrame(()=>{P=!1;const{height:t}=e.target,{clientHeight:l,scrollTop:o}=document.scrollingElement;(L===void 0||t!==window.innerHeight)&&(L=l-t,document.scrollingElement.scrollTop=o),o>L&&(document.scrollingElement.scrollTop-=Math.ceil((o-L)/8))}))}function D(e){const t=document.body,l=window.visualViewport!==void 0;if(e==="add"){const{overflowY:o,overflowX:i}=window.getComputedStyle(t);B=fe(window),H=de(window),$=t.style.left,Q=t.style.top,U=window.location.href,t.style.left=`-${B}px`,t.style.top=`-${H}px`,i!=="hidden"&&(i==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),o!=="hidden"&&(o==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,b.is.ios===!0&&(l===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",C,m.passiveCapture),window.visualViewport.addEventListener("scroll",C,m.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",X,m.passiveCapture))}b.is.desktop===!0&&b.is.mac===!0&&window[`${e}EventListener`]("wheel",me,m.notPassive),e==="remove"&&(b.is.ios===!0&&(l===!0?(window.visualViewport.removeEventListener("resize",C,m.passiveCapture),window.visualViewport.removeEventListener("scroll",C,m.passiveCapture)):window.removeEventListener("scroll",X,m.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=$,t.style.top=Q,window.location.href===U&&window.scrollTo(B,H),L=void 0)}function pe(e){let t="add";if(e===!0){if(q++,w!==null){clearTimeout(w),w=null;return}if(q>1)return}else{if(q===0||(q--,q>0))return;if(t="remove",b.is.ios===!0&&b.is.nativeMobile===!0){w!==null&&clearTimeout(w),w=setTimeout(()=>{D(t),w=null},100);return}}D(t)}function He(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,pe(t))}}}function Pe(){let e=null;const t=W();function l(){e!==null&&(clearTimeout(e),e=null)}return te(l),O(l),{removeTimeout:l,registerTimeout(o,i){l(),se(t)===!1&&(e=setTimeout(o,i))}}}function Fe(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),le.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function We(e,t,l){return l<=t?t:Math.min(l,Math.max(t,e))}function Me(e,t,l){if(l<=t)return t;const o=l-t+1;let i=t+(e-t)%o;return i<t&&(i=o+i),i===0?0:i}export{Ee as Q,ae as a,_e as b,Fe as c,ue as d,Pe as e,Ce as f,Se as g,We as h,He as i,Ve as j,de as k,fe as l,Be as m,Te as n,ke as o,qe as p,ye as q,Le as r,ge as s,Me as t,xe as u};