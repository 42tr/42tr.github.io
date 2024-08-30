import{Q as _n,h as ne,ad as Nn,y as Sn,z as ce,A as yn,B as ve,C as wn,d as ze,E as Rn,r as mn,k as An,w as Ne,t as Ie,D as Ge,H as xn,j as ke,c as Mn,W as Se,X as On,Y as le,F as Tn,e as Cn,o as vn,b as In,Z as kn}from"./main-light-s4m1f24Q.js";import{N as Ln}from"./main-ConfigProvider-aNECCi-q.js";function $n(e,n){const t=_n(Nn,null);return ne(()=>e.hljs||(t==null?void 0:t.mergedHljsRef.value))}function Bn(e){const{textColor2:n,fontSize:t,fontWeightStrong:a,textColor3:d}=e;return{textColor:n,fontSize:t,fontWeightStrong:a,"mono-3":"#a0a1a7","hue-1":"#0184bb","hue-2":"#4078f2","hue-3":"#a626a4","hue-4":"#50a14f","hue-5":"#e45649","hue-5-2":"#c91243","hue-6":"#986801","hue-6-2":"#c18401",lineNumberTextColor:d}}const Dn={name:"Code",common:Sn,self:Bn},jn=ce([yn("code",`
 font-size: var(--n-font-size);
 font-family: var(--n-font-family);
 `,[ve("show-line-numbers",`
 display: flex;
 `),wn("line-numbers",`
 user-select: none;
 padding-right: 12px;
 text-align: right;
 transition: color .3s var(--n-bezier);
 color: var(--n-line-number-text-color);
 `),ve("word-wrap",[ce("pre",`
 white-space: pre-wrap;
 word-break: break-all;
 `)]),ce("pre",`
 margin: 0;
 line-height: inherit;
 font-size: inherit;
 font-family: inherit;
 `),ce("[class^=hljs]",`
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
 }`]}]),Pn=Object.assign(Object.assign({},Ge.props),{language:String,code:{type:String,default:""},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,showLineNumbers:Boolean,internalFontSize:Number,internalNoHighlight:Boolean}),Le=ze({name:"Code",props:Pn,setup(e,{slots:n}){const{internalNoHighlight:t}=e,{mergedClsPrefixRef:a,inlineThemeDisabled:d}=Rn(),p=mn(null),o=t?{value:void 0}:$n(e),i=(b,A,R)=>{const{value:x}=o;return!x||!(b&&x.getLanguage(b))?null:x.highlight(R?A.trim():A,{language:b}).value},u=ne(()=>e.inline||e.wordWrap?!1:e.showLineNumbers),_=()=>{if(n.default)return;const{value:b}=p;if(!b)return;const{language:A}=e,R=e.uri?window.decodeURIComponent(e.code):e.code;if(A){const C=i(A,R,e.trim);if(C!==null){if(e.inline)b.innerHTML=C;else{const B=b.querySelector(".__code__");B&&b.removeChild(B);const L=document.createElement("pre");L.className="__code__",L.innerHTML=C,b.appendChild(L)}return}}if(e.inline){b.textContent=R;return}const x=b.querySelector(".__code__");if(x)x.textContent=R;else{const C=document.createElement("pre");C.className="__code__",C.textContent=R,b.innerHTML="",b.appendChild(C)}};An(_),Ne(Ie(e,"language"),_),Ne(Ie(e,"code"),_),t||Ne(o,_);const S=Ge("Code","-code",jn,Dn,e,a),v=ne(()=>{const{common:{cubicBezierEaseInOut:b,fontFamilyMono:A},self:{textColor:R,fontSize:x,fontWeightStrong:C,lineNumberTextColor:B,"mono-3":L,"hue-1":P,"hue-2":z,"hue-3":H,"hue-4":ee,"hue-5":Z,"hue-5-2":k,"hue-6":X,"hue-6-2":Y}}=S.value,{internalFontSize:V}=e;return{"--n-font-size":V?`${V}px`:x,"--n-font-family":A,"--n-font-weight-strong":C,"--n-bezier":b,"--n-text-color":R,"--n-mono-3":L,"--n-hue-1":P,"--n-hue-2":z,"--n-hue-3":H,"--n-hue-4":ee,"--n-hue-5":Z,"--n-hue-5-2":k,"--n-hue-6":X,"--n-hue-6-2":Y,"--n-line-number-text-color":B}}),m=d?xn("code",ne(()=>`${e.internalFontSize||"a"}`),v,e):void 0;return{mergedClsPrefix:a,codeRef:p,mergedShowLineNumbers:u,lineNumbers:ne(()=>{let b=1;const A=[];let R=!1;for(const x of e.code)x===`
`?(R=!0,A.push(b++)):R=!1;return R||A.push(b++),A.join(`
`)}),cssVars:d?void 0:v,themeClass:m==null?void 0:m.themeClass,onRender:m==null?void 0:m.onRender}},render(){var e,n;const{mergedClsPrefix:t,wordWrap:a,mergedShowLineNumbers:d,onRender:p}=this;return p==null||p(),ke("code",{class:[`${t}-code`,this.themeClass,a&&`${t}-code--word-wrap`,d&&`${t}-code--show-line-numbers`],style:this.cssVars,ref:"codeRef"},d?ke("pre",{class:`${t}-code__line-numbers`},this.lineNumbers):null,(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e))}});function Hn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function We(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(n=>{const t=e[n],a=typeof t;(a==="object"||a==="function")&&!Object.isFrozen(t)&&We(t)}),e}class $e{constructor(n){n.data===void 0&&(n.data={}),this.data=n.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Ke(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function F(e,...n){const t=Object.create(null);for(const a in e)t[a]=e[a];return n.forEach(function(a){for(const d in a)t[d]=a[d]}),t}const Un="</span>",Be=e=>!!e.scope,Fn=(e,{prefix:n})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const t=e.split(".");return[`${n}${t.shift()}`,...t.map((a,d)=>`${a}${"_".repeat(d+1)}`)].join(" ")}return`${n}${e}`};class zn{constructor(n,t){this.buffer="",this.classPrefix=t.classPrefix,n.walk(this)}addText(n){this.buffer+=Ke(n)}openNode(n){if(!Be(n))return;const t=Fn(n.scope,{prefix:this.classPrefix});this.span(t)}closeNode(n){Be(n)&&(this.buffer+=Un)}value(){return this.buffer}span(n){this.buffer+=`<span class="${n}">`}}const De=(e={})=>{const n={children:[]};return Object.assign(n,e),n};class we{constructor(){this.rootNode=De(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(n){this.top.children.push(n)}openNode(n){const t=De({scope:n});this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(n){return this.constructor._walk(n,this.rootNode)}static _walk(n,t){return typeof t=="string"?n.addText(t):t.children&&(n.openNode(t),t.children.forEach(a=>this._walk(n,a)),n.closeNode(t)),n}static _collapse(n){typeof n!="string"&&n.children&&(n.children.every(t=>typeof t=="string")?n.children=[n.children.join("")]:n.children.forEach(t=>{we._collapse(t)}))}}class Gn extends we{constructor(n){super(),this.options=n}addText(n){n!==""&&this.add(n)}startScope(n){this.openNode(n)}endScope(){this.closeNode()}__addSublanguage(n,t){const a=n.root;t&&(a.scope=`language:${t}`),this.add(a)}toHTML(){return new zn(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function te(e){return e?typeof e=="string"?e:e.source:null}function Ze(e){return K("(?=",e,")")}function Wn(e){return K("(?:",e,")*")}function Kn(e){return K("(?:",e,")?")}function K(...e){return e.map(t=>te(t)).join("")}function Zn(e){const n=e[e.length-1];return typeof n=="object"&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}function Re(...e){return"("+(Zn(e).capture?"":"?:")+e.map(a=>te(a)).join("|")+")"}function Xe(e){return new RegExp(e.toString()+"|").exec("").length-1}function Xn(e,n){const t=e&&e.exec(n);return t&&t.index===0}const Yn=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function me(e,{joinWith:n}){let t=0;return e.map(a=>{t+=1;const d=t;let p=te(a),o="";for(;p.length>0;){const i=Yn.exec(p);if(!i){o+=p;break}o+=p.substring(0,i.index),p=p.substring(i.index+i[0].length),i[0][0]==="\\"&&i[1]?o+="\\"+String(Number(i[1])+d):(o+=i[0],i[0]==="("&&t++)}return o}).map(a=>`(${a})`).join(n)}const Vn=/\b\B/,Ye="[a-zA-Z]\\w*",Ae="[a-zA-Z_]\\w*",Ve="\\b\\d+(\\.\\d+)?",Je="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",qe="\\b(0b[01]+)",Jn="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",qn=(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=K(n,/.*\b/,e.binary,/\b.*/)),F({scope:"meta",begin:n,end:/$/,relevance:0,"on:begin":(t,a)=>{t.index!==0&&a.ignoreMatch()}},e)},se={begin:"\\\\[\\s\\S]",relevance:0},Qn={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[se]},et={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[se]},nt={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},he=function(e,n,t={}){const a=F({scope:"comment",begin:e,end:n,contains:[]},t);a.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const d=Re("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return a.contains.push({begin:K(/[ ]+/,"(",d,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),a},tt=he("//","$"),st=he("/\\*","\\*/"),it=he("#","$"),rt={scope:"number",begin:Ve,relevance:0},ot={scope:"number",begin:Je,relevance:0},at={scope:"number",begin:qe,relevance:0},ct={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[se,{begin:/\[/,end:/\]/,relevance:0,contains:[se]}]},lt={scope:"title",begin:Ye,relevance:0},ut={scope:"title",begin:Ae,relevance:0},ft={begin:"\\.\\s*"+Ae,relevance:0},gt=function(e){return Object.assign(e,{"on:begin":(n,t)=>{t.data._beginMatch=n[1]},"on:end":(n,t)=>{t.data._beginMatch!==n[1]&&t.ignoreMatch()}})};var ue=Object.freeze({__proto__:null,APOS_STRING_MODE:Qn,BACKSLASH_ESCAPE:se,BINARY_NUMBER_MODE:at,BINARY_NUMBER_RE:qe,COMMENT:he,C_BLOCK_COMMENT_MODE:st,C_LINE_COMMENT_MODE:tt,C_NUMBER_MODE:ot,C_NUMBER_RE:Je,END_SAME_AS_BEGIN:gt,HASH_COMMENT_MODE:it,IDENT_RE:Ye,MATCH_NOTHING_RE:Vn,METHOD_GUARD:ft,NUMBER_MODE:rt,NUMBER_RE:Ve,PHRASAL_WORDS_MODE:nt,QUOTE_STRING_MODE:et,REGEXP_MODE:ct,RE_STARTERS_RE:Jn,SHEBANG:qn,TITLE_MODE:lt,UNDERSCORE_IDENT_RE:Ae,UNDERSCORE_TITLE_MODE:ut});function ht(e,n){e.input[e.index-1]==="."&&n.ignoreMatch()}function dt(e,n){e.className!==void 0&&(e.scope=e.className,delete e.className)}function pt(e,n){n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=ht,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function bt(e,n){Array.isArray(e.illegal)&&(e.illegal=Re(...e.illegal))}function Et(e,n){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function _t(e,n){e.relevance===void 0&&(e.relevance=1)}const Nt=(e,n)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},e);Object.keys(e).forEach(a=>{delete e[a]}),e.keywords=t.keywords,e.begin=K(t.beforeMatch,Ze(t.begin)),e.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},e.relevance=0,delete t.beforeMatch},St=["of","and","for","in","not","or","if","then","parent","list","value"],yt="keyword";function Qe(e,n,t=yt){const a=Object.create(null);return typeof e=="string"?d(t,e.split(" ")):Array.isArray(e)?d(t,e):Object.keys(e).forEach(function(p){Object.assign(a,Qe(e[p],n,p))}),a;function d(p,o){n&&(o=o.map(i=>i.toLowerCase())),o.forEach(function(i){const u=i.split("|");a[u[0]]=[p,wt(u[0],u[1])]})}}function wt(e,n){return n?Number(n):Rt(e)?0:1}function Rt(e){return St.includes(e.toLowerCase())}const je={},W=e=>{console.error(e)},Pe=(e,...n)=>{console.log(`WARN: ${e}`,...n)},q=(e,n)=>{je[`${e}/${n}`]||(console.log(`Deprecated as of ${e}. ${n}`),je[`${e}/${n}`]=!0)},fe=new Error;function en(e,n,{key:t}){let a=0;const d=e[t],p={},o={};for(let i=1;i<=n.length;i++)o[i+a]=d[i],p[i+a]=!0,a+=Xe(n[i-1]);e[t]=o,e[t]._emit=p,e[t]._multi=!0}function mt(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw W("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),fe;if(typeof e.beginScope!="object"||e.beginScope===null)throw W("beginScope must be object"),fe;en(e,e.begin,{key:"beginScope"}),e.begin=me(e.begin,{joinWith:""})}}function At(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw W("skip, excludeEnd, returnEnd not compatible with endScope: {}"),fe;if(typeof e.endScope!="object"||e.endScope===null)throw W("endScope must be object"),fe;en(e,e.end,{key:"endScope"}),e.end=me(e.end,{joinWith:""})}}function xt(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function Mt(e){xt(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),mt(e),At(e)}function Ot(e){function n(o,i){return new RegExp(te(o),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(i?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(i,u){u.position=this.position++,this.matchIndexes[this.matchAt]=u,this.regexes.push([u,i]),this.matchAt+=Xe(i)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const i=this.regexes.map(u=>u[1]);this.matcherRe=n(me(i,{joinWith:"|"}),!0),this.lastIndex=0}exec(i){this.matcherRe.lastIndex=this.lastIndex;const u=this.matcherRe.exec(i);if(!u)return null;const _=u.findIndex((v,m)=>m>0&&v!==void 0),S=this.matchIndexes[_];return u.splice(0,_),Object.assign(u,S)}}class a{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(i){if(this.multiRegexes[i])return this.multiRegexes[i];const u=new t;return this.rules.slice(i).forEach(([_,S])=>u.addRule(_,S)),u.compile(),this.multiRegexes[i]=u,u}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(i,u){this.rules.push([i,u]),u.type==="begin"&&this.count++}exec(i){const u=this.getMatcher(this.regexIndex);u.lastIndex=this.lastIndex;let _=u.exec(i);if(this.resumingScanAtSamePosition()&&!(_&&_.index===this.lastIndex)){const S=this.getMatcher(0);S.lastIndex=this.lastIndex+1,_=S.exec(i)}return _&&(this.regexIndex+=_.position+1,this.regexIndex===this.count&&this.considerAll()),_}}function d(o){const i=new a;return o.contains.forEach(u=>i.addRule(u.begin,{rule:u,type:"begin"})),o.terminatorEnd&&i.addRule(o.terminatorEnd,{type:"end"}),o.illegal&&i.addRule(o.illegal,{type:"illegal"}),i}function p(o,i){const u=o;if(o.isCompiled)return u;[dt,Et,Mt,Nt].forEach(S=>S(o,i)),e.compilerExtensions.forEach(S=>S(o,i)),o.__beforeBegin=null,[pt,bt,_t].forEach(S=>S(o,i)),o.isCompiled=!0;let _=null;return typeof o.keywords=="object"&&o.keywords.$pattern&&(o.keywords=Object.assign({},o.keywords),_=o.keywords.$pattern,delete o.keywords.$pattern),_=_||/\w+/,o.keywords&&(o.keywords=Qe(o.keywords,e.case_insensitive)),u.keywordPatternRe=n(_,!0),i&&(o.begin||(o.begin=/\B|\b/),u.beginRe=n(u.begin),!o.end&&!o.endsWithParent&&(o.end=/\B|\b/),o.end&&(u.endRe=n(u.end)),u.terminatorEnd=te(u.end)||"",o.endsWithParent&&i.terminatorEnd&&(u.terminatorEnd+=(o.end?"|":"")+i.terminatorEnd)),o.illegal&&(u.illegalRe=n(o.illegal)),o.contains||(o.contains=[]),o.contains=[].concat(...o.contains.map(function(S){return Tt(S==="self"?o:S)})),o.contains.forEach(function(S){p(S,u)}),o.starts&&p(o.starts,i),u.matcher=d(u),u}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=F(e.classNameAliases||{}),p(e)}function nn(e){return e?e.endsWithParent||nn(e.starts):!1}function Tt(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(n){return F(e,{variants:null},n)})),e.cachedVariants?e.cachedVariants:nn(e)?F(e,{starts:e.starts?F(e.starts):null}):Object.isFrozen(e)?F(e):e}var Ct="11.10.0";class vt extends Error{constructor(n,t){super(n),this.name="HTMLInjectionError",this.html=t}}const ye=Ke,He=F,Ue=Symbol("nomatch"),It=7,tn=function(e){const n=Object.create(null),t=Object.create(null),a=[];let d=!0;const p="Could not find the language '{}', did you forget to load/include a language module?",o={disableAutodetect:!0,name:"Plain text",contains:[]};let i={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:Gn};function u(s){return i.noHighlightRe.test(s)}function _(s){let c=s.className+" ";c+=s.parentNode?s.parentNode.className:"";const g=i.languageDetectRe.exec(c);if(g){const E=k(g[1]);return E||(Pe(p.replace("{}",g[1])),Pe("Falling back to no-highlight mode for this block.",s)),E?g[1]:"no-highlight"}return c.split(/\s+/).find(E=>u(E)||k(E))}function S(s,c,g){let E="",w="";typeof c=="object"?(E=s,g=c.ignoreIllegals,w=c.language):(q("10.7.0","highlight(lang, code, ...args) has been deprecated."),q("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),w=s,E=c),g===void 0&&(g=!0);const T={code:E,language:w};J("before:highlight",T);const $=T.result?T.result:v(T.language,T.code,g);return $.code=T.code,J("after:highlight",$),$}function v(s,c,g,E){const w=Object.create(null);function T(r,l){return r.keywords[l]}function $(){if(!f.keywords){M.addText(y);return}let r=0;f.keywordPatternRe.lastIndex=0;let l=f.keywordPatternRe.exec(y),h="";for(;l;){h+=y.substring(r,l.index);const N=j.case_insensitive?l[0].toLowerCase():l[0],O=T(f,N);if(O){const[U,bn]=O;if(M.addText(h),h="",w[N]=(w[N]||0)+1,w[N]<=It&&(ae+=bn),U.startsWith("_"))h+=l[0];else{const En=j.classNameAliases[U]||U;D(l[0],En)}}else h+=l[0];r=f.keywordPatternRe.lastIndex,l=f.keywordPatternRe.exec(y)}h+=y.substring(r),M.addText(h)}function re(){if(y==="")return;let r=null;if(typeof f.subLanguage=="string"){if(!n[f.subLanguage]){M.addText(y);return}r=v(f.subLanguage,y,!0,Ce[f.subLanguage]),Ce[f.subLanguage]=r._top}else r=b(y,f.subLanguage.length?f.subLanguage:null);f.relevance>0&&(ae+=r.relevance),M.__addSublanguage(r._emitter,r.language)}function I(){f.subLanguage!=null?re():$(),y=""}function D(r,l){r!==""&&(M.startScope(l),M.addText(r),M.endScope())}function xe(r,l){let h=1;const N=l.length-1;for(;h<=N;){if(!r._emit[h]){h++;continue}const O=j.classNameAliases[r[h]]||r[h],U=l[h];O?D(U,O):(y=U,$(),y=""),h++}}function Me(r,l){return r.scope&&typeof r.scope=="string"&&M.openNode(j.classNameAliases[r.scope]||r.scope),r.beginScope&&(r.beginScope._wrap?(D(y,j.classNameAliases[r.beginScope._wrap]||r.beginScope._wrap),y=""):r.beginScope._multi&&(xe(r.beginScope,l),y="")),f=Object.create(r,{parent:{value:f}}),f}function Oe(r,l,h){let N=Xn(r.endRe,h);if(N){if(r["on:end"]){const O=new $e(r);r["on:end"](l,O),O.isMatchIgnored&&(N=!1)}if(N){for(;r.endsParent&&r.parent;)r=r.parent;return r}}if(r.endsWithParent)return Oe(r.parent,l,h)}function fn(r){return f.matcher.regexIndex===0?(y+=r[0],1):(_e=!0,0)}function gn(r){const l=r[0],h=r.rule,N=new $e(h),O=[h.__beforeBegin,h["on:begin"]];for(const U of O)if(U&&(U(r,N),N.isMatchIgnored))return fn(l);return h.skip?y+=l:(h.excludeBegin&&(y+=l),I(),!h.returnBegin&&!h.excludeBegin&&(y=l)),Me(h,r),h.returnBegin?0:l.length}function hn(r){const l=r[0],h=c.substring(r.index),N=Oe(f,r,h);if(!N)return Ue;const O=f;f.endScope&&f.endScope._wrap?(I(),D(l,f.endScope._wrap)):f.endScope&&f.endScope._multi?(I(),xe(f.endScope,r)):O.skip?y+=l:(O.returnEnd||O.excludeEnd||(y+=l),I(),O.excludeEnd&&(y=l));do f.scope&&M.closeNode(),!f.skip&&!f.subLanguage&&(ae+=f.relevance),f=f.parent;while(f!==N.parent);return N.starts&&Me(N.starts,r),O.returnEnd?0:l.length}function dn(){const r=[];for(let l=f;l!==j;l=l.parent)l.scope&&r.unshift(l.scope);r.forEach(l=>M.openNode(l))}let oe={};function Te(r,l){const h=l&&l[0];if(y+=r,h==null)return I(),0;if(oe.type==="begin"&&l.type==="end"&&oe.index===l.index&&h===""){if(y+=c.slice(l.index,l.index+1),!d){const N=new Error(`0 width match regex (${s})`);throw N.languageName=s,N.badRule=oe.rule,N}return 1}if(oe=l,l.type==="begin")return gn(l);if(l.type==="illegal"&&!g){const N=new Error('Illegal lexeme "'+h+'" for mode "'+(f.scope||"<unnamed>")+'"');throw N.mode=f,N}else if(l.type==="end"){const N=hn(l);if(N!==Ue)return N}if(l.type==="illegal"&&h==="")return 1;if(Ee>1e5&&Ee>l.index*3)throw new Error("potential infinite loop, way more iterations than matches");return y+=h,h.length}const j=k(s);if(!j)throw W(p.replace("{}",s)),new Error('Unknown language: "'+s+'"');const pn=Ot(j);let be="",f=E||pn;const Ce={},M=new i.__emitter(i);dn();let y="",ae=0,G=0,Ee=0,_e=!1;try{if(j.__emitTokens)j.__emitTokens(c,M);else{for(f.matcher.considerAll();;){Ee++,_e?_e=!1:f.matcher.considerAll(),f.matcher.lastIndex=G;const r=f.matcher.exec(c);if(!r)break;const l=c.substring(G,r.index),h=Te(l,r);G=r.index+h}Te(c.substring(G))}return M.finalize(),be=M.toHTML(),{language:s,value:be,relevance:ae,illegal:!1,_emitter:M,_top:f}}catch(r){if(r.message&&r.message.includes("Illegal"))return{language:s,value:ye(c),illegal:!0,relevance:0,_illegalBy:{message:r.message,index:G,context:c.slice(G-100,G+100),mode:r.mode,resultSoFar:be},_emitter:M};if(d)return{language:s,value:ye(c),illegal:!1,relevance:0,errorRaised:r,_emitter:M,_top:f};throw r}}function m(s){const c={value:ye(s),illegal:!1,relevance:0,_top:o,_emitter:new i.__emitter(i)};return c._emitter.addText(s),c}function b(s,c){c=c||i.languages||Object.keys(n);const g=m(s),E=c.filter(k).filter(Y).map(I=>v(I,s,!1));E.unshift(g);const w=E.sort((I,D)=>{if(I.relevance!==D.relevance)return D.relevance-I.relevance;if(I.language&&D.language){if(k(I.language).supersetOf===D.language)return 1;if(k(D.language).supersetOf===I.language)return-1}return 0}),[T,$]=w,re=T;return re.secondBest=$,re}function A(s,c,g){const E=c&&t[c]||g;s.classList.add("hljs"),s.classList.add(`language-${E}`)}function R(s){let c=null;const g=_(s);if(u(g))return;if(J("before:highlightElement",{el:s,language:g}),s.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",s);return}if(s.children.length>0&&(i.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(s)),i.throwUnescapedHTML))throw new vt("One of your code blocks includes unescaped HTML.",s.innerHTML);c=s;const E=c.textContent,w=g?S(E,{language:g,ignoreIllegals:!0}):b(E);s.innerHTML=w.value,s.dataset.highlighted="yes",A(s,g,w.language),s.result={language:w.language,re:w.relevance,relevance:w.relevance},w.secondBest&&(s.secondBest={language:w.secondBest.language,relevance:w.secondBest.relevance}),J("after:highlightElement",{el:s,result:w,text:E})}function x(s){i=He(i,s)}const C=()=>{P(),q("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function B(){P(),q("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let L=!1;function P(){if(document.readyState==="loading"){L=!0;return}document.querySelectorAll(i.cssSelector).forEach(R)}function z(){L&&P()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",z,!1);function H(s,c){let g=null;try{g=c(e)}catch(E){if(W("Language definition for '{}' could not be registered.".replace("{}",s)),d)W(E);else throw E;g=o}g.name||(g.name=s),n[s]=g,g.rawDefinition=c.bind(null,e),g.aliases&&X(g.aliases,{languageName:s})}function ee(s){delete n[s];for(const c of Object.keys(t))t[c]===s&&delete t[c]}function Z(){return Object.keys(n)}function k(s){return s=(s||"").toLowerCase(),n[s]||n[t[s]]}function X(s,{languageName:c}){typeof s=="string"&&(s=[s]),s.forEach(g=>{t[g.toLowerCase()]=c})}function Y(s){const c=k(s);return c&&!c.disableAutodetect}function V(s){s["before:highlightBlock"]&&!s["before:highlightElement"]&&(s["before:highlightElement"]=c=>{s["before:highlightBlock"](Object.assign({block:c.el},c))}),s["after:highlightBlock"]&&!s["after:highlightElement"]&&(s["after:highlightElement"]=c=>{s["after:highlightBlock"](Object.assign({block:c.el},c))})}function de(s){V(s),a.push(s)}function pe(s){const c=a.indexOf(s);c!==-1&&a.splice(c,1)}function J(s,c){const g=s;a.forEach(function(E){E[g]&&E[g](c)})}function ie(s){return q("10.7.0","highlightBlock will be removed entirely in v12.0"),q("10.7.0","Please use highlightElement now."),R(s)}Object.assign(e,{highlight:S,highlightAuto:b,highlightAll:P,highlightElement:R,highlightBlock:ie,configure:x,initHighlighting:C,initHighlightingOnLoad:B,registerLanguage:H,unregisterLanguage:ee,listLanguages:Z,getLanguage:k,registerAliases:X,autoDetection:Y,inherit:He,addPlugin:de,removePlugin:pe}),e.debugMode=function(){d=!1},e.safeMode=function(){d=!0},e.versionString=Ct,e.regex={concat:K,lookahead:Ze,either:Re,optional:Kn,anyNumberOfTimes:Wn};for(const s in ue)typeof ue[s]=="object"&&We(ue[s]);return Object.assign(e,ue),e},Q=tn({});Q.newInstance=()=>tn({});var kt=Q;Q.HighlightJS=Q;Q.default=Q;const Fe=Hn(kt),ge="[A-Za-z$_][0-9A-Za-z$_]*",sn=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],rn=["true","false","null","undefined","NaN","Infinity"],on=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],an=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],cn=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],ln=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],un=[].concat(cn,on,an);function Lt(e){const n=e.regex,t=(c,{after:g})=>{const E="</"+c[0].slice(1);return c.input.indexOf(E,g)!==-1},a=ge,d={begin:"<>",end:"</>"},p=/<[A-Za-z0-9\\._:-]+\s*\/>/,o={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(c,g)=>{const E=c[0].length+c.index,w=c.input[E];if(w==="<"||w===","){g.ignoreMatch();return}w===">"&&(t(c,{after:E})||g.ignoreMatch());let T;const $=c.input.substring(E);if(T=$.match(/^\s*=/)){g.ignoreMatch();return}if((T=$.match(/^\s+extends\s+/))&&T.index===0){g.ignoreMatch();return}}},i={$pattern:ge,keyword:sn,literal:rn,built_in:un,"variable.language":ln},u="[0-9](_?[0-9])*",_=`\\.(${u})`,S="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",v={className:"number",variants:[{begin:`(\\b(${S})((${_})|\\.)?|(${_}))[eE][+-]?(${u})\\b`},{begin:`\\b(${S})\\b((${_})\\b|\\.)?|(${_})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},m={className:"subst",begin:"\\$\\{",end:"\\}",keywords:i,contains:[]},b={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,m],subLanguage:"xml"}},A={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,m],subLanguage:"css"}},R={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,m],subLanguage:"graphql"}},x={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,m]},B={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:a+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},L=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,b,A,R,x,{match:/\$\d+/},v];m.contains=L.concat({begin:/\{/,end:/\}/,keywords:i,contains:["self"].concat(L)});const P=[].concat(B,m.contains),z=P.concat([{begin:/(\s*)\(/,end:/\)/,keywords:i,contains:["self"].concat(P)}]),H={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:z},ee={variants:[{match:[/class/,/\s+/,a,/\s+/,/extends/,/\s+/,n.concat(a,"(",n.concat(/\./,a),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,a],scope:{1:"keyword",3:"title.class"}}]},Z={relevance:0,match:n.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...on,...an]}},k={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},X={variants:[{match:[/function/,/\s+/,a,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[H],illegal:/%/},Y={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function V(c){return n.concat("(?!",c.join("|"),")")}const de={match:n.concat(/\b/,V([...cn,"super","import"].map(c=>`${c}\\s*\\(`)),a,n.lookahead(/\s*\(/)),className:"title.function",relevance:0},pe={begin:n.concat(/\./,n.lookahead(n.concat(a,/(?![0-9A-Za-z$_(])/))),end:a,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},J={match:[/get|set/,/\s+/,a,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},H]},ie="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",s={match:[/const|var|let/,/\s+/,a,/\s*/,/=\s*/,/(async\s*)?/,n.lookahead(ie)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[H]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:i,exports:{PARAMS_CONTAINS:z,CLASS_REFERENCE:Z},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),k,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,b,A,R,x,B,{match:/\$\d+/},v,Z,{className:"attr",begin:a+n.lookahead(":"),relevance:0},s,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[B,e.REGEXP_MODE,{className:"function",begin:ie,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:z}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:d.begin,end:d.end},{match:p},{begin:o.begin,"on:begin":o.isTrulyOpeningTag,end:o.end}],subLanguage:"xml",contains:[{begin:o.begin,end:o.end,skip:!0,contains:["self"]}]}]},X,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[H,e.inherit(e.TITLE_MODE,{begin:a,className:"title.function"})]},{match:/\.\.\./,relevance:0},pe,{match:"\\$"+a,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[H]},de,Y,ee,J,{match:/\$[(.]/}]}}function $t(e){const n=Lt(e),t=ge,a=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],d={begin:[/namespace/,/\s+/,e.IDENT_RE],beginScope:{1:"keyword",3:"title.class"}},p={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:a},contains:[n.exports.CLASS_REFERENCE]},o={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},i=["type","interface","public","private","protected","implements","declare","abstract","readonly","enum","override","satisfies"],u={$pattern:ge,keyword:sn.concat(i),literal:rn,built_in:un.concat(a),"variable.language":ln},_={className:"meta",begin:"@"+t},S=(b,A,R)=>{const x=b.contains.findIndex(C=>C.label===A);if(x===-1)throw new Error("can not find mode to replace");b.contains.splice(x,1,R)};Object.assign(n.keywords,u),n.exports.PARAMS_CONTAINS.push(_);const v=n.contains.find(b=>b.className==="attr");n.exports.PARAMS_CONTAINS.push([n.exports.CLASS_REFERENCE,v]),n.contains=n.contains.concat([_,d,p]),S(n,"shebang",e.SHEBANG()),S(n,"use_strict",o);const m=n.contains.find(b=>b.label==="func.def");return m.relevance=0,Object.assign(n,{name:"TypeScript",aliases:["ts","tsx","mts","cts"]}),n}const Bt=Cn('<h1>第一篇文章</h1><h2>关于本站</h2><p>一直没有满意的写文章的地方，所有应用都有些无法满足要求的点，不如自己写一个~</p><h2>实现</h2><p>使用 vue3 + vite + naive-ui 做前端开发。</p><p>访客计数：<a target="_blank" href="https://busuanzi.ibruce.info/">不蒜子</a></p><h2>开发中遇到的问题</h2><h3>打包发布到 github.io 的文件无法加载</h3><p>问题原因：打包后生成的文件名以下划线开头，无法返回。</p><p>解决方案：修改 <b>vite.config.ts</b></p>',10),Dt=ze({__name:"articleFirst",setup(e){return Fe.registerLanguage("typescript",$t),(n,t)=>(vn(),Mn(Tn,null,[Bt,Se(le(Ln),{hljs:le(Fe)},{default:On(()=>[Se(le(Le),{language:"typescript",code:`
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
`}),In(" 解决发布缓存问题——增加唯一标识，如时间戳 "),Se(le(Le),{language:"typescript",code:`
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
`})]),_:1},8,["hljs"])],64))}});kn(Dt).mount("#app");