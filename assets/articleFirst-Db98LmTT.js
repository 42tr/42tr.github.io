import{d as te,c as ae,a as se,u as _,x as F,A as l,B as S,y as P,F as oe,o as re,C as ce}from"./main-runtime-dom.esm-bundler-IbOHq_ji.js";import{H as C,y as ie,N as w}from"./main-yaml-Cr1ptcLL.js";import{N as U}from"./main-ConfigProvider-C4xbhFXS.js";import"./main-light-CL6ZWbmk.js";const I="[A-Za-z$_][0-9A-Za-z$_]*",$=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],G=["true","false","null","undefined","NaN","Infinity"],Z=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],z=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],H=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],K=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],Y=[].concat(H,Z,z);function le(n){const a=n.regex,e=(s,{after:d})=>{const A="</"+s[0].slice(1);return s.input.indexOf(A,d)!==-1},t=I,E={begin:"<>",end:"</>"},O=/<[A-Za-z0-9\\._:-]+\s*\/>/,i={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(s,d)=>{const A=s[0].length+s.index,R=s.input[A];if(R==="<"||R===","){d.ignoreMatch();return}R===">"&&(e(s,{after:A})||d.ignoreMatch());let x;const D=s.input.substring(A);if(x=D.match(/^\s*=/)){d.ignoreMatch();return}if((x=D.match(/^\s+extends\s+/))&&x.index===0){d.ignoreMatch();return}}},c={$pattern:I,keyword:$,literal:G,built_in:Y,"variable.language":K},f="[0-9](_?[0-9])*",u=`\\.(${f})`,b="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",m={className:"number",variants:[{begin:`(\\b(${b})((${u})|\\.)?|(${u}))[eE][+-]?(${f})\\b`},{begin:`\\b(${b})\\b((${u})\\b|\\.)?|(${u})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},o={className:"subst",begin:"\\$\\{",end:"\\}",keywords:c,contains:[]},p={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,o],subLanguage:"xml"}},T={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,o],subLanguage:"css"}},r={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,o],subLanguage:"graphql"}},y={className:"string",begin:"`",end:"`",contains:[n.BACKSLASH_ESCAPE,o]},g={className:"comment",variants:[n.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:t+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),n.C_BLOCK_COMMENT_MODE,n.C_LINE_COMMENT_MODE]},h=[n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,p,T,r,y,{match:/\$\d+/},m];o.contains=h.concat({begin:/\{/,end:/\}/,keywords:c,contains:["self"].concat(h)});const k=[].concat(g,o.contains),v=k.concat([{begin:/(\s*)\(/,end:/\)/,keywords:c,contains:["self"].concat(k)}]),N={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:c,contains:v},V={variants:[{match:[/class/,/\s+/,t,/\s+/,/extends/,/\s+/,a.concat(t,"(",a.concat(/\./,t),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,t],scope:{1:"keyword",3:"title.class"}}]},L={relevance:0,match:a.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Z,...z]}},J={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},W={variants:[{match:[/function/,/\s+/,t,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[N],illegal:/%/},X={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function q(s){return a.concat("(?!",s.join("|"),")")}const Q={match:a.concat(/\b/,q([...H,"super","import"].map(s=>`${s}\\s*\\(`)),t,a.lookahead(/\s*\(/)),className:"title.function",relevance:0},j={begin:a.concat(/\./,a.lookahead(a.concat(t,/(?![0-9A-Za-z$_(])/))),end:t,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},ee={match:[/get|set/,/\s+/,t,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},N]},B="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+n.UNDERSCORE_IDENT_RE+")\\s*=>",ne={match:[/const|var|let/,/\s+/,t,/\s*/,/=\s*/,/(async\s*)?/,a.lookahead(B)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[N]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:c,exports:{PARAMS_CONTAINS:v,CLASS_REFERENCE:L},illegal:/#(?![$_A-z])/,contains:[n.SHEBANG({label:"shebang",binary:"node",relevance:5}),J,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,p,T,r,y,g,{match:/\$\d+/},m,L,{scope:"attr",match:t+a.lookahead(":"),relevance:0},ne,{begin:"("+n.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[g,n.REGEXP_MODE,{className:"function",begin:B,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:c,contains:v}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:E.begin,end:E.end},{match:O},{begin:i.begin,"on:begin":i.isTrulyOpeningTag,end:i.end}],subLanguage:"xml",contains:[{begin:i.begin,end:i.end,skip:!0,contains:["self"]}]}]},W,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+n.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[N,n.inherit(n.TITLE_MODE,{begin:t,className:"title.function"})]},{match:/\.\.\./,relevance:0},j,{match:"\\$"+t,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[N]},Q,X,V,ee,{match:/\$[(.]/}]}}function ue(n){const a=n.regex,e=le(n),t=I,E=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],O={begin:[/namespace/,/\s+/,n.IDENT_RE],beginScope:{1:"keyword",3:"title.class"}},i={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:E},contains:[e.exports.CLASS_REFERENCE]},c={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},f=["type","interface","public","private","protected","implements","declare","abstract","readonly","enum","override","satisfies"],u={$pattern:I,keyword:$.concat(f),literal:G,built_in:Y.concat(E),"variable.language":K},b={className:"meta",begin:"@"+t},m=(r,y,M)=>{const g=r.contains.findIndex(h=>h.label===y);if(g===-1)throw new Error("can not find mode to replace");r.contains.splice(g,1,M)};Object.assign(e.keywords,u),e.exports.PARAMS_CONTAINS.push(b);const o=e.contains.find(r=>r.scope==="attr"),p=Object.assign({},o,{match:a.concat(t,a.lookahead(/\s*\?:/))});e.exports.PARAMS_CONTAINS.push([e.exports.CLASS_REFERENCE,o,p]),e.contains=e.contains.concat([b,O,i,p]),m(e,"shebang",n.SHEBANG()),m(e,"use_strict",c);const T=e.contains.find(r=>r.label==="func.def");return T.relevance=0,Object.assign(e,{name:"TypeScript",aliases:["ts","tsx","mts","cts"]}),e}const ge=te({__name:"articleFirst",setup(n){return C.registerLanguage("typescript",ue),C.registerLanguage("yaml",ie),(a,e)=>(re(),ae(oe,null,[e[1]||(e[1]=se('<h1>小破站的第一篇文章</h1><h2>关于本站</h2><p>一直没有满意的写文章的地方，所有应用都有些无法满足要求的点，不如自己写一个~</p><h2>实现</h2><h3>前端框架</h3><p>vue3 + vite + naive-ui</p><h3>访客计数</h3><p>使用 <a target="_blank" href="https://busuanzi.ibruce.info/">不蒜子</a></p><p style="color:red;">问题：访问子页的流量未统计。</p><h3>允许被搜索引擎爬取</h3><p>根目录设置 robots.txt</p><p>google：判断是否被索引：搜索 site:42tr.github.io，未被索引会提示使用 <a href="https://search.google.com/search-console?resource_id=https%3A%2F%2F42tr.github.io%2F" target="_blank">google search consoloe</a>，验证网站所有权，添加站点地图 <a href="https://42tr.github.io/sitemap.xml">sitemap.xml</a>，完成后过一天再看。</p><h3>Github Actions 自动部署</h3><p>生成一个 <a href="https://github.com/settings/tokens" target="_blank">Personal access token</a>，加入到该仓库的 new repository secret，Name 为 ACCESS_KEY，Value 为 token，在代码目录新建 .github/workflows/pages.yml，内容如下</p>',14)),_(l(U),{hljs:l(C)},{default:F(()=>[_(l(w),{language:"yaml",code:`
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
`})]),_:1},8,["hljs"]),e[2]||(e[2]=S("h2",null,"开发中遇到的问题",-1)),e[3]||(e[3]=S("h3",null,"打包发布到 github.io 的文件无法加载",-1)),e[4]||(e[4]=S("p",null,"问题原因：打包后生成的文件名以下划线开头，无法返回。",-1)),e[5]||(e[5]=S("p",null,[P("解决方案：修改 "),S("b",null,"vite.config.ts")],-1)),_(l(U),{hljs:l(C)},{default:F(()=>[_(l(w),{language:"typescript",code:`
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
`}),e[0]||(e[0]=P(" 解决发布缓存问题——增加唯一标识，如时间戳 ")),_(l(w),{language:"typescript",code:`
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
`})]),_:1},8,["hljs"])],64))}});ce(ge).mount("#app");
