import{u as dt,a as ft,Q as le,b as Ot,c as Qt,g as Vt,v as Mt,d as Xe,e as Ht,f as _e}from"./QBtn.b1b61f6f.js";import{c as x,h as R,a as Qe,b as vt,d as At,e as Ue}from"./render.2da798fb.js";import{c as d,h as k,i as Ve,k as H,l as ve,r as E,w as L,m as me,g as N,n as Dt,s as Me,H as Ye,o as He,p as fe,q as O,t as W,u as Wt,P as Ft,v as mt,x as Rt,y as ie,z as ke,A as je,B as Ce,C as ze,D as Le,E as Nt,G as ht,I as It,J as Xt,K as re,a as Ut,d as pt,_ as bt,L as Q,M as F,N as C,f as _,O as de,Q as M,R as ae,S as Yt,U as Ke,V as Ge,W as Je,F as Ze,X as jt}from"./index.81fc0b4e.js";import{Q as Pe,u as Ae,a as De,b as Kt}from"./use-timeout.ac3e7e78.js";import"./QSpinner.9dba8d2c.js";var Gt=x({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:l}){const a=d(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>k("div",{class:a.value},R(l.default))}});const Jt=["top","middle","bottom"];var Zt=x({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:e=>Jt.includes(e)}},setup(e,{slots:l}){const a=d(()=>e.align!==void 0?{verticalAlign:e.align}:null),o=d(()=>{const t=e.outline===!0&&e.color||e.textColor;return`q-badge flex inline items-center no-wrap q-badge--${e.multiLine===!0?"multi":"single"}-line`+(e.outline===!0?" q-badge--outline":e.color!==void 0?` bg-${e.color}`:"")+(t!==void 0?` text-${t}`:"")+(e.floating===!0?" q-badge--floating":"")+(e.rounded===!0?" q-badge--rounded":"")+(e.transparent===!0?" q-badge--transparent":"")});return()=>k("div",{class:o.value,style:a.value,role:"status","aria-label":e.label},Qe(l.default,e.label!==void 0?[e.label]:[]))}}),et=x({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:l}){const a=d(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>k("div",{class:a.value,role:"toolbar"},R(l.default))}}),tt=x({name:"QBreadcrumbsEl",props:{...dt,label:String,icon:String,tag:{type:String,default:"span"}},emits:["click"],setup(e,{slots:l}){const{linkTag:a,linkAttrs:o,linkClass:t,navigateOnClick:n}=ft(),u=d(()=>({class:"q-breadcrumbs__el q-link flex inline items-center relative-position "+(e.disable!==!0?"q-link--focusable"+t.value:"q-breadcrumbs__el--disable"),...o.value,onClick:n})),v=d(()=>"q-breadcrumbs__el-icon"+(e.label!==void 0?" q-breadcrumbs__el-icon--with-label":""));return()=>{const c=[];return e.icon!==void 0&&c.push(k(le,{class:v.value,name:e.icon})),e.label!==void 0&&c.push(e.label),k(a.value,{...u.value},Qe(l.default,c))}}});const el=["",!0];var tl=x({name:"QBreadcrumbs",props:{...Ot,separator:{type:String,default:"/"},separatorColor:String,activeColor:{type:String,default:"primary"},gutter:{type:String,validator:e=>["none","xs","sm","md","lg","xl"].includes(e),default:"sm"}},setup(e,{slots:l}){const a=Qt(e),o=d(()=>`flex items-center ${a.value}${e.gutter==="none"?"":` q-gutter-${e.gutter}`}`),t=d(()=>e.separatorColor?` text-${e.separatorColor}`:""),n=d(()=>` text-${e.activeColor}`);return()=>{const u=Vt(R(l.default));if(u.length===0)return;let v=1;const c=[],f=u.filter(b=>b.type!==void 0&&b.type.name==="QBreadcrumbsEl").length,r=l.separator!==void 0?l.separator:()=>e.separator;return u.forEach(b=>{if(b.type!==void 0&&b.type.name==="QBreadcrumbsEl"){const y=v<f,m=b.props!==null&&el.includes(b.props.disable),h=(y===!0?"":" q-breadcrumbs--last")+(m!==!0&&y===!0?n.value:"");v++,c.push(k("div",{class:`flex items-center${h}`},[b])),y===!0&&c.push(k("div",{class:"q-breadcrumbs__separator"+t.value},r()))}else c.push(b)}),k("div",{class:"q-breadcrumbs"},[k("div",{class:o.value},c)])}}}),ll=x({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:l,emit:a}){const{proxy:{$q:o}}=N(),t=Ve(ve,H);if(t===H)return console.error("QHeader needs to be child of QLayout"),H;const n=E(parseInt(e.heightHint,10)),u=E(!0),v=d(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||o.platform.is.ios&&t.isContainer.value===!0),c=d(()=>{if(e.modelValue!==!0)return 0;if(v.value===!0)return u.value===!0?n.value:0;const s=n.value-t.scroll.value.position;return s>0?s:0}),f=d(()=>e.modelValue!==!0||v.value===!0&&u.value!==!0),r=d(()=>e.modelValue===!0&&f.value===!0&&e.reveal===!0),b=d(()=>"q-header q-layout__section--marginal "+(v.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(f.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),y=d(()=>{const s=t.rows.value.top,p={};return s[0]==="l"&&t.left.space===!0&&(p[o.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),s[2]==="r"&&t.right.space===!0&&(p[o.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),p});function m(s,p){t.update("header",s,p)}function h(s,p){s.value!==p&&(s.value=p)}function B({height:s}){h(n,s),m("size",s)}function S(s){r.value===!0&&h(u,!0),a("focusin",s)}L(()=>e.modelValue,s=>{m("space",s),h(u,!0),t.animate()}),L(c,s=>{m("offset",s)}),L(()=>e.reveal,s=>{s===!1&&h(u,e.modelValue)}),L(u,s=>{t.animate(),a("reveal",s)}),L(t.scroll,s=>{e.reveal===!0&&h(u,s.direction==="up"||s.position<=e.revealOffset||s.position-s.inflectionPoint<100)});const q={};return t.instances.header=q,e.modelValue===!0&&m("size",n.value),m("space",e.modelValue),m("offset",c.value),me(()=>{t.instances.header===q&&(t.instances.header=void 0,m("size",0),m("offset",0),m("space",!1))}),()=>{const s=vt(l.default,[]);return e.elevated===!0&&s.push(k("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),s.push(k(Pe,{debounce:0,onResize:B})),k("header",{class:b.value,style:y.value,onFocusin:S},s)}}}),G=x({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:l}){const a=d(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>k("div",{class:a.value},R(l.default))}}),Y=x({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:l}){const a=d(()=>parseInt(e.lines,10)),o=d(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(a.value===1?" ellipsis":"")),t=d(()=>e.lines!==void 0&&a.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":a.value}:null);return()=>k("div",{style:t.value,class:o.value},R(l.default))}}),Oe=x({name:"QItem",props:{...Ae,...dt,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:l,emit:a}){const{proxy:{$q:o}}=N(),t=De(e,o),{hasLink:n,linkAttrs:u,linkClass:v,linkTag:c,navigateOnClick:f}=ft(),r=E(null),b=E(null),y=d(()=>e.clickable===!0||n.value===!0||e.tag==="label"),m=d(()=>e.disable!==!0&&y.value===!0),h=d(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(n.value===!0&&e.active===null?v.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(m.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),B=d(()=>{if(e.insetLevel===void 0)return null;const p=o.lang.rtl===!0?"Right":"Left";return{["padding"+p]:16+e.insetLevel*56+"px"}});function S(p){m.value===!0&&(b.value!==null&&(p.qKeyEvent!==!0&&document.activeElement===r.value?b.value.focus():document.activeElement===b.value&&r.value.focus()),f(p))}function q(p){if(m.value===!0&&Dt(p,[13,32])===!0){Me(p),p.qKeyEvent=!0;const g=new MouseEvent("click",p);g.qKeyEvent=!0,r.value.dispatchEvent(g)}a("keyup",p)}function s(){const p=vt(l.default,[]);return m.value===!0&&p.unshift(k("div",{class:"q-focus-helper",tabindex:-1,ref:b})),p}return()=>{const p={ref:r,class:h.value,style:B.value,role:"listitem",onClick:S,onKeyup:q};return m.value===!0?(p.tabindex=e.tabindex||"0",Object.assign(p,u.value)):y.value===!0&&(p["aria-disabled"]="true"),k(c.value,p,s())}}}),al=x({name:"QList",props:{...Ae,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:l}){const a=N(),o=De(e,a.proxy.$q),t=d(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(o.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>k(e.tag,{class:t.value},R(l.default))}});function nl(e,l,a){let o;function t(){o!==void 0&&(Ye.remove(o),o=void 0)}return me(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){o={condition:()=>a.value===!0,handler:l},Ye.add(o)}}}const ol={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},il=["beforeShow","show","beforeHide","hide"];function rl({showing:e,canShow:l,hideOnRouteChange:a,handleShow:o,handleHide:t,processOnMount:n}){const u=N(),{props:v,emit:c,proxy:f}=u;let r;function b(s){e.value===!0?h(s):y(s)}function y(s){if(v.disable===!0||s!==void 0&&s.qAnchorHandled===!0||l!==void 0&&l(s)!==!0)return;const p=v["onUpdate:modelValue"]!==void 0;p===!0&&(c("update:modelValue",!0),r=s,fe(()=>{r===s&&(r=void 0)})),(v.modelValue===null||p===!1)&&m(s)}function m(s){e.value!==!0&&(e.value=!0,c("beforeShow",s),o!==void 0?o(s):c("show",s))}function h(s){if(v.disable===!0)return;const p=v["onUpdate:modelValue"]!==void 0;p===!0&&(c("update:modelValue",!1),r=s,fe(()=>{r===s&&(r=void 0)})),(v.modelValue===null||p===!1)&&B(s)}function B(s){e.value!==!1&&(e.value=!1,c("beforeHide",s),t!==void 0?t(s):c("hide",s))}function S(s){v.disable===!0&&s===!0?v["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):s===!0!==e.value&&(s===!0?m:B)(r)}L(()=>v.modelValue,S),a!==void 0&&Mt(u)===!0&&L(()=>f.$route.fullPath,()=>{a.value===!0&&e.value===!0&&h()}),n===!0&&He(()=>{S(v.modelValue)});const q={show:y,hide:h,toggle:b};return Object.assign(f,q),q}const ul=[null,document,document.body,document.scrollingElement,document.documentElement];function sl(e,l){let a=Ht(l);if(a===void 0){if(e==null)return window;a=e.closest(".scroll,.scroll-y,.overflow-auto")}return ul.includes(a)?window:a}function gt(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function yt(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let ue;function Se(){if(ue!==void 0)return ue;const e=document.createElement("p"),l=document.createElement("div");Xe(e,{width:"100%",height:"200px"}),Xe(l,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),l.appendChild(e),document.body.appendChild(l);const a=e.offsetWidth;l.style.overflow="scroll";let o=e.offsetWidth;return a===o&&(o=l.clientWidth),l.remove(),ue=a-o,ue}function cl(e,l=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:l?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let ee=0,Te,Ee,te,Be=!1,lt,at,nt,U=null;function dl(e){fl(e)&&Me(e)}function fl(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const l=Wt(e),a=e.shiftKey&&!e.deltaX,o=!a&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=a||o?e.deltaY:e.deltaX;for(let n=0;n<l.length;n++){const u=l[n];if(cl(u,o))return o?t<0&&u.scrollTop===0?!0:t>0&&u.scrollTop+u.clientHeight===u.scrollHeight:t<0&&u.scrollLeft===0?!0:t>0&&u.scrollLeft+u.clientWidth===u.scrollWidth}return!0}function ot(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function se(e){Be!==!0&&(Be=!0,requestAnimationFrame(()=>{Be=!1;const{height:l}=e.target,{clientHeight:a,scrollTop:o}=document.scrollingElement;(te===void 0||l!==window.innerHeight)&&(te=a-l,document.scrollingElement.scrollTop=o),o>te&&(document.scrollingElement.scrollTop-=Math.ceil((o-te)/8))}))}function it(e){const l=document.body,a=window.visualViewport!==void 0;if(e==="add"){const{overflowY:o,overflowX:t}=window.getComputedStyle(l);Te=yt(window),Ee=gt(window),lt=l.style.left,at=l.style.top,nt=window.location.href,l.style.left=`-${Te}px`,l.style.top=`-${Ee}px`,t!=="hidden"&&(t==="scroll"||l.scrollWidth>window.innerWidth)&&l.classList.add("q-body--force-scrollbar-x"),o!=="hidden"&&(o==="scroll"||l.scrollHeight>window.innerHeight)&&l.classList.add("q-body--force-scrollbar-y"),l.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,O.is.ios===!0&&(a===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",se,W.passiveCapture),window.visualViewport.addEventListener("scroll",se,W.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",ot,W.passiveCapture))}O.is.desktop===!0&&O.is.mac===!0&&window[`${e}EventListener`]("wheel",dl,W.notPassive),e==="remove"&&(O.is.ios===!0&&(a===!0?(window.visualViewport.removeEventListener("resize",se,W.passiveCapture),window.visualViewport.removeEventListener("scroll",se,W.passiveCapture)):window.removeEventListener("scroll",ot,W.passiveCapture)),l.classList.remove("q-body--prevent-scroll"),l.classList.remove("q-body--force-scrollbar-x"),l.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,l.style.left=lt,l.style.top=at,window.location.href===nt&&window.scrollTo(Te,Ee),te=void 0)}function vl(e){let l="add";if(e===!0){if(ee++,U!==null){clearTimeout(U),U=null;return}if(ee>1)return}else{if(ee===0||(ee--,ee>0))return;if(l="remove",O.is.ios===!0&&O.is.nativeMobile===!0){U!==null&&clearTimeout(U),U=setTimeout(()=>{it(l),U=null},100);return}}it(l)}function ml(){let e;return{preventBodyScroll(l){l!==e&&(e!==void 0||l===!0)&&(e=l,vl(l))}}}const We={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},hl=Object.keys(We);We.all=!0;function rt(e){const l={};for(const a of hl)e[a]===!0&&(l[a]=!0);return Object.keys(l).length===0?We:(l.horizontal===!0?l.left=l.right=!0:l.left===!0&&l.right===!0&&(l.horizontal=!0),l.vertical===!0?l.up=l.down=!0:l.up===!0&&l.down===!0&&(l.vertical=!0),l.horizontal===!0&&l.vertical===!0&&(l.all=!0),l)}const pl=["INPUT","TEXTAREA"];function ut(e,l){return l.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof l.handler=="function"&&pl.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(l.uid)===-1)}function bl(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Ft.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function $e(e,l,a){const o=ze(e);let t,n=o.left-l.event.x,u=o.top-l.event.y,v=Math.abs(n),c=Math.abs(u);const f=l.direction;f.horizontal===!0&&f.vertical!==!0?t=n<0?"left":"right":f.horizontal!==!0&&f.vertical===!0?t=u<0?"up":"down":f.up===!0&&u<0?(t="up",v>c&&(f.left===!0&&n<0?t="left":f.right===!0&&n>0&&(t="right"))):f.down===!0&&u>0?(t="down",v>c&&(f.left===!0&&n<0?t="left":f.right===!0&&n>0&&(t="right"))):f.left===!0&&n<0?(t="left",v<c&&(f.up===!0&&u<0?t="up":f.down===!0&&u>0&&(t="down"))):f.right===!0&&n>0&&(t="right",v<c&&(f.up===!0&&u<0?t="up":f.down===!0&&u>0&&(t="down")));let r=!1;if(t===void 0&&a===!1){if(l.event.isFirst===!0||l.event.lastDir===void 0)return{};t=l.event.lastDir,r=!0,t==="left"||t==="right"?(o.left-=n,v=0,n=0):(o.top-=u,c=0,u=0)}return{synthetic:r,payload:{evt:e,touch:l.event.mouse!==!0,mouse:l.event.mouse===!0,position:o,direction:t,isFirst:l.event.isFirst,isFinal:a===!0,duration:Date.now()-l.event.time,distance:{x:v,y:c},offset:{x:n,y:u},delta:{x:o.left-l.event.lastX,y:o.top-l.event.lastY}}}}let gl=0;var xe=At({name:"touch-pan",beforeMount(e,{value:l,modifiers:a}){if(a.mouse!==!0&&O.has.touch!==!0)return;function o(n,u){a.mouse===!0&&u===!0?Me(n):(a.stop===!0&&Ce(n),a.prevent===!0&&je(n))}const t={uid:"qvtp_"+gl++,handler:l,modifiers:a,direction:rt(a),noop:mt,mouseStart(n){ut(n,t)&&Rt(n)&&(ie(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(n,!0))},touchStart(n){if(ut(n,t)){const u=n.target;ie(t,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","passiveCapture"],[u,"touchend","end","passiveCapture"]]),t.start(n)}},start(n,u){if(O.is.firefox===!0&&ke(e,!0),t.lastEvt=n,u===!0||a.stop===!0){if(t.direction.all!==!0&&(u!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const f=n.type.indexOf("mouse")>-1?new MouseEvent(n.type,n):new TouchEvent(n.type,n);n.defaultPrevented===!0&&je(f),n.cancelBubble===!0&&Ce(f),Object.assign(f,{qKeyEvent:n.qKeyEvent,qClickOutside:n.qClickOutside,qAnchorHandled:n.qAnchorHandled,qClonedBy:n.qClonedBy===void 0?[t.uid]:n.qClonedBy.concat(t.uid)}),t.initialEvent={target:n.target,event:f}}Ce(n)}const{left:v,top:c}=ze(n);t.event={x:v,y:c,time:Date.now(),mouse:u===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:v,lastY:c}},move(n){if(t.event===void 0)return;const u=ze(n),v=u.left-t.event.x,c=u.top-t.event.y;if(v===0&&c===0)return;t.lastEvt=n;const f=t.event.mouse===!0,r=()=>{o(n,f);let m;a.preserveCursor!==!0&&a.preservecursor!==!0&&(m=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),f===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),bl(),t.styleCleanup=h=>{if(t.styleCleanup=void 0,m!==void 0&&(document.documentElement.style.cursor=m),document.body.classList.remove("non-selectable"),f===!0){const B=()=>{document.body.classList.remove("no-pointer-events--children")};h!==void 0?setTimeout(()=>{B(),h()},50):B()}else h!==void 0&&h()}};if(t.event.detected===!0){t.event.isFirst!==!0&&o(n,t.event.mouse);const{payload:m,synthetic:h}=$e(n,t,!1);m!==void 0&&(t.handler(m)===!1?t.end(n):(t.styleCleanup===void 0&&t.event.isFirst===!0&&r(),t.event.lastX=m.position.left,t.event.lastY=m.position.top,t.event.lastDir=h===!0?void 0:m.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||f===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){r(),t.event.detected=!0,t.move(n);return}const b=Math.abs(v),y=Math.abs(c);b!==y&&(t.direction.horizontal===!0&&b>y||t.direction.vertical===!0&&b<y||t.direction.up===!0&&b<y&&c<0||t.direction.down===!0&&b<y&&c>0||t.direction.left===!0&&b>y&&v<0||t.direction.right===!0&&b>y&&v>0?(t.event.detected=!0,t.move(n)):t.end(n,!0))},end(n,u){if(t.event!==void 0){if(Le(t,"temp"),O.is.firefox===!0&&ke(e,!1),u===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler($e(n===void 0?t.lastEvt:n,t).payload);const{payload:v}=$e(n===void 0?t.lastEvt:n,t,!0),c=()=>{t.handler(v)};t.styleCleanup!==void 0?t.styleCleanup(c):c()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,a.mouse===!0){const n=a.mouseCapture===!0||a.mousecapture===!0?"Capture":"";ie(t,"main",[[e,"mousedown","mouseStart",`passive${n}`]])}O.has.touch===!0&&ie(t,"main",[[e,"touchstart","touchStart",`passive${a.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,l){const a=e.__qtouchpan;a!==void 0&&(l.oldValue!==l.value&&(typeof value!="function"&&a.end(),a.handler=l.value),a.direction=rt(l.modifiers))},beforeUnmount(e){const l=e.__qtouchpan;l!==void 0&&(l.event!==void 0&&l.end(),Le(l,"main"),Le(l,"temp"),O.is.firefox===!0&&ke(e,!1),l.styleCleanup!==void 0&&l.styleCleanup(),delete e.__qtouchpan)}});function ce(e,l,a){return a<=l?l:Math.min(a,Math.max(l,e))}const st=150;var yl=x({name:"QDrawer",inheritAttrs:!1,props:{...ol,...Ae,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...il,"onLayout","miniState"],setup(e,{slots:l,emit:a,attrs:o}){const t=N(),{proxy:{$q:n}}=t,u=De(e,n),{preventBodyScroll:v}=ml(),{registerTimeout:c,removeTimeout:f}=Kt(),r=Ve(ve,H);if(r===H)return console.error("QDrawer needs to be child of QLayout"),H;let b,y=null,m;const h=E(e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint),B=d(()=>e.mini===!0&&h.value!==!0),S=d(()=>B.value===!0?e.miniWidth:e.width),q=E(e.showIfAbove===!0&&h.value===!1?!0:e.modelValue===!0),s=d(()=>e.persistent!==!0&&(h.value===!0||wt.value===!0));function p(i,w){if(I(),i!==!1&&r.animate(),P(0),h.value===!0){const $=r.instances[ne.value];$!==void 0&&$.belowBreakpoint===!0&&$.hide(!1),A(1),r.isContainer.value!==!0&&v(!0)}else A(0),i!==!1&&ye(!1);c(()=>{i!==!1&&ye(!0),w!==!0&&a("show",i)},st)}function g(i,w){J(),i!==!1&&r.animate(),A(0),P(j.value*S.value),we(),w!==!0?c(()=>{a("hide",i)},st):f()}const{show:T,hide:z}=rl({showing:q,hideOnRouteChange:s,handleShow:p,handleHide:g}),{addToHistory:I,removeFromHistory:J}=nl(q,z,s),X={belowBreakpoint:h,hide:z},V=d(()=>e.side==="right"),j=d(()=>(n.lang.rtl===!0?-1:1)*(V.value===!0?1:-1)),Fe=E(0),K=E(!1),he=E(!1),Re=E(S.value*j.value),ne=d(()=>V.value===!0?"left":"right"),pe=d(()=>q.value===!0&&h.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:S.value:0),be=d(()=>e.overlay===!0||e.miniToOverlay===!0||r.view.value.indexOf(V.value?"R":"L")>-1||n.platform.is.ios===!0&&r.isContainer.value===!0),Z=d(()=>e.overlay===!1&&q.value===!0&&h.value===!1),wt=d(()=>e.overlay===!0&&q.value===!0&&h.value===!1),qt=d(()=>"fullscreen q-drawer__backdrop"+(q.value===!1&&K.value===!1?" hidden":"")),_t=d(()=>({backgroundColor:`rgba(0,0,0,${Fe.value*.4})`})),Ne=d(()=>V.value===!0?r.rows.value.top[2]==="r":r.rows.value.top[0]==="l"),kt=d(()=>V.value===!0?r.rows.value.bottom[2]==="r":r.rows.value.bottom[0]==="l"),Ct=d(()=>{const i={};return r.header.space===!0&&Ne.value===!1&&(be.value===!0?i.top=`${r.header.offset}px`:r.header.space===!0&&(i.top=`${r.header.size}px`)),r.footer.space===!0&&kt.value===!1&&(be.value===!0?i.bottom=`${r.footer.offset}px`:r.footer.space===!0&&(i.bottom=`${r.footer.size}px`)),i}),Lt=d(()=>{const i={width:`${S.value}px`,transform:`translateX(${Re.value}px)`};return h.value===!0?i:Object.assign(i,Ct.value)}),St=d(()=>"q-drawer__content fit "+(r.isContainer.value!==!0?"scroll":"overflow-auto")),Tt=d(()=>`q-drawer q-drawer--${e.side}`+(he.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(u.value===!0?" q-drawer--dark q-dark":"")+(K.value===!0?" no-transition":q.value===!0?"":" q-layout--prevent-focus")+(h.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${B.value===!0?"mini":"standard"}`+(be.value===!0||Z.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Ne.value===!0?" q-drawer--top-padding":""))),Et=d(()=>{const i=n.lang.rtl===!0?e.side:ne.value;return[[xe,zt,void 0,{[i]:!0,mouse:!0}]]}),Bt=d(()=>{const i=n.lang.rtl===!0?ne.value:e.side;return[[xe,Ie,void 0,{[i]:!0,mouse:!0}]]}),$t=d(()=>{const i=n.lang.rtl===!0?ne.value:e.side;return[[xe,Ie,void 0,{[i]:!0,mouse:!0,mouseAllDir:!0}]]});function ge(){Pt(h,e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint)}L(h,i=>{i===!0?(b=q.value,q.value===!0&&z(!1)):e.overlay===!1&&e.behavior!=="mobile"&&b!==!1&&(q.value===!0?(P(0),A(0),we()):T(!1))}),L(()=>e.side,(i,w)=>{r.instances[w]===X&&(r.instances[w]=void 0,r[w].space=!1,r[w].offset=0),r.instances[i]=X,r[i].size=S.value,r[i].space=Z.value,r[i].offset=pe.value}),L(r.totalWidth,()=>{(r.isContainer.value===!0||document.qScrollPrevented!==!0)&&ge()}),L(()=>e.behavior+e.breakpoint,ge),L(r.isContainer,i=>{q.value===!0&&v(i!==!0),i===!0&&ge()}),L(r.scrollbarWidth,()=>{P(q.value===!0?0:void 0)}),L(pe,i=>{D("offset",i)}),L(Z,i=>{a("onLayout",i),D("space",i)}),L(V,()=>{P()}),L(S,i=>{P(),qe(e.miniToOverlay,i)}),L(()=>e.miniToOverlay,i=>{qe(i,S.value)}),L(()=>n.lang.rtl,()=>{P()}),L(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(xt(),r.animate())}),L(B,i=>{a("miniState",i)});function P(i){i===void 0?fe(()=>{i=q.value===!0?0:S.value,P(j.value*i)}):(r.isContainer.value===!0&&V.value===!0&&(h.value===!0||Math.abs(i)===S.value)&&(i+=j.value*r.scrollbarWidth.value),Re.value=i)}function A(i){Fe.value=i}function ye(i){const w=i===!0?"remove":r.isContainer.value!==!0?"add":"";w!==""&&document.body.classList[w]("q-body--drawer-toggle")}function xt(){y!==null&&clearTimeout(y),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),he.value=!0,y=setTimeout(()=>{y=null,he.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function zt(i){if(q.value!==!1)return;const w=S.value,$=ce(i.distance.x,0,w);if(i.isFinal===!0){$>=Math.min(75,w)===!0?T():(r.animate(),A(0),P(j.value*w)),K.value=!1;return}P((n.lang.rtl===!0?V.value!==!0:V.value)?Math.max(w-$,0):Math.min(0,$-w)),A(ce($/w,0,1)),i.isFirst===!0&&(K.value=!0)}function Ie(i){if(q.value!==!0)return;const w=S.value,$=i.direction===e.side,oe=(n.lang.rtl===!0?$!==!0:$)?ce(i.distance.x,0,w):0;if(i.isFinal===!0){Math.abs(oe)<Math.min(75,w)===!0?(r.animate(),A(1),P(0)):z(),K.value=!1;return}P(j.value*oe),A(ce(1-oe/w,0,1)),i.isFirst===!0&&(K.value=!0)}function we(){v(!1),ye(!0)}function D(i,w){r.update(e.side,i,w)}function Pt(i,w){i.value!==w&&(i.value=w)}function qe(i,w){D("size",i===!0?e.miniWidth:w)}return r.instances[e.side]=X,qe(e.miniToOverlay,S.value),D("space",Z.value),D("offset",pe.value),e.showIfAbove===!0&&e.modelValue!==!0&&q.value===!0&&e["onUpdate:modelValue"]!==void 0&&a("update:modelValue",!0),He(()=>{a("onLayout",Z.value),a("miniState",B.value),b=e.showIfAbove===!0;const i=()=>{(q.value===!0?p:g)(!1,!0)};if(r.totalWidth.value!==0){fe(i);return}m=L(r.totalWidth,()=>{m(),m=void 0,q.value===!1&&e.showIfAbove===!0&&h.value===!1?T(!1):i()})}),me(()=>{m!==void 0&&m(),y!==null&&(clearTimeout(y),y=null),q.value===!0&&we(),r.instances[e.side]===X&&(r.instances[e.side]=void 0,D("size",0),D("offset",0),D("space",!1))}),()=>{const i=[];h.value===!0&&(e.noSwipeOpen===!1&&i.push(Nt(k("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Et.value)),i.push(Ue("div",{ref:"backdrop",class:qt.value,style:_t.value,"aria-hidden":"true",onClick:z},void 0,"backdrop",e.noSwipeBackdrop!==!0&&q.value===!0,()=>$t.value)));const w=B.value===!0&&l.mini!==void 0,$=[k("div",{...o,key:""+w,class:[St.value,o.class]},w===!0?l.mini():R(l.default))];return e.elevated===!0&&q.value===!0&&$.push(k("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),i.push(Ue("aside",{ref:"content",class:Tt.value,style:Lt.value},$,"contentclose",e.noSwipeClose!==!0&&h.value===!0,()=>Bt.value)),k("div",{class:"q-drawer-container"},i)}}}),wl=x({name:"QPageContainer",setup(e,{slots:l}){const{proxy:{$q:a}}=N(),o=Ve(ve,H);if(o===H)return console.error("QPageContainer needs to be child of QLayout"),H;ht(It,!0);const t=d(()=>{const n={};return o.header.space===!0&&(n.paddingTop=`${o.header.size}px`),o.right.space===!0&&(n[`padding${a.lang.rtl===!0?"Left":"Right"}`]=`${o.right.size}px`),o.footer.space===!0&&(n.paddingBottom=`${o.footer.size}px`),o.left.space===!0&&(n[`padding${a.lang.rtl===!0?"Right":"Left"}`]=`${o.left.size}px`),n});return()=>k("div",{class:"q-page-container",style:t.value},R(l.default))}});const{passive:ct}=W,ql=["both","horizontal","vertical"];var _l=x({name:"QScrollObserver",props:{axis:{type:String,validator:e=>ql.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:l}){const a={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let o=null,t,n;L(()=>e.scrollTarget,()=>{c(),v()});function u(){o!==null&&o();const b=Math.max(0,gt(t)),y=yt(t),m={top:b-a.position.top,left:y-a.position.left};if(e.axis==="vertical"&&m.top===0||e.axis==="horizontal"&&m.left===0)return;const h=Math.abs(m.top)>=Math.abs(m.left)?m.top<0?"up":"down":m.left<0?"left":"right";a.position={top:b,left:y},a.directionChanged=a.direction!==h,a.delta=m,a.directionChanged===!0&&(a.direction=h,a.inflectionPoint=a.position),l("scroll",{...a})}function v(){t=sl(n,e.scrollTarget),t.addEventListener("scroll",f,ct),f(!0)}function c(){t!==void 0&&(t.removeEventListener("scroll",f,ct),t=void 0)}function f(b){if(b===!0||e.debounce===0||e.debounce==="0")u();else if(o===null){const[y,m]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];o=()=>{m(y),o=null}}}const{proxy:r}=N();return L(()=>r.$q.lang.rtl,u),He(()=>{n=r.$el.parentNode,v()}),me(()=>{o!==null&&o(),c()}),Object.assign(r,{trigger:f,getPosition:()=>a}),mt}}),kl=x({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:l,emit:a}){const{proxy:{$q:o}}=N(),t=E(null),n=E(o.screen.height),u=E(e.container===!0?0:o.screen.width),v=E({position:0,direction:"down",inflectionPoint:0}),c=E(0),f=E(Xt.value===!0?0:Se()),r=d(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),b=d(()=>e.container===!1?{minHeight:o.screen.height+"px"}:null),y=d(()=>f.value!==0?{[o.lang.rtl===!0?"left":"right"]:`${f.value}px`}:null),m=d(()=>f.value!==0?{[o.lang.rtl===!0?"right":"left"]:0,[o.lang.rtl===!0?"left":"right"]:`-${f.value}px`,width:`calc(100% + ${f.value}px)`}:null);function h(g){if(e.container===!0||document.qScrollPrevented!==!0){const T={position:g.position.top,direction:g.direction,directionChanged:g.directionChanged,inflectionPoint:g.inflectionPoint.top,delta:g.delta.top};v.value=T,e.onScroll!==void 0&&a("scroll",T)}}function B(g){const{height:T,width:z}=g;let I=!1;n.value!==T&&(I=!0,n.value=T,e.onScrollHeight!==void 0&&a("scrollHeight",T),q()),u.value!==z&&(I=!0,u.value=z),I===!0&&e.onResize!==void 0&&a("resize",g)}function S({height:g}){c.value!==g&&(c.value=g,q())}function q(){if(e.container===!0){const g=n.value>c.value?Se():0;f.value!==g&&(f.value=g)}}let s=null;const p={instances:{},view:d(()=>e.view),isContainer:d(()=>e.container),rootRef:t,height:n,containerHeight:c,scrollbarWidth:f,totalWidth:d(()=>u.value+f.value),rows:d(()=>{const g=e.view.toLowerCase().split(" ");return{top:g[0].split(""),middle:g[1].split(""),bottom:g[2].split("")}}),header:re({size:0,offset:0,space:!1}),right:re({size:300,offset:0,space:!1}),footer:re({size:0,offset:0,space:!1}),left:re({size:300,offset:0,space:!1}),scroll:v,animate(){s!==null?clearTimeout(s):document.body.classList.add("q-body--layout-animate"),s=setTimeout(()=>{s=null,document.body.classList.remove("q-body--layout-animate")},155)},update(g,T,z){p[g][T]=z}};if(ht(ve,p),Se()>0){let z=function(){g=null,T.classList.remove("hide-scrollbar")},I=function(){if(g===null){if(T.scrollHeight>o.screen.height)return;T.classList.add("hide-scrollbar")}else clearTimeout(g);g=setTimeout(z,300)},J=function(X){g!==null&&X==="remove"&&(clearTimeout(g),z()),window[`${X}EventListener`]("resize",I)},g=null;const T=document.body;L(()=>e.container!==!0?"add":"remove",J),e.container!==!0&&J("add"),Ut(()=>{J("remove")})}return()=>{const g=Qe(l.default,[k(_l,{onScroll:h}),k(Pe,{onResize:B})]),T=k("div",{class:r.value,style:b.value,ref:e.container===!0?void 0:t,tabindex:-1},g);return e.container===!0?k("div",{class:"q-layout-container overflow-hidden",ref:t},[k(Pe,{onResize:S}),k("div",{class:"absolute-full",style:y.value},[k("div",{class:"scroll",style:m.value},[T])])]):T}}});const Cl=pt({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function Ll(e,l,a,o,t,n){return Q(),F(Oe,{clickable:"",tag:"a",target:"_blank",href:e.link},{default:C(()=>[e.icon?(Q(),F(G,{key:0,avatar:""},{default:C(()=>[_(le,{name:e.icon},null,8,["name"])]),_:1})):de("",!0),_(G,null,{default:C(()=>[_(Y,null,{default:C(()=>[M(ae(e.title),1)]),_:1}),_(Y,{caption:""},{default:C(()=>[M(ae(e.caption),1)]),_:1})]),_:1})]),_:1},8,["href"])}var Sl=bt(Cl,[["render",Ll]]);const Tl=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],El=E({death_and_life:{id:"death_and_life",isOpen:!0,title:"Death_And_Life",caption:"Death_And_Life_Caption",description:"Death_And_Life_Description",icon:"school",link:"/death_and_life",prices:{full:450,half:350,friend:350,senior:250,special:1}},nullity_13:{id:"nullity_13",isOpen:!0,title:"Nullity_13",caption:"Nullity_13_Caption",useHTML:!0,description:"Nullity_13_Description",icon:"school",link:"/nullity_13",prices:{full:450,half:350,friend:350,senior:250,special:1}},life_art_elem:{id:"life_art_elem",isOpen:!1,title:"Life_Art_Elem",caption:"Life_Art_Elem_Caption",useHTML:!0,description:"Life_Art_Elem_Description",icon:"school",link:"/life_art_elem",prices:{full:450,half:350,friend:350,senior:250,special:1}}}),Bl=pt({name:"MainLayout",components:{EssentialLink:Sl},setup(){const e=Yt(),l=d(()=>e.path),a=E(!1),o=E(!1);return{essentialLinks:Tl,courseItems:El,leftDrawerOpen:a,showLoginComponent:o,route:e,path:l,trans(t){let n=t.replace(/class\//,"");return this.courseItems[n].title},tail(t){return t.slice(1)},toggleLeftDrawer(){a.value=!a.value},tryLogin(){o.value=!0,window.scrollTo(0,0),window.alert("\u5EFA\u69CB\u4E2D...")},openCart(){window.alert("\u5EFA\u69CB\u4E2D...")}}}});function $l(e,l,a,o,t,n){const u=Ke("EssentialLink"),v=Ke("router-view");return Q(),F(kl,{view:"lHh Lpr lFf"},{default:C(()=>[_(ll,{elevated:""},{default:C(()=>[_(et,null,{default:C(()=>[_(_e,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),_(Gt,null,{default:C(()=>[M(ae(e.$t("title")),1)]),_:1}),_(_e,{flat:"",color:"white",onClick:e.openCart},{default:C(()=>[_(le,{size:"md",name:"shopping_cart"}),_(Zt,{class:"move-to-left",color:"red",floating:"",size:"lg"},{default:C(()=>[M(" 0 ")]),_:1})]),_:1},8,["onClick"]),_(_e,{color:"white",flat:"",dense:"",round:"",size:"xl",icon:"account_circle",onClick:e.tryLogin},null,8,["onClick"])]),_:1}),_(et,{inset:""},{default:C(()=>[_(tl,{"active-color":"white",style:{"font-size":"16px"}},{default:C(()=>[_(tt,{label:"Home",icon:"home"}),e.tail(e.path)?(Q(),F(tt,{key:0,label:e.$t(e.trans(e.tail(e.path)))},null,8,["label"])):de("",!0)]),_:1})]),_:1})]),_:1}),_(yl,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":l[0]||(l[0]=c=>e.leftDrawerOpen=c),"show-if-above":"",bordered:""},{default:C(()=>[_(al,null,{default:C(()=>[_(Oe,{clickable:"",to:"/"},{default:C(()=>[_(G,{avatar:""},{default:C(()=>[_(le,{name:"home"})]),_:1}),_(G,null,{default:C(()=>[_(Y,null,{default:C(()=>[M("Home")]),_:1})]),_:1})]),_:1}),_(Y,{header:""},{default:C(()=>[M(" \u525B\u505A\u597D\u7684\u52D5\u614B\u8DEF\u7531 ")]),_:1}),(Q(!0),Ge(Ze,null,Je(Object.values(e.courseItems),c=>(Q(),F(Oe,{clickable:"",key:c.id,to:"/class/"+c.id},{default:C(()=>[c.icon?(Q(),F(G,{key:0,avatar:""},{default:C(()=>[_(le,{name:c.icon},null,8,["name"])]),_:2},1024)):de("",!0),_(G,null,{default:C(()=>[_(Y,null,{default:C(()=>[M(ae(e.$t(c.title)),1)]),_:2},1024),c.caption?(Q(),F(Y,{key:0,caption:""},{default:C(()=>[M(ae(e.$t(c.caption)),1)]),_:2},1024)):de("",!0)]),_:2},1024)]),_:2},1032,["to"]))),128)),_(Y,{header:""},{default:C(()=>[M(" Essential Links ")]),_:1}),(Q(!0),Ge(Ze,null,Je(e.essentialLinks,c=>(Q(),F(u,jt({key:c.title},c),null,16))),128))]),_:1})]),_:1},8,["modelValue"]),_(wl,null,{default:C(()=>[_(v,{courseItems:e.courseItems},null,8,["courseItems"])]),_:1})]),_:1})}var Ml=bt(Bl,[["render",$l]]);export{Ml as default};
