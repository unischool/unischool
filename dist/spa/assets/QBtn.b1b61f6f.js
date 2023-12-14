import{c as d,h as m,g as V,Y as ce,n as z,y as de,D as fe,B as te,C as ve,r as Q,m as me,Z as ge,E as he,s as A,A as be,t as ye}from"./index.81fc0b4e.js";import{u as ne,a as ae,Q as pe}from"./QSpinner.9dba8d2c.js";import{c as re,h as ke,a as K,d as xe}from"./render.2da798fb.js";const F="0 0 24 24",U=e=>e,D=e=>`ionicons ${e}`,ue={"mdi-":e=>`mdi ${e}`,"icon-":U,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":D,"ion-ios":D,"ion-logo":D,"iconfont ":U,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},le={o_:"-outlined",r_:"-round",s_:"-sharp"},ie={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},qe=new RegExp("^("+Object.keys(ue).join("|")+")"),Ee=new RegExp("^("+Object.keys(le).join("|")+")"),H=new RegExp("^("+Object.keys(ie).join("|")+")"),$e=/^[Mm]\s?[-+]?\.?\d/,Re=/^img:/,we=/^svguse:/,Ce=/^ion-/,Le=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var W=re({name:"QIcon",props:{...ne,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:a}}=V(),n=ae(e),i=d(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),f=d(()=>{let s,r=e.name;if(r==="none"||!r)return{none:!0};if(a.iconMapFn!==null){const o=a.iconMapFn(r);if(o!==void 0)if(o.icon!==void 0){if(r=o.icon,r==="none"||!r)return{none:!0}}else return{cls:o.cls,content:o.content!==void 0?o.content:" "}}if($e.test(r)===!0){const[o,y=F]=r.split("|");return{svg:!0,viewBox:y,nodes:o.split("&&").map(l=>{const[p,h,k]=l.split("@@");return m("path",{style:h,d:p,transform:k})})}}if(Re.test(r)===!0)return{img:!0,src:r.substring(4)};if(we.test(r)===!0){const[o,y=F]=r.split("|");return{svguse:!0,src:o.substring(7),viewBox:y}}let q=" ";const b=r.match(qe);if(b!==null)s=ue[b[1]](r);else if(Le.test(r)===!0)s=r;else if(Ce.test(r)===!0)s=`ionicons ion-${a.platform.is.ios===!0?"ios":"md"}${r.substring(3)}`;else if(H.test(r)===!0){s="notranslate material-symbols";const o=r.match(H);o!==null&&(r=r.substring(6),s+=ie[o[1]]),q=r}else{s="notranslate material-icons";const o=r.match(Ee);o!==null&&(r=r.substring(2),s+=le[o[1]]),q=r}return{cls:s,content:q}});return()=>{const s={class:i.value,style:n.value,"aria-hidden":"true",role:"presentation"};return f.value.none===!0?m(e.tag,s,ke(t.default)):f.value.img===!0?m("span",s,K(t.default,[m("img",{src:f.value.src})])):f.value.svg===!0?m("span",s,K(t.default,[m("svg",{viewBox:f.value.viewBox||"0 0 24 24"},f.value.nodes)])):f.value.svguse===!0?m("span",s,K(t.default,[m("svg",{viewBox:f.value.viewBox},[m("use",{"xlink:href":f.value.src})])])):(f.value.cls!==void 0&&(s.class+=" "+f.value.cls),m(e.tag,s,K(t.default,[f.value.content])))}}});function Be(e,t){const a=e.style;for(const n in t)a[n]=t[n]}function Ze(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=ce(e);if(t)return t.$el||t}function Se(e,t=250){let a=!1,n;return function(){return a===!1&&(a=!0,setTimeout(()=>{a=!1},t),n=e.apply(this,arguments)),n}}function X(e,t,a,n){a.modifiers.stop===!0&&te(e);const i=a.modifiers.color;let f=a.modifiers.center;f=f===!0||n===!0;const s=document.createElement("span"),r=document.createElement("span"),q=ve(e),{left:b,top:o,width:y,height:l}=t.getBoundingClientRect(),p=Math.sqrt(y*y+l*l),h=p/2,k=`${(y-p)/2}px`,c=f?k:`${q.left-b-h}px`,x=`${(l-p)/2}px`,_=f?x:`${q.top-o-h}px`;r.className="q-ripple__inner",Be(r,{height:`${p}px`,width:`${p}px`,transform:`translate3d(${c},${_},0) scale3d(.2,.2,1)`,opacity:0}),s.className=`q-ripple${i?" text-"+i:""}`,s.setAttribute("dir","ltr"),s.appendChild(r),t.appendChild(s);const B=()=>{s.remove(),clearTimeout(S)};a.abort.push(B);let S=setTimeout(()=>{r.classList.add("q-ripple__inner--enter"),r.style.transform=`translate3d(${k},${x},0) scale3d(1,1,1)`,r.style.opacity=.2,S=setTimeout(()=>{r.classList.remove("q-ripple__inner--enter"),r.classList.add("q-ripple__inner--leave"),r.style.opacity=0,S=setTimeout(()=>{s.remove(),a.abort.splice(a.abort.indexOf(B),1)},275)},250)},50)}function Y(e,{modifiers:t,value:a,arg:n}){const i=Object.assign({},e.cfg.ripple,t,a);e.modifiers={early:i.early===!0,stop:i.stop===!0,center:i.center===!0,color:i.color||n,keyCodes:[].concat(i.keyCodes||13)}}var _e=xe({name:"ripple",beforeMount(e,t){const a=t.instance.$.appContext.config.globalProperties.$q.config||{};if(a.ripple===!1)return;const n={cfg:a,enabled:t.value!==!1,modifiers:{},abort:[],start(i){n.enabled===!0&&i.qSkipRipple!==!0&&i.type===(n.modifiers.early===!0?"pointerdown":"click")&&X(i,e,n,i.qKeyEvent===!0)},keystart:Se(i=>{n.enabled===!0&&i.qSkipRipple!==!0&&z(i,n.modifiers.keyCodes)===!0&&i.type===`key${n.modifiers.early===!0?"down":"up"}`&&X(i,e,n,!0)},300)};Y(n,t),e.__qripple=n,de(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const a=e.__qripple;a!==void 0&&(a.enabled=t.value!==!1,a.enabled===!0&&Object(t.value)===t.value&&Y(a,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(a=>{a()}),fe(t,"main"),delete e._qripple)}});const oe={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},Ae=Object.keys(oe),Pe={align:{type:String,validator:e=>Ae.includes(e)}};function Te(e){return d(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${oe[t]}`})}function se(e,t){typeof t.type=="symbol"?Array.isArray(t.children)===!0&&t.children.forEach(a=>{se(e,a)}):e.add(t)}function Ge(e){const t=new Set;return e.forEach(a=>{se(t,a)}),Array.from(t)}function Oe(e){return e.appContext.config.globalProperties.$router!==void 0}function Je(e){return e.isUnmounted===!0||e.isDeactivated===!0}function Z(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function G(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Me(e,t){for(const a in t){const n=t[a],i=e[a];if(typeof n=="string"){if(n!==i)return!1}else if(Array.isArray(i)===!1||i.length!==n.length||n.some((f,s)=>f!==i[s]))return!1}return!0}function J(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((a,n)=>a===t[n]):e.length===1&&e[0]===t}function je(e,t){return Array.isArray(e)===!0?J(e,t):Array.isArray(t)===!0?J(t,e):e===t}function Ke(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const a in e)if(je(e[a],t[a])===!1)return!1;return!0}const Ie={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function Ne({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const a=V(),{props:n,proxy:i,emit:f}=a,s=Oe(a),r=d(()=>n.disable!==!0&&n.href!==void 0),q=t===!0?d(()=>s===!0&&n.disable!==!0&&r.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):d(()=>s===!0&&r.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),b=d(()=>q.value===!0?_(n.to):null),o=d(()=>b.value!==null),y=d(()=>r.value===!0||o.value===!0),l=d(()=>n.type==="a"||y.value===!0?"a":n.tag||e||"div"),p=d(()=>r.value===!0?{href:n.href,target:n.target}:o.value===!0?{href:b.value.href,target:n.target}:{}),h=d(()=>{if(o.value===!1)return-1;const{matched:v}=b.value,{length:E}=v,R=v[E-1];if(R===void 0)return-1;const C=i.$route.matched;if(C.length===0)return-1;const L=C.findIndex(G.bind(null,R));if(L>-1)return L;const I=Z(v[E-2]);return E>1&&Z(R)===I&&C[C.length-1].path!==I?C.findIndex(G.bind(null,v[E-2])):L}),k=d(()=>o.value===!0&&h.value!==-1&&Me(i.$route.params,b.value.params)),c=d(()=>k.value===!0&&h.value===i.$route.matched.length-1&&Ke(i.$route.params,b.value.params)),x=d(()=>o.value===!0?c.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":k.value===!0?` ${n.activeClass}`:"":"");function _(v){try{return i.$router.resolve(v)}catch{}return null}function B(v,{returnRouterError:E,to:R=n.to,replace:C=n.replace}={}){if(n.disable===!0)return v.preventDefault(),Promise.resolve(!1);if(v.metaKey||v.altKey||v.ctrlKey||v.shiftKey||v.button!==void 0&&v.button!==0||n.target==="_blank")return Promise.resolve(!1);v.preventDefault();const L=i.$router[C===!0?"replace":"push"](R);return E===!0?L:L.then(()=>{}).catch(()=>{})}function S(v){if(o.value===!0){const E=R=>B(v,R);f("click",v,E),v.defaultPrevented!==!0&&E()}else f("click",v)}return{hasRouterLink:o,hasHrefLink:r,hasLink:y,linkTag:l,resolvedLink:b,linkIsActive:k,linkIsExactActive:c,linkClass:x,linkAttrs:p,getLink:_,navigateToRouterLink:B,navigateOnClick:S}}const ee={none:0,xs:4,sm:8,md:16,lg:24,xl:32},De={xs:8,sm:10,md:14,lg:20,xl:24},ze=["button","submit","reset"],Ve=/[^\s]\/[^\s]/,Qe=["flat","outline","push","unelevated"],Fe=(e,t)=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t,Ue={...ne,...Ie,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...Qe.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Pe.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function He(e){const t=ae(e,De),a=Te(e),{hasRouterLink:n,hasLink:i,linkTag:f,linkAttrs:s,navigateOnClick:r}=Ne({fallbackTag:"button"}),q=d(()=>{const c=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},c,{padding:e.padding.split(/\s+/).map(x=>x in ee?ee[x]+"px":x).join(" "),minWidth:"0",minHeight:"0"}):c}),b=d(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),o=d(()=>e.disable!==!0&&e.loading!==!0),y=d(()=>o.value===!0?e.tabindex||0:-1),l=d(()=>Fe(e,"standard")),p=d(()=>{const c={tabindex:y.value};return i.value===!0?Object.assign(c,s.value):ze.includes(e.type)===!0&&(c.type=e.type),f.value==="a"?(e.disable===!0?c["aria-disabled"]="true":c.href===void 0&&(c.role="button"),n.value!==!0&&Ve.test(e.type)===!0&&(c.type=e.type)):e.disable===!0&&(c.disabled="",c["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(c,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),c}),h=d(()=>{let c;e.color!==void 0?e.flat===!0||e.outline===!0?c=`text-${e.textColor||e.color}`:c=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(c=`text-${e.textColor}`);const x=e.round===!0?"round":`rectangle${b.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${l.value} q-btn--${x}`+(c!==void 0?" "+c:"")+(o.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),k=d(()=>a.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:h,style:q,innerClasses:k,attributes:p,hasLink:i,linkTag:f,navigateOnClick:r,isActionable:o}}const{passiveCapture:$}=ye;let P=null,T=null,O=null;var et=re({name:"QBtn",props:{...Ue,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:a}){const{proxy:n}=V(),{classes:i,style:f,innerClasses:s,attributes:r,hasLink:q,linkTag:b,navigateOnClick:o,isActionable:y}=He(e),l=Q(null),p=Q(null);let h=null,k,c=null;const x=d(()=>e.label!==void 0&&e.label!==null&&e.label!==""),_=d(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:q.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),B=d(()=>({center:e.round})),S=d(()=>{const u=Math.max(0,Math.min(100,e.percentage));return u>0?{transition:"transform 0.6s",transform:`translateX(${u-100}%)`}:{}}),v=d(()=>{if(e.loading===!0)return{onMousedown:j,onTouchstart:j,onClick:j,onKeydown:j,onKeyup:j};if(y.value===!0){const u={onClick:R,onKeydown:C,onMousedown:I};if(n.$q.platform.has.touch===!0){const g=e.onTouchstart!==void 0?"":"Passive";u[`onTouchstart${g}`]=L}return u}return{onClick:A}}),E=d(()=>({ref:l,class:"q-btn q-btn-item non-selectable no-outline "+i.value,style:f.value,...r.value,...v.value}));function R(u){if(l.value!==null){if(u!==void 0){if(u.defaultPrevented===!0)return;const g=document.activeElement;if(e.type==="submit"&&g!==document.body&&l.value.contains(g)===!1&&g.contains(l.value)===!1){l.value.focus();const N=()=>{document.removeEventListener("keydown",A,!0),document.removeEventListener("keyup",N,$),l.value!==null&&l.value.removeEventListener("blur",N,$)};document.addEventListener("keydown",A,!0),document.addEventListener("keyup",N,$),l.value.addEventListener("blur",N,$)}}o(u)}}function C(u){l.value!==null&&(a("keydown",u),z(u,[13,32])===!0&&T!==l.value&&(T!==null&&M(),u.defaultPrevented!==!0&&(l.value.focus(),T=l.value,l.value.classList.add("q-btn--active"),document.addEventListener("keyup",w,!0),l.value.addEventListener("blur",w,$)),A(u)))}function L(u){l.value!==null&&(a("touchstart",u),u.defaultPrevented!==!0&&(P!==l.value&&(P!==null&&M(),P=l.value,h=u.target,h.addEventListener("touchcancel",w,$),h.addEventListener("touchend",w,$)),k=!0,c!==null&&clearTimeout(c),c=setTimeout(()=>{c=null,k=!1},200)))}function I(u){l.value!==null&&(u.qSkipRipple=k===!0,a("mousedown",u),u.defaultPrevented!==!0&&O!==l.value&&(O!==null&&M(),O=l.value,l.value.classList.add("q-btn--active"),document.addEventListener("mouseup",w,$)))}function w(u){if(l.value!==null&&!(u!==void 0&&u.type==="blur"&&document.activeElement===l.value)){if(u!==void 0&&u.type==="keyup"){if(T===l.value&&z(u,[13,32])===!0){const g=new MouseEvent("click",u);g.qKeyEvent=!0,u.defaultPrevented===!0&&be(g),u.cancelBubble===!0&&te(g),l.value.dispatchEvent(g),A(u),u.qKeyEvent=!0}a("keyup",u)}M()}}function M(u){const g=p.value;u!==!0&&(P===l.value||O===l.value)&&g!==null&&g!==document.activeElement&&(g.setAttribute("tabindex",-1),g.focus()),P===l.value&&(h!==null&&(h.removeEventListener("touchcancel",w,$),h.removeEventListener("touchend",w,$)),P=h=null),O===l.value&&(document.removeEventListener("mouseup",w,$),O=null),T===l.value&&(document.removeEventListener("keyup",w,!0),l.value!==null&&l.value.removeEventListener("blur",w,$),T=null),l.value!==null&&l.value.classList.remove("q-btn--active")}function j(u){A(u),u.qSkipRipple=!0}return me(()=>{M(!0)}),Object.assign(n,{click:R}),()=>{let u=[];e.icon!==void 0&&u.push(m(W,{name:e.icon,left:e.stack!==!0&&x.value===!0,role:"img","aria-hidden":"true"})),x.value===!0&&u.push(m("span",{class:"block"},[e.label])),u=K(t.default,u),e.iconRight!==void 0&&e.round===!1&&u.push(m(W,{name:e.iconRight,right:e.stack!==!0&&x.value===!0,role:"img","aria-hidden":"true"}));const g=[m("span",{class:"q-focus-helper",ref:p})];return e.loading===!0&&e.percentage!==void 0&&g.push(m("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[m("span",{class:"q-btn__progress-indicator fit block",style:S.value})])),g.push(m("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+s.value},u)),e.loading!==null&&g.push(m(ge,{name:"q-transition--fade"},()=>e.loading===!0?[m("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[m(pe)])]:null)),he(m(b.value,E.value,g),[[_e,_.value,void 0,B.value]])}}});export{W as Q,_e as R,Ne as a,Pe as b,Te as c,Be as d,Ze as e,et as f,Ge as g,Je as h,Ie as u,Oe as v};