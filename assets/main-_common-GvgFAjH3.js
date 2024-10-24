import{G as Ae,C as Ve,F as _e,r as qe,i as Ce,f as je,d as A,H as Xe,j as Ue,I as Je,s as re,k as ye,g as Qe,n as Ze,h as R,t as Se}from"./main-runtime-dom.esm-bundler-Dw6ihk_t.js";import{x as Ye,y as Ke,z as er,S as ie,A as rr,B as Te,C as oe,D as Z,E as or,f as ze,e as z,g as X,q as tr,d as F,b as U}from"./main-light-BC_hQiQZ.js";const yo="/assets/avatar-_CQMFgCc.jpg";function So(e){return typeof e=="string"?e.endsWith("px")?Number(e.slice(0,e.length-2)):Number(e):e}function To(e,r){const o=e.trim().split(/\s+/g),t={top:o[0]};switch(o.length){case 1:t.right=o[0],t.bottom=o[0],t.left=o[0];break;case 2:t.right=o[1],t.left=o[1],t.bottom=o[0];break;case 3:t.right=o[1],t.bottom=o[2],t.left=o[1];break;case 4:t.right=o[1],t.bottom=o[2],t.left=o[3];break;default:throw new Error("[seemly/getMargin]:"+e+" is not a valid value.")}return r===void 0?t:t[r]}function zo(e,r){const[o,t]=e.split(" ");return{row:o,col:t||o}}function nr(e,...r){if(Array.isArray(e))e.forEach(o=>nr(o,...r));else return e(...r)}function V(e){return e.some(r=>Ae(r)?!(r.type===Ve||r.type===_e&&!V(r.children)):!0)?e:null}function Ro(e,r){return e&&V(e())||r()}function Po(e,r){const o=e&&V(e());return r(o||null)}function wo(e){return!(e&&V(e()))}const ir=/^(\d|\.)+$/,se=/(\d|\.)+/;function Eo(e,{c:r=1,offset:o=0,attachPx:t=!0}={}){if(typeof e=="number"){const n=(e+o)*r;return n===0?"0":`${n}px`}else if(typeof e=="string")if(ir.test(e)){const n=(Number(e)+o)*r;return t?n===0?"0":`${n}px`:`${n}`}else{const n=se.exec(e);return n?e.replace(se,String((Number(n[0])+o)*r)):e}return e}function sr(e,r){if(e===void 0)return!1;if(r){const{context:{ids:o}}=r;return o.has(e)}return Ye(e)!==null}const Mo=typeof document<"u"&&typeof window<"u";function Oo(){const e=qe(!1);return Ce(()=>{e.value=!0}),je(e)}function ae(e,r){console.error(`[vueuc/${e}]: ${r}`)}var E=[],ar=function(){return E.some(function(e){return e.activeTargets.length>0})},lr=function(){return E.some(function(e){return e.skippedTargets.length>0})},le="ResizeObserver loop completed with undelivered notifications.",cr=function(){var e;typeof ErrorEvent=="function"?e=new ErrorEvent("error",{message:le}):(e=document.createEvent("Event"),e.initEvent("error",!1,!1),e.message=le),window.dispatchEvent(e)},$;(function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})($||($={}));var M=function(e){return Object.freeze(e)},dr=function(){function e(r,o){this.inlineSize=r,this.blockSize=o,M(this)}return e}(),Re=function(){function e(r,o,t,n){return this.x=r,this.y=o,this.width=t,this.height=n,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,M(this)}return e.prototype.toJSON=function(){var r=this,o=r.x,t=r.y,n=r.top,i=r.right,s=r.bottom,l=r.left,u=r.width,f=r.height;return{x:o,y:t,top:n,right:i,bottom:s,left:l,width:u,height:f}},e.fromRect=function(r){return new e(r.x,r.y,r.width,r.height)},e}(),te=function(e){return e instanceof SVGElement&&"getBBox"in e},Pe=function(e){if(te(e)){var r=e.getBBox(),o=r.width,t=r.height;return!o&&!t}var n=e,i=n.offsetWidth,s=n.offsetHeight;return!(i||s||e.getClientRects().length)},ce=function(e){var r;if(e instanceof Element)return!0;var o=(r=e==null?void 0:e.ownerDocument)===null||r===void 0?void 0:r.defaultView;return!!(o&&e instanceof o.Element)},ur=function(e){switch(e.tagName){case"INPUT":if(e.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},H=typeof window<"u"?window:{},W=new WeakMap,de=/auto|scroll/,fr=/^tb|vertical/,vr=/msie|trident/i.test(H.navigator&&H.navigator.userAgent),T=function(e){return parseFloat(e||"0")},D=function(e,r,o){return e===void 0&&(e=0),r===void 0&&(r=0),o===void 0&&(o=!1),new dr((o?r:e)||0,(o?e:r)||0)},ue=M({devicePixelContentBoxSize:D(),borderBoxSize:D(),contentBoxSize:D(),contentRect:new Re(0,0,0,0)}),we=function(e,r){if(r===void 0&&(r=!1),W.has(e)&&!r)return W.get(e);if(Pe(e))return W.set(e,ue),ue;var o=getComputedStyle(e),t=te(e)&&e.ownerSVGElement&&e.getBBox(),n=!vr&&o.boxSizing==="border-box",i=fr.test(o.writingMode||""),s=!t&&de.test(o.overflowY||""),l=!t&&de.test(o.overflowX||""),u=t?0:T(o.paddingTop),f=t?0:T(o.paddingRight),P=t?0:T(o.paddingBottom),c=t?0:T(o.paddingLeft),_=t?0:T(o.borderTopWidth),d=t?0:T(o.borderRightWidth),C=t?0:T(o.borderBottomWidth),I=t?0:T(o.borderLeftWidth),h=c+f,a=u+P,b=I+d,x=_+C,w=l?e.offsetHeight-x-e.clientHeight:0,g=s?e.offsetWidth-b-e.clientWidth:0,y=n?h+b:0,O=n?a+x:0,v=t?t.width:T(o.width)-y-g,p=t?t.height:T(o.height)-O-w,B=v+h+g+b,S=p+a+w+x,m=M({devicePixelContentBoxSize:D(Math.round(v*devicePixelRatio),Math.round(p*devicePixelRatio),i),borderBoxSize:D(B,S,i),contentBoxSize:D(v,p,i),contentRect:new Re(c,u,v,p)});return W.set(e,m),m},Ee=function(e,r,o){var t=we(e,o),n=t.borderBoxSize,i=t.contentBoxSize,s=t.devicePixelContentBoxSize;switch(r){case $.DEVICE_PIXEL_CONTENT_BOX:return s;case $.BORDER_BOX:return n;default:return i}},pr=function(){function e(r){var o=we(r);this.target=r,this.contentRect=o.contentRect,this.borderBoxSize=M([o.borderBoxSize]),this.contentBoxSize=M([o.contentBoxSize]),this.devicePixelContentBoxSize=M([o.devicePixelContentBoxSize])}return e}(),Me=function(e){if(Pe(e))return 1/0;for(var r=0,o=e.parentNode;o;)r+=1,o=o.parentNode;return r},hr=function(){var e=1/0,r=[];E.forEach(function(s){if(s.activeTargets.length!==0){var l=[];s.activeTargets.forEach(function(f){var P=new pr(f.target),c=Me(f.target);l.push(P),f.lastReportedSize=Ee(f.target,f.observedBox),c<e&&(e=c)}),r.push(function(){s.callback.call(s.observer,l,s.observer)}),s.activeTargets.splice(0,s.activeTargets.length)}});for(var o=0,t=r;o<t.length;o++){var n=t[o];n()}return e},fe=function(e){E.forEach(function(o){o.activeTargets.splice(0,o.activeTargets.length),o.skippedTargets.splice(0,o.skippedTargets.length),o.observationTargets.forEach(function(n){n.isActive()&&(Me(n.target)>e?o.activeTargets.push(n):o.skippedTargets.push(n))})})},br=function(){var e=0;for(fe(e);ar();)e=hr(),fe(e);return lr()&&cr(),e>0},J,Oe=[],xr=function(){return Oe.splice(0).forEach(function(e){return e()})},gr=function(e){if(!J){var r=0,o=document.createTextNode(""),t={characterData:!0};new MutationObserver(function(){return xr()}).observe(o,t),J=function(){o.textContent="".concat(r?r--:r++)}}Oe.push(e),J()},mr=function(e){gr(function(){requestAnimationFrame(e)})},N=0,Cr=function(){return!!N},yr=250,Sr={attributes:!0,characterData:!0,childList:!0,subtree:!0},ve=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],pe=function(e){return e===void 0&&(e=0),Date.now()+e},Q=!1,Tr=function(){function e(){var r=this;this.stopped=!0,this.listener=function(){return r.schedule()}}return e.prototype.run=function(r){var o=this;if(r===void 0&&(r=yr),!Q){Q=!0;var t=pe(r);mr(function(){var n=!1;try{n=br()}finally{if(Q=!1,r=t-pe(),!Cr())return;n?o.run(1e3):r>0?o.run(r):o.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var r=this,o=function(){return r.observer&&r.observer.observe(document.body,Sr)};document.body?o():H.addEventListener("DOMContentLoaded",o)},e.prototype.start=function(){var r=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),ve.forEach(function(o){return H.addEventListener(o,r.listener,!0)}))},e.prototype.stop=function(){var r=this;this.stopped||(this.observer&&this.observer.disconnect(),ve.forEach(function(o){return H.removeEventListener(o,r.listener,!0)}),this.stopped=!0)},e}(),Y=new Tr,he=function(e){!N&&e>0&&Y.start(),N+=e,!N&&Y.stop()},zr=function(e){return!te(e)&&!ur(e)&&getComputedStyle(e).display==="inline"},Rr=function(){function e(r,o){this.target=r,this.observedBox=o||$.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var r=Ee(this.target,this.observedBox,!0);return zr(this.target)&&(this.lastReportedSize=r),this.lastReportedSize.inlineSize!==r.inlineSize||this.lastReportedSize.blockSize!==r.blockSize},e}(),Pr=function(){function e(r,o){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=r,this.callback=o}return e}(),k=new WeakMap,be=function(e,r){for(var o=0;o<e.length;o+=1)if(e[o].target===r)return o;return-1},G=function(){function e(){}return e.connect=function(r,o){var t=new Pr(r,o);k.set(r,t)},e.observe=function(r,o,t){var n=k.get(r),i=n.observationTargets.length===0;be(n.observationTargets,o)<0&&(i&&E.push(n),n.observationTargets.push(new Rr(o,t&&t.box)),he(1),Y.schedule())},e.unobserve=function(r,o){var t=k.get(r),n=be(t.observationTargets,o),i=t.observationTargets.length===1;n>=0&&(i&&E.splice(E.indexOf(t),1),t.observationTargets.splice(n,1),he(-1))},e.disconnect=function(r){var o=this,t=k.get(r);t.observationTargets.slice().forEach(function(n){return o.unobserve(r,n.target)}),t.activeTargets.splice(0,t.activeTargets.length)},e}(),wr=function(){function e(r){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof r!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");G.connect(this,r)}return e.prototype.observe=function(r,o){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!ce(r))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");G.observe(this,r,o)},e.prototype.unobserve=function(r){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!ce(r))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");G.unobserve(this,r)},e.prototype.disconnect=function(){G.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();class Er{constructor(){this.handleResize=this.handleResize.bind(this),this.observer=new(typeof window<"u"&&window.ResizeObserver||wr)(this.handleResize),this.elHandlersMap=new Map}handleResize(r){for(const o of r){const t=this.elHandlersMap.get(o.target);t!==void 0&&t(o)}}registerHandler(r,o){this.elHandlersMap.set(r,o),this.observer.observe(r)}unregisterHandler(r){this.elHandlersMap.has(r)&&(this.elHandlersMap.delete(r),this.observer.unobserve(r))}}const xe=new Er,Bo=A({name:"ResizeObserver",props:{onResize:Function},setup(e){let r=!1;const o=Xe().proxy;function t(n){const{onResize:i}=e;i!==void 0&&i(n)}Ce(()=>{const n=o.$el;if(n===void 0){ae("resize-observer","$el does not exist.");return}if(n.nextElementSibling!==n.nextSibling&&n.nodeType===3&&n.nodeValue!==""){ae("resize-observer","$el can not be observed (it may be a text node).");return}n.nextElementSibling!==null&&(xe.registerHandler(n.nextElementSibling,t),r=!0)}),Ue(()=>{r&&xe.unregisterHandler(o.$el.nextElementSibling)})},render(){return Je(this.$slots,"default")}});var Mr="[object Symbol]";function Or(e){return typeof e=="symbol"||Ke(e)&&er(e)==Mr}function Br(e,r){for(var o=-1,t=e==null?0:e.length,n=Array(t);++o<t;)n[o]=r(e[o],o,e);return n}var Dr=1/0,ge=ie?ie.prototype:void 0,me=ge?ge.toString:void 0;function Be(e){if(typeof e=="string")return e;if(rr(e))return Br(e,Be)+"";if(Or(e))return me?me.call(e):"";var r=e+"";return r=="0"&&1/e==-Dr?"-0":r}function Hr(e){return e==null?"":Be(e)}function $r(e,r,o){var t=-1,n=e.length;r<0&&(r=-r>n?0:n+r),o=o>n?n:o,o<0&&(o+=n),n=r>o?0:o-r>>>0,r>>>=0;for(var i=Array(n);++t<n;)i[t]=e[t+r];return i}function Fr(e,r,o){var t=e.length;return o=o===void 0?t:o,!r&&o>=t?e:$r(e,r,o)}var Ir="\\ud800-\\udfff",Lr="\\u0300-\\u036f",Wr="\\ufe20-\\ufe2f",kr="\\u20d0-\\u20ff",Gr=Lr+Wr+kr,Nr="\\ufe0e\\ufe0f",Ar="\\u200d",Vr=RegExp("["+Ar+Ir+Gr+Nr+"]");function De(e){return Vr.test(e)}function _r(e){return e.split("")}var He="\\ud800-\\udfff",qr="\\u0300-\\u036f",jr="\\ufe20-\\ufe2f",Xr="\\u20d0-\\u20ff",Ur=qr+jr+Xr,Jr="\\ufe0e\\ufe0f",Qr="["+He+"]",K="["+Ur+"]",ee="\\ud83c[\\udffb-\\udfff]",Zr="(?:"+K+"|"+ee+")",$e="[^"+He+"]",Fe="(?:\\ud83c[\\udde6-\\uddff]){2}",Ie="[\\ud800-\\udbff][\\udc00-\\udfff]",Yr="\\u200d",Le=Zr+"?",We="["+Jr+"]?",Kr="(?:"+Yr+"(?:"+[$e,Fe,Ie].join("|")+")"+We+Le+")*",eo=We+Le+Kr,ro="(?:"+[$e+K+"?",K,Fe,Ie,Qr].join("|")+")",oo=RegExp(ee+"(?="+ee+")|"+ro+eo,"g");function to(e){return e.match(oo)||[]}function no(e){return De(e)?to(e):_r(e)}function io(e){return function(r){r=Hr(r);var o=De(r)?no(r):void 0,t=o?o[0]:r.charAt(0),n=o?Fr(o,1).join(""):r.slice(1);return t[e]()+n}}var so=io("toUpperCase");function ke(e,r,o){if(!r)return;const t=Te(),n=re(oe,null),i=()=>{const s=o.value;r.mount({id:s===void 0?e:s+e,head:!0,anchorMetaName:Z,props:{bPrefix:s?`.${s}-`:void 0},ssr:t,parent:n==null?void 0:n.styleMountTarget}),n!=null&&n.preflightStyleDisabled||or.mount({id:"n-global",head:!0,anchorMetaName:Z,ssr:t,parent:n==null?void 0:n.styleMountTarget})};t?i():ye(i)}function Do(e,r,o){if(!r)return;const t=Te(),n=Qe(()=>{const{value:l}=r;if(!l)return;const u=l[e];if(u)return u}),i=re(oe,null),s=()=>{Ze(()=>{const{value:l}=o,u=`${l}${e}Rtl`;if(sr(u,t))return;const{value:f}=n;f&&f.style.mount({id:u,head:!0,anchorMetaName:Z,props:{bPrefix:l?`.${l}-`:void 0},ssr:t,parent:i==null?void 0:i.styleMountTarget})})};return t?s():ye(s),n}function ao(e,r){return A({name:so(e),setup(){var o;const t=(o=re(oe,null))===null||o===void 0?void 0:o.mergedIconsRef;return()=>{var n;const i=(n=t==null?void 0:t.value)===null||n===void 0?void 0:n[e];return i?i():r}}})}const lo=ao("close",R("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},R("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},R("g",{fill:"currentColor","fill-rule":"nonzero"},R("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),co=ze("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[z("svg",`
 height: 1em;
 width: 1em;
 `)]),uo=A({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(e){ke("-base-icon",co,Se(e,"clsPrefix"))},render(){return R("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}}),fo=ze("base-close",`
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`,[X("absolute",`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),z("&::before",`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),tr("disabled",[z("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),z("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),z("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),z("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),z("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),X("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),X("round",[z("&::before",`
 border-radius: 50%;
 `)])]),Ho=A({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(e){return ke("-base-close",fo,Se(e,"clsPrefix")),()=>{const{clsPrefix:r,disabled:o,absolute:t,round:n,isButtonTag:i}=e;return R(i?"button":"div",{type:i?"button":void 0,tabindex:o||!e.focusable?-1:0,"aria-disabled":o,"aria-label":"close",role:i?void 0:"button",disabled:o,class:[`${r}-base-close`,t&&`${r}-base-close--absolute`,o&&`${r}-base-close--disabled`,n&&`${r}-base-close--round`],onMousedown:l=>{e.focusable||l.preventDefault()},onClick:e.onClick},R(uo,{clsPrefix:r},{default:()=>R(lo,null)}))}}}),$o={closeIconSizeTiny:"12px",closeIconSizeSmall:"12px",closeIconSizeMedium:"14px",closeIconSizeLarge:"14px",closeSizeTiny:"16px",closeSizeSmall:"16px",closeSizeMedium:"18px",closeSizeLarge:"18px",padding:"0 7px",closeMargin:"0 0 0 4px"};function vo(e){const{borderRadius:r,avatarColor:o,cardColor:t,fontSize:n,heightTiny:i,heightSmall:s,heightMedium:l,heightLarge:u,heightHuge:f,modalColor:P,popoverColor:c}=e;return{borderRadius:r,fontSize:n,border:`2px solid ${t}`,heightTiny:i,heightSmall:s,heightMedium:l,heightLarge:u,heightHuge:f,color:U(t,o),colorModal:U(P,o),colorPopover:U(c,o)}}const Fo={name:"Avatar",common:F,self:vo},po={paddingTiny:"0 6px",paddingSmall:"0 10px",paddingMedium:"0 14px",paddingLarge:"0 18px",paddingRoundTiny:"0 10px",paddingRoundSmall:"0 14px",paddingRoundMedium:"0 18px",paddingRoundLarge:"0 22px",iconMarginTiny:"6px",iconMarginSmall:"6px",iconMarginMedium:"6px",iconMarginLarge:"6px",iconSizeTiny:"14px",iconSizeSmall:"18px",iconSizeMedium:"18px",iconSizeLarge:"20px",rippleDuration:".6s"};function ho(e){const{heightTiny:r,heightSmall:o,heightMedium:t,heightLarge:n,borderRadius:i,fontSizeTiny:s,fontSizeSmall:l,fontSizeMedium:u,fontSizeLarge:f,opacityDisabled:P,textColor2:c,textColor3:_,primaryColorHover:d,primaryColorPressed:C,borderColor:I,primaryColor:h,baseColor:a,infoColor:b,infoColorHover:x,infoColorPressed:w,successColor:g,successColorHover:y,successColorPressed:O,warningColor:v,warningColorHover:p,warningColorPressed:B,errorColor:S,errorColorHover:m,errorColorPressed:L,fontWeight:Ge,buttonColor2:ne,buttonColor2Hover:q,buttonColor2Pressed:j,fontWeightStrong:Ne}=e;return Object.assign(Object.assign({},po),{heightTiny:r,heightSmall:o,heightMedium:t,heightLarge:n,borderRadiusTiny:i,borderRadiusSmall:i,borderRadiusMedium:i,borderRadiusLarge:i,fontSizeTiny:s,fontSizeSmall:l,fontSizeMedium:u,fontSizeLarge:f,opacityDisabled:P,colorOpacitySecondary:"0.16",colorOpacitySecondaryHover:"0.22",colorOpacitySecondaryPressed:"0.28",colorSecondary:ne,colorSecondaryHover:q,colorSecondaryPressed:j,colorTertiary:ne,colorTertiaryHover:q,colorTertiaryPressed:j,colorQuaternary:"#0000",colorQuaternaryHover:q,colorQuaternaryPressed:j,color:"#0000",colorHover:"#0000",colorPressed:"#0000",colorFocus:"#0000",colorDisabled:"#0000",textColor:c,textColorTertiary:_,textColorHover:d,textColorPressed:C,textColorFocus:d,textColorDisabled:c,textColorText:c,textColorTextHover:d,textColorTextPressed:C,textColorTextFocus:d,textColorTextDisabled:c,textColorGhost:c,textColorGhostHover:d,textColorGhostPressed:C,textColorGhostFocus:d,textColorGhostDisabled:c,border:`1px solid ${I}`,borderHover:`1px solid ${d}`,borderPressed:`1px solid ${C}`,borderFocus:`1px solid ${d}`,borderDisabled:`1px solid ${I}`,rippleColor:h,colorPrimary:h,colorHoverPrimary:d,colorPressedPrimary:C,colorFocusPrimary:d,colorDisabledPrimary:h,textColorPrimary:a,textColorHoverPrimary:a,textColorPressedPrimary:a,textColorFocusPrimary:a,textColorDisabledPrimary:a,textColorTextPrimary:h,textColorTextHoverPrimary:d,textColorTextPressedPrimary:C,textColorTextFocusPrimary:d,textColorTextDisabledPrimary:c,textColorGhostPrimary:h,textColorGhostHoverPrimary:d,textColorGhostPressedPrimary:C,textColorGhostFocusPrimary:d,textColorGhostDisabledPrimary:h,borderPrimary:`1px solid ${h}`,borderHoverPrimary:`1px solid ${d}`,borderPressedPrimary:`1px solid ${C}`,borderFocusPrimary:`1px solid ${d}`,borderDisabledPrimary:`1px solid ${h}`,rippleColorPrimary:h,colorInfo:b,colorHoverInfo:x,colorPressedInfo:w,colorFocusInfo:x,colorDisabledInfo:b,textColorInfo:a,textColorHoverInfo:a,textColorPressedInfo:a,textColorFocusInfo:a,textColorDisabledInfo:a,textColorTextInfo:b,textColorTextHoverInfo:x,textColorTextPressedInfo:w,textColorTextFocusInfo:x,textColorTextDisabledInfo:c,textColorGhostInfo:b,textColorGhostHoverInfo:x,textColorGhostPressedInfo:w,textColorGhostFocusInfo:x,textColorGhostDisabledInfo:b,borderInfo:`1px solid ${b}`,borderHoverInfo:`1px solid ${x}`,borderPressedInfo:`1px solid ${w}`,borderFocusInfo:`1px solid ${x}`,borderDisabledInfo:`1px solid ${b}`,rippleColorInfo:b,colorSuccess:g,colorHoverSuccess:y,colorPressedSuccess:O,colorFocusSuccess:y,colorDisabledSuccess:g,textColorSuccess:a,textColorHoverSuccess:a,textColorPressedSuccess:a,textColorFocusSuccess:a,textColorDisabledSuccess:a,textColorTextSuccess:g,textColorTextHoverSuccess:y,textColorTextPressedSuccess:O,textColorTextFocusSuccess:y,textColorTextDisabledSuccess:c,textColorGhostSuccess:g,textColorGhostHoverSuccess:y,textColorGhostPressedSuccess:O,textColorGhostFocusSuccess:y,textColorGhostDisabledSuccess:g,borderSuccess:`1px solid ${g}`,borderHoverSuccess:`1px solid ${y}`,borderPressedSuccess:`1px solid ${O}`,borderFocusSuccess:`1px solid ${y}`,borderDisabledSuccess:`1px solid ${g}`,rippleColorSuccess:g,colorWarning:v,colorHoverWarning:p,colorPressedWarning:B,colorFocusWarning:p,colorDisabledWarning:v,textColorWarning:a,textColorHoverWarning:a,textColorPressedWarning:a,textColorFocusWarning:a,textColorDisabledWarning:a,textColorTextWarning:v,textColorTextHoverWarning:p,textColorTextPressedWarning:B,textColorTextFocusWarning:p,textColorTextDisabledWarning:c,textColorGhostWarning:v,textColorGhostHoverWarning:p,textColorGhostPressedWarning:B,textColorGhostFocusWarning:p,textColorGhostDisabledWarning:v,borderWarning:`1px solid ${v}`,borderHoverWarning:`1px solid ${p}`,borderPressedWarning:`1px solid ${B}`,borderFocusWarning:`1px solid ${p}`,borderDisabledWarning:`1px solid ${v}`,rippleColorWarning:v,colorError:S,colorHoverError:m,colorPressedError:L,colorFocusError:m,colorDisabledError:S,textColorError:a,textColorHoverError:a,textColorPressedError:a,textColorFocusError:a,textColorDisabledError:a,textColorTextError:S,textColorTextHoverError:m,textColorTextPressedError:L,textColorTextFocusError:m,textColorTextDisabledError:c,textColorGhostError:S,textColorGhostHoverError:m,textColorGhostPressedError:L,textColorGhostFocusError:m,textColorGhostDisabledError:S,borderError:`1px solid ${S}`,borderHoverError:`1px solid ${m}`,borderPressedError:`1px solid ${L}`,borderFocusError:`1px solid ${m}`,borderDisabledError:`1px solid ${S}`,rippleColorError:S,waveOpacity:"0.6",fontWeight:Ge,fontWeightStrong:Ne})}const Io={name:"Button",common:F,self:ho};function bo(e){const{textColorBase:r,opacity1:o,opacity2:t,opacity3:n,opacity4:i,opacity5:s}=e;return{color:r,opacity1Depth:o,opacity2Depth:t,opacity3Depth:n,opacity4Depth:i,opacity5Depth:s}}const Lo={name:"Icon",common:F,self:bo};function xo(e){const{textColor1:r,dividerColor:o,fontWeightStrong:t}=e;return{textColor:r,color:o,fontWeight:t}}const Wo={name:"Divider",common:F,self:xo},ko={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"};function go(e){const{textColor1:r,textColor2:o,fontWeightStrong:t,fontSize:n}=e;return{fontSize:n,titleTextColor:r,textColor:o,titleFontWeight:t}}const Go={name:"Thing",common:F,self:go},No={titleMarginMedium:"0 0 6px 0",titleMarginLarge:"-2px 0 6px 0",titleFontSizeMedium:"14px",titleFontSizeLarge:"16px",iconSizeMedium:"14px",iconSizeLarge:"14px"};export{yo as A,Ho as N,Bo as V,ho as a,nr as b,$o as c,So as d,V as e,bo as f,To as g,xo as h,Mo as i,Oo as j,Eo as k,ko as l,go as m,No as n,Ro as o,ke as p,Fo as q,Po as r,vo as s,wo as t,Do as u,Io as v,Lo as w,Wo as x,zo as y,Go as z};