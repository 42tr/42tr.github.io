import{s as Rn,g as ie,d as Ze,r as yn,i as An,w as Re,t as Le,h as $e,c as wn,b as Mn,y as te,z as Be,A as K,a as se,e as De,F as Tn,o as xn,B as On}from"./main-runtime-dom.esm-bundler-Dw6ihk_t.js";import{C as Cn,d as vn,e as ge,f as In,g as je,h as kn,i as Ln,u as Ye,j as $n}from"./main-light-BC_hQiQZ.js";import{N as Pe}from"./main-ConfigProvider-BHq4Wdgh.js";function Bn(e,n){const t=Rn(Cn,null);return ie(()=>e.hljs||(t==null?void 0:t.mergedHljsRef.value))}function Dn(e){const{textColor2:n,fontSize:t,fontWeightStrong:o,textColor3:d}=e;return{textColor:n,fontSize:t,fontWeightStrong:o,"mono-3":"#a0a1a7","hue-1":"#0184bb","hue-2":"#4078f2","hue-3":"#a626a4","hue-4":"#50a14f","hue-5":"#e45649","hue-5-2":"#c91243","hue-6":"#986801","hue-6-2":"#c18401",lineNumberTextColor:d}}const jn={name:"Code",common:vn,self:Dn},Pn=ge([In("code",`
 font-size: var(--n-font-size);
 font-family: var(--n-font-family);
 `,[je("show-line-numbers",`
 display: flex;
 `),kn("line-numbers",`
 user-select: none;
 padding-right: 12px;
 text-align: right;
 transition: color .3s var(--n-bezier);
 color: var(--n-line-number-text-color);
 `),je("word-wrap",[ge("pre",`
 white-space: pre-wrap;
 word-break: break-all;
 `)]),ge("pre",`
 margin: 0;
 line-height: inherit;
 font-size: inherit;
 font-family: inherit;
 `),ge("[class^=hljs]",`
 color: var(--n-text-color);
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),({props:e})=>{const n=`${e.bPrefix}code`;return[`${n} .hljs-comment,
 ${n} .hljs-quote {
 color: var(--n-mono-3);
 font-style: italic;
 }`,`${n} .hljs-doctag,
 ${n} .hljs-keyword,
 ${n} .hljs-formula {
 color: var(--n-hue-3);
 }`,`${n} .hljs-section,
 ${n} .hljs-name,
 ${n} .hljs-selector-tag,
 ${n} .hljs-deletion,
 ${n} .hljs-subst {
 color: var(--n-hue-5);
 }`,`${n} .hljs-literal {
 color: var(--n-hue-1);
 }`,`${n} .hljs-string,
 ${n} .hljs-regexp,
 ${n} .hljs-addition,
 ${n} .hljs-attribute,
 ${n} .hljs-meta-string {
 color: var(--n-hue-4);
 }`,`${n} .hljs-built_in,
 ${n} .hljs-class .hljs-title {
 color: var(--n-hue-6-2);
 }`,`${n} .hljs-attr,
 ${n} .hljs-variable,
 ${n} .hljs-template-variable,
 ${n} .hljs-type,
 ${n} .hljs-selector-class,
 ${n} .hljs-selector-attr,
 ${n} .hljs-selector-pseudo,
 ${n} .hljs-number {
 color: var(--n-hue-6);
 }`,`${n} .hljs-symbol,
 ${n} .hljs-bullet,
 ${n} .hljs-link,
 ${n} .hljs-meta,
 ${n} .hljs-selector-id,
 ${n} .hljs-title {
 color: var(--n-hue-2);
 }`,`${n} .hljs-emphasis {
 font-style: italic;
 }`,`${n} .hljs-strong {
 font-weight: var(--n-font-weight-strong);
 }`,`${n} .hljs-link {
 text-decoration: underline;
 }`]}]),Hn=Object.assign(Object.assign({},Ye.props),{language:String,code:{type:String,default:""},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,showLineNumbers:Boolean,internalFontSize:Number,internalNoHighlight:Boolean}),ye=Ze({name:"Code",props:Hn,setup(e,{slots:n}){const{internalNoHighlight:t}=e,{mergedClsPrefixRef:o,inlineThemeDisabled:d}=Ln(),p=yn(null),r=t?{value:void 0}:Bn(e),i=(b,M,R)=>{const{value:w}=r;return!w||!(b&&w.getLanguage(b))?null:w.highlight(R?M.trim():M,{language:b}).value},u=ie(()=>e.inline||e.wordWrap?!1:e.showLineNumbers),E=()=>{if(n.default)return;const{value:b}=p;if(!b)return;const{language:M}=e,R=e.uri?window.decodeURIComponent(e.code):e.code;if(M){const v=i(M,R,e.trim);if(v!==null){if(e.inline)b.innerHTML=v;else{const B=b.querySelector(".__code__");B&&b.removeChild(B);const L=document.createElement("pre");L.className="__code__",L.innerHTML=v,b.appendChild(L)}return}}if(e.inline){b.textContent=R;return}const w=b.querySelector(".__code__");if(w)w.textContent=R;else{const v=document.createElement("pre");v.className="__code__",v.textContent=R,b.innerHTML="",b.appendChild(v)}};An(E),Re(Le(e,"language"),E),Re(Le(e,"code"),E),t||Re(r,E);const N=Ye("Code","-code",Pn,jn,e,o),O=ie(()=>{const{common:{cubicBezierEaseInOut:b,fontFamilyMono:M},self:{textColor:R,fontSize:w,fontWeightStrong:v,lineNumberTextColor:B,"mono-3":L,"hue-1":P,"hue-2":z,"hue-3":H,"hue-4":ne,"hue-5":Y,"hue-5-2":k,"hue-6":V,"hue-6-2":X}}=N.value,{internalFontSize:J}=e;return{"--n-font-size":J?`${J}px`:w,"--n-font-family":M,"--n-font-weight-strong":v,"--n-bezier":b,"--n-text-color":R,"--n-mono-3":L,"--n-hue-1":P,"--n-hue-2":z,"--n-hue-3":H,"--n-hue-4":ne,"--n-hue-5":Y,"--n-hue-5-2":k,"--n-hue-6":V,"--n-hue-6-2":X,"--n-line-number-text-color":B}}),A=d?$n("code",ie(()=>`${e.internalFontSize||"a"}`),O,e):void 0;return{mergedClsPrefix:o,codeRef:p,mergedShowLineNumbers:u,lineNumbers:ie(()=>{let b=1;const M=[];let R=!1;for(const w of e.code)w===`
`?(R=!0,M.push(b++)):R=!1;return R||M.push(b++),M.join(`
`)}),cssVars:d?void 0:O,themeClass:A==null?void 0:A.themeClass,onRender:A==null?void 0:A.onRender}},render(){var e,n;const{mergedClsPrefix:t,wordWrap:o,mergedShowLineNumbers:d,onRender:p}=this;return p==null||p(),$e("code",{class:[`${t}-code`,this.themeClass,o&&`${t}-code--word-wrap`,d&&`${t}-code--show-line-numbers`],style:this.cssVars,ref:"codeRef"},d?$e("pre",{class:`${t}-code__line-numbers`},this.lineNumbers):null,(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e))}});function Un(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Ve(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(n=>{const t=e[n],o=typeof t;(o==="object"||o==="function")&&!Object.isFrozen(t)&&Ve(t)}),e}class He{constructor(n){n.data===void 0&&(n.data={}),this.data=n.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Xe(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function F(e,...n){const t=Object.create(null);for(const o in e)t[o]=e[o];return n.forEach(function(o){for(const d in o)t[d]=o[d]}),t}const Fn="</span>",Ue=e=>!!e.scope,zn=(e,{prefix:n})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const t=e.split(".");return[`${n}${t.shift()}`,...t.map((o,d)=>`${o}${"_".repeat(d+1)}`)].join(" ")}return`${n}${e}`};class Gn{constructor(n,t){this.buffer="",this.classPrefix=t.classPrefix,n.walk(this)}addText(n){this.buffer+=Xe(n)}openNode(n){if(!Ue(n))return;const t=zn(n.scope,{prefix:this.classPrefix});this.span(t)}closeNode(n){Ue(n)&&(this.buffer+=Fn)}value(){return this.buffer}span(n){this.buffer+=`<span class="${n}">`}}const Fe=(e={})=>{const n={children:[]};return Object.assign(n,e),n};class we{constructor(){this.rootNode=Fe(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(n){this.top.children.push(n)}openNode(n){const t=Fe({scope:n});this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(n){return this.constructor._walk(n,this.rootNode)}static _walk(n,t){return typeof t=="string"?n.addText(t):t.children&&(n.openNode(t),t.children.forEach(o=>this._walk(n,o)),n.closeNode(t)),n}static _collapse(n){typeof n!="string"&&n.children&&(n.children.every(t=>typeof t=="string")?n.children=[n.children.join("")]:n.children.forEach(t=>{we._collapse(t)}))}}class Kn extends we{constructor(n){super(),this.options=n}addText(n){n!==""&&this.add(n)}startScope(n){this.openNode(n)}endScope(){this.closeNode()}__addSublanguage(n,t){const o=n.root;t&&(o.scope=`language:${t}`),this.add(o)}toHTML(){return new Gn(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function re(e){return e?typeof e=="string"?e:e.source:null}function Je(e){return Z("(?=",e,")")}function Wn(e){return Z("(?:",e,")*")}function Zn(e){return Z("(?:",e,")?")}function Z(...e){return e.map(t=>re(t)).join("")}function Yn(e){const n=e[e.length-1];return typeof n=="object"&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}function Me(...e){return"("+(Yn(e).capture?"":"?:")+e.map(o=>re(o)).join("|")+")"}function qe(e){return new RegExp(e.toString()+"|").exec("").length-1}function Vn(e,n){const t=e&&e.exec(n);return t&&t.index===0}const Xn=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Te(e,{joinWith:n}){let t=0;return e.map(o=>{t+=1;const d=t;let p=re(o),r="";for(;p.length>0;){const i=Xn.exec(p);if(!i){r+=p;break}r+=p.substring(0,i.index),p=p.substring(i.index+i[0].length),i[0][0]==="\\"&&i[1]?r+="\\"+String(Number(i[1])+d):(r+=i[0],i[0]==="("&&t++)}return r}).map(o=>`(${o})`).join(n)}const Jn=/\b\B/,Qe="[a-zA-Z]\\w*",xe="[a-zA-Z_]\\w*",en="\\b\\d+(\\.\\d+)?",nn="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",tn="\\b(0b[01]+)",qn="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Qn=(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=Z(n,/.*\b/,e.binary,/\b.*/)),F({scope:"meta",begin:n,end:/$/,relevance:0,"on:begin":(t,o)=>{t.index!==0&&o.ignoreMatch()}},e)},ae={begin:"\\\\[\\s\\S]",relevance:0},et={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[ae]},nt={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[ae]},tt={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},be=function(e,n,t={}){const o=F({scope:"comment",begin:e,end:n,contains:[]},t);o.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const d=Me("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return o.contains.push({begin:Z(/[ ]+/,"(",d,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),o},st=be("//","$"),it=be("/\\*","\\*/"),rt=be("#","$"),at={scope:"number",begin:en,relevance:0},ot={scope:"number",begin:nn,relevance:0},ct={scope:"number",begin:tn,relevance:0},lt={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[ae,{begin:/\[/,end:/\]/,relevance:0,contains:[ae]}]},ut={scope:"title",begin:Qe,relevance:0},gt={scope:"title",begin:xe,relevance:0},ft={begin:"\\.\\s*"+xe,relevance:0},ht=function(e){return Object.assign(e,{"on:begin":(n,t)=>{t.data._beginMatch=n[1]},"on:end":(n,t)=>{t.data._beginMatch!==n[1]&&t.ignoreMatch()}})};var fe=Object.freeze({__proto__:null,APOS_STRING_MODE:et,BACKSLASH_ESCAPE:ae,BINARY_NUMBER_MODE:ct,BINARY_NUMBER_RE:tn,COMMENT:be,C_BLOCK_COMMENT_MODE:it,C_LINE_COMMENT_MODE:st,C_NUMBER_MODE:ot,C_NUMBER_RE:nn,END_SAME_AS_BEGIN:ht,HASH_COMMENT_MODE:rt,IDENT_RE:Qe,MATCH_NOTHING_RE:Jn,METHOD_GUARD:ft,NUMBER_MODE:at,NUMBER_RE:en,PHRASAL_WORDS_MODE:tt,QUOTE_STRING_MODE:nt,REGEXP_MODE:lt,RE_STARTERS_RE:qn,SHEBANG:Qn,TITLE_MODE:ut,UNDERSCORE_IDENT_RE:xe,UNDERSCORE_TITLE_MODE:gt});function dt(e,n){e.input[e.index-1]==="."&&n.ignoreMatch()}function pt(e,n){e.className!==void 0&&(e.scope=e.className,delete e.className)}function bt(e,n){n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=dt,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function Et(e,n){Array.isArray(e.illegal)&&(e.illegal=Me(...e.illegal))}function _t(e,n){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function Nt(e,n){e.relevance===void 0&&(e.relevance=1)}const St=(e,n)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},e);Object.keys(e).forEach(o=>{delete e[o]}),e.keywords=t.keywords,e.begin=Z(t.beforeMatch,Je(t.begin)),e.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},e.relevance=0,delete t.beforeMatch},mt=["of","and","for","in","not","or","if","then","parent","list","value"],Rt="keyword";function sn(e,n,t=Rt){const o=Object.create(null);return typeof e=="string"?d(t,e.split(" ")):Array.isArray(e)?d(t,e):Object.keys(e).forEach(function(p){Object.assign(o,sn(e[p],n,p))}),o;function d(p,r){n&&(r=r.map(i=>i.toLowerCase())),r.forEach(function(i){const u=i.split("|");o[u[0]]=[p,yt(u[0],u[1])]})}}function yt(e,n){return n?Number(n):At(e)?0:1}function At(e){return mt.includes(e.toLowerCase())}const ze={},W=e=>{console.error(e)},Ge=(e,...n)=>{console.log(`WARN: ${e}`,...n)},Q=(e,n)=>{ze[`${e}/${n}`]||(console.log(`Deprecated as of ${e}. ${n}`),ze[`${e}/${n}`]=!0)},de=new Error;function rn(e,n,{key:t}){let o=0;const d=e[t],p={},r={};for(let i=1;i<=n.length;i++)r[i+o]=d[i],p[i+o]=!0,o+=qe(n[i-1]);e[t]=r,e[t]._emit=p,e[t]._multi=!0}function wt(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw W("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),de;if(typeof e.beginScope!="object"||e.beginScope===null)throw W("beginScope must be object"),de;rn(e,e.begin,{key:"beginScope"}),e.begin=Te(e.begin,{joinWith:""})}}function Mt(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw W("skip, excludeEnd, returnEnd not compatible with endScope: {}"),de;if(typeof e.endScope!="object"||e.endScope===null)throw W("endScope must be object"),de;rn(e,e.end,{key:"endScope"}),e.end=Te(e.end,{joinWith:""})}}function Tt(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function xt(e){Tt(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),wt(e),Mt(e)}function Ot(e){function n(r,i){return new RegExp(re(r),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(i?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(i,u){u.position=this.position++,this.matchIndexes[this.matchAt]=u,this.regexes.push([u,i]),this.matchAt+=qe(i)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const i=this.regexes.map(u=>u[1]);this.matcherRe=n(Te(i,{joinWith:"|"}),!0),this.lastIndex=0}exec(i){this.matcherRe.lastIndex=this.lastIndex;const u=this.matcherRe.exec(i);if(!u)return null;const E=u.findIndex((O,A)=>A>0&&O!==void 0),N=this.matchIndexes[E];return u.splice(0,E),Object.assign(u,N)}}class o{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(i){if(this.multiRegexes[i])return this.multiRegexes[i];const u=new t;return this.rules.slice(i).forEach(([E,N])=>u.addRule(E,N)),u.compile(),this.multiRegexes[i]=u,u}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(i,u){this.rules.push([i,u]),u.type==="begin"&&this.count++}exec(i){const u=this.getMatcher(this.regexIndex);u.lastIndex=this.lastIndex;let E=u.exec(i);if(this.resumingScanAtSamePosition()&&!(E&&E.index===this.lastIndex)){const N=this.getMatcher(0);N.lastIndex=this.lastIndex+1,E=N.exec(i)}return E&&(this.regexIndex+=E.position+1,this.regexIndex===this.count&&this.considerAll()),E}}function d(r){const i=new o;return r.contains.forEach(u=>i.addRule(u.begin,{rule:u,type:"begin"})),r.terminatorEnd&&i.addRule(r.terminatorEnd,{type:"end"}),r.illegal&&i.addRule(r.illegal,{type:"illegal"}),i}function p(r,i){const u=r;if(r.isCompiled)return u;[pt,_t,xt,St].forEach(N=>N(r,i)),e.compilerExtensions.forEach(N=>N(r,i)),r.__beforeBegin=null,[bt,Et,Nt].forEach(N=>N(r,i)),r.isCompiled=!0;let E=null;return typeof r.keywords=="object"&&r.keywords.$pattern&&(r.keywords=Object.assign({},r.keywords),E=r.keywords.$pattern,delete r.keywords.$pattern),E=E||/\w+/,r.keywords&&(r.keywords=sn(r.keywords,e.case_insensitive)),u.keywordPatternRe=n(E,!0),i&&(r.begin||(r.begin=/\B|\b/),u.beginRe=n(u.begin),!r.end&&!r.endsWithParent&&(r.end=/\B|\b/),r.end&&(u.endRe=n(u.end)),u.terminatorEnd=re(u.end)||"",r.endsWithParent&&i.terminatorEnd&&(u.terminatorEnd+=(r.end?"|":"")+i.terminatorEnd)),r.illegal&&(u.illegalRe=n(r.illegal)),r.contains||(r.contains=[]),r.contains=[].concat(...r.contains.map(function(N){return Ct(N==="self"?r:N)})),r.contains.forEach(function(N){p(N,u)}),r.starts&&p(r.starts,i),u.matcher=d(u),u}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=F(e.classNameAliases||{}),p(e)}function an(e){return e?e.endsWithParent||an(e.starts):!1}function Ct(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(n){return F(e,{variants:null},n)})),e.cachedVariants?e.cachedVariants:an(e)?F(e,{starts:e.starts?F(e.starts):null}):Object.isFrozen(e)?F(e):e}var vt="11.10.0";class It extends Error{constructor(n,t){super(n),this.name="HTMLInjectionError",this.html=t}}const Ae=Xe,Ke=F,We=Symbol("nomatch"),kt=7,on=function(e){const n=Object.create(null),t=Object.create(null),o=[];let d=!0;const p="Could not find the language '{}', did you forget to load/include a language module?",r={disableAutodetect:!0,name:"Plain text",contains:[]};let i={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:Kn};function u(s){return i.noHighlightRe.test(s)}function E(s){let c=s.className+" ";c+=s.parentNode?s.parentNode.className:"";const f=i.languageDetectRe.exec(c);if(f){const _=k(f[1]);return _||(Ge(p.replace("{}",f[1])),Ge("Falling back to no-highlight mode for this block.",s)),_?f[1]:"no-highlight"}return c.split(/\s+/).find(_=>u(_)||k(_))}function N(s,c,f){let _="",y="";typeof c=="object"?(_=s,f=c.ignoreIllegals,y=c.language):(Q("10.7.0","highlight(lang, code, ...args) has been deprecated."),Q("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),y=s,_=c),f===void 0&&(f=!0);const C={code:_,language:y};q("before:highlight",C);const $=C.result?C.result:O(C.language,C.code,f);return $.code=C.code,q("after:highlight",$),$}function O(s,c,f,_){const y=Object.create(null);function C(a,l){return a.keywords[l]}function $(){if(!g.keywords){T.addText(m);return}let a=0;g.keywordPatternRe.lastIndex=0;let l=g.keywordPatternRe.exec(m),h="";for(;l;){h+=m.substring(a,l.index);const S=j.case_insensitive?l[0].toLowerCase():l[0],x=C(g,S);if(x){const[U,Sn]=x;if(T.addText(h),h="",y[S]=(y[S]||0)+1,y[S]<=kt&&(ue+=Sn),U.startsWith("_"))h+=l[0];else{const mn=j.classNameAliases[U]||U;D(l[0],mn)}}else h+=l[0];a=g.keywordPatternRe.lastIndex,l=g.keywordPatternRe.exec(m)}h+=m.substring(a),T.addText(h)}function ce(){if(m==="")return;let a=null;if(typeof g.subLanguage=="string"){if(!n[g.subLanguage]){T.addText(m);return}a=O(g.subLanguage,m,!0,ke[g.subLanguage]),ke[g.subLanguage]=a._top}else a=b(m,g.subLanguage.length?g.subLanguage:null);g.relevance>0&&(ue+=a.relevance),T.__addSublanguage(a._emitter,a.language)}function I(){g.subLanguage!=null?ce():$(),m=""}function D(a,l){a!==""&&(T.startScope(l),T.addText(a),T.endScope())}function Oe(a,l){let h=1;const S=l.length-1;for(;h<=S;){if(!a._emit[h]){h++;continue}const x=j.classNameAliases[a[h]]||a[h],U=l[h];x?D(U,x):(m=U,$(),m=""),h++}}function Ce(a,l){return a.scope&&typeof a.scope=="string"&&T.openNode(j.classNameAliases[a.scope]||a.scope),a.beginScope&&(a.beginScope._wrap?(D(m,j.classNameAliases[a.beginScope._wrap]||a.beginScope._wrap),m=""):a.beginScope._multi&&(Oe(a.beginScope,l),m="")),g=Object.create(a,{parent:{value:g}}),g}function ve(a,l,h){let S=Vn(a.endRe,h);if(S){if(a["on:end"]){const x=new He(a);a["on:end"](l,x),x.isMatchIgnored&&(S=!1)}if(S){for(;a.endsParent&&a.parent;)a=a.parent;return a}}if(a.endsWithParent)return ve(a.parent,l,h)}function pn(a){return g.matcher.regexIndex===0?(m+=a[0],1):(me=!0,0)}function bn(a){const l=a[0],h=a.rule,S=new He(h),x=[h.__beforeBegin,h["on:begin"]];for(const U of x)if(U&&(U(a,S),S.isMatchIgnored))return pn(l);return h.skip?m+=l:(h.excludeBegin&&(m+=l),I(),!h.returnBegin&&!h.excludeBegin&&(m=l)),Ce(h,a),h.returnBegin?0:l.length}function En(a){const l=a[0],h=c.substring(a.index),S=ve(g,a,h);if(!S)return We;const x=g;g.endScope&&g.endScope._wrap?(I(),D(l,g.endScope._wrap)):g.endScope&&g.endScope._multi?(I(),Oe(g.endScope,a)):x.skip?m+=l:(x.returnEnd||x.excludeEnd||(m+=l),I(),x.excludeEnd&&(m=l));do g.scope&&T.closeNode(),!g.skip&&!g.subLanguage&&(ue+=g.relevance),g=g.parent;while(g!==S.parent);return S.starts&&Ce(S.starts,a),x.returnEnd?0:l.length}function _n(){const a=[];for(let l=g;l!==j;l=l.parent)l.scope&&a.unshift(l.scope);a.forEach(l=>T.openNode(l))}let le={};function Ie(a,l){const h=l&&l[0];if(m+=a,h==null)return I(),0;if(le.type==="begin"&&l.type==="end"&&le.index===l.index&&h===""){if(m+=c.slice(l.index,l.index+1),!d){const S=new Error(`0 width match regex (${s})`);throw S.languageName=s,S.badRule=le.rule,S}return 1}if(le=l,l.type==="begin")return bn(l);if(l.type==="illegal"&&!f){const S=new Error('Illegal lexeme "'+h+'" for mode "'+(g.scope||"<unnamed>")+'"');throw S.mode=g,S}else if(l.type==="end"){const S=En(l);if(S!==We)return S}if(l.type==="illegal"&&h==="")return 1;if(Se>1e5&&Se>l.index*3)throw new Error("potential infinite loop, way more iterations than matches");return m+=h,h.length}const j=k(s);if(!j)throw W(p.replace("{}",s)),new Error('Unknown language: "'+s+'"');const Nn=Ot(j);let Ne="",g=_||Nn;const ke={},T=new i.__emitter(i);_n();let m="",ue=0,G=0,Se=0,me=!1;try{if(j.__emitTokens)j.__emitTokens(c,T);else{for(g.matcher.considerAll();;){Se++,me?me=!1:g.matcher.considerAll(),g.matcher.lastIndex=G;const a=g.matcher.exec(c);if(!a)break;const l=c.substring(G,a.index),h=Ie(l,a);G=a.index+h}Ie(c.substring(G))}return T.finalize(),Ne=T.toHTML(),{language:s,value:Ne,relevance:ue,illegal:!1,_emitter:T,_top:g}}catch(a){if(a.message&&a.message.includes("Illegal"))return{language:s,value:Ae(c),illegal:!0,relevance:0,_illegalBy:{message:a.message,index:G,context:c.slice(G-100,G+100),mode:a.mode,resultSoFar:Ne},_emitter:T};if(d)return{language:s,value:Ae(c),illegal:!1,relevance:0,errorRaised:a,_emitter:T,_top:g};throw a}}function A(s){const c={value:Ae(s),illegal:!1,relevance:0,_top:r,_emitter:new i.__emitter(i)};return c._emitter.addText(s),c}function b(s,c){c=c||i.languages||Object.keys(n);const f=A(s),_=c.filter(k).filter(X).map(I=>O(I,s,!1));_.unshift(f);const y=_.sort((I,D)=>{if(I.relevance!==D.relevance)return D.relevance-I.relevance;if(I.language&&D.language){if(k(I.language).supersetOf===D.language)return 1;if(k(D.language).supersetOf===I.language)return-1}return 0}),[C,$]=y,ce=C;return ce.secondBest=$,ce}function M(s,c,f){const _=c&&t[c]||f;s.classList.add("hljs"),s.classList.add(`language-${_}`)}function R(s){let c=null;const f=E(s);if(u(f))return;if(q("before:highlightElement",{el:s,language:f}),s.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",s);return}if(s.children.length>0&&(i.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(s)),i.throwUnescapedHTML))throw new It("One of your code blocks includes unescaped HTML.",s.innerHTML);c=s;const _=c.textContent,y=f?N(_,{language:f,ignoreIllegals:!0}):b(_);s.innerHTML=y.value,s.dataset.highlighted="yes",M(s,f,y.language),s.result={language:y.language,re:y.relevance,relevance:y.relevance},y.secondBest&&(s.secondBest={language:y.secondBest.language,relevance:y.secondBest.relevance}),q("after:highlightElement",{el:s,result:y,text:_})}function w(s){i=Ke(i,s)}const v=()=>{P(),Q("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function B(){P(),Q("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let L=!1;function P(){if(document.readyState==="loading"){L=!0;return}document.querySelectorAll(i.cssSelector).forEach(R)}function z(){L&&P()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",z,!1);function H(s,c){let f=null;try{f=c(e)}catch(_){if(W("Language definition for '{}' could not be registered.".replace("{}",s)),d)W(_);else throw _;f=r}f.name||(f.name=s),n[s]=f,f.rawDefinition=c.bind(null,e),f.aliases&&V(f.aliases,{languageName:s})}function ne(s){delete n[s];for(const c of Object.keys(t))t[c]===s&&delete t[c]}function Y(){return Object.keys(n)}function k(s){return s=(s||"").toLowerCase(),n[s]||n[t[s]]}function V(s,{languageName:c}){typeof s=="string"&&(s=[s]),s.forEach(f=>{t[f.toLowerCase()]=c})}function X(s){const c=k(s);return c&&!c.disableAutodetect}function J(s){s["before:highlightBlock"]&&!s["before:highlightElement"]&&(s["before:highlightElement"]=c=>{s["before:highlightBlock"](Object.assign({block:c.el},c))}),s["after:highlightBlock"]&&!s["after:highlightElement"]&&(s["after:highlightElement"]=c=>{s["after:highlightBlock"](Object.assign({block:c.el},c))})}function Ee(s){J(s),o.push(s)}function _e(s){const c=o.indexOf(s);c!==-1&&o.splice(c,1)}function q(s,c){const f=s;o.forEach(function(_){_[f]&&_[f](c)})}function oe(s){return Q("10.7.0","highlightBlock will be removed entirely in v12.0"),Q("10.7.0","Please use highlightElement now."),R(s)}Object.assign(e,{highlight:N,highlightAuto:b,highlightAll:P,highlightElement:R,highlightBlock:oe,configure:w,initHighlighting:v,initHighlightingOnLoad:B,registerLanguage:H,unregisterLanguage:ne,listLanguages:Y,getLanguage:k,registerAliases:V,autoDetection:X,inherit:Ke,addPlugin:Ee,removePlugin:_e}),e.debugMode=function(){d=!1},e.safeMode=function(){d=!0},e.versionString=vt,e.regex={concat:Z,lookahead:Je,either:Me,optional:Zn,anyNumberOfTimes:Wn};for(const s in fe)typeof fe[s]=="object"&&Ve(fe[s]);return Object.assign(e,fe),e},ee=on({});ee.newInstance=()=>on({});var Lt=ee;ee.HighlightJS=ee;ee.default=ee;const he=Un(Lt),pe="[A-Za-z$_][0-9A-Za-z$_]*",cn=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],ln=["true","false","null","undefined","NaN","Infinity"],un=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],gn=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],fn=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],hn=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],dn=[].concat(fn,un,gn);function $t(e){const n=e.regex,t=(c,{after:f})=>{const _="</"+c[0].slice(1);return c.input.indexOf(_,f)!==-1},o=pe,d={begin:"<>",end:"</>"},p=/<[A-Za-z0-9\\._:-]+\s*\/>/,r={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(c,f)=>{const _=c[0].length+c.index,y=c.input[_];if(y==="<"||y===","){f.ignoreMatch();return}y===">"&&(t(c,{after:_})||f.ignoreMatch());let C;const $=c.input.substring(_);if(C=$.match(/^\s*=/)){f.ignoreMatch();return}if((C=$.match(/^\s+extends\s+/))&&C.index===0){f.ignoreMatch();return}}},i={$pattern:pe,keyword:cn,literal:ln,built_in:dn,"variable.language":hn},u="[0-9](_?[0-9])*",E=`\\.(${u})`,N="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",O={className:"number",variants:[{begin:`(\\b(${N})((${E})|\\.)?|(${E}))[eE][+-]?(${u})\\b`},{begin:`\\b(${N})\\b((${E})\\b|\\.)?|(${E})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},A={className:"subst",begin:"\\$\\{",end:"\\}",keywords:i,contains:[]},b={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,A],subLanguage:"xml"}},M={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,A],subLanguage:"css"}},R={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,A],subLanguage:"graphql"}},w={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,A]},B={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:o+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},L=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,b,M,R,w,{match:/\$\d+/},O];A.contains=L.concat({begin:/\{/,end:/\}/,keywords:i,contains:["self"].concat(L)});const P=[].concat(B,A.contains),z=P.concat([{begin:/(\s*)\(/,end:/\)/,keywords:i,contains:["self"].concat(P)}]),H={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:z},ne={variants:[{match:[/class/,/\s+/,o,/\s+/,/extends/,/\s+/,n.concat(o,"(",n.concat(/\./,o),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,o],scope:{1:"keyword",3:"title.class"}}]},Y={relevance:0,match:n.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...un,...gn]}},k={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},V={variants:[{match:[/function/,/\s+/,o,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[H],illegal:/%/},X={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function J(c){return n.concat("(?!",c.join("|"),")")}const Ee={match:n.concat(/\b/,J([...fn,"super","import"].map(c=>`${c}\\s*\\(`)),o,n.lookahead(/\s*\(/)),className:"title.function",relevance:0},_e={begin:n.concat(/\./,n.lookahead(n.concat(o,/(?![0-9A-Za-z$_(])/))),end:o,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},q={match:[/get|set/,/\s+/,o,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},H]},oe="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",s={match:[/const|var|let/,/\s+/,o,/\s*/,/=\s*/,/(async\s*)?/,n.lookahead(oe)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[H]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:i,exports:{PARAMS_CONTAINS:z,CLASS_REFERENCE:Y},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),k,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,b,M,R,w,B,{match:/\$\d+/},O,Y,{className:"attr",begin:o+n.lookahead(":"),relevance:0},s,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[B,e.REGEXP_MODE,{className:"function",begin:oe,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:z}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:d.begin,end:d.end},{match:p},{begin:r.begin,"on:begin":r.isTrulyOpeningTag,end:r.end}],subLanguage:"xml",contains:[{begin:r.begin,end:r.end,skip:!0,contains:["self"]}]}]},V,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[H,e.inherit(e.TITLE_MODE,{begin:o,className:"title.function"})]},{match:/\.\.\./,relevance:0},_e,{match:"\\$"+o,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[H]},Ee,X,ne,q,{match:/\$[(.]/}]}}function Bt(e){const n=$t(e),t=pe,o=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],d={begin:[/namespace/,/\s+/,e.IDENT_RE],beginScope:{1:"keyword",3:"title.class"}},p={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:o},contains:[n.exports.CLASS_REFERENCE]},r={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},i=["type","interface","public","private","protected","implements","declare","abstract","readonly","enum","override","satisfies"],u={$pattern:pe,keyword:cn.concat(i),literal:ln,built_in:dn.concat(o),"variable.language":hn},E={className:"meta",begin:"@"+t},N=(b,M,R)=>{const w=b.contains.findIndex(v=>v.label===M);if(w===-1)throw new Error("can not find mode to replace");b.contains.splice(w,1,R)};Object.assign(n.keywords,u),n.exports.PARAMS_CONTAINS.push(E);const O=n.contains.find(b=>b.className==="attr");n.exports.PARAMS_CONTAINS.push([n.exports.CLASS_REFERENCE,O]),n.contains=n.contains.concat([E,d,p]),N(n,"shebang",e.SHEBANG()),N(n,"use_strict",r);const A=n.contains.find(b=>b.label==="func.def");return A.relevance=0,Object.assign(n,{name:"TypeScript",aliases:["ts","tsx","mts","cts"]}),n}function Dt(e){const n="true false yes no null",t="[\\w#;/?:@&=+$,.~*'()[\\]]+",o={className:"attr",variants:[{begin:/\w[\w :()\./-]*:(?=[ \t]|$)/},{begin:/"\w[\w :()\./-]*":(?=[ \t]|$)/},{begin:/'\w[\w :()\./-]*':(?=[ \t]|$)/}]},d={className:"template-variable",variants:[{begin:/\{\{/,end:/\}\}/},{begin:/%\{/,end:/\}/}]},p={className:"string",relevance:0,variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/\S+/}],contains:[e.BACKSLASH_ESCAPE,d]},r=e.inherit(p,{variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/[^\s,{}[\]]+/}]}),O={className:"number",begin:"\\b"+"[0-9]{4}(-[0-9][0-9]){0,2}"+"([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?"+"(\\.[0-9]*)?"+"([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?"+"\\b"},A={end:",",endsWithParent:!0,excludeEnd:!0,keywords:n,relevance:0},b={begin:/\{/,end:/\}/,contains:[A],illegal:"\\n",relevance:0},M={begin:"\\[",end:"\\]",contains:[A],illegal:"\\n",relevance:0},R=[o,{className:"meta",begin:"^---\\s*$",relevance:10},{className:"string",begin:"[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"},{begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:"!\\w+!"+t},{className:"type",begin:"!<"+t+">"},{className:"type",begin:"!"+t},{className:"type",begin:"!!"+t},{className:"meta",begin:"&"+e.UNDERSCORE_IDENT_RE+"$"},{className:"meta",begin:"\\*"+e.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"-(?=[ ]|$)",relevance:0},e.HASH_COMMENT_MODE,{beginKeywords:n,keywords:{literal:n}},O,{className:"number",begin:e.C_NUMBER_RE+"\\b",relevance:0},b,M,p],w=[...R];return w.pop(),w.push(r),A.contains=w,{name:"YAML",case_insensitive:!0,aliases:["yml"],contains:R}}const jt=Ze({__name:"articleFirst",setup(e){return he.registerLanguage("typescript",Bt),he.registerLanguage("yaml",Dt),(n,t)=>(xn(),wn(Tn,null,[t[1]||(t[1]=Mn('<h1>第一篇文章</h1><h2>关于本站</h2><p>一直没有满意的写文章的地方，所有应用都有些无法满足要求的点，不如自己写一个~</p><h2>实现</h2><h3>前端框架</h3><p>vue3 + vite + naive-ui</p><h3>访客计数</h3><p>使用 <a target="_blank" href="https://busuanzi.ibruce.info/">不蒜子</a></p><p style="color:red;">问题：访问子页的流量未统计。</p><h3>允许被搜索引擎爬取</h3><p>根目录设置 robots.txt</p><p>google：判断是否被索引：搜索 site:42tr.github.io，未被索引会提示使用 <a href="https://search.google.com/search-console?resource_id=https%3A%2F%2F42tr.github.io%2F" target="_blank">google search consoloe</a>，验证网站所有权，添加站点地图 <a href="https://42tr.github.io/sitemap.xml">sitemap.xml</a>，完成后过一天再看。</p><h3>Github Actions 自动部署</h3><p>生成一个 <a href="https://github.com/settings/tokens" target="_blank">Personal access token</a>，加入到该仓库的 new repository secret，Name 为 ACCESS_KEY，Value 为 token，在代码目录新建 .github/workflows/pages.yml，内容如下</p>',14)),te(K(Pe),{hljs:K(he)},{default:Be(()=>[te(K(ye),{language:"yaml",code:`
name: GitHub Actions Build and Deploy
on:
  push:
    branches:
      - 42tr
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v2.3.1
        with:
          persist-credentials: false

      - name: Install and Build 🔧
        run: |
          npm install
          npm run build
      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@3.7.1
        with:
          ACCESS_TOKEN: \${{ secrets.ACCESS_KEY }}
          BRANCH: gh-pages
          FOLDER: dist
          CLEAN: true
`})]),_:1},8,["hljs"]),t[2]||(t[2]=se("h2",null,"开发中遇到的问题",-1)),t[3]||(t[3]=se("h3",null,"打包发布到 github.io 的文件无法加载",-1)),t[4]||(t[4]=se("p",null,"问题原因：打包后生成的文件名以下划线开头，无法返回。",-1)),t[5]||(t[5]=se("p",null,[De("解决方案：修改 "),se("b",null,"vite.config.ts")],-1)),te(K(Pe),{hljs:K(he)},{default:Be(()=>[te(K(ye),{language:"typescript",code:`
export default defineConfig({
    plugins: [vue()],
    build: {
        rollupOptions: {
            output: {
                // 入口文件名
                // entryFileNames: \`assets/[name].js\`,
                // 块文件名：不能下划线开头，增加一个 main 前缀
                chunkFileNames: \`assets/main-[name]-[hash].js\`,
                // 资源文件名 css 图片等等
                // assetFileNames: \`assets/[name]-[hash].[ext]\`,
            }
        }
    }
})
`}),t[0]||(t[0]=De(" 解决发布缓存问题——增加唯一标识，如时间戳 ")),te(K(ye),{language:"typescript",code:`
const timestamp = new Date().getTime()

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        // 入口文件名
        entryFileNames: \`assets/[name].\${timestamp}.js\`,
        // 块文件名
        chunkFileNames: \`assets/[name]-[hash].\${timestamp}.js\`,
        // 资源文件名 css 图片等等
        assetFileNames: \`assets/[name]-[hash].\${timestamp}.[ext]\`,
      },
    },
  }
})
`})]),_:1},8,["hljs"])],64))}});On(jt).mount("#app");
