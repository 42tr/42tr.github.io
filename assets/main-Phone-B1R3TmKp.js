import{i as ee,h as no,o as Me,c as io,u as pe,r as Z,N as ao,b as Le,g as lo,n as Pe,V as so,p as co,q as ho,t as uo,v as fo,j as We,k as go,w as mo,d as Oe,m as vo,x as bo}from"./main-_common-FUr0PT5O.js";import{c as he,e as x,a as Ve,f as $,h as m,d as Ae,k as _,g as P,q as te,i as X,u as L,j as re,o as h,m as po,n as xo,b as Ne,v as yo,w as Co,t as zo}from"./main-light-B7VUuvSg.js";import{e as wo,F as Ge,D as De,s as ce,u as Te,g as O,j as Ie,d as H,h as c,p as Ke,E as $o,t as Ee,r as N,G as So,i as ko,n as _o,w as Po,q as Bo,o as ue,c as fe,a as ne}from"./main-runtime-dom.esm-bundler-BBJc2EAQ.js";function Ro(e,o="default",r=[]){const t=e.$slots[o];return t===void 0?r:t()}function Be(e,o=!0,r=[]){return e.forEach(i=>{if(i!==null){if(typeof i!="object"){(typeof i=="string"||typeof i=="number")&&r.push(wo(String(i)));return}if(Array.isArray(i)){Be(i,o,r);return}if(i.type===Ge){if(i.children===null)return;Array.isArray(i.children)&&Be(i.children,o,r)}else{if(i.type===De&&o)return;r.push(i)}}}),r}function de(e){return e.replace(/#|\(|\)|,|\s|\./g,"_")}let He=!1;function To(){if(ee&&window.CSS&&!He&&(He=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}const je=he("n-form-item");function Io(e,{defaultSize:o="medium",mergedSize:r,mergedDisabled:i}={}){const t=ce(je,null);Te(je,null);const a=O(r?()=>r(t):()=>{const{size:l}=e;if(l)return l;if(t){const{mergedSize:p}=t;if(p.value!==void 0)return p.value}return o}),f=O(i?()=>i(t):()=>{const{disabled:l}=e;return l!==void 0?l:t?t.disabled.value:!1}),n=O(()=>{const{status:l}=e;return l||(t==null?void 0:t.mergedValidationStatus.value)});return Ie(()=>{t&&t.restoreValidation()}),{mergedSizeRef:a,mergedDisabledRef:f,mergedStatusRef:n,nTriggerFormBlur(){t&&t.handleContentBlur()},nTriggerFormChange(){t&&t.handleContentChange()},nTriggerFormFocus(){t&&t.handleContentFocus()},nTriggerFormInput(){t&&t.handleContentInput()}}}const qe=H({name:"BaseIconSwitchTransition",setup(e,{slots:o}){const r=no();return()=>c(Ke,{name:"icon-switch-transition",appear:r.value},o)}}),Eo=H({name:"FadeInExpandTransition",props:{appear:Boolean,group:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function,width:Boolean,reverse:Boolean},setup(e,{slots:o}){function r(n){e.width?n.style.maxWidth=`${n.offsetWidth}px`:n.style.maxHeight=`${n.offsetHeight}px`,n.offsetWidth}function i(n){e.width?n.style.maxWidth="0":n.style.maxHeight="0",n.offsetWidth;const{onLeave:l}=e;l&&l()}function t(n){e.width?n.style.maxWidth="":n.style.maxHeight="";const{onAfterLeave:l}=e;l&&l()}function a(n){if(n.style.transition="none",e.width){const l=n.offsetWidth;n.style.maxWidth="0",n.offsetWidth,n.style.transition="",n.style.maxWidth=`${l}px`}else if(e.reverse)n.style.maxHeight=`${n.offsetHeight}px`,n.offsetHeight,n.style.transition="",n.style.maxHeight="0";else{const l=n.offsetHeight;n.style.maxHeight="0",n.offsetWidth,n.style.transition="",n.style.maxHeight=`${l}px`}n.offsetWidth}function f(n){var l;e.width?n.style.maxWidth="":e.reverse||(n.style.maxHeight=""),(l=e.onAfterEnter)===null||l===void 0||l.call(e)}return()=>{const{group:n,width:l,appear:p,mode:g}=e,y=n?$o:Ke,k={name:l?"fade-in-width-expand-transition":"fade-in-height-expand-transition",appear:p,onEnter:a,onAfterEnter:f,onBeforeLeave:r,onLeave:i,onAfterLeave:t};return n||(k.mode=g),c(y,k,o)}}}),{cubicBezierEaseInOut:Oo}=Ve;function Re({originalTransform:e="",left:o=0,top:r=0,transition:i=`all .3s ${Oo} !important`}={}){return[x("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:`${e} scale(0.75)`,left:o,top:r,opacity:0}),x("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${e}`,left:o,top:r,opacity:1}),x("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:o,top:r,transition:i})]}const Ho=x([x("@keyframes rotator",`
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`),$("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[m("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[Re()]),m("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[Re({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),m("container",`
 animation: rotator 3s linear infinite both;
 `,[m("icon",`
 height: 1em;
 width: 1em;
 `)])])]),we="1.6s",jo={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},Fo=H({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},jo),setup(e){Me("-base-loading",Ho,Ee(e,"clsPrefix"))},render(){const{clsPrefix:e,radius:o,strokeWidth:r,stroke:i,scale:t}=this,a=o/t;return c("div",{class:`${e}-base-loading`,role:"img","aria-label":"loading"},c(qe,null,{default:()=>this.show?c("div",{key:"icon",class:`${e}-base-loading__transition-wrapper`},c("div",{class:`${e}-base-loading__container`},c("svg",{class:`${e}-base-loading__icon`,viewBox:`0 0 ${2*a} ${2*a}`,xmlns:"http://www.w3.org/2000/svg",style:{color:i}},c("g",null,c("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${a} ${a};270 ${a} ${a}`,begin:"0s",dur:we,fill:"freeze",repeatCount:"indefinite"}),c("circle",{class:`${e}-base-loading__icon`,fill:"none",stroke:"currentColor","stroke-width":r,"stroke-linecap":"round",cx:a,cy:a,r:o-r/2,"stroke-dasharray":5.67*o,"stroke-dashoffset":18.48*o},c("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${a} ${a};135 ${a} ${a};450 ${a} ${a}`,begin:"0s",dur:we,fill:"freeze",repeatCount:"indefinite"}),c("animate",{attributeName:"stroke-dashoffset",values:`${5.67*o};${1.42*o};${5.67*o}`,begin:"0s",dur:we,fill:"freeze",repeatCount:"indefinite"})))))):c("div",{key:"placeholder",class:`${e}-base-loading__placeholder`},this.$slots)}))}}),Mo=$("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),Lo=H({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){Me("-base-wave",Mo,Ee(e,"clsPrefix"));const o=N(null),r=N(!1);let i=null;return Ie(()=>{i!==null&&window.clearTimeout(i)}),{active:r,selfRef:o,play(){i!==null&&(window.clearTimeout(i),r.value=!1,i=null),So(()=>{var t;(t=o.value)===null||t===void 0||t.offsetHeight,r.value=!0,i=window.setTimeout(()=>{r.value=!1,i=null},1e3)})}}},render(){const{clsPrefix:e}=this;return c("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}});function Wo(e){const{textColor2:o,primaryColorHover:r,primaryColorPressed:i,primaryColor:t,infoColor:a,successColor:f,warningColor:n,errorColor:l,baseColor:p,borderColor:g,opacityDisabled:y,tagColor:k,closeIconColor:v,closeIconColorHover:C,closeIconColorPressed:I,borderRadiusSmall:R,fontSizeMini:M,fontSizeTiny:u,fontSizeSmall:b,fontSizeMedium:d,heightMini:z,heightTiny:w,heightSmall:s,heightMedium:W,closeColorHover:V,closeColorPressed:D,buttonColor2Hover:K,buttonColor2Pressed:j,fontWeightStrong:A}=e;return Object.assign(Object.assign({},io),{closeBorderRadius:R,heightTiny:z,heightSmall:w,heightMedium:s,heightLarge:W,borderRadius:R,opacityDisabled:y,fontSizeTiny:M,fontSizeSmall:u,fontSizeMedium:b,fontSizeLarge:d,fontWeightStrong:A,textColorCheckable:o,textColorHoverCheckable:o,textColorPressedCheckable:o,textColorChecked:p,colorCheckable:"#0000",colorHoverCheckable:K,colorPressedCheckable:j,colorChecked:t,colorCheckedHover:r,colorCheckedPressed:i,border:`1px solid ${g}`,textColor:o,color:k,colorBordered:"rgb(250, 250, 252)",closeIconColor:v,closeIconColorHover:C,closeIconColorPressed:I,closeColorHover:V,closeColorPressed:D,borderPrimary:`1px solid ${_(t,{alpha:.3})}`,textColorPrimary:t,colorPrimary:_(t,{alpha:.12}),colorBorderedPrimary:_(t,{alpha:.1}),closeIconColorPrimary:t,closeIconColorHoverPrimary:t,closeIconColorPressedPrimary:t,closeColorHoverPrimary:_(t,{alpha:.12}),closeColorPressedPrimary:_(t,{alpha:.18}),borderInfo:`1px solid ${_(a,{alpha:.3})}`,textColorInfo:a,colorInfo:_(a,{alpha:.12}),colorBorderedInfo:_(a,{alpha:.1}),closeIconColorInfo:a,closeIconColorHoverInfo:a,closeIconColorPressedInfo:a,closeColorHoverInfo:_(a,{alpha:.12}),closeColorPressedInfo:_(a,{alpha:.18}),borderSuccess:`1px solid ${_(f,{alpha:.3})}`,textColorSuccess:f,colorSuccess:_(f,{alpha:.12}),colorBorderedSuccess:_(f,{alpha:.1}),closeIconColorSuccess:f,closeIconColorHoverSuccess:f,closeIconColorPressedSuccess:f,closeColorHoverSuccess:_(f,{alpha:.12}),closeColorPressedSuccess:_(f,{alpha:.18}),borderWarning:`1px solid ${_(n,{alpha:.35})}`,textColorWarning:n,colorWarning:_(n,{alpha:.15}),colorBorderedWarning:_(n,{alpha:.12}),closeIconColorWarning:n,closeIconColorHoverWarning:n,closeIconColorPressedWarning:n,closeColorHoverWarning:_(n,{alpha:.12}),closeColorPressedWarning:_(n,{alpha:.18}),borderError:`1px solid ${_(l,{alpha:.23})}`,textColorError:l,colorError:_(l,{alpha:.1}),colorBorderedError:_(l,{alpha:.08}),closeIconColorError:l,closeIconColorHoverError:l,closeIconColorPressedError:l,closeColorHoverError:_(l,{alpha:.12}),closeColorPressedError:_(l,{alpha:.18})})}const Vo={name:"Tag",common:Ae,self:Wo},Ao={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},No=$("tag",`
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[P("strong",`
 font-weight: var(--n-font-weight-strong);
 `),m("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),m("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),m("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),m("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),P("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[m("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),m("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),P("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),P("icon, avatar",[P("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),P("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),P("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[te("disabled",[x("&:hover","background-color: var(--n-color-hover-checkable);",[te("checked","color: var(--n-text-color-hover-checkable);")]),x("&:active","background-color: var(--n-color-pressed-checkable);",[te("checked","color: var(--n-text-color-pressed-checkable);")])]),P("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[te("disabled",[x("&:hover","background-color: var(--n-color-checked-hover);"),x("&:active","background-color: var(--n-color-checked-pressed);")])])])]),Go=Object.assign(Object.assign(Object.assign({},L.props),Ao),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),Ue=he("n-tag"),Ht=H({name:"Tag",props:Go,setup(e){const o=N(null),{mergedBorderedRef:r,mergedClsPrefixRef:i,inlineThemeDisabled:t,mergedRtlRef:a}=X(e),f=L("Tag","-tag",No,Vo,e,i);Te(Ue,{roundRef:Ee(e,"round")});function n(){if(!e.disabled&&e.checkable){const{checked:v,onCheckedChange:C,onUpdateChecked:I,"onUpdate:checked":R}=e;I&&I(!v),R&&R(!v),C&&C(!v)}}function l(v){if(e.triggerClickOnClose||v.stopPropagation(),!e.disabled){const{onClose:C}=e;C&&Le(C,v)}}const p={setTextContent(v){const{value:C}=o;C&&(C.textContent=v)}},g=pe("Tag",a,i),y=O(()=>{const{type:v,size:C,color:{color:I,textColor:R}={}}=e,{common:{cubicBezierEaseInOut:M},self:{padding:u,closeMargin:b,borderRadius:d,opacityDisabled:z,textColorCheckable:w,textColorHoverCheckable:s,textColorPressedCheckable:W,textColorChecked:V,colorCheckable:D,colorHoverCheckable:K,colorPressedCheckable:j,colorChecked:A,colorCheckedHover:q,colorCheckedPressed:ie,closeBorderRadius:G,fontWeightStrong:T,[h("colorBordered",v)]:ge,[h("closeSize",C)]:ae,[h("closeIconSize",C)]:U,[h("fontSize",C)]:xe,[h("height",C)]:le,[h("color",v)]:ye,[h("textColor",v)]:Ce,[h("border",v)]:ze,[h("closeIconColor",v)]:B,[h("closeIconColorHover",v)]:oe,[h("closeIconColorPressed",v)]:me,[h("closeColorHover",v)]:S,[h("closeColorPressed",v)]:se}}=f.value,Q=lo(b);return{"--n-font-weight-strong":T,"--n-avatar-size-override":`calc(${le} - 8px)`,"--n-bezier":M,"--n-border-radius":d,"--n-border":ze,"--n-close-icon-size":U,"--n-close-color-pressed":se,"--n-close-color-hover":S,"--n-close-border-radius":G,"--n-close-icon-color":B,"--n-close-icon-color-hover":oe,"--n-close-icon-color-pressed":me,"--n-close-icon-color-disabled":B,"--n-close-margin-top":Q.top,"--n-close-margin-right":Q.right,"--n-close-margin-bottom":Q.bottom,"--n-close-margin-left":Q.left,"--n-close-size":ae,"--n-color":I||(r.value?ge:ye),"--n-color-checkable":D,"--n-color-checked":A,"--n-color-checked-hover":q,"--n-color-checked-pressed":ie,"--n-color-hover-checkable":K,"--n-color-pressed-checkable":j,"--n-font-size":xe,"--n-height":le,"--n-opacity-disabled":z,"--n-padding":u,"--n-text-color":R||Ce,"--n-text-color-checkable":w,"--n-text-color-checked":V,"--n-text-color-hover-checkable":s,"--n-text-color-pressed-checkable":W}}),k=t?re("tag",O(()=>{let v="";const{type:C,size:I,color:{color:R,textColor:M}={}}=e;return v+=C[0],v+=I[0],R&&(v+=`a${de(R)}`),M&&(v+=`b${de(M)}`),r.value&&(v+="c"),v}),y,e):void 0;return Object.assign(Object.assign({},p),{rtlEnabled:g,mergedClsPrefix:i,contentRef:o,mergedBordered:r,handleClick:n,handleCloseClick:l,cssVars:t?void 0:y,themeClass:k==null?void 0:k.themeClass,onRender:k==null?void 0:k.onRender})},render(){var e,o;const{mergedClsPrefix:r,rtlEnabled:i,closable:t,color:{borderColor:a}={},round:f,onRender:n,$slots:l}=this;n==null||n();const p=Z(l.avatar,y=>y&&c("div",{class:`${r}-tag__avatar`},y)),g=Z(l.icon,y=>y&&c("div",{class:`${r}-tag__icon`},y));return c("div",{class:[`${r}-tag`,this.themeClass,{[`${r}-tag--rtl`]:i,[`${r}-tag--strong`]:this.strong,[`${r}-tag--disabled`]:this.disabled,[`${r}-tag--checkable`]:this.checkable,[`${r}-tag--checked`]:this.checkable&&this.checked,[`${r}-tag--round`]:f,[`${r}-tag--avatar`]:p,[`${r}-tag--icon`]:g,[`${r}-tag--closable`]:t}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},g||p,c("span",{class:`${r}-tag__content`,ref:"contentRef"},(o=(e=this.$slots).default)===null||o===void 0?void 0:o.call(e)),!this.checkable&&t?c(ao,{clsPrefix:r,class:`${r}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:f,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?c("div",{class:`${r}-tag__border`,style:{borderColor:a}}):null)}}),{cubicBezierEaseInOut:Y}=Ve;function Do({duration:e=".2s",delay:o=".1s"}={}){return[x("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),x("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),x("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${Y},
 max-width ${e} ${Y} ${o},
 margin-left ${e} ${Y} ${o},
 margin-right ${e} ${Y} ${o};
 `),x("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${Y} ${o},
 max-width ${e} ${Y},
 margin-left ${e} ${Y},
 margin-right ${e} ${Y};
 `)]}const Ko=ee&&"chrome"in window;ee&&navigator.userAgent.includes("Firefox");const qo=ee&&navigator.userAgent.includes("Safari")&&!Ko,Uo=ee&&"loading"in document.createElement("img");function Qo(e={}){var o;const{root:r=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(o=e.threshold)!==null&&o!==void 0?o:"0"}`,options:Object.assign(Object.assign({},e),{root:(typeof r=="string"?document.querySelector(r):r)||document.documentElement})}}const $e=new WeakMap,Se=new WeakMap,ke=new WeakMap,Yo=(e,o,r)=>{if(!e)return()=>{};const i=Qo(o),{root:t}=i.options;let a;const f=$e.get(t);f?a=f:(a=new Map,$e.set(t,a));let n,l;a.has(i.hash)?(l=a.get(i.hash),l[1].has(e)||(n=l[0],l[1].add(e),n.observe(e))):(n=new IntersectionObserver(y=>{y.forEach(k=>{if(k.isIntersecting){const v=Se.get(k.target),C=ke.get(k.target);v&&v(),C&&(C.value=!0)}})},i.options),n.observe(e),l=[n,new Set([e])],a.set(i.hash,l));let p=!1;const g=()=>{p||(Se.delete(e),ke.delete(e),p=!0,l[1].has(e)&&(l[0].unobserve(e),l[1].delete(e)),l[1].size<=0&&a.delete(i.hash),a.size||$e.delete(t))};return Se.set(e,g),ke.set(e,r),g},Xo=he("n-avatar-group"),Jo=$("avatar",`
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[po(x("&","--n-merged-color: var(--n-color-modal);")),xo(x("&","--n-merged-color: var(--n-color-popover);")),x("img",`
 width: 100%;
 height: 100%;
 `),m("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),$("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),m("text","line-height: 1.25")]),Zo=Object.assign(Object.assign({},L.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),jt=H({name:"Avatar",props:Zo,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:r}=X(e),i=N(!1);let t=null;const a=N(null),f=N(null),n=()=>{const{value:u}=a;if(u&&(t===null||t!==u.innerHTML)){t=u.innerHTML;const{value:b}=f;if(b){const{offsetWidth:d,offsetHeight:z}=b,{offsetWidth:w,offsetHeight:s}=u,W=.9,V=Math.min(d/w*W,z/s*W,1);u.style.transform=`translateX(-50%) translateY(-50%) scale(${V})`}}},l=ce(Xo,null),p=O(()=>{const{size:u}=e;if(u)return u;const{size:b}=l||{};return b||"medium"}),g=L("Avatar","-avatar",Jo,co,e,o),y=ce(Ue,null),k=O(()=>{if(l)return!0;const{round:u,circle:b}=e;return u!==void 0||b!==void 0?u||b:y?y.roundRef.value:!1}),v=O(()=>l?!0:e.bordered||!1),C=O(()=>{const u=p.value,b=k.value,d=v.value,{color:z}=e,{self:{borderRadius:w,fontSize:s,color:W,border:V,colorModal:D,colorPopover:K},common:{cubicBezierEaseInOut:j}}=g.value;let A;return typeof u=="number"?A=`${u}px`:A=g.value.self[h("height",u)],{"--n-font-size":s,"--n-border":d?V:"none","--n-border-radius":b?"50%":w,"--n-color":z||W,"--n-color-modal":z||D,"--n-color-popover":z||K,"--n-bezier":j,"--n-merged-size":`var(--n-avatar-size-override, ${A})`}}),I=r?re("avatar",O(()=>{const u=p.value,b=k.value,d=v.value,{color:z}=e;let w="";return u&&(typeof u=="number"?w+=`a${u}`:w+=u[0]),b&&(w+="b"),d&&(w+="c"),z&&(w+=de(z)),w}),C,e):void 0,R=N(!e.lazy);ko(()=>{if(e.lazy&&e.intersectionObserverOptions){let u;const b=_o(()=>{u==null||u(),u=void 0,e.lazy&&(u=Yo(f.value,e.intersectionObserverOptions,R))});Ie(()=>{b(),u==null||u()})}}),Po(()=>{var u;return e.src||((u=e.imgProps)===null||u===void 0?void 0:u.src)},()=>{i.value=!1});const M=N(!e.lazy);return{textRef:a,selfRef:f,mergedRoundRef:k,mergedClsPrefix:o,fitTextTransform:n,cssVars:r?void 0:C,themeClass:I==null?void 0:I.themeClass,onRender:I==null?void 0:I.onRender,hasLoadError:i,shouldStartLoading:R,loaded:M,mergedOnError:u=>{if(!R.value)return;i.value=!0;const{onError:b,imgProps:{onError:d}={}}=e;b==null||b(u),d==null||d(u)},mergedOnLoad:u=>{const{onLoad:b,imgProps:{onLoad:d}={}}=e;b==null||b(u),d==null||d(u),M.value=!0}}},render(){var e,o;const{$slots:r,src:i,mergedClsPrefix:t,lazy:a,onRender:f,loaded:n,hasLoadError:l,imgProps:p={}}=this;f==null||f();let g;const y=!n&&!l&&(this.renderPlaceholder?this.renderPlaceholder():(o=(e=this.$slots).placeholder)===null||o===void 0?void 0:o.call(e));return this.hasLoadError?g=this.renderFallback?this.renderFallback():Pe(r.fallback,()=>[c("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):g=Z(r.default,k=>{if(k)return c(so,{onResize:this.fitTextTransform},{default:()=>c("span",{ref:"textRef",class:`${t}-avatar__text`},k)});if(i||p.src){const v=this.src||p.src;return c("img",Object.assign(Object.assign({},p),{loading:Uo&&!this.intersectionObserverOptions&&a?"lazy":"eager",src:a&&this.intersectionObserverOptions?this.shouldStartLoading?v:void 0:v,"data-image-src":v,onLoad:this.mergedOnLoad,onError:this.mergedOnError,style:[p.style||"",{objectFit:this.objectFit},y?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]}))}}),c("span",{ref:"selfRef",class:[`${t}-avatar`,this.themeClass],style:this.cssVars},g,a&&y)}});function J(e){return Ne(e,[255,255,255,.16])}function be(e){return Ne(e,[0,0,0,.12])}const et=he("n-button-group"),ot=x([$("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[P("color",[m("border",{borderColor:"var(--n-border-color)"}),P("disabled",[m("border",{borderColor:"var(--n-border-color-disabled)"})]),te("disabled",[x("&:focus",[m("state-border",{borderColor:"var(--n-border-color-focus)"})]),x("&:hover",[m("state-border",{borderColor:"var(--n-border-color-hover)"})]),x("&:active",[m("state-border",{borderColor:"var(--n-border-color-pressed)"})]),P("pressed",[m("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),P("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[m("border",{border:"var(--n-border-disabled)"})]),te("disabled",[x("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[m("state-border",{border:"var(--n-border-focus)"})]),x("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[m("state-border",{border:"var(--n-border-hover)"})]),x("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[m("state-border",{border:"var(--n-border-pressed)"})]),P("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[m("state-border",{border:"var(--n-border-pressed)"})])]),P("loading","cursor: wait;"),$("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[P("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),ee&&"MozBoxSizing"in document.createElement("div").style?x("&::moz-focus-inner",{border:0}):null,m("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),m("border",{border:"var(--n-border)"}),m("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),m("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[$("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[Re({top:"50%",originalTransform:"translateY(-50%)"})]),Do()]),m("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[x("~",[m("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),P("block",`
 display: flex;
 width: 100%;
 `),P("dashed",[m("border, state-border",{borderStyle:"dashed !important"})]),P("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),x("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),x("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),tt=Object.assign(Object.assign({},L.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!qo}}),Ft=H({name:"Button",props:tt,setup(e){const o=N(null),r=N(null),i=N(!1),t=yo(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),a=ce(et,{}),{mergedSizeRef:f}=Io({},{defaultSize:"medium",mergedSize:d=>{const{size:z}=e;if(z)return z;const{size:w}=a;if(w)return w;const{mergedSize:s}=d||{};return s?s.value:"medium"}}),n=O(()=>e.focusable&&!e.disabled),l=d=>{var z;n.value||d.preventDefault(),!e.nativeFocusBehavior&&(d.preventDefault(),!e.disabled&&n.value&&((z=o.value)===null||z===void 0||z.focus({preventScroll:!0})))},p=d=>{var z;if(!e.disabled&&!e.loading){const{onClick:w}=e;w&&Le(w,d),e.text||(z=r.value)===null||z===void 0||z.play()}},g=d=>{switch(d.key){case"Enter":if(!e.keyboard)return;i.value=!1}},y=d=>{switch(d.key){case"Enter":if(!e.keyboard||e.loading){d.preventDefault();return}i.value=!0}},k=()=>{i.value=!1},{inlineThemeDisabled:v,mergedClsPrefixRef:C,mergedRtlRef:I}=X(e),R=L("Button","-button",ot,uo,e,C),M=pe("Button",I,C),u=O(()=>{const d=R.value,{common:{cubicBezierEaseInOut:z,cubicBezierEaseOut:w},self:s}=d,{rippleDuration:W,opacityDisabled:V,fontWeight:D,fontWeightStrong:K}=s,j=f.value,{dashed:A,type:q,ghost:ie,text:G,color:T,round:ge,circle:ae,textColor:U,secondary:xe,tertiary:le,quaternary:ye,strong:Ce}=e,ze={"--n-font-weight":Ce?K:D};let B={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const oe=q==="tertiary",me=q==="default",S=oe?"default":q;if(G){const E=U||T;B={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":E||s[h("textColorText",S)],"--n-text-color-hover":E?J(E):s[h("textColorTextHover",S)],"--n-text-color-pressed":E?be(E):s[h("textColorTextPressed",S)],"--n-text-color-focus":E?J(E):s[h("textColorTextHover",S)],"--n-text-color-disabled":E||s[h("textColorTextDisabled",S)]}}else if(ie||A){const E=U||T;B={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":T||s[h("rippleColor",S)],"--n-text-color":E||s[h("textColorGhost",S)],"--n-text-color-hover":E?J(E):s[h("textColorGhostHover",S)],"--n-text-color-pressed":E?be(E):s[h("textColorGhostPressed",S)],"--n-text-color-focus":E?J(E):s[h("textColorGhostHover",S)],"--n-text-color-disabled":E||s[h("textColorGhostDisabled",S)]}}else if(xe){const E=me?s.textColor:oe?s.textColorTertiary:s[h("color",S)],F=T||E,ve=q!=="default"&&q!=="tertiary";B={"--n-color":ve?_(F,{alpha:Number(s.colorOpacitySecondary)}):s.colorSecondary,"--n-color-hover":ve?_(F,{alpha:Number(s.colorOpacitySecondaryHover)}):s.colorSecondaryHover,"--n-color-pressed":ve?_(F,{alpha:Number(s.colorOpacitySecondaryPressed)}):s.colorSecondaryPressed,"--n-color-focus":ve?_(F,{alpha:Number(s.colorOpacitySecondaryHover)}):s.colorSecondaryHover,"--n-color-disabled":s.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":F,"--n-text-color-hover":F,"--n-text-color-pressed":F,"--n-text-color-focus":F,"--n-text-color-disabled":F}}else if(le||ye){const E=me?s.textColor:oe?s.textColorTertiary:s[h("color",S)],F=T||E;le?(B["--n-color"]=s.colorTertiary,B["--n-color-hover"]=s.colorTertiaryHover,B["--n-color-pressed"]=s.colorTertiaryPressed,B["--n-color-focus"]=s.colorSecondaryHover,B["--n-color-disabled"]=s.colorTertiary):(B["--n-color"]=s.colorQuaternary,B["--n-color-hover"]=s.colorQuaternaryHover,B["--n-color-pressed"]=s.colorQuaternaryPressed,B["--n-color-focus"]=s.colorQuaternaryHover,B["--n-color-disabled"]=s.colorQuaternary),B["--n-ripple-color"]="#0000",B["--n-text-color"]=F,B["--n-text-color-hover"]=F,B["--n-text-color-pressed"]=F,B["--n-text-color-focus"]=F,B["--n-text-color-disabled"]=F}else B={"--n-color":T||s[h("color",S)],"--n-color-hover":T?J(T):s[h("colorHover",S)],"--n-color-pressed":T?be(T):s[h("colorPressed",S)],"--n-color-focus":T?J(T):s[h("colorFocus",S)],"--n-color-disabled":T||s[h("colorDisabled",S)],"--n-ripple-color":T||s[h("rippleColor",S)],"--n-text-color":U||(T?s.textColorPrimary:oe?s.textColorTertiary:s[h("textColor",S)]),"--n-text-color-hover":U||(T?s.textColorHoverPrimary:s[h("textColorHover",S)]),"--n-text-color-pressed":U||(T?s.textColorPressedPrimary:s[h("textColorPressed",S)]),"--n-text-color-focus":U||(T?s.textColorFocusPrimary:s[h("textColorFocus",S)]),"--n-text-color-disabled":U||(T?s.textColorDisabledPrimary:s[h("textColorDisabled",S)])};let se={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};G?se={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:se={"--n-border":s[h("border",S)],"--n-border-hover":s[h("borderHover",S)],"--n-border-pressed":s[h("borderPressed",S)],"--n-border-focus":s[h("borderFocus",S)],"--n-border-disabled":s[h("borderDisabled",S)]};const{[h("height",j)]:Q,[h("fontSize",j)]:Ye,[h("padding",j)]:Xe,[h("paddingRound",j)]:Je,[h("iconSize",j)]:Ze,[h("borderRadius",j)]:eo,[h("iconMargin",j)]:oo,waveOpacity:to}=s,ro={"--n-width":ae&&!G?Q:"initial","--n-height":G?"initial":Q,"--n-font-size":Ye,"--n-padding":ae||G?"initial":ge?Je:Xe,"--n-icon-size":Ze,"--n-icon-margin":oo,"--n-border-radius":G?"initial":ae||ge?Q:eo};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":z,"--n-bezier-ease-out":w,"--n-ripple-duration":W,"--n-opacity-disabled":V,"--n-wave-opacity":to},ze),B),se),ro)}),b=v?re("button",O(()=>{let d="";const{dashed:z,type:w,ghost:s,text:W,color:V,round:D,circle:K,textColor:j,secondary:A,tertiary:q,quaternary:ie,strong:G}=e;z&&(d+="a"),s&&(d+="b"),W&&(d+="c"),D&&(d+="d"),K&&(d+="e"),A&&(d+="f"),q&&(d+="g"),ie&&(d+="h"),G&&(d+="i"),V&&(d+=`j${de(V)}`),j&&(d+=`k${de(j)}`);const{value:T}=f;return d+=`l${T[0]}`,d+=`m${w[0]}`,d}),u,e):void 0;return{selfElRef:o,waveElRef:r,mergedClsPrefix:C,mergedFocusable:n,mergedSize:f,showBorder:t,enterPressed:i,rtlEnabled:M,handleMousedown:l,handleKeydown:y,handleBlur:k,handleKeyup:g,handleClick:p,customColorCssVars:O(()=>{const{color:d}=e;if(!d)return null;const z=J(d);return{"--n-border-color":d,"--n-border-color-hover":z,"--n-border-color-pressed":be(d),"--n-border-color-focus":z,"--n-border-color-disabled":d}}),cssVars:v?void 0:u,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender}},render(){const{mergedClsPrefix:e,tag:o,onRender:r}=this;r==null||r();const i=Z(this.$slots.default,t=>t&&c("span",{class:`${e}-button__content`},t));return c(o,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&i,c(Eo,{width:!0},{default:()=>Z(this.$slots.icon,t=>(this.loading||this.renderIcon||t)&&c("span",{class:`${e}-button__icon`,style:{margin:ho(this.$slots.default)?"0":""}},c(qe,null,{default:()=>this.loading?c(Fo,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):c("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():t)})))}),this.iconPlacement==="left"&&i,this.text?null:c(Lo,{ref:"waveElRef",clsPrefix:e}),this.showBorder?c("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?c("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}}),rt=$("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[P("color-transition",{transition:"color .3s var(--n-bezier)"}),P("depth",{color:"var(--n-color)"},[x("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),x("svg",{height:"1em",width:"1em"})]),nt=Object.assign(Object.assign({},L.props),{depth:[String,Number],size:[Number,String],color:String,component:[Object,Function]}),Mt=H({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:nt,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:r}=X(e),i=L("Icon","-icon",rt,fo,e,o),t=O(()=>{const{depth:f}=e,{common:{cubicBezierEaseInOut:n},self:l}=i.value;if(f!==void 0){const{color:p,[`opacity${f}Depth`]:g}=l;return{"--n-bezier":n,"--n-color":p,"--n-opacity":g}}return{"--n-bezier":n,"--n-color":"","--n-opacity":""}}),a=r?re("icon",O(()=>`${e.depth||"d"}`),t,e):void 0;return{mergedClsPrefix:o,mergedStyle:O(()=>{const{size:f,color:n}=e;return{fontSize:We(f),color:n}}),cssVars:r?void 0:t,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var e;const{$parent:o,depth:r,mergedClsPrefix:i,component:t,onRender:a,themeClass:f}=this;return!((e=o==null?void 0:o.$options)===null||e===void 0)&&e._n_icon__&&Co("icon","don't wrap `n-icon` inside `n-icon`"),a==null||a(),c("i",Bo(this.$attrs,{role:"img",class:[`${i}-icon`,f,{[`${i}-icon--depth`]:r,[`${i}-icon--color-transition`]:r!==void 0}],style:[this.cssVars,this.mergedStyle]}),t?c(t):this.$slots)}});function it(){return go}const at={name:"Space",self:it};let _e;function lt(){if(!ee)return!0;if(_e===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const o=e.scrollHeight===1;return document.body.removeChild(e),_e=o}return _e}const st=Object.assign(Object.assign({},L.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,reverse:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemClass:String,itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),Lt=H({name:"Space",props:st,setup(e){const{mergedClsPrefixRef:o,mergedRtlRef:r}=X(e),i=L("Space","-space",void 0,at,e,o),t=pe("Space",r,o);return{useGap:lt(),rtlEnabled:t,mergedClsPrefix:o,margin:O(()=>{const{size:a}=e;if(Array.isArray(a))return{horizontal:a[0],vertical:a[1]};if(typeof a=="number")return{horizontal:a,vertical:a};const{self:{[h("gap",a)]:f}}=i.value,{row:n,col:l}=mo(f);return{horizontal:Oe(l),vertical:Oe(n)}})}},render(){const{vertical:e,reverse:o,align:r,inline:i,justify:t,itemClass:a,itemStyle:f,margin:n,wrap:l,mergedClsPrefix:p,rtlEnabled:g,useGap:y,wrapItem:k,internalUseGap:v}=this,C=Be(Ro(this),!1);if(!C.length)return null;const I=`${n.horizontal}px`,R=`${n.horizontal/2}px`,M=`${n.vertical}px`,u=`${n.vertical/2}px`,b=C.length-1,d=t.startsWith("space-");return c("div",{role:"none",class:[`${p}-space`,g&&`${p}-space--rtl`],style:{display:i?"inline-flex":"flex",flexDirection:e&&!o?"column":e&&o?"column-reverse":!e&&o?"row-reverse":"row",justifyContent:["start","end"].includes(t)?`flex-${t}`:t,flexWrap:!l||e?"nowrap":"wrap",marginTop:y||e?"":`-${u}`,marginBottom:y||e?"":`-${u}`,alignItems:r,gap:y?`${n.vertical}px ${n.horizontal}px`:""}},!k&&(y||v)?C:C.map((z,w)=>z.type===De?z:c("div",{role:"none",class:a,style:[f,{maxWidth:"100%"},y?"":e?{marginBottom:w!==b?M:""}:g?{marginLeft:d?t==="space-between"&&w===b?"":R:w!==b?I:"",marginRight:d?t==="space-between"&&w===0?"":R:"",paddingTop:u,paddingBottom:u}:{marginRight:d?t==="space-between"&&w===b?"":R:w!==b?I:"",marginLeft:d?t==="space-between"&&w===0?"":R:"",paddingTop:u,paddingBottom:u}]},z)))}});function ct(e){const{textColor3:o,infoColor:r,errorColor:i,successColor:t,warningColor:a,textColor1:f,textColor2:n,railColor:l,fontWeightStrong:p,fontSize:g}=e;return Object.assign(Object.assign({},vo),{contentFontSize:g,titleFontWeight:p,circleBorder:`2px solid ${o}`,circleBorderInfo:`2px solid ${r}`,circleBorderError:`2px solid ${i}`,circleBorderSuccess:`2px solid ${t}`,circleBorderWarning:`2px solid ${a}`,iconColor:o,iconColorInfo:r,iconColorError:i,iconColorSuccess:t,iconColorWarning:a,titleTextColor:f,contentTextColor:n,metaTextColor:o,lineColor:l})}const dt={name:"Timeline",common:Ae,self:ct},ht=$("thing",`
 display: flex;
 transition: color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 color: var(--n-text-color);
`,[$("thing-avatar",`
 margin-right: 12px;
 margin-top: 2px;
 `),$("thing-avatar-header-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 `,[$("thing-header-wrapper",`
 flex: 1;
 `)]),$("thing-main",`
 flex-grow: 1;
 `,[$("thing-header",`
 display: flex;
 margin-bottom: 4px;
 justify-content: space-between;
 align-items: center;
 `,[m("title",`
 font-size: 16px;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 color: var(--n-title-text-color);
 `)]),m("description",[x("&:not(:last-child)",`
 margin-bottom: 4px;
 `)]),m("content",[x("&:not(:first-child)",`
 margin-top: 12px;
 `)]),m("footer",[x("&:not(:first-child)",`
 margin-top: 12px;
 `)]),m("action",[x("&:not(:first-child)",`
 margin-top: 12px;
 `)])])]),ut=Object.assign(Object.assign({},L.props),{title:String,titleExtra:String,description:String,descriptionClass:String,descriptionStyle:[String,Object],content:String,contentClass:String,contentStyle:[String,Object],contentIndented:Boolean}),Wt=H({name:"Thing",props:ut,setup(e,{slots:o}){const{mergedClsPrefixRef:r,inlineThemeDisabled:i,mergedRtlRef:t}=X(e),a=L("Thing","-thing",ht,bo,e,r),f=pe("Thing",t,r),n=O(()=>{const{self:{titleTextColor:p,textColor:g,titleFontWeight:y,fontSize:k},common:{cubicBezierEaseInOut:v}}=a.value;return{"--n-bezier":v,"--n-font-size":k,"--n-text-color":g,"--n-title-font-weight":y,"--n-title-text-color":p}}),l=i?re("thing",void 0,n,e):void 0;return()=>{var p;const{value:g}=r,y=f?f.value:!1;return(p=l==null?void 0:l.onRender)===null||p===void 0||p.call(l),c("div",{class:[`${g}-thing`,l==null?void 0:l.themeClass,y&&`${g}-thing--rtl`],style:i?void 0:n.value},o.avatar&&e.contentIndented?c("div",{class:`${g}-thing-avatar`},o.avatar()):null,c("div",{class:`${g}-thing-main`},!e.contentIndented&&(o.header||e.title||o["header-extra"]||e.titleExtra||o.avatar)?c("div",{class:`${g}-thing-avatar-header-wrapper`},o.avatar?c("div",{class:`${g}-thing-avatar`},o.avatar()):null,o.header||e.title||o["header-extra"]||e.titleExtra?c("div",{class:`${g}-thing-header-wrapper`},c("div",{class:`${g}-thing-header`},o.header||e.title?c("div",{class:`${g}-thing-header__title`},o.header?o.header():e.title):null,o["header-extra"]||e.titleExtra?c("div",{class:`${g}-thing-header__extra`},o["header-extra"]?o["header-extra"]():e.titleExtra):null),o.description||e.description?c("div",{class:[`${g}-thing-main__description`,e.descriptionClass],style:e.descriptionStyle},o.description?o.description():e.description):null):null):c(Ge,null,o.header||e.title||o["header-extra"]||e.titleExtra?c("div",{class:`${g}-thing-header`},o.header||e.title?c("div",{class:`${g}-thing-header__title`},o.header?o.header():e.title):null,o["header-extra"]||e.titleExtra?c("div",{class:`${g}-thing-header__extra`},o["header-extra"]?o["header-extra"]():e.titleExtra):null):null,o.description||e.description?c("div",{class:[`${g}-thing-main__description`,e.descriptionClass],style:e.descriptionStyle},o.description?o.description():e.description):null),o.default||e.content?c("div",{class:[`${g}-thing-main__content`,e.contentClass],style:e.contentStyle},o.default?o.default():e.content):null,o.footer?c("div",{class:`${g}-thing-main__footer`},o.footer()):null,o.action?c("div",{class:`${g}-thing-main__action`},o.action()):null))}}}),Fe=1.25,ft=$("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${Fe};
`,[P("horizontal",`
 flex-direction: row;
 `,[x(">",[$("timeline-item",`
 flex-shrink: 0;
 padding-right: 40px;
 `,[P("dashed-line-type",[x(">",[$("timeline-item-timeline",[m("line",`
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]),x(">",[$("timeline-item-content",`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[x(">",[m("meta",`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),$("timeline-item-timeline",`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[m("line",`
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]),P("right-placement",[$("timeline-item",[$("timeline-item-content",`
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `),$("timeline-item-timeline",`
 width: var(--n-icon-size);
 right: 0;
 `)])]),P("left-placement",[$("timeline-item",[$("timeline-item-content",`
 margin-left: calc(var(--n-icon-size) + 12px);
 `),$("timeline-item-timeline",`
 left: 0;
 `)])]),$("timeline-item",`
 position: relative;
 `,[x("&:last-child",[$("timeline-item-timeline",[m("line",`
 display: none;
 `)]),$("timeline-item-content",[m("meta",`
 margin-bottom: 0;
 `)])]),$("timeline-item-content",[m("title",`
 margin: var(--n-title-margin);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),m("content",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-content-font-size);
 color: var(--n-content-text-color);
 `),m("meta",`
 transition: color .3s var(--n-bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--n-meta-text-color);
 `)]),P("dashed-line-type",[$("timeline-item-timeline",[m("line",`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),$("timeline-item-timeline",`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${Fe} / 2 - var(--n-icon-size) / 2);
 height: 100%;
 `,[m("circle",`
 border: var(--n-circle-border);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 border-radius: var(--n-icon-size);
 box-sizing: border-box;
 `),m("icon",`
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `),m("line",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 top: var(--n-icon-size);
 left: calc(var(--n-icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--n-line-color);
 `)])])]),gt=Object.assign(Object.assign({},L.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),Qe=he("n-timeline"),Vt=H({name:"Timeline",props:gt,setup(e,{slots:o}){const{mergedClsPrefixRef:r}=X(e),i=L("Timeline","-timeline",ft,dt,e,r);return Te(Qe,{props:e,mergedThemeRef:i,mergedClsPrefixRef:r}),()=>{const{value:t}=r;return c("div",{class:[`${t}-timeline`,e.horizontal&&`${t}-timeline--horizontal`,`${t}-timeline--${e.size}-size`,!e.horizontal&&`${t}-timeline--${e.itemPlacement}-placement`]},o)}}}),mt={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},At=H({name:"TimelineItem",props:mt,setup(e){const o=ce(Qe);o||zo("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),To();const{inlineThemeDisabled:r}=X(),i=O(()=>{const{props:{size:a,iconSize:f},mergedThemeRef:n}=o,{type:l}=e,{self:{titleTextColor:p,contentTextColor:g,metaTextColor:y,lineColor:k,titleFontWeight:v,contentFontSize:C,[h("iconSize",a)]:I,[h("titleMargin",a)]:R,[h("titleFontSize",a)]:M,[h("circleBorder",l)]:u,[h("iconColor",l)]:b},common:{cubicBezierEaseInOut:d}}=n.value;return{"--n-bezier":d,"--n-circle-border":u,"--n-icon-color":b,"--n-content-font-size":C,"--n-content-text-color":g,"--n-line-color":k,"--n-meta-text-color":y,"--n-title-font-size":M,"--n-title-font-weight":v,"--n-title-margin":R,"--n-title-text-color":p,"--n-icon-size":We(f)||I}}),t=r?re("timeline-item",O(()=>{const{props:{size:a,iconSize:f}}=o,{type:n}=e;return`${a[0]}${f||"a"}${n[0]}`}),i,o.props):void 0;return{mergedClsPrefix:o.mergedClsPrefixRef,cssVars:r?void 0:i,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){const{mergedClsPrefix:e,color:o,onRender:r,$slots:i}=this;return r==null||r(),c("div",{class:[`${e}-timeline-item`,this.themeClass,`${e}-timeline-item--${this.type}-type`,`${e}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},c("div",{class:`${e}-timeline-item-timeline`},c("div",{class:`${e}-timeline-item-timeline__line`}),Z(i.icon,t=>t?c("div",{class:`${e}-timeline-item-timeline__icon`,style:{color:o}},t):c("div",{class:`${e}-timeline-item-timeline__circle`,style:{borderColor:o}}))),c("div",{class:`${e}-timeline-item-content`},Z(i.header,t=>t||this.title?c("div",{class:`${e}-timeline-item-content__title`},t||this.title):null),c("div",{class:`${e}-timeline-item-content__content`},Pe(i.default,()=>[this.content])),c("div",{class:`${e}-timeline-item-content__meta`},Pe(i.footer,()=>[this.time]))))}}),vt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"},bt=ne("path",{d:"M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-2.2 2L16 14.78L6.2 8zM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24z",fill:"currentColor"},null,-1),pt=[bt],Nt=H({name:"Email",render:function(o,r){return ue(),fe("svg",vt,pt)}}),xt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"},yt=ne("path",{d:"M18 4v2h6.586l-7.688 7.689a8.028 8.028 0 1 0 1.414 1.414L26 7.414V14h2V4zm-6 22a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6z",fill:"currentColor"},null,-1),Ct=[yt],Gt=H({name:"GenderMale",render:function(o,r){return ue(),fe("svg",xt,Ct)}}),zt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"},wt=ne("path",{d:"M16 18a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5zm0-8a3 3 0 1 0 3 3a3.003 3.003 0 0 0-3-3z",fill:"currentColor"},null,-1),$t=ne("path",{d:"M16 30l-8.436-9.949a35.076 35.076 0 0 1-.348-.451A10.889 10.889 0 0 1 5 13a11 11 0 0 1 22 0a10.884 10.884 0 0 1-2.215 6.597l-.001.003s-.3.394-.345.447zM8.812 18.395c.002 0 .234.308.287.374L16 26.908l6.91-8.15c.044-.055.278-.365.279-.366A8.901 8.901 0 0 0 25 13a9 9 0 1 0-18 0a8.905 8.905 0 0 0 1.813 5.395z",fill:"currentColor"},null,-1),St=[wt,$t],Dt=H({name:"Location",render:function(o,r){return ue(),fe("svg",zt,St)}}),kt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"},_t=ne("path",{d:"M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2z","fill-rule":"evenodd",fill:"currentColor"},null,-1),Pt=[_t],Kt=H({name:"LogoGithub",render:function(o,r){return ue(),fe("svg",kt,Pt)}}),Bt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"},Rt=ne("path",{d:"M26 29h-.17C6.18 27.87 3.39 11.29 3 6.23A3 3 0 0 1 5.76 3h5.51a2 2 0 0 1 1.86 1.26L14.65 8a2 2 0 0 1-.44 2.16l-2.13 2.15a9.37 9.37 0 0 0 7.58 7.6l2.17-2.15a2 2 0 0 1 2.17-.41l3.77 1.51A2 2 0 0 1 29 20.72V26a3 3 0 0 1-3 3zM6 5a1 1 0 0 0-1 1v.08C5.46 12 8.41 26 25.94 27a1 1 0 0 0 1.06-.94v-5.34l-3.77-1.51l-2.87 2.85l-.48-.06c-8.7-1.09-9.88-9.79-9.88-9.88l-.06-.48l2.84-2.87L11.28 5z",fill:"currentColor"},null,-1),Tt=[Rt],qt=H({name:"Phone",render:function(o,r){return ue(),fe("svg",Bt,Tt)}});export{Ft as B,Nt as E,Gt as G,Kt as L,jt as N,qt as P,Mt as a,Dt as b,Wt as c,At as d,Lt as e,Ht as f,Vt as g};
