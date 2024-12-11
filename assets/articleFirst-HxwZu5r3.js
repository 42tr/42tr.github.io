import{d as te,c as ae,b as se,y as p,z as F,B as u,a as N,e as P,F as oe,o as re,C as ie}from"./main-runtime-dom.esm-bundler-D_rBPd7M.js";import{H as h,y as ce,N as w}from"./main-yaml-DTbHbp5Y.js";import{N as U}from"./main-ConfigProvider-Dzc9BdjI.js";import"./main-light-DrXE_YRv.js";const C="[A-Za-z$_][0-9A-Za-z$_]*",$=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],G=["true","false","null","undefined","NaN","Infinity"],z=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Z=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],H=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],K=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],Y=[].concat(H,z,Z);function le(n){const e=n.regex,a=(s,{after:d})=>{const m="</"+s[0].slice(1);return s.input.indexOf(m,d)!==-1},t=C,A={begin:"<>",end:"</>"},R=/<[A-Za-z0-9\\._:-]+\s*\/>/,c={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(s,d)=>{const m=s[0].length+s.index,y=s.input[m];if(y==="<"||y===","){d.ignoreMatch();return}y===">"&&(a(s,{after:m})||d.ignoreMatch());let v;const D=s.input.substring(m);if(v=D.match(/^\s*=/)){d.ignoreMatch();return}if((v=D.match(/^\s+extends\s+/))&&v.index===0){d.ignoreMatch();return}}},r={$pattern:C,keyword:$,literal:G,built_in:Y,"variable.language":K},S="[0-9](_?[0-9])*",l=`\\.(${S})`,g="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",_={className:"number",variants:[{begin:`(\\b(${g})((${l})|\\.)?|(${l}))[eE][+-]?(${S})\\b`},{begin:`\\b(${g})\\b((${l})\\b|\\.)?|(${l})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},i={className:"subst",begin:"\\$\\{",end:"\\}",keywords:r,contains:[]},o={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,i],subLanguage:"xml"}},f={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,i],subLanguage:"css"}},T={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,i],subLanguage:"graphql"}},b={className:"string",begin:"`",end:"`",contains:[n.BACKSLASH_ESCAPE,i]},I={className:"comment",variants:[n.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:t+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),n.C_BLOCK_COMMENT_MODE,n.C_LINE_COMMENT_MODE]},M=[n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,o,f,T,b,{match:/\$\d+/},_];i.contains=M.concat({begin:/\{/,end:/\}/,keywords:r,contains:["self"].concat(M)});const k=[].concat(I,i.contains),O=k.concat([{begin:/(\s*)\(/,end:/\)/,keywords:r,contains:["self"].concat(k)}]),E={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:r,contains:O},V={variants:[{match:[/class/,/\s+/,t,/\s+/,/extends/,/\s+/,e.concat(t,"(",e.concat(/\./,t),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,t],scope:{1:"keyword",3:"title.class"}}]},L={relevance:0,match:e.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...z,...Z]}},J={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},W={variants:[{match:[/function/,/\s+/,t,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[E],illegal:/%/},X={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function q(s){return e.concat("(?!",s.join("|"),")")}const Q={match:e.concat(/\b/,q([...H,"super","import"].map(s=>`${s}\\s*\\(`)),t,e.lookahead(/\s*\(/)),className:"title.function",relevance:0},j={begin:e.concat(/\./,e.lookahead(e.concat(t,/(?![0-9A-Za-z$_(])/))),end:t,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},ee={match:[/get|set/,/\s+/,t,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},E]},B="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+n.UNDERSCORE_IDENT_RE+")\\s*=>",ne={match:[/const|var|let/,/\s+/,t,/\s*/,/=\s*/,/(async\s*)?/,e.lookahead(B)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[E]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:r,exports:{PARAMS_CONTAINS:O,CLASS_REFERENCE:L},illegal:/#(?![$_A-z])/,contains:[n.SHEBANG({label:"shebang",binary:"node",relevance:5}),J,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,o,f,T,b,I,{match:/\$\d+/},_,L,{className:"attr",begin:t+e.lookahead(":"),relevance:0},ne,{begin:"("+n.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[I,n.REGEXP_MODE,{className:"function",begin:B,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:r,contains:O}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:A.begin,end:A.end},{match:R},{begin:c.begin,"on:begin":c.isTrulyOpeningTag,end:c.end}],subLanguage:"xml",contains:[{begin:c.begin,end:c.end,skip:!0,contains:["self"]}]}]},W,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+n.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[E,n.inherit(n.TITLE_MODE,{begin:t,className:"title.function"})]},{match:/\.\.\./,relevance:0},j,{match:"\\$"+t,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[E]},Q,X,V,ee,{match:/\$[(.]/}]}}function ue(n){const e=le(n),a=C,t=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],A={begin:[/namespace/,/\s+/,n.IDENT_RE],beginScope:{1:"keyword",3:"title.class"}},R={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:t},contains:[e.exports.CLASS_REFERENCE]},c={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},r=["type","interface","public","private","protected","implements","declare","abstract","readonly","enum","override","satisfies"],S={$pattern:C,keyword:$.concat(r),literal:G,built_in:Y.concat(t),"variable.language":K},l={className:"meta",begin:"@"+a},g=(o,f,T)=>{const b=o.contains.findIndex(x=>x.label===f);if(b===-1)throw new Error("can not find mode to replace");o.contains.splice(b,1,T)};Object.assign(e.keywords,S),e.exports.PARAMS_CONTAINS.push(l);const _=e.contains.find(o=>o.className==="attr");e.exports.PARAMS_CONTAINS.push([e.exports.CLASS_REFERENCE,_]),e.contains=e.contains.concat([l,A,R]),g(e,"shebang",n.SHEBANG()),g(e,"use_strict",c);const i=e.contains.find(o=>o.label==="func.def");return i.relevance=0,Object.assign(e,{name:"TypeScript",aliases:["ts","tsx","mts","cts"]}),e}const de=te({__name:"articleFirst",setup(n){return h.registerLanguage("typescript",ue),h.registerLanguage("yaml",ce),(e,a)=>(re(),ae(oe,null,[a[1]||(a[1]=se('<h1>小破站的第一篇文章</h1><h2>关于本站</h2><p>一直没有满意的写文章的地方，所有应用都有些无法满足要求的点，不如自己写一个~</p><h2>实现</h2><h3>前端框架</h3><p>vue3 + vite + naive-ui</p><h3>访客计数</h3><p>使用 <a target="_blank" href="https://busuanzi.ibruce.info/">不蒜子</a></p><p style="color:red;">问题：访问子页的流量未统计。</p><h3>允许被搜索引擎爬取</h3><p>根目录设置 robots.txt</p><p>google：判断是否被索引：搜索 site:42tr.github.io，未被索引会提示使用 <a href="https://search.google.com/search-console?resource_id=https%3A%2F%2F42tr.github.io%2F" target="_blank">google search consoloe</a>，验证网站所有权，添加站点地图 <a href="https://42tr.github.io/sitemap.xml">sitemap.xml</a>，完成后过一天再看。</p><h3>Github Actions 自动部署</h3><p>生成一个 <a href="https://github.com/settings/tokens" target="_blank">Personal access token</a>，加入到该仓库的 new repository secret，Name 为 ACCESS_KEY，Value 为 token，在代码目录新建 .github/workflows/pages.yml，内容如下</p>',14)),p(u(U),{hljs:u(h)},{default:F(()=>[p(u(w),{language:"yaml",code:`
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
`})]),_:1},8,["hljs"]),a[2]||(a[2]=N("h2",null,"开发中遇到的问题",-1)),a[3]||(a[3]=N("h3",null,"打包发布到 github.io 的文件无法加载",-1)),a[4]||(a[4]=N("p",null,"问题原因：打包后生成的文件名以下划线开头，无法返回。",-1)),a[5]||(a[5]=N("p",null,[P("解决方案：修改 "),N("b",null,"vite.config.ts")],-1)),p(u(U),{hljs:u(h)},{default:F(()=>[p(u(w),{language:"typescript",code:`
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
`}),a[0]||(a[0]=P(" 解决发布缓存问题——增加唯一标识，如时间戳 ")),p(u(w),{language:"typescript",code:`
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
`})]),_:1},8,["hljs"])],64))}});ie(de).mount("#app");
