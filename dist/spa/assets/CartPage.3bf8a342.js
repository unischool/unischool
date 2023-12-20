import{b as Pe,v as _t,Q as ue,e as qt}from"./use-meta.b693dbab.js";import{z as E,h as o,A as ce,G as wt,g as A,c as i,r as D,w as I,aq as ze,o as Qe,a9 as Ct,aa as kt,E as He,Y as je,B as xe,a3 as Ue,a4 as Ke,as as H,R as Ie,ab as Me,at as ke,au as De,av as Pt,S as Ge,aw as xt,ai as G,k as Rt,a0 as Bt,n as Tt,aj as $t,j as Vt,_ as Ot}from"./index.204f77d1.js";import{a as X,d as Y,j as Ft}from"./format.034aeb32.js";import{Q as pt}from"./QList.21a1b2cb.js";import{j as Lt,k as jt,c as It,l as Mt,m as We,Q as Dt}from"./QSelect.e884247c.js";import{u as Et}from"./vue-i18n.runtime.fbf54fae.js";var At=E({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:a,emit:l}){const s=A(),{proxy:{$q:r}}=s,d=u=>{l("click",u)};return()=>{if(e.props===void 0)return o("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:d},ce(a.default));let u,v;const f=s.vnode.key;if(f){if(u=e.props.colsMap[f],u===void 0)return}else u=e.props.col;if(u.sortable===!0){const n=u.align==="right"?"unshift":"push";v=wt(a.default,[]),v[n](o(Pe,{class:u.__iconClass,name:r.iconSet.table.arrowUp}))}else v=ce(a.default);const b={class:u.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:u.headerStyle,onClick:n=>{u.sortable===!0&&e.props.sort(u),d(n)}};return o("th",b,v)}}});const Nt={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},we={xs:2,sm:4,md:8,lg:16,xl:24};var zt=E({name:"QSeparator",props:{...X,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const a=A(),l=Y(e,a.proxy.$q),s=i(()=>e.vertical===!0?"vertical":"horizontal"),r=i(()=>` q-separator--${s.value}`),d=i(()=>e.inset!==!1?`${r.value}-${Nt[e.inset]}`:""),u=i(()=>`q-separator${r.value}${d.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(l.value===!0?" q-separator--dark":"")),v=i(()=>{const f={};if(e.size!==void 0&&(f[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const b=e.spaced===!0?`${we.md}px`:e.spaced in we?`${we[e.spaced]}px`:e.spaced,n=e.vertical===!0?["Left","Right"]:["Top","Bottom"];f[`margin${n[0]}`]=f[`margin${n[1]}`]=b}return f});return()=>o("hr",{class:u.value,style:v.value,"aria-orientation":s.value})}});const Qt=["horizontal","vertical","cell","none"];var Ht=E({name:"QMarkupTable",props:{...X,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>Qt.includes(e)}},setup(e,{slots:a}){const l=A(),s=Y(e,l.proxy.$q),r=i(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(s.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>o("div",{class:r.value},[o("table",{class:"q-table"},ce(a.default))])}});function Xe(e,a){return o("div",e,[o("table",{class:"q-table"},a)])}const Ut={list:pt,table:Ht},Kt=["list","table","__qtable"];var Gt=E({name:"QVirtualScroll",props:{...Lt,type:{type:String,default:"list",validator:e=>Kt.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}},setup(e,{slots:a,attrs:l}){let s;const r=D(null),d=i(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:u,localResetVirtualScroll:v,padVirtualScroll:f,onVirtualScrollEvt:b}=jt({virtualScrollLength:d,getVirtualScrollTarget:q,getVirtualScrollEl:C}),n=i(()=>{if(d.value===0)return[];const $=(O,x)=>({index:u.value.from+x,item:O});return e.itemsFn===void 0?e.items.slice(u.value.from,u.value.to).map($):e.itemsFn(u.value.from,u.value.to-u.value.from).map($)}),m=i(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),w=i(()=>e.scrollTarget!==void 0?{}:{tabindex:0});I(d,()=>{v()}),I(()=>e.scrollTarget,()=>{h(),y()});function C(){return r.value.$el||r.value}function q(){return s}function y(){s=Ft(C(),e.scrollTarget),s.addEventListener("scroll",b,je.passive)}function h(){s!==void 0&&(s.removeEventListener("scroll",b,je.passive),s=void 0)}function T(){let $=f(e.type==="list"?"div":"tbody",n.value.map(a.default));return a.before!==void 0&&($=a.before().concat($)),xe(a.after,$)}return ze(()=>{v()}),Qe(()=>{y()}),Ct(()=>{y()}),kt(()=>{h()}),He(()=>{h()}),()=>{if(a.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?Xe({ref:r,class:"q-table__middle "+m.value},T()):o(Ut[e.type],{...l,ref:r,class:[l.class,m.value],...w.value},T)}}});const Wt={xs:2,sm:4,md:6,lg:10,xl:14};function Ee(e,a,l){return{transform:a===!0?`translateX(${l.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var Xt=E({name:"QLinearProgress",props:{...X,...Ue,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:a}){const{proxy:l}=A(),s=Y(e,l.$q),r=Ke(e,Wt),d=i(()=>e.indeterminate===!0||e.query===!0),u=i(()=>e.reverse!==e.query),v=i(()=>({...r.value!==null?r.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),f=i(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),b=i(()=>Ee(e.buffer!==void 0?e.buffer:1,u.value,l.$q)),n=i(()=>`with${e.instantFeedback===!0?"out":""}-transition`),m=i(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${n.value} q-linear-progress__track--${s.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),w=i(()=>Ee(d.value===!0?1:e.value,u.value,l.$q)),C=i(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${n.value} q-linear-progress__model--${d.value===!0?"in":""}determinate`),q=i(()=>({width:`${e.value*100}%`})),y=i(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"} q-linear-progress__stripe--${n.value}`);return()=>{const h=[o("div",{class:m.value,style:b.value}),o("div",{class:C.value,style:w.value})];return e.stripe===!0&&d.value===!1&&h.push(o("div",{class:y.value,style:q.value})),o("div",{class:f.value,style:v.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},xe(a.default,h))}}});function Yt(e,a){const l=D(null),s=i(()=>e.disable===!0?null:o("span",{ref:l,class:"no-outline",tabindex:-1}));function r(d){const u=a.value;d!==void 0&&d.type.indexOf("key")===0?u!==null&&document.activeElement!==u&&u.contains(document.activeElement)===!0&&u.focus():l.value!==null&&(d===void 0||u!==null&&u.contains(d.target)===!0)&&l.value.focus()}return{refocusTargetEl:s,refocusTarget:r}}var Jt={xs:30,sm:35,md:40,lg:50,xl:60};const Zt={...X,...Ue,...It,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>e==="tf"||e==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},el=["update:modelValue"];function tl(e,a){const{props:l,slots:s,emit:r,proxy:d}=A(),{$q:u}=d,v=Y(l,u),f=D(null),{refocusTargetEl:b,refocusTarget:n}=Yt(l,f),m=Ke(l,Jt),w=i(()=>l.val!==void 0&&Array.isArray(l.modelValue)),C=i(()=>{const k=H(l.val);return w.value===!0?l.modelValue.findIndex(p=>H(p)===k):-1}),q=i(()=>w.value===!0?C.value>-1:H(l.modelValue)===H(l.trueValue)),y=i(()=>w.value===!0?C.value===-1:H(l.modelValue)===H(l.falseValue)),h=i(()=>q.value===!1&&y.value===!1),T=i(()=>l.disable===!0?-1:l.tabindex||0),$=i(()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(l.disable===!0?" disabled":"")+(v.value===!0?` q-${e}--dark`:"")+(l.dense===!0?` q-${e}--dense`:"")+(l.leftLabel===!0?" reverse":"")),O=i(()=>{const k=q.value===!0?"truthy":y.value===!0?"falsy":"indet",p=l.color!==void 0&&(l.keepColor===!0||(e==="toggle"?q.value===!0:y.value!==!0))?` text-${l.color}`:"";return`q-${e}__inner relative-position non-selectable q-${e}__inner--${k}${p}`}),x=i(()=>{const k={type:"checkbox"};return l.name!==void 0&&Object.assign(k,{".checked":q.value,"^checked":q.value===!0?"checked":void 0,name:l.name,value:w.value===!0?l.val:l.trueValue}),k}),B=Mt(x),N=i(()=>{const k={tabindex:T.value,role:e==="toggle"?"switch":"checkbox","aria-label":l.label,"aria-checked":h.value===!0?"mixed":q.value===!0?"true":"false"};return l.disable===!0&&(k["aria-disabled"]="true"),k});function U(k){k!==void 0&&(Ie(k),n(k)),l.disable!==!0&&r("update:modelValue",K(),k)}function K(){if(w.value===!0){if(q.value===!0){const k=l.modelValue.slice();return k.splice(C.value,1),k}return l.modelValue.concat([l.val])}if(q.value===!0){if(l.toggleOrder!=="ft"||l.toggleIndeterminate===!1)return l.falseValue}else if(y.value===!0){if(l.toggleOrder==="ft"||l.toggleIndeterminate===!1)return l.trueValue}else return l.toggleOrder!=="ft"?l.trueValue:l.falseValue;return l.indeterminateValue}function J(k){(k.keyCode===13||k.keyCode===32)&&Ie(k)}function F(k){(k.keyCode===13||k.keyCode===32)&&U(k)}const M=a(q,h);return Object.assign(d,{toggle:U}),()=>{const k=M();l.disable!==!0&&B(k,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const p=[o("div",{class:O.value,style:m.value,"aria-hidden":"true"},k)];b.value!==null&&p.push(b.value);const Z=l.label!==void 0?xe(s.default,[l.label]):ce(s.default);return Z!==void 0&&p.push(o("div",{class:`q-${e}__label q-anchor--skip`},Z)),o("div",{ref:f,class:$.value,...N.value,onClick:U,onKeydown:J,onKeyup:F},p)}}const ll=o("div",{key:"svg",class:"q-checkbox__bg absolute"},[o("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[o("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),o("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]);var Ce=E({name:"QCheckbox",props:Zt,emits:el,setup(e){function a(l,s){const r=i(()=>(l.value===!0?e.checkedIcon:s.value===!0?e.indeterminateIcon:e.uncheckedIcon)||null);return()=>r.value!==null?[o("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[o(Pe,{class:"q-checkbox__icon",name:r.value})])]:[ll]}return tl("checkbox",a)}});let W=0;const al={fullscreen:Boolean,noRouteFullscreenExit:Boolean},nl=["update:fullscreen","fullscreen"];function rl(){const e=A(),{props:a,emit:l,proxy:s}=e;let r,d,u;const v=D(!1);_t(e)===!0&&I(()=>s.$route.fullPath,()=>{a.noRouteFullscreenExit!==!0&&n()}),I(()=>a.fullscreen,m=>{v.value!==m&&f()}),I(v,m=>{l("update:fullscreen",m),l("fullscreen",m)});function f(){v.value===!0?n():b()}function b(){v.value!==!0&&(v.value=!0,u=s.$el.parentNode,u.replaceChild(d,s.$el),document.body.appendChild(s.$el),W++,W===1&&document.body.classList.add("q-body--fullscreen-mixin"),r={handler:n},Me.add(r))}function n(){v.value===!0&&(r!==void 0&&(Me.remove(r),r=void 0),u.replaceChild(s.$el,d),v.value=!1,W=Math.max(0,W-1),W===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),s.$el.scrollIntoView!==void 0&&setTimeout(()=>{s.$el.scrollIntoView()})))}return ze(()=>{d=document.createElement("span")}),Qe(()=>{a.fullscreen===!0&&b()}),He(n),Object.assign(s,{toggleFullscreen:f,setFullscreen:b,exitFullscreen:n}),{inFullscreen:v,toggleFullscreen:f}}function ol(e,a){return new Date(e)-new Date(a)}const il={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function ul(e,a,l,s){const r=i(()=>{const{sortBy:v}=a.value;return v&&l.value.find(f=>f.name===v)||null}),d=i(()=>e.sortMethod!==void 0?e.sortMethod:(v,f,b)=>{const n=l.value.find(C=>C.name===f);if(n===void 0||n.field===void 0)return v;const m=b===!0?-1:1,w=typeof n.field=="function"?C=>n.field(C):C=>C[n.field];return v.sort((C,q)=>{let y=w(C),h=w(q);return n.rawSort!==void 0?n.rawSort(y,h,C,q)*m:y==null?-1*m:h==null?1*m:n.sort!==void 0?n.sort(y,h,C,q)*m:ke(y)===!0&&ke(h)===!0?(y-h)*m:De(y)===!0&&De(h)===!0?ol(y,h)*m:typeof y=="boolean"&&typeof h=="boolean"?(y-h)*m:([y,h]=[y,h].map(T=>(T+"").toLocaleString().toLowerCase()),y<h?-1*m:y===h?0:m)})});function u(v){let f=e.columnSortOrder;if(Pt(v)===!0)v.sortOrder&&(f=v.sortOrder),v=v.name;else{const m=l.value.find(w=>w.name===v);m!==void 0&&m.sortOrder&&(f=m.sortOrder)}let{sortBy:b,descending:n}=a.value;b!==v?(b=v,n=f==="da"):e.binaryStateSort===!0?n=!n:n===!0?f==="ad"?b=null:n=!1:f==="ad"?n=!0:b=null,s({sortBy:b,descending:n,page:1})}return{columnToSort:r,computedSortMethod:d,sort:u}}const sl={filter:[String,Object],filterMethod:Function};function cl(e,a){const l=i(()=>e.filterMethod!==void 0?e.filterMethod:(s,r,d,u)=>{const v=r?r.toLowerCase():"";return s.filter(f=>d.some(b=>{const n=u(b,f)+"";return(n==="undefined"||n==="null"?"":n.toLowerCase()).indexOf(v)!==-1}))});return I(()=>e.filter,()=>{Ge(()=>{a({page:1},!0)})},{deep:!0}),{computedFilterMethod:l}}function dl(e,a){for(const l in a)if(a[l]!==e[l])return!1;return!0}function Ae(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const vl={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function fl(e,a){const{props:l,emit:s}=e,r=D(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:l.rowsPerPageOptions.length!==0?l.rowsPerPageOptions[0]:5},l.pagination)),d=i(()=>{const n=l["onUpdate:pagination"]!==void 0?{...r.value,...l.pagination}:r.value;return Ae(n)}),u=i(()=>d.value.rowsNumber!==void 0);function v(n){f({pagination:n,filter:l.filter})}function f(n={}){Ge(()=>{s("request",{pagination:n.pagination||d.value,filter:n.filter||l.filter,getCellValue:a})})}function b(n,m){const w=Ae({...d.value,...n});if(dl(d.value,w)===!0){u.value===!0&&m===!0&&v(w);return}if(u.value===!0){v(w);return}l.pagination!==void 0&&l["onUpdate:pagination"]!==void 0?s("update:pagination",w):r.value=w}return{innerPagination:r,computedPagination:d,isServerSide:u,requestServerInteraction:f,setPagination:b}}function gl(e,a,l,s,r,d){const{props:u,emit:v,proxy:{$q:f}}=e,b=i(()=>s.value===!0?l.value.rowsNumber||0:d.value),n=i(()=>{const{page:x,rowsPerPage:B}=l.value;return(x-1)*B}),m=i(()=>{const{page:x,rowsPerPage:B}=l.value;return x*B}),w=i(()=>l.value.page===1),C=i(()=>l.value.rowsPerPage===0?1:Math.max(1,Math.ceil(b.value/l.value.rowsPerPage))),q=i(()=>m.value===0?!0:l.value.page>=C.value),y=i(()=>(u.rowsPerPageOptions.includes(a.value.rowsPerPage)?u.rowsPerPageOptions:[a.value.rowsPerPage].concat(u.rowsPerPageOptions)).map(B=>({label:B===0?f.lang.table.allRows:""+B,value:B})));I(C,(x,B)=>{if(x===B)return;const N=l.value.page;x&&!N?r({page:1}):x<N&&r({page:x})});function h(){r({page:1})}function T(){const{page:x}=l.value;x>1&&r({page:x-1})}function $(){const{page:x,rowsPerPage:B}=l.value;m.value>0&&x*B<b.value&&r({page:x+1})}function O(){r({page:C.value})}return u["onUpdate:pagination"]!==void 0&&v("update:pagination",{...l.value}),{firstRowIndex:n,lastRowIndex:m,isFirstPage:w,isLastPage:q,pagesNumber:C,computedRowsPerPageOptions:y,computedRowsNumber:b,firstPage:h,prevPage:T,nextPage:$,lastPage:O}}const bl={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},ml=["update:selected","selection"];function Sl(e,a,l,s){const r=i(()=>{const q={};return e.selected.map(s.value).forEach(y=>{q[y]=!0}),q}),d=i(()=>e.selection!=="none"),u=i(()=>e.selection==="single"),v=i(()=>e.selection==="multiple"),f=i(()=>l.value.length!==0&&l.value.every(q=>r.value[s.value(q)]===!0)),b=i(()=>f.value!==!0&&l.value.some(q=>r.value[s.value(q)]===!0)),n=i(()=>e.selected.length);function m(q){return r.value[q]===!0}function w(){a("update:selected",[])}function C(q,y,h,T){a("selection",{rows:y,added:h,keys:q,evt:T});const $=u.value===!0?h===!0?y:[]:h===!0?e.selected.concat(y):e.selected.filter(O=>q.includes(s.value(O))===!1);a("update:selected",$)}return{hasSelectionMode:d,singleSelection:u,multipleSelection:v,allRowsSelected:f,someRowsSelected:b,rowsSelectedNumber:n,isRowSelected:m,clearSelection:w,updateSelection:C}}function Ne(e){return Array.isArray(e)?e.slice():[]}const hl={expanded:Array},yl=["update:expanded"];function _l(e,a){const l=D(Ne(e.expanded));I(()=>e.expanded,u=>{l.value=Ne(u)});function s(u){return l.value.includes(u)}function r(u){e.expanded!==void 0?a("update:expanded",u):l.value=u}function d(u,v){const f=l.value.slice(),b=f.indexOf(u);v===!0?b===-1&&(f.push(u),r(f)):b!==-1&&(f.splice(b,1),r(f))}return{isRowExpanded:s,setExpanded:r,updateExpanded:d}}const ql={visibleColumns:Array};function wl(e,a,l){const s=i(()=>{if(e.columns!==void 0)return e.columns;const v=e.rows[0];return v!==void 0?Object.keys(v).map(f=>({name:f,label:f.toUpperCase(),field:f,align:ke(v[f])?"right":"left",sortable:!0})):[]}),r=i(()=>{const{sortBy:v,descending:f}=a.value;return(e.visibleColumns!==void 0?s.value.filter(n=>n.required===!0||e.visibleColumns.includes(n.name)===!0):s.value).map(n=>{const m=n.align||"right",w=`text-${m}`;return{...n,align:m,__iconClass:`q-table__sort-icon q-table__sort-icon--${m}`,__thClass:w+(n.headerClasses!==void 0?" "+n.headerClasses:"")+(n.sortable===!0?" sortable":"")+(n.name===v?` sorted ${f===!0?"sort-desc":""}`:""),__tdStyle:n.style!==void 0?typeof n.style!="function"?()=>n.style:n.style:()=>null,__tdClass:n.classes!==void 0?typeof n.classes!="function"?()=>w+" "+n.classes:C=>w+" "+n.classes(C):()=>w}})}),d=i(()=>{const v={};return r.value.forEach(f=>{v[f.name]=f}),v}),u=i(()=>e.tableColspan!==void 0?e.tableColspan:r.value.length+(l.value===!0?1:0));return{colList:s,computedCols:r,computedColsMap:d,computedColspan:u}}const se="q-table__bottom row items-center",Ye={};We.forEach(e=>{Ye[e]={}});var Cl=E({name:"QTable",props:{rows:{type:Array,default:()=>[]},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0},...Ye,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...X,...al,...ql,...sl,...vl,...hl,...bl,...il},emits:["request","virtualScroll",...nl,...yl,...ml],setup(e,{slots:a,emit:l}){const s=A(),{proxy:{$q:r}}=s,d=Y(e,r),{inFullscreen:u,toggleFullscreen:v}=rl(),f=i(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),b=D(null),n=D(null),m=i(()=>e.grid!==!0&&e.virtualScroll===!0),w=i(()=>" q-table__card"+(d.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),C=i(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":w.value)+(d.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(u.value===!0?" fullscreen scroll":"")),q=i(()=>C.value+(e.loading===!0?" q-table--loading":""));I(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+C.value,()=>{m.value===!0&&n.value!==null&&n.value.reset()});const{innerPagination:y,computedPagination:h,isServerSide:T,requestServerInteraction:$,setPagination:O}=fl(s,z),{computedFilterMethod:x}=cl(e,O),{isRowExpanded:B,setExpanded:N,updateExpanded:U}=_l(e,l),K=i(()=>{let t=e.rows;if(T.value===!0||t.length===0)return t;const{sortBy:c,descending:g}=h.value;return e.filter&&(t=x.value(t,e.filter,L.value,z)),et.value!==null&&(t=tt.value(e.rows===t?t.slice():t,c,g)),t}),J=i(()=>K.value.length),F=i(()=>{let t=K.value;if(T.value===!0)return t;const{rowsPerPage:c}=h.value;return c!==0&&(te.value===0&&e.rows!==t?t.length>le.value&&(t=t.slice(0,le.value)):t=t.slice(te.value,le.value)),t}),{hasSelectionMode:M,singleSelection:k,multipleSelection:p,allRowsSelected:Z,someRowsSelected:Re,rowsSelectedNumber:de,isRowSelected:ve,clearSelection:Je,updateSelection:ee}=Sl(e,l,F,f),{colList:Ze,computedCols:L,computedColsMap:Be,computedColspan:Te}=wl(e,h,M),{columnToSort:et,computedSortMethod:tt,sort:fe}=ul(e,h,Ze,O),{firstRowIndex:te,lastRowIndex:le,isFirstPage:ge,isLastPage:be,pagesNumber:ae,computedRowsPerPageOptions:lt,computedRowsNumber:ne,firstPage:me,prevPage:Se,nextPage:he,lastPage:ye}=gl(s,y,h,T,O,J),at=i(()=>F.value.length===0),nt=i(()=>{const t={};return We.forEach(c=>{t[c]=e[c]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function rt(){m.value===!0&&n.value.reset()}function ot(){if(e.grid===!0)return ht();const t=e.hideHeader!==!0?pe:null;if(m.value===!0){const g=a["top-row"],S=a["bottom-row"],_={default:R=>Ve(R.item,a.body,R.index)};if(g!==void 0){const R=o("tbody",g({cols:L.value}));_.before=t===null?()=>R:()=>[t()].concat(R)}else t!==null&&(_.before=t);return S!==void 0&&(_.after=()=>o("tbody",S({cols:L.value}))),o(Gt,{ref:n,class:e.tableClass,style:e.tableStyle,...nt.value,scrollTarget:e.virtualScrollTarget,items:F.value,type:"__qtable",tableColspan:Te.value,onVirtualScroll:ut},_)}const c=[st()];return t!==null&&c.unshift(t()),Xe({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},c)}function it(t,c){if(n.value!==null){n.value.scrollTo(t,c);return}t=parseInt(t,10);const g=b.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(g!==null){const S=b.value.querySelector(".q-table__middle.scroll"),_=g.offsetTop-e.virtualScrollStickySizeStart,R=_<S.scrollTop?"decrease":"increase";S.scrollTop=_,l("virtualScroll",{index:t,from:0,to:y.value.rowsPerPage-1,direction:R})}}function ut(t){l("virtualScroll",t)}function $e(){return[o(Xt,{class:"q-table__linear-progress",color:e.color,dark:d.value,indeterminate:!0,trackColor:"transparent"})]}function Ve(t,c,g){const S=f.value(t),_=ve(S);if(c!==void 0)return c(Oe({key:S,row:t,pageIndex:g,__trClass:_?"selected":""}));const R=a["body-cell"],P=L.value.map(V=>{const oe=a[`body-cell-${V.name}`],ie=oe!==void 0?oe:R;return ie!==void 0?ie(ct({key:S,row:t,pageIndex:g,col:V})):o("td",{class:V.__tdClass(t),style:V.__tdStyle(t)},z(V,t))});if(M.value===!0){const V=a["body-selection"],oe=V!==void 0?V(dt({key:S,row:t,pageIndex:g})):[o(Ce,{modelValue:_,color:e.color,dark:d.value,dense:e.dense,"onUpdate:modelValue":(ie,yt)=>{ee([S],[t],ie,yt)}})];P.unshift(o("td",{class:"q-table--col-auto-width"},oe))}const j={key:S,class:{selected:_}};return e.onRowClick!==void 0&&(j.class["cursor-pointer"]=!0,j.onClick=V=>{l("RowClick",V,t,g)}),e.onRowDblclick!==void 0&&(j.class["cursor-pointer"]=!0,j.onDblclick=V=>{l("RowDblclick",V,t,g)}),e.onRowContextmenu!==void 0&&(j.class["cursor-pointer"]=!0,j.onContextmenu=V=>{l("RowContextmenu",V,t,g)}),o("tr",j,P)}function st(){const t=a.body,c=a["top-row"],g=a["bottom-row"];let S=F.value.map((_,R)=>Ve(_,t,R));return c!==void 0&&(S=c({cols:L.value}).concat(S)),g!==void 0&&(S=S.concat(g({cols:L.value}))),o("tbody",S)}function Oe(t){return _e(t),t.cols=t.cols.map(c=>G({...c},"value",()=>z(c,t.row))),t}function ct(t){return _e(t),G(t,"value",()=>z(t.col,t.row)),t}function dt(t){return _e(t),t}function _e(t){Object.assign(t,{cols:L.value,colsMap:Be.value,sort:fe,rowIndex:te.value+t.pageIndex,color:e.color,dark:d.value,dense:e.dense}),M.value===!0&&G(t,"selected",()=>ve(t.key),(c,g)=>{ee([t.key],[t.row],c,g)}),G(t,"expand",()=>B(t.key),c=>{U(t.key,c)})}function z(t,c){const g=typeof t.field=="function"?t.field(c):c[t.field];return t.format!==void 0?t.format(g,c):g}const Q=i(()=>({pagination:h.value,pagesNumber:ae.value,isFirstPage:ge.value,isLastPage:be.value,firstPage:me,prevPage:Se,nextPage:he,lastPage:ye,inFullscreen:u.value,toggleFullscreen:v}));function vt(){const t=a.top,c=a["top-left"],g=a["top-right"],S=a["top-selection"],_=M.value===!0&&S!==void 0&&de.value>0,R="q-table__top relative-position row items-center";if(t!==void 0)return o("div",{class:R},[t(Q.value)]);let P;if(_===!0?P=S(Q.value).slice():(P=[],c!==void 0?P.push(o("div",{class:"q-table__control"},[c(Q.value)])):e.title&&P.push(o("div",{class:"q-table__control"},[o("div",{class:["q-table__title",e.titleClass]},e.title)]))),g!==void 0&&(P.push(o("div",{class:"q-table__separator col"})),P.push(o("div",{class:"q-table__control"},[g(Q.value)]))),P.length!==0)return o("div",{class:R},P)}const Fe=i(()=>Re.value===!0?null:Z.value);function pe(){const t=ft();return e.loading===!0&&a.loading===void 0&&t.push(o("tr",{class:"q-table__progress"},[o("th",{class:"relative-position",colspan:Te.value},$e())])),o("thead",t)}function ft(){const t=a.header,c=a["header-cell"];if(t!==void 0)return t(qe({header:!0})).slice();const g=L.value.map(S=>{const _=a[`header-cell-${S.name}`],R=_!==void 0?_:c,P=qe({col:S});return R!==void 0?R(P):o(At,{key:S.name,props:P},()=>S.label)});if(k.value===!0&&e.grid!==!0)g.unshift(o("th",{class:"q-table--col-auto-width"}," "));else if(p.value===!0){const S=a["header-selection"],_=S!==void 0?S(qe({})):[o(Ce,{color:e.color,modelValue:Fe.value,dark:d.value,dense:e.dense,"onUpdate:modelValue":Le})];g.unshift(o("th",{class:"q-table--col-auto-width"},_))}return[o("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},g)]}function qe(t){return Object.assign(t,{cols:L.value,sort:fe,colsMap:Be.value,color:e.color,dark:d.value,dense:e.dense}),p.value===!0&&G(t,"selected",()=>Fe.value,Le),t}function Le(t){Re.value===!0&&(t=!1),ee(F.value.map(f.value),F.value,t)}const re=i(()=>{const t=[e.iconFirstPage||r.iconSet.table.firstPage,e.iconPrevPage||r.iconSet.table.prevPage,e.iconNextPage||r.iconSet.table.nextPage,e.iconLastPage||r.iconSet.table.lastPage];return r.lang.rtl===!0?t.reverse():t});function gt(){if(e.hideBottom===!0)return;if(at.value===!0){if(e.hideNoData===!0)return;const g=e.loading===!0?e.loadingLabel||r.lang.table.loading:e.filter?e.noResultsLabel||r.lang.table.noResults:e.noDataLabel||r.lang.table.noData,S=a["no-data"],_=S!==void 0?[S({message:g,icon:r.iconSet.table.warning,filter:e.filter})]:[o(Pe,{class:"q-table__bottom-nodata-icon",name:r.iconSet.table.warning}),g];return o("div",{class:se+" q-table__bottom--nodata"},_)}const t=a.bottom;if(t!==void 0)return o("div",{class:se},[t(Q.value)]);const c=e.hideSelectedBanner!==!0&&M.value===!0&&de.value>0?[o("div",{class:"q-table__control"},[o("div",[(e.selectedRowsLabel||r.lang.table.selectedRecords)(de.value)])])]:[];if(e.hidePagination!==!0)return o("div",{class:se+" justify-end"},mt(c));if(c.length!==0)return o("div",{class:se},c)}function bt(t){O({page:1,rowsPerPage:t.value})}function mt(t){let c;const{rowsPerPage:g}=h.value,S=e.paginationLabel||r.lang.table.pagination,_=a.pagination,R=e.rowsPerPageOptions.length>1;if(t.push(o("div",{class:"q-table__separator col"})),R===!0&&t.push(o("div",{class:"q-table__control"},[o("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||r.lang.table.recordsPerPage]),o(Dt,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:g,options:lt.value,displayValue:g===0?r.lang.table.allRows:g,dark:d.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":bt})])),_!==void 0)c=_(Q.value);else if(c=[o("span",g!==0?{class:"q-table__bottom-item"}:{},[g?S(te.value+1,Math.min(le.value,ne.value),ne.value):S(1,J.value,ne.value)])],g!==0&&ae.value>1){const P={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(P.size="sm"),ae.value>2&&c.push(o(ue,{key:"pgFirst",...P,icon:re.value[0],disable:ge.value,onClick:me})),c.push(o(ue,{key:"pgPrev",...P,icon:re.value[1],disable:ge.value,onClick:Se}),o(ue,{key:"pgNext",...P,icon:re.value[2],disable:be.value,onClick:he})),ae.value>2&&c.push(o(ue,{key:"pgLast",...P,icon:re.value[3],disable:be.value,onClick:ye}))}return t.push(o("div",{class:"q-table__control"},c)),t}function St(){const t=e.gridHeader===!0?[o("table",{class:"q-table"},[pe()])]:e.loading===!0&&a.loading===void 0?$e():void 0;return o("div",{class:"q-table__middle"},t)}function ht(){const t=a.item!==void 0?a.item:c=>{const g=c.cols.map(_=>o("div",{class:"q-table__grid-item-row"},[o("div",{class:"q-table__grid-item-title"},[_.label]),o("div",{class:"q-table__grid-item-value"},[_.value])]));if(M.value===!0){const _=a["body-selection"],R=_!==void 0?_(c):[o(Ce,{modelValue:c.selected,color:e.color,dark:d.value,dense:e.dense,"onUpdate:modelValue":(P,j)=>{ee([c.key],[c.row],P,j)}})];g.unshift(o("div",{class:"q-table__grid-item-row"},R),o(zt,{dark:d.value}))}const S={class:["q-table__grid-item-card"+w.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(S.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(S.onClick=_=>{l("RowClick",_,c.row,c.pageIndex)}),e.onRowDblclick!==void 0&&(S.onDblclick=_=>{l("RowDblclick",_,c.row,c.pageIndex)})),o("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(c.selected===!0?" q-table__grid-item--selected":"")},[o("div",S,g)])};return o("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},F.value.map((c,g)=>t(Oe({key:f.value(c),row:c,pageIndex:g}))))}return Object.assign(s.proxy,{requestServerInteraction:$,setPagination:O,firstPage:me,prevPage:Se,nextPage:he,lastPage:ye,isRowSelected:ve,clearSelection:Je,isRowExpanded:B,setExpanded:N,sort:fe,resetVirtualScroll:rt,scrollTo:it,getCellValue:z}),xt(s.proxy,{filteredSortedRows:()=>K.value,computedRows:()=>F.value,computedRowsNumber:()=>ne.value}),()=>{const t=[vt()],c={ref:b,class:q.value};return e.grid===!0?t.push(St()):Object.assign(c,{class:[c.class,e.cardClass],style:e.cardStyle}),t.push(ot(),gt()),e.loading===!0&&a.loading!==void 0&&t.push(a.loading()),o("div",c,t)}}});function kl(e,a,l,s,r,d){return Rt(),Bt($t,{padding:""},{default:Tt(()=>[Vt(Cl,{rows:s.processedCartItems,columns:s.columns},null,8,["rows","columns"])]),_:1})}const Pl={name:"CartPage",props:{courseItems:{type:Object,required:!0,default:()=>({})},cartItems:{type:Array,required:!0,default:()=>[]}},setup(e){const{t:a}=Et(),l=i(()=>e.cartItems.map(r=>{const d=e.courseItems[r.cid];return{...r,name:a(d?d.title:"unknownProduct"),price:d?d.max_price:0,total:d?d.max_price*r.count:0}})),s=[{name:"name",align:"left",label:a("productName"),field:"name"},{name:"price",align:"left",label:a("unitPrice"),field:"price"},{name:"quantity",align:"left",label:a("quantity"),field:"count"},{name:"total",align:"left",label:a("totalPrice"),field:"total"}];return qt(()=>({title:a("cartTitle")})),{processedCartItems:l,columns:s}}};var Ol=Ot(Pl,[["render",kl]]);export{Ol as default};
