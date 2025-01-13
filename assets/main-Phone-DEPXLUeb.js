import{f as o,q as y,h as a,g as h,u as v,i as C,j as _,e as W,a as u,c as D,t as L,o as p}from"./main-light-kDW53RkP.js";import{i as M,m as H,h as K,u as q,t as A,r as S,j as T,f as G}from"./main-LogoGithub-CC0VmLsp.js";import{g as b,c as z,h as t,F as k,p as J,k as Q,n as U,q as X,s as Y}from"./main-runtime-dom.esm-bundler-DvsTE5oT.js";let P=!1;function Z(){if(M&&window.CSS&&!P&&(P=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}const ee=o("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[y("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[y("no-title",`
 display: flex;
 align-items: center;
 `)]),a("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),h("title-position-left",[a("line",[h("left",{width:"28px"})])]),h("title-position-right",[a("line",[h("right",{width:"28px"})])]),h("dashed",[a("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),h("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),a("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),y("dashed",[a("line",{backgroundColor:"var(--n-color)"})]),h("dashed",[a("line",{borderColor:"var(--n-color)"})]),h("vertical",{backgroundColor:"var(--n-color)"})]),ie=Object.assign(Object.assign({},v.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),ue=b({name:"Divider",props:ie,setup(e){const{mergedClsPrefixRef:i,inlineThemeDisabled:r}=C(e),c=v("Divider","-divider",ee,H,e,i),n=z(()=>{const{common:{cubicBezierEaseInOut:s},self:{color:f,textColor:m,fontWeight:g}}=c.value;return{"--n-bezier":s,"--n-color":f,"--n-text-color":m,"--n-font-weight":g}}),d=r?_("divider",void 0,n,e):void 0;return{mergedClsPrefix:i,cssVars:r?void 0:n,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){var e;const{$slots:i,titlePlacement:r,vertical:c,dashed:n,cssVars:d,mergedClsPrefix:s}=this;return(e=this.onRender)===null||e===void 0||e.call(this),t("div",{role:"separator",class:[`${s}-divider`,this.themeClass,{[`${s}-divider--vertical`]:c,[`${s}-divider--no-title`]:!i.default,[`${s}-divider--dashed`]:n,[`${s}-divider--title-position-${r}`]:i.default&&r}],style:d},c?null:t("div",{class:`${s}-divider__line ${s}-divider__line--left`}),!c&&i.default?t(k,null,t("div",{class:`${s}-divider__title`},this.$slots),t("div",{class:`${s}-divider__line ${s}-divider__line--right`})):null)}});function te(e){const{textColor3:i,infoColor:r,errorColor:c,successColor:n,warningColor:d,textColor1:s,textColor2:f,railColor:m,fontWeightStrong:g,fontSize:l}=e;return Object.assign(Object.assign({},K),{contentFontSize:l,titleFontWeight:g,circleBorder:`2px solid ${i}`,circleBorderInfo:`2px solid ${r}`,circleBorderError:`2px solid ${c}`,circleBorderSuccess:`2px solid ${n}`,circleBorderWarning:`2px solid ${d}`,iconColor:i,iconColorInfo:r,iconColorError:c,iconColorSuccess:n,iconColorWarning:d,titleTextColor:s,contentTextColor:f,metaTextColor:i,lineColor:m})}const ne={name:"Timeline",common:W,self:te},re=o("thing",`
 display: flex;
 transition: color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 color: var(--n-text-color);
`,[o("thing-avatar",`
 margin-right: 12px;
 margin-top: 2px;
 `),o("thing-avatar-header-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 `,[o("thing-header-wrapper",`
 flex: 1;
 `)]),o("thing-main",`
 flex-grow: 1;
 `,[o("thing-header",`
 display: flex;
 margin-bottom: 4px;
 justify-content: space-between;
 align-items: center;
 `,[a("title",`
 font-size: 16px;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 color: var(--n-title-text-color);
 `)]),a("description",[u("&:not(:last-child)",`
 margin-bottom: 4px;
 `)]),a("content",[u("&:not(:first-child)",`
 margin-top: 12px;
 `)]),a("footer",[u("&:not(:first-child)",`
 margin-top: 12px;
 `)]),a("action",[u("&:not(:first-child)",`
 margin-top: 12px;
 `)])])]),le=Object.assign(Object.assign({},v.props),{title:String,titleExtra:String,description:String,descriptionClass:String,descriptionStyle:[String,Object],content:String,contentClass:String,contentStyle:[String,Object],contentIndented:Boolean}),ve=b({name:"Thing",props:le,slots:Object,setup(e,{slots:i}){const{mergedClsPrefixRef:r,inlineThemeDisabled:c,mergedRtlRef:n}=C(e),d=v("Thing","-thing",re,A,e,r),s=q("Thing",n,r),f=z(()=>{const{self:{titleTextColor:g,textColor:l,titleFontWeight:x,fontSize:$},common:{cubicBezierEaseInOut:w}}=d.value;return{"--n-bezier":w,"--n-font-size":$,"--n-text-color":l,"--n-title-font-weight":x,"--n-title-text-color":g}}),m=c?_("thing",void 0,f,e):void 0;return()=>{var g;const{value:l}=r,x=s?s.value:!1;return(g=m==null?void 0:m.onRender)===null||g===void 0||g.call(m),t("div",{class:[`${l}-thing`,m==null?void 0:m.themeClass,x&&`${l}-thing--rtl`],style:c?void 0:f.value},i.avatar&&e.contentIndented?t("div",{class:`${l}-thing-avatar`},i.avatar()):null,t("div",{class:`${l}-thing-main`},!e.contentIndented&&(i.header||e.title||i["header-extra"]||e.titleExtra||i.avatar)?t("div",{class:`${l}-thing-avatar-header-wrapper`},i.avatar?t("div",{class:`${l}-thing-avatar`},i.avatar()):null,i.header||e.title||i["header-extra"]||e.titleExtra?t("div",{class:`${l}-thing-header-wrapper`},t("div",{class:`${l}-thing-header`},i.header||e.title?t("div",{class:`${l}-thing-header__title`},i.header?i.header():e.title):null,i["header-extra"]||e.titleExtra?t("div",{class:`${l}-thing-header__extra`},i["header-extra"]?i["header-extra"]():e.titleExtra):null),i.description||e.description?t("div",{class:[`${l}-thing-main__description`,e.descriptionClass],style:e.descriptionStyle},i.description?i.description():e.description):null):null):t(k,null,i.header||e.title||i["header-extra"]||e.titleExtra?t("div",{class:`${l}-thing-header`},i.header||e.title?t("div",{class:`${l}-thing-header__title`},i.header?i.header():e.title):null,i["header-extra"]||e.titleExtra?t("div",{class:`${l}-thing-header__extra`},i["header-extra"]?i["header-extra"]():e.titleExtra):null):null,i.description||e.description?t("div",{class:[`${l}-thing-main__description`,e.descriptionClass],style:e.descriptionStyle},i.description?i.description():e.description):null),i.default||e.content?t("div",{class:[`${l}-thing-main__content`,e.contentClass],style:e.contentStyle},i.default?i.default():e.content):null,i.footer?t("div",{class:`${l}-thing-main__footer`},i.footer()):null,i.action?t("div",{class:`${l}-thing-main__action`},i.action()):null))}}}),R=1.25,oe=o("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${R};
`,[h("horizontal",`
 flex-direction: row;
 `,[u(">",[o("timeline-item",`
 flex-shrink: 0;
 padding-right: 40px;
 `,[h("dashed-line-type",[u(">",[o("timeline-item-timeline",[a("line",`
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]),u(">",[o("timeline-item-content",`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[u(">",[a("meta",`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),o("timeline-item-timeline",`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[a("line",`
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]),h("right-placement",[o("timeline-item",[o("timeline-item-content",`
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `),o("timeline-item-timeline",`
 width: var(--n-icon-size);
 right: 0;
 `)])]),h("left-placement",[o("timeline-item",[o("timeline-item-content",`
 margin-left: calc(var(--n-icon-size) + 12px);
 `),o("timeline-item-timeline",`
 left: 0;
 `)])]),o("timeline-item",`
 position: relative;
 `,[u("&:last-child",[o("timeline-item-timeline",[a("line",`
 display: none;
 `)]),o("timeline-item-content",[a("meta",`
 margin-bottom: 0;
 `)])]),o("timeline-item-content",[a("title",`
 margin: var(--n-title-margin);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),a("content",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-content-font-size);
 color: var(--n-content-text-color);
 `),a("meta",`
 transition: color .3s var(--n-bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--n-meta-text-color);
 `)]),h("dashed-line-type",[o("timeline-item-timeline",[a("line",`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),o("timeline-item-timeline",`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${R} / 2 - var(--n-icon-size) / 2);
 height: 100%;
 `,[a("circle",`
 border: var(--n-circle-border);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 border-radius: var(--n-icon-size);
 box-sizing: border-box;
 `),a("icon",`
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `),a("line",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 top: var(--n-icon-size);
 left: calc(var(--n-icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--n-line-color);
 `)])])]),ae=Object.assign(Object.assign({},v.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),B=D("n-timeline"),xe=b({name:"Timeline",props:ae,setup(e,{slots:i}){const{mergedClsPrefixRef:r}=C(e),c=v("Timeline","-timeline",oe,ne,e,r);return J(B,{props:e,mergedThemeRef:c,mergedClsPrefixRef:r}),()=>{const{value:n}=r;return t("div",{class:[`${n}-timeline`,e.horizontal&&`${n}-timeline--horizontal`,`${n}-timeline--${e.size}-size`,!e.horizontal&&`${n}-timeline--${e.itemPlacement}-placement`]},i)}}}),ce={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},pe=b({name:"TimelineItem",props:ce,slots:Object,setup(e){const i=Q(B);i||L("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),Z();const{inlineThemeDisabled:r}=C(),c=z(()=>{const{props:{size:d,iconSize:s},mergedThemeRef:f}=i,{type:m}=e,{self:{titleTextColor:g,contentTextColor:l,metaTextColor:x,lineColor:$,titleFontWeight:w,contentFontSize:j,[p("iconSize",d)]:E,[p("titleMargin",d)]:O,[p("titleFontSize",d)]:I,[p("circleBorder",m)]:V,[p("iconColor",m)]:N},common:{cubicBezierEaseInOut:F}}=f.value;return{"--n-bezier":F,"--n-circle-border":V,"--n-icon-color":N,"--n-content-font-size":j,"--n-content-text-color":l,"--n-line-color":$,"--n-meta-text-color":x,"--n-title-font-size":I,"--n-title-font-weight":w,"--n-title-margin":O,"--n-title-text-color":g,"--n-icon-size":G(s)||E}}),n=r?_("timeline-item",z(()=>{const{props:{size:d,iconSize:s}}=i,{type:f}=e;return`${d[0]}${s||"a"}${f[0]}`}),c,i.props):void 0;return{mergedClsPrefix:i.mergedClsPrefixRef,cssVars:r?void 0:c,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){const{mergedClsPrefix:e,color:i,onRender:r,$slots:c}=this;return r==null||r(),t("div",{class:[`${e}-timeline-item`,this.themeClass,`${e}-timeline-item--${this.type}-type`,`${e}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},t("div",{class:`${e}-timeline-item-timeline`},t("div",{class:`${e}-timeline-item-timeline__line`}),S(c.icon,n=>n?t("div",{class:`${e}-timeline-item-timeline__icon`,style:{color:i}},n):t("div",{class:`${e}-timeline-item-timeline__circle`,style:{borderColor:i}}))),t("div",{class:`${e}-timeline-item-content`},S(c.header,n=>n||this.title?t("div",{class:`${e}-timeline-item-content__title`},n||this.title):null),t("div",{class:`${e}-timeline-item-content__content`},T(c.default,()=>[this.content])),t("div",{class:`${e}-timeline-item-content__meta`},T(c.footer,()=>[this.time]))))}}),se={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"},de=Y("path",{d:"M26 29h-.17C6.18 27.87 3.39 11.29 3 6.23A3 3 0 0 1 5.76 3h5.51a2 2 0 0 1 1.86 1.26L14.65 8a2 2 0 0 1-.44 2.16l-2.13 2.15a9.37 9.37 0 0 0 7.58 7.6l2.17-2.15a2 2 0 0 1 2.17-.41l3.77 1.51A2 2 0 0 1 29 20.72V26a3 3 0 0 1-3 3zM6 5a1 1 0 0 0-1 1v.08C5.46 12 8.41 26 25.94 27a1 1 0 0 0 1.06-.94v-5.34l-3.77-1.51l-2.87 2.85l-.48-.06c-8.7-1.09-9.88-9.79-9.88-9.88l-.06-.48l2.84-2.87L11.28 5z",fill:"currentColor"},null,-1),me=[de],be=b({name:"Phone",render:function(i,r){return U(),X("svg",se,me)}});export{ue as N,be as P,ve as a,pe as b,xe as c};
