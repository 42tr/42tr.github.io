import{d as x,Q as D,h as i,a2 as v,R as S,ad as g,j as C,ag as u,a3 as B,ah as N,ai as h,aj as R}from"./main-light-s4m1f24Q.js";const k={abstract:Boolean,bordered:{type:Boolean,default:void 0},clsPrefix:{type:String,default:u},locale:Object,dateLocale:Object,namespace:String,rtl:Array,tag:{type:String,default:"div"},hljs:Object,katex:Object,theme:Object,themeOverrides:Object,componentOptions:Object,icons:Object,breakpoints:Object,preflightStyleDisabled:Boolean,inlineThemeDisabled:{type:Boolean,default:void 0},as:{type:String,validator:()=>(B("config-provider","`as` is deprecated, please use `tag` instead."),!0),default:void 0}},_=x({name:"ConfigProvider",alias:["App"],props:k,setup(d){const e=D(g,null),o=i(()=>{const{theme:n}=d;if(n===null)return;const r=e==null?void 0:e.mergedThemeRef.value;return n===void 0?r:r===void 0?n:Object.assign({},r,n)}),t=i(()=>{const{themeOverrides:n}=d;if(n!==null){if(n===void 0)return e==null?void 0:e.mergedThemeOverridesRef.value;{const r=e==null?void 0:e.mergedThemeOverridesRef.value;return r===void 0?n:N({},r,n)}}}),f=v(()=>{const{namespace:n}=d;return n===void 0?e==null?void 0:e.mergedNamespaceRef.value:n}),c=v(()=>{const{bordered:n}=d;return n===void 0?e==null?void 0:e.mergedBorderedRef.value:n}),b=i(()=>{const{icons:n}=d;return n===void 0?e==null?void 0:e.mergedIconsRef.value:n}),O=i(()=>{const{componentOptions:n}=d;return n!==void 0?n:e==null?void 0:e.mergedComponentPropsRef.value}),m=i(()=>{const{clsPrefix:n}=d;return n!==void 0?n:e?e.mergedClsPrefixRef.value:u}),j=i(()=>{var n;const{rtl:r}=d;if(r===void 0)return e==null?void 0:e.mergedRtlRef.value;const l={};for(const a of r)l[a.name]=h(a),(n=a.peers)===null||n===void 0||n.forEach(s=>{s.name in l||(l[s.name]=h(s))});return l}),T=i(()=>d.breakpoints||(e==null?void 0:e.mergedBreakpointsRef.value)),y=d.inlineThemeDisabled||(e==null?void 0:e.inlineThemeDisabled),P=d.preflightStyleDisabled||(e==null?void 0:e.preflightStyleDisabled),p=i(()=>{const{value:n}=o,{value:r}=t,l=r&&Object.keys(r).length!==0,a=n==null?void 0:n.name;return a?l?`${a}-${R(JSON.stringify(t.value))}`:a:l?R(JSON.stringify(t.value)):""});return S(g,{mergedThemeHashRef:p,mergedBreakpointsRef:T,mergedRtlRef:j,mergedIconsRef:b,mergedComponentPropsRef:O,mergedBorderedRef:c,mergedNamespaceRef:f,mergedClsPrefixRef:m,mergedLocaleRef:i(()=>{const{locale:n}=d;if(n!==null)return n===void 0?e==null?void 0:e.mergedLocaleRef.value:n}),mergedDateLocaleRef:i(()=>{const{dateLocale:n}=d;if(n!==null)return n===void 0?e==null?void 0:e.mergedDateLocaleRef.value:n}),mergedHljsRef:i(()=>{const{hljs:n}=d;return n===void 0?e==null?void 0:e.mergedHljsRef.value:n}),mergedKatexRef:i(()=>{const{katex:n}=d;return n===void 0?e==null?void 0:e.mergedKatexRef.value:n}),mergedThemeRef:o,mergedThemeOverridesRef:t,inlineThemeDisabled:y||!1,preflightStyleDisabled:P||!1}),{mergedClsPrefix:m,mergedBordered:c,mergedNamespace:f,mergedTheme:o,mergedThemeOverrides:t}},render(){var d,e,o,t;return this.abstract?(t=(o=this.$slots).default)===null||t===void 0?void 0:t.call(o):C(this.as||this.tag,{class:`${this.mergedClsPrefix||u}-config-provider`},(e=(d=this.$slots).default)===null||e===void 0?void 0:e.call(d))}});export{_ as N};