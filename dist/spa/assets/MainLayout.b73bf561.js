import{k as D,l as ke,j as _,m as O,t as N,n as S,p as xe,v as Ve,q as A,s as ht,u as J,x as gt,y as bt,_ as je,r as x,z as V,c as d,h as L,A as j,B as de,i as ce,C as E,D as ee,w as q,E as fe,G as yt,g as R,H as pt,I as G,J as Ye,K as wt,L as le,M as we,N as Me,O as _e,P as $e,Q as Ce,R as _t,o as Ke,S as Pe,U as De,V as Ge,W as Ct,X as Je,Y as qt,Z as ne,a as Lt,$ as Ae,a0 as X,a1 as St,F as kt,d as xt,a2 as $t}from"./index.1370e9ec.js";import{Q as Z,u as Bt,a as zt,b as ue,c as Tt,d as Qt,g as Ot}from"./QBtn.72244558.js";import{Q as Et,a as Vt,b as se,u as Ze,c as et,d as Mt,e as Pt,f as Dt,g as At,h as Ht,i as Ft,j as oe,k as It,l as Nt,m as Rt,n as Wt,o as qe,p as He,q as ie,r as re}from"./format.bd158ba8.js";import{u as Ut}from"./use-meta.76146ab4.js";const Be=e=>(gt("data-v-eb798e9a"),e=e(),bt(),e),Xt={id:"login-box-container"},jt={class:"row flex flex-center fluid"},Yt={class:"flex-rwd flex-start-center"},Kt={class:"fluid text-center bold"},Gt=Be(()=>O("label",{for:"username"},"Username:",-1)),Jt=Be(()=>O("label",{for:"password"},"Password:",-1)),Zt=Be(()=>O("div",{class:"small-space"},null,-1)),ea={class:"flex flex-center"},ta={key:0,style:{color:"red"}};function aa(e,l,n,i,t,a){return D(),ke("div",Xt,[_(Z,{id:"cancel-login",size:"xl",onClick:l[0]||(l[0]=r=>e.$emit("cancel-login")),icon:"close",flat:"",round:"",dense:""}),O("div",jt,[O("div",Yt,[O("h2",Kt,N(e.$t("Login")),1),_(Vt,{onSubmit:ht(i.login,["prevent"])},{default:S(()=>[O("div",null,[Gt,xe(O("input",{id:"username",type:"text","onUpdate:modelValue":l[1]||(l[1]=r=>i.username=r)},null,512),[[Ve,i.username]])]),O("div",null,[Jt,xe(O("input",{id:"password",type:"password","onUpdate:modelValue":l[2]||(l[2]=r=>i.password=r)},null,512),[[Ve,i.password]])]),Zt,O("div",ea,[_(Et,{class:"flex flex-center",push:""},{default:S(()=>[_(Z,{push:"",type:"submit",color:"primary"},{default:S(()=>[A("Login")]),_:1}),_(Z,{push:"",color:"secondary"},{default:S(()=>[A("Register")]),_:1})]),_:1})])]),_:1},8,["onSubmit"]),i.errorMessage?(D(),ke("p",ta,N(i.errorMessage),1)):J("",!0)])])])}const la={name:"LoginComponent",setup(){const e=x(""),l=x(""),n=x("");function i(){e.value==="yourUsername"&&l.value==="yourPassword"?n.value="":n.value="\u5E33\u865F\u6216\u5BC6\u78BC\u4E0D\u6B63\u78BA"}return{username:e,password:l,errorMessage:n,login:i}}};var na=je(la,[["render",aa],["__scopeId","data-v-eb798e9a"]]),Fe=V({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:l}){const n=d(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>L("div",{class:n.value},j(l.default))}});const oa=["top","middle","bottom"];var ia=V({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:e=>oa.includes(e)}},setup(e,{slots:l}){const n=d(()=>e.align!==void 0?{verticalAlign:e.align}:null),i=d(()=>{const t=e.outline===!0&&e.color||e.textColor;return`q-badge flex inline items-center no-wrap q-badge--${e.multiLine===!0?"multi":"single"}-line`+(e.outline===!0?" q-badge--outline":e.color!==void 0?` bg-${e.color}`:"")+(t!==void 0?` text-${t}`:"")+(e.floating===!0?" q-badge--floating":"")+(e.rounded===!0?" q-badge--rounded":"")+(e.transparent===!0?" q-badge--transparent":"")});return()=>L("div",{class:i.value,style:n.value,role:"status","aria-label":e.label},de(l.default,e.label!==void 0?[e.label]:[]))}}),Ie=V({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:l}){const n=d(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>L("div",{class:n.value,role:"toolbar"},j(l.default))}}),Ne=V({name:"QBreadcrumbsEl",props:{...Bt,label:String,icon:String,tag:{type:String,default:"span"}},emits:["click"],setup(e,{slots:l}){const{linkTag:n,linkAttrs:i,linkClass:t,navigateOnClick:a}=zt(),r=d(()=>({class:"q-breadcrumbs__el q-link flex inline items-center relative-position "+(e.disable!==!0?"q-link--focusable"+t.value:"q-breadcrumbs__el--disable"),...i.value,onClick:a})),h=d(()=>"q-breadcrumbs__el-icon"+(e.label!==void 0?" q-breadcrumbs__el-icon--with-label":""));return()=>{const s=[];return e.icon!==void 0&&s.push(L(ue,{class:h.value,name:e.icon})),e.label!==void 0&&s.push(e.label),L(n.value,{...r.value},de(l.default,s))}}});const ra=["",!0];var ua=V({name:"QBreadcrumbs",props:{...Tt,separator:{type:String,default:"/"},separatorColor:String,activeColor:{type:String,default:"primary"},gutter:{type:String,validator:e=>["none","xs","sm","md","lg","xl"].includes(e),default:"sm"}},setup(e,{slots:l}){const n=Qt(e),i=d(()=>`flex items-center ${n.value}${e.gutter==="none"?"":` q-gutter-${e.gutter}`}`),t=d(()=>e.separatorColor?` text-${e.separatorColor}`:""),a=d(()=>` text-${e.activeColor}`);return()=>{const r=Ot(j(l.default));if(r.length===0)return;let h=1;const s=[],c=r.filter(y=>y.type!==void 0&&y.type.name==="QBreadcrumbsEl").length,u=l.separator!==void 0?l.separator:()=>e.separator;return r.forEach(y=>{if(y.type!==void 0&&y.type.name==="QBreadcrumbsEl"){const w=h<c,m=y.props!==null&&ra.includes(y.props.disable),g=(w===!0?"":" q-breadcrumbs--last")+(m!==!0&&w===!0?a.value:"");h++,s.push(L("div",{class:`flex items-center${g}`},[y])),w===!0&&s.push(L("div",{class:"q-breadcrumbs__separator"+t.value},u()))}else s.push(y)}),L("div",{class:"q-breadcrumbs"},[L("div",{class:i.value},s)])}}}),sa=V({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:l,emit:n}){const{proxy:{$q:i}}=R(),t=ce(ee,E);if(t===E)return console.error("QHeader needs to be child of QLayout"),E;const a=x(parseInt(e.heightHint,10)),r=x(!0),h=d(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||i.platform.is.ios&&t.isContainer.value===!0),s=d(()=>{if(e.modelValue!==!0)return 0;if(h.value===!0)return r.value===!0?a.value:0;const v=a.value-t.scroll.value.position;return v>0?v:0}),c=d(()=>e.modelValue!==!0||h.value===!0&&r.value!==!0),u=d(()=>e.modelValue===!0&&c.value===!0&&e.reveal===!0),y=d(()=>"q-header q-layout__section--marginal "+(h.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(c.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),w=d(()=>{const v=t.rows.value.top,z={};return v[0]==="l"&&t.left.space===!0&&(z[i.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),v[2]==="r"&&t.right.space===!0&&(z[i.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),z});function m(v,z){t.update("header",v,z)}function g(v,z){v.value!==z&&(v.value=z)}function B({height:v}){g(a,v),m("size",v)}function $(v){u.value===!0&&g(r,!0),n("focusin",v)}q(()=>e.modelValue,v=>{m("space",v),g(r,!0),t.animate()}),q(s,v=>{m("offset",v)}),q(()=>e.reveal,v=>{v===!1&&g(r,e.modelValue)}),q(r,v=>{t.animate(),n("reveal",v)}),q(t.scroll,v=>{e.reveal===!0&&g(r,v.direction==="up"||v.position<=e.revealOffset||v.position-v.inflectionPoint<100)});const C={};return t.instances.header=C,e.modelValue===!0&&m("size",a.value),m("space",e.modelValue),m("offset",s.value),fe(()=>{t.instances.header===C&&(t.instances.header=void 0,m("size",0),m("offset",0),m("space",!1))}),()=>{const v=yt(l.default,[]);return e.elevated===!0&&v.push(L("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),v.push(L(se,{debounce:0,onResize:B})),L("header",{class:y.value,style:w.value,onFocusin:$},v)}}}),da=V({name:"QList",props:{...Ze,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:l}){const n=R(),i=et(e,n.proxy.$q),t=d(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(i.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>L(e.tag,{class:t.value},j(l.default))}});const ze={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},ca=Object.keys(ze);ze.all=!0;function Re(e){const l={};for(const n of ca)e[n]===!0&&(l[n]=!0);return Object.keys(l).length===0?ze:(l.horizontal===!0?l.left=l.right=!0:l.left===!0&&l.right===!0&&(l.horizontal=!0),l.vertical===!0?l.up=l.down=!0:l.up===!0&&l.down===!0&&(l.vertical=!0),l.horizontal===!0&&l.vertical===!0&&(l.all=!0),l)}const fa=["INPUT","TEXTAREA"];function We(e,l){return l.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof l.handler=="function"&&fa.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(l.uid)===-1)}function Le(e,l,n){const i=$e(e);let t,a=i.left-l.event.x,r=i.top-l.event.y,h=Math.abs(a),s=Math.abs(r);const c=l.direction;c.horizontal===!0&&c.vertical!==!0?t=a<0?"left":"right":c.horizontal!==!0&&c.vertical===!0?t=r<0?"up":"down":c.up===!0&&r<0?(t="up",h>s&&(c.left===!0&&a<0?t="left":c.right===!0&&a>0&&(t="right"))):c.down===!0&&r>0?(t="down",h>s&&(c.left===!0&&a<0?t="left":c.right===!0&&a>0&&(t="right"))):c.left===!0&&a<0?(t="left",h<s&&(c.up===!0&&r<0?t="up":c.down===!0&&r>0&&(t="down"))):c.right===!0&&a>0&&(t="right",h<s&&(c.up===!0&&r<0?t="up":c.down===!0&&r>0&&(t="down")));let u=!1;if(t===void 0&&n===!1){if(l.event.isFirst===!0||l.event.lastDir===void 0)return{};t=l.event.lastDir,u=!0,t==="left"||t==="right"?(i.left-=a,h=0,a=0):(i.top-=r,s=0,r=0)}return{synthetic:u,payload:{evt:e,touch:l.event.mouse!==!0,mouse:l.event.mouse===!0,position:i,direction:t,isFirst:l.event.isFirst,isFinal:n===!0,duration:Date.now()-l.event.time,distance:{x:h,y:s},offset:{x:a,y:r},delta:{x:i.left-l.event.lastX,y:i.top-l.event.lastY}}}}let va=0;var Se=pt({name:"touch-pan",beforeMount(e,{value:l,modifiers:n}){if(n.mouse!==!0&&G.has.touch!==!0)return;function i(a,r){n.mouse===!0&&r===!0?_t(a):(n.stop===!0&&_e(a),n.prevent===!0&&Me(a))}const t={uid:"qvtp_"+va++,handler:l,modifiers:n,direction:Re(n),noop:Ye,mouseStart(a){We(a,t)&&wt(a)&&(le(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(a,!0))},touchStart(a){if(We(a,t)){const r=a.target;le(t,"temp",[[r,"touchmove","move","notPassiveCapture"],[r,"touchcancel","end","passiveCapture"],[r,"touchend","end","passiveCapture"]]),t.start(a)}},start(a,r){if(G.is.firefox===!0&&we(e,!0),t.lastEvt=a,r===!0||n.stop===!0){if(t.direction.all!==!0&&(r!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const c=a.type.indexOf("mouse")>-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&Me(c),a.cancelBubble===!0&&_e(c),Object.assign(c,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[t.uid]:a.qClonedBy.concat(t.uid)}),t.initialEvent={target:a.target,event:c}}_e(a)}const{left:h,top:s}=$e(a);t.event={x:h,y:s,time:Date.now(),mouse:r===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:h,lastY:s}},move(a){if(t.event===void 0)return;const r=$e(a),h=r.left-t.event.x,s=r.top-t.event.y;if(h===0&&s===0)return;t.lastEvt=a;const c=t.event.mouse===!0,u=()=>{i(a,c);let m;n.preserveCursor!==!0&&n.preservecursor!==!0&&(m=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),c===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Mt(),t.styleCleanup=g=>{if(t.styleCleanup=void 0,m!==void 0&&(document.documentElement.style.cursor=m),document.body.classList.remove("non-selectable"),c===!0){const B=()=>{document.body.classList.remove("no-pointer-events--children")};g!==void 0?setTimeout(()=>{B(),g()},50):B()}else g!==void 0&&g()}};if(t.event.detected===!0){t.event.isFirst!==!0&&i(a,t.event.mouse);const{payload:m,synthetic:g}=Le(a,t,!1);m!==void 0&&(t.handler(m)===!1?t.end(a):(t.styleCleanup===void 0&&t.event.isFirst===!0&&u(),t.event.lastX=m.position.left,t.event.lastY=m.position.top,t.event.lastDir=g===!0?void 0:m.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||c===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){u(),t.event.detected=!0,t.move(a);return}const y=Math.abs(h),w=Math.abs(s);y!==w&&(t.direction.horizontal===!0&&y>w||t.direction.vertical===!0&&y<w||t.direction.up===!0&&y<w&&s<0||t.direction.down===!0&&y<w&&s>0||t.direction.left===!0&&y>w&&h<0||t.direction.right===!0&&y>w&&h>0?(t.event.detected=!0,t.move(a)):t.end(a,!0))},end(a,r){if(t.event!==void 0){if(Ce(t,"temp"),G.is.firefox===!0&&we(e,!1),r===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Le(a===void 0?t.lastEvt:a,t).payload);const{payload:h}=Le(a===void 0?t.lastEvt:a,t,!0),s=()=>{t.handler(h)};t.styleCleanup!==void 0?t.styleCleanup(s):s()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,n.mouse===!0){const a=n.mouseCapture===!0||n.mousecapture===!0?"Capture":"";le(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}G.has.touch===!0&&le(t,"main",[[e,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,l){const n=e.__qtouchpan;n!==void 0&&(l.oldValue!==l.value&&(typeof value!="function"&&n.end(),n.handler=l.value),n.direction=Re(l.modifiers))},beforeUnmount(e){const l=e.__qtouchpan;l!==void 0&&(l.event!==void 0&&l.end(),Ce(l,"main"),Ce(l,"temp"),G.is.firefox===!0&&we(e,!1),l.styleCleanup!==void 0&&l.styleCleanup(),delete e.__qtouchpan)}});const Ue=150;var ma=V({name:"QDrawer",inheritAttrs:!1,props:{...Pt,...Ze,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Dt,"onLayout","miniState"],setup(e,{slots:l,emit:n,attrs:i}){const t=R(),{proxy:{$q:a}}=t,r=et(e,a),{preventBodyScroll:h}=It(),{registerTimeout:s,removeTimeout:c}=At(),u=ce(ee,E);if(u===E)return console.error("QDrawer needs to be child of QLayout"),E;let y,w=null,m;const g=x(e.behavior==="mobile"||e.behavior!=="desktop"&&u.totalWidth.value<=e.breakpoint),B=d(()=>e.mini===!0&&g.value!==!0),$=d(()=>B.value===!0?e.miniWidth:e.width),C=x(e.showIfAbove===!0&&g.value===!1?!0:e.modelValue===!0),v=d(()=>e.persistent!==!0&&(g.value===!0||tt.value===!0));function z(o,p){if(M(),o!==!1&&u.animate(),Q(0),g.value===!0){const T=u.instances[te.value];T!==void 0&&T.belowBreakpoint===!0&&T.hide(!1),H(1),u.isContainer.value!==!0&&h(!0)}else H(0),o!==!1&&be(!1);s(()=>{o!==!1&&be(!0),p!==!0&&n("show",o)},Ue)}function b(o,p){Y(),o!==!1&&u.animate(),H(0),Q(W.value*$.value),ye(),p!==!0?s(()=>{n("hide",o)},Ue):c()}const{show:f,hide:k}=Ht({showing:C,hideOnRouteChange:v,handleShow:z,handleHide:b}),{addToHistory:M,removeFromHistory:Y}=Ft(C,k,v),I={belowBreakpoint:g,hide:k},P=d(()=>e.side==="right"),W=d(()=>(a.lang.rtl===!0?-1:1)*(P.value===!0?1:-1)),Te=x(0),U=x(!1),ve=x(!1),Qe=x($.value*W.value),te=d(()=>P.value===!0?"left":"right"),me=d(()=>C.value===!0&&g.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:$.value:0),he=d(()=>e.overlay===!0||e.miniToOverlay===!0||u.view.value.indexOf(P.value?"R":"L")>-1||a.platform.is.ios===!0&&u.isContainer.value===!0),K=d(()=>e.overlay===!1&&C.value===!0&&g.value===!1),tt=d(()=>e.overlay===!0&&C.value===!0&&g.value===!1),at=d(()=>"fullscreen q-drawer__backdrop"+(C.value===!1&&U.value===!1?" hidden":"")),lt=d(()=>({backgroundColor:`rgba(0,0,0,${Te.value*.4})`})),Oe=d(()=>P.value===!0?u.rows.value.top[2]==="r":u.rows.value.top[0]==="l"),nt=d(()=>P.value===!0?u.rows.value.bottom[2]==="r":u.rows.value.bottom[0]==="l"),ot=d(()=>{const o={};return u.header.space===!0&&Oe.value===!1&&(he.value===!0?o.top=`${u.header.offset}px`:u.header.space===!0&&(o.top=`${u.header.size}px`)),u.footer.space===!0&&nt.value===!1&&(he.value===!0?o.bottom=`${u.footer.offset}px`:u.footer.space===!0&&(o.bottom=`${u.footer.size}px`)),o}),it=d(()=>{const o={width:`${$.value}px`,transform:`translateX(${Qe.value}px)`};return g.value===!0?o:Object.assign(o,ot.value)}),rt=d(()=>"q-drawer__content fit "+(u.isContainer.value!==!0?"scroll":"overflow-auto")),ut=d(()=>`q-drawer q-drawer--${e.side}`+(ve.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(r.value===!0?" q-drawer--dark q-dark":"")+(U.value===!0?" no-transition":C.value===!0?"":" q-layout--prevent-focus")+(g.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${B.value===!0?"mini":"standard"}`+(he.value===!0||K.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Oe.value===!0?" q-drawer--top-padding":""))),st=d(()=>{const o=a.lang.rtl===!0?e.side:te.value;return[[Se,vt,void 0,{[o]:!0,mouse:!0}]]}),dt=d(()=>{const o=a.lang.rtl===!0?te.value:e.side;return[[Se,Ee,void 0,{[o]:!0,mouse:!0}]]}),ct=d(()=>{const o=a.lang.rtl===!0?te.value:e.side;return[[Se,Ee,void 0,{[o]:!0,mouse:!0,mouseAllDir:!0}]]});function ge(){mt(g,e.behavior==="mobile"||e.behavior!=="desktop"&&u.totalWidth.value<=e.breakpoint)}q(g,o=>{o===!0?(y=C.value,C.value===!0&&k(!1)):e.overlay===!1&&e.behavior!=="mobile"&&y!==!1&&(C.value===!0?(Q(0),H(0),ye()):f(!1))}),q(()=>e.side,(o,p)=>{u.instances[p]===I&&(u.instances[p]=void 0,u[p].space=!1,u[p].offset=0),u.instances[o]=I,u[o].size=$.value,u[o].space=K.value,u[o].offset=me.value}),q(u.totalWidth,()=>{(u.isContainer.value===!0||document.qScrollPrevented!==!0)&&ge()}),q(()=>e.behavior+e.breakpoint,ge),q(u.isContainer,o=>{C.value===!0&&h(o!==!0),o===!0&&ge()}),q(u.scrollbarWidth,()=>{Q(C.value===!0?0:void 0)}),q(me,o=>{F("offset",o)}),q(K,o=>{n("onLayout",o),F("space",o)}),q(P,()=>{Q()}),q($,o=>{Q(),pe(e.miniToOverlay,o)}),q(()=>e.miniToOverlay,o=>{pe(o,$.value)}),q(()=>a.lang.rtl,()=>{Q()}),q(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(ft(),u.animate())}),q(B,o=>{n("miniState",o)});function Q(o){o===void 0?Pe(()=>{o=C.value===!0?0:$.value,Q(W.value*o)}):(u.isContainer.value===!0&&P.value===!0&&(g.value===!0||Math.abs(o)===$.value)&&(o+=W.value*u.scrollbarWidth.value),Qe.value=o)}function H(o){Te.value=o}function be(o){const p=o===!0?"remove":u.isContainer.value!==!0?"add":"";p!==""&&document.body.classList[p]("q-body--drawer-toggle")}function ft(){w!==null&&clearTimeout(w),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ve.value=!0,w=setTimeout(()=>{w=null,ve.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function vt(o){if(C.value!==!1)return;const p=$.value,T=oe(o.distance.x,0,p);if(o.isFinal===!0){T>=Math.min(75,p)===!0?f():(u.animate(),H(0),Q(W.value*p)),U.value=!1;return}Q((a.lang.rtl===!0?P.value!==!0:P.value)?Math.max(p-T,0):Math.min(0,T-p)),H(oe(T/p,0,1)),o.isFirst===!0&&(U.value=!0)}function Ee(o){if(C.value!==!0)return;const p=$.value,T=o.direction===e.side,ae=(a.lang.rtl===!0?T!==!0:T)?oe(o.distance.x,0,p):0;if(o.isFinal===!0){Math.abs(ae)<Math.min(75,p)===!0?(u.animate(),H(1),Q(0)):k(),U.value=!1;return}Q(W.value*ae),H(oe(1-ae/p,0,1)),o.isFirst===!0&&(U.value=!0)}function ye(){h(!1),be(!0)}function F(o,p){u.update(e.side,o,p)}function mt(o,p){o.value!==p&&(o.value=p)}function pe(o,p){F("size",o===!0?e.miniWidth:p)}return u.instances[e.side]=I,pe(e.miniToOverlay,$.value),F("space",K.value),F("offset",me.value),e.showIfAbove===!0&&e.modelValue!==!0&&C.value===!0&&e["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),Ke(()=>{n("onLayout",K.value),n("miniState",B.value),y=e.showIfAbove===!0;const o=()=>{(C.value===!0?z:b)(!1,!0)};if(u.totalWidth.value!==0){Pe(o);return}m=q(u.totalWidth,()=>{m(),m=void 0,C.value===!1&&e.showIfAbove===!0&&g.value===!1?f(!1):o()})}),fe(()=>{m!==void 0&&m(),w!==null&&(clearTimeout(w),w=null),C.value===!0&&ye(),u.instances[e.side]===I&&(u.instances[e.side]=void 0,F("size",0),F("offset",0),F("space",!1))}),()=>{const o=[];g.value===!0&&(e.noSwipeOpen===!1&&o.push(xe(L("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),st.value)),o.push(De("div",{ref:"backdrop",class:at.value,style:lt.value,"aria-hidden":"true",onClick:k},void 0,"backdrop",e.noSwipeBackdrop!==!0&&C.value===!0,()=>ct.value)));const p=B.value===!0&&l.mini!==void 0,T=[L("div",{...i,key:""+p,class:[rt.value,i.class]},p===!0?l.mini():j(l.default))];return e.elevated===!0&&C.value===!0&&T.push(L("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(De("aside",{ref:"content",class:ut.value,style:it.value},T,"contentclose",e.noSwipeClose!==!0&&g.value===!0,()=>dt.value)),L("div",{class:"q-drawer-container"},o)}}}),ha=V({name:"QPageContainer",setup(e,{slots:l}){const{proxy:{$q:n}}=R(),i=ce(ee,E);if(i===E)return console.error("QPageContainer needs to be child of QLayout"),E;Ge(Ct,!0);const t=d(()=>{const a={};return i.header.space===!0&&(a.paddingTop=`${i.header.size}px`),i.right.space===!0&&(a[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${i.right.size}px`),i.footer.space===!0&&(a.paddingBottom=`${i.footer.size}px`),i.left.space===!0&&(a[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${i.left.size}px`),a});return()=>L("div",{class:"q-page-container",style:t.value},j(l.default))}}),ga=V({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:l,emit:n}){const{proxy:{$q:i}}=R(),t=ce(ee,E);if(t===E)return console.error("QFooter needs to be child of QLayout"),E;const a=x(parseInt(e.heightHint,10)),r=x(!0),h=x(Je.value===!0||t.isContainer.value===!0?0:window.innerHeight),s=d(()=>e.reveal===!0||t.view.value.indexOf("F")>-1||i.platform.is.ios&&t.isContainer.value===!0),c=d(()=>t.isContainer.value===!0?t.containerHeight.value:h.value),u=d(()=>{if(e.modelValue!==!0)return 0;if(s.value===!0)return r.value===!0?a.value:0;const f=t.scroll.value.position+c.value+a.value-t.height.value;return f>0?f:0}),y=d(()=>e.modelValue!==!0||s.value===!0&&r.value!==!0),w=d(()=>e.modelValue===!0&&y.value===!0&&e.reveal===!0),m=d(()=>"q-footer q-layout__section--marginal "+(s.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(y.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(s.value!==!0?" hidden":""):"")),g=d(()=>{const f=t.rows.value.bottom,k={};return f[0]==="l"&&t.left.space===!0&&(k[i.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),f[2]==="r"&&t.right.space===!0&&(k[i.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),k});function B(f,k){t.update("footer",f,k)}function $(f,k){f.value!==k&&(f.value=k)}function C({height:f}){$(a,f),B("size",f)}function v(){if(e.reveal!==!0)return;const{direction:f,position:k,inflectionPoint:M}=t.scroll.value;$(r,f==="up"||k-M<100||t.height.value-c.value-k-a.value<300)}function z(f){w.value===!0&&$(r,!0),n("focusin",f)}q(()=>e.modelValue,f=>{B("space",f),$(r,!0),t.animate()}),q(u,f=>{B("offset",f)}),q(()=>e.reveal,f=>{f===!1&&$(r,e.modelValue)}),q(r,f=>{t.animate(),n("reveal",f)}),q([a,t.scroll,t.height],v),q(()=>i.screen.height,f=>{t.isContainer.value!==!0&&$(h,f)});const b={};return t.instances.footer=b,e.modelValue===!0&&B("size",a.value),B("space",e.modelValue),B("offset",u.value),fe(()=>{t.instances.footer===b&&(t.instances.footer=void 0,B("size",0),B("offset",0),B("space",!1))}),()=>{const f=de(l.default,[L(se,{debounce:0,onResize:C})]);return e.elevated===!0&&f.push(L("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),L("footer",{class:m.value,style:g.value,onFocusin:z},f)}}});const{passive:Xe}=qt,ba=["both","horizontal","vertical"];var ya=V({name:"QScrollObserver",props:{axis:{type:String,validator:e=>ba.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:l}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let i=null,t,a;q(()=>e.scrollTarget,()=>{s(),h()});function r(){i!==null&&i();const y=Math.max(0,Rt(t)),w=Wt(t),m={top:y-n.position.top,left:w-n.position.left};if(e.axis==="vertical"&&m.top===0||e.axis==="horizontal"&&m.left===0)return;const g=Math.abs(m.top)>=Math.abs(m.left)?m.top<0?"up":"down":m.left<0?"left":"right";n.position={top:y,left:w},n.directionChanged=n.direction!==g,n.delta=m,n.directionChanged===!0&&(n.direction=g,n.inflectionPoint=n.position),l("scroll",{...n})}function h(){t=Nt(a,e.scrollTarget),t.addEventListener("scroll",c,Xe),c(!0)}function s(){t!==void 0&&(t.removeEventListener("scroll",c,Xe),t=void 0)}function c(y){if(y===!0||e.debounce===0||e.debounce==="0")r();else if(i===null){const[w,m]=e.debounce?[setTimeout(r,e.debounce),clearTimeout]:[requestAnimationFrame(r),cancelAnimationFrame];i=()=>{m(w),i=null}}}const{proxy:u}=R();return q(()=>u.$q.lang.rtl,r),Ke(()=>{a=u.$el.parentNode,h()}),fe(()=>{i!==null&&i(),s()}),Object.assign(u,{trigger:c,getPosition:()=>n}),Ye}}),pa=V({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:l,emit:n}){const{proxy:{$q:i}}=R(),t=x(null),a=x(i.screen.height),r=x(e.container===!0?0:i.screen.width),h=x({position:0,direction:"down",inflectionPoint:0}),s=x(0),c=x(Je.value===!0?0:qe()),u=d(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),y=d(()=>e.container===!1?{minHeight:i.screen.height+"px"}:null),w=d(()=>c.value!==0?{[i.lang.rtl===!0?"left":"right"]:`${c.value}px`}:null),m=d(()=>c.value!==0?{[i.lang.rtl===!0?"right":"left"]:0,[i.lang.rtl===!0?"left":"right"]:`-${c.value}px`,width:`calc(100% + ${c.value}px)`}:null);function g(b){if(e.container===!0||document.qScrollPrevented!==!0){const f={position:b.position.top,direction:b.direction,directionChanged:b.directionChanged,inflectionPoint:b.inflectionPoint.top,delta:b.delta.top};h.value=f,e.onScroll!==void 0&&n("scroll",f)}}function B(b){const{height:f,width:k}=b;let M=!1;a.value!==f&&(M=!0,a.value=f,e.onScrollHeight!==void 0&&n("scrollHeight",f),C()),r.value!==k&&(M=!0,r.value=k),M===!0&&e.onResize!==void 0&&n("resize",b)}function $({height:b}){s.value!==b&&(s.value=b,C())}function C(){if(e.container===!0){const b=a.value>s.value?qe():0;c.value!==b&&(c.value=b)}}let v=null;const z={instances:{},view:d(()=>e.view),isContainer:d(()=>e.container),rootRef:t,height:a,containerHeight:s,scrollbarWidth:c,totalWidth:d(()=>r.value+c.value),rows:d(()=>{const b=e.view.toLowerCase().split(" ");return{top:b[0].split(""),middle:b[1].split(""),bottom:b[2].split("")}}),header:ne({size:0,offset:0,space:!1}),right:ne({size:300,offset:0,space:!1}),footer:ne({size:0,offset:0,space:!1}),left:ne({size:300,offset:0,space:!1}),scroll:h,animate(){v!==null?clearTimeout(v):document.body.classList.add("q-body--layout-animate"),v=setTimeout(()=>{v=null,document.body.classList.remove("q-body--layout-animate")},155)},update(b,f,k){z[b][f]=k}};if(Ge(ee,z),qe()>0){let k=function(){b=null,f.classList.remove("hide-scrollbar")},M=function(){if(b===null){if(f.scrollHeight>i.screen.height)return;f.classList.add("hide-scrollbar")}else clearTimeout(b);b=setTimeout(k,300)},Y=function(I){b!==null&&I==="remove"&&(clearTimeout(b),k()),window[`${I}EventListener`]("resize",M)},b=null;const f=document.body;q(()=>e.container!==!0?"add":"remove",Y),e.container!==!0&&Y("add"),Lt(()=>{Y("remove")})}return()=>{const b=de(l.default,[L(ya,{onScroll:g}),L(se,{onResize:B})]),f=L("div",{class:u.value,style:y.value,ref:e.container===!0?void 0:t,tabindex:-1},b);return e.container===!0?L("div",{class:"q-layout-container overflow-hidden",ref:t},[L(se,{onResize:$}),L("div",{class:"absolute-full",style:w.value},[L("div",{class:"scroll",style:m.value},[f])])]):f}}});const wa={class:"text-white",href:"mailto:undefined"};function _a(e,l,n,i,t,a){const r=Ae("router-view"),h=Ae("Login");return D(),X(pa,{view:"lHh Lpr lFf"},{default:S(()=>[_(sa,{elevated:""},{default:S(()=>[_(Ie,null,{default:S(()=>[_(Z,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),_(Fe,null,{default:S(()=>[A(N(e.$t("title")),1)]),_:1}),_(Z,{flat:"",color:"white",onClick:e.openCart},{default:S(()=>[_(ue,{size:"md",name:"shopping_cart"}),_(ia,{class:"move-to-left",color:"red",floating:"",size:"lg"},{default:S(()=>[A("0")]),_:1})]),_:1},8,["onClick"])]),_:1}),_(ua,{class:"padding","active-color":"white",style:{"font-size":"16px"}},{default:S(()=>[_(Ne,{label:"Home",icon:"home",to:"/"}),e.tail(e.path)?(D(),X(Ne,{key:0,label:e.$t(e.trans(e.tail(e.path)))},null,8,["label"])):J("",!0)]),_:1})]),_:1}),_(ma,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":l[0]||(l[0]=s=>e.leftDrawerOpen=s),"show-if-above":"",bordered:""},{default:S(()=>[_(da,null,{default:S(()=>[_(He,{clickable:"",to:"/"},{default:S(()=>[_(ie,{avatar:""},{default:S(()=>[_(ue,{name:"home"})]),_:1}),_(ie,null,{default:S(()=>[_(re,null,{default:S(()=>[A("Home")]),_:1})]),_:1})]),_:1}),_(re,{header:""},{default:S(()=>[A("\u525B\u505A\u597D\u7684\u52D5\u614B\u8DEF\u7531")]),_:1}),(D(!0),ke(kt,null,St(Object.values(e.courseItems),s=>(D(),X(He,{clickable:"",key:s.id,to:"/class/"+s.id},{default:S(()=>[s.icon?(D(),X(ie,{key:0,avatar:""},{default:S(()=>[_(ue,{name:s.icon},null,8,["name"])]),_:2},1024)):J("",!0),_(ie,null,{default:S(()=>[_(re,null,{default:S(()=>[A(N(e.$t(s.title)),1)]),_:2},1024),s.caption?(D(),X(re,{key:0,caption:""},{default:S(()=>[A(N(e.$t(s.caption)),1)]),_:2},1024)):J("",!0)]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:1})]),_:1},8,["modelValue"]),_(ha,null,{default:S(()=>[_(r,{courseItems:e.courseItems,onTryLogin:e.tryLogin},null,8,["courseItems","onTryLogin"])]),_:1}),e.showLoginComponent?(D(),X(h,{key:0,onCancelLogin:e.cancelLogin},null,8,["onCancelLogin"])):J("",!0),_(ga,null,{default:S(()=>[_(Ie,{class:"text-center"},{default:S(()=>[_(Fe,null,{default:S(()=>[O("a",wa,N(e.serviceEmail),1),A("\xA0\xA0 "+N(e.$t("course_team")),1)]),_:1})]),_:1})]),_:1})]),_:1})}const Ca="service@chihching.org",qa=x({death_and_life:{id:"death_and_life",isOpen:!0,title:"Death_And_Life",caption:"Death_And_Life_Caption",description:"Death_And_Life_Description",icon:"school",link:"/death_and_life",price:450,prices:{full:450,half:350,friend:350,senior:250,special:1}},nullity_13:{id:"nullity_13",isOpen:!0,title:"Nullity_13",caption:"Nullity_13_Caption",description:"Nullity_13_Description",icon:"school",link:"/nullity_13",price:450,prices:{full:450,half:350,friend:350,senior:250,special:1}},life_art_elem:{id:"life_art_elem",isOpen:!1,title:"Life_Art_Elem",caption:"Life_Art_Elem_Caption",description:"Life_Art_Elem_Description",icon:"school",link:"/life_art_elem",price:450,prices:{full:450,half:350,friend:350,senior:250,special:1}}}),La=xt({name:"MainLayout",components:{Login:na},setup(){const e=$t(),l=d(()=>e.path),n=x(!1),i=x(!1);return Ut(()=>({title:"\u81F3\u9752\u5B87\u5B99\u5B66\u6821"})),{serviceEmail:Ca,courseItems:qa,uid:x(""),leftDrawerOpen:n,showLoginComponent:i,route:e,path:l,trans(t){if(t.match(/class\//)){let a=t.replace(/class\//,"");return this.courseItems[a].title}else return t},tail(t){return t.slice(1)},toggleLeftDrawer(){n.value=!n.value},tryLogin(){i.value=!0,window.scrollTo(0,0)},cancelLogin(){console.log("cancelLogin"),i.value=!1},openCart(){window.alert("\u5EFA\u69CB\u4E2D...")}}}});var za=je(La,[["render",_a]]);export{za as default};