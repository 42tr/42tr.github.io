import{g as m,q as d,s as n,A as l,x as o,y as a,z as r,u as c,F as b,n as g,C as f}from"./main-runtime-dom.esm-bundler-DvsTE5oT.js";import{H as t,N as i}from"./main-core-DzhvHyZ2.js";import{y as h}from"./main-yaml-D1oVucqD.js";import{N as p}from"./main-ConfigProvider-ByNeYQkn.js";import"./main-light-kDW53RkP.js";import"./main-use-memo-Bx6NEx31.js";function y(s){return{name:"Dockerfile",aliases:["docker"],case_insensitive:!0,keywords:["from","maintainer","expose","env","arg","user","onbuild","stopsignal"],contains:[s.HASH_COMMENT_MODE,s.APOS_STRING_MODE,s.QUOTE_STRING_MODE,s.NUMBER_MODE,{beginKeywords:"run cmd entrypoint volume add copy workdir label healthcheck shell",starts:{end:/[^\\]$/,subLanguage:"bash"}}],illegal:"</"}}const E=m({__name:"x",setup(s){return t.registerLanguage("dockerfile",y),t.registerLanguage("yaml",h),(u,e)=>(g(),d(b,null,[e[0]||(e[0]=n("h1",null,"Email Assistant - X",-1)),e[1]||(e[1]=n("h2",null,"项目说明",-1)),e[2]||(e[2]=l(" 项目地址：")),e[3]||(e[3]=n("a",{href:"https://github.com/42tr/x",target:"_blank"},"https://github.com/42tr/x",-1)),e[4]||(e[4]=n("br",null,null,-1)),e[5]||(e[5]=l("该项目以 Rust 编写，用于将常用信息以邮件的方式发送给自己。 ")),e[6]||(e[6]=n("h2",null,"Auto deploy by Github Actions",-1)),e[7]||(e[7]=n("br",null,null,-1)),e[8]||(e[8]=l("部署环境: CentOS 8.2 ")),e[9]||(e[9]=n("br",null,null,-1)),e[10]||(e[10]=l("设置部署流： ")),o(r(p),{hljs:r(t)},{default:a(()=>[o(r(i),{language:"yaml",code:`
name: Rust CI and Deploy

on:
  push:
    branches:
      - main  # 监听 main 分支的推送

jobs:
  build-and-deploy:
    environment: 
      name: 42tr
    runs-on: ubuntu-latest

    steps:
    - name: Checkout repository
      uses: actions/checkout@v2

    - name: Set up Rust
      uses: actions-rs/toolchain@v1
      with:
        toolchain: stable
        override: true

    - name: Build project
      run: cargo build --release
    
    - name: copy file via ssh password
      uses: appleboy/scp-action@master
      with:
        host: \${{secrets.SERVER_HOST}}
        username: \${{ secrets.SERVER_USER }}
        password: \${{ secrets.SERVER_PASSWORD }}
        port: 22
        source: "target/release/x"
        target: "/home/x/"
      
    - name: copy file via ssh password
      uses: appleboy/scp-action@master
      with:
        host: \${{secrets.SERVER_HOST}}
        username: \${{ secrets.SERVER_USER }}
        password: \${{ secrets.SERVER_PASSWORD }}
        port: 22
        source: "Dockerfile"
        target: "/home/x/"

    - name: Deploy to CentOS server
      uses: appleboy/ssh-action@master
      with:
        host: \${{ secrets.SERVER_HOST }}
        username: \${{ secrets.SERVER_USER }}
        password: \${{ secrets.SERVER_PASSWORD }}
        port: 22
        script: |
          cd /home/x/
          mv target/release/x ./
          rm -rf target
          docker stop kex >> /dev/null 2>&1
          docker rm kex >> /dev/null 2>&1
          docker rmi x >> /dev/null 2>&1
          docker build -t x .
          docker run -d --restart unless-stopped -p 8080:8080 -e EMAIL_AUTHORIZE_CODE=\${{ secrets.EMAIL_AUTHORIZE_CODE }} --name=kex x ./x
`})]),_:1},8,["hljs"]),e[11]||(e[11]=c('<br>遇到的问题 <br>  <span style="color:red;">Q: ./x: error while loading shared libraries: libssl.so.3: cannot open shared object file: No such file or directory</span><br>A: install openssl from `https://openssl-library.org/source/` download ./config make make install <br>  <span style="color:red;">Q: error while carry out `./config` <br>``` Can&#39;t locate IPC/Cmd.pm in @INC (you may need to install the IPC::Cmd module) (@INC contains: /home/openssl-3.4.0/util/perl /usr/local/lib64/perl5 /usr/local/share/perl5 /usr/lib64/perl5/vendor_perl /usr/share/perl5/vendor_perl /usr/lib64/perl5 /usr/share/perl5 /home/openssl-3.4.0/external/perl/Text-Template-1.56/lib) at /home/openssl-3.4.0/util/perl/OpenSSL/config.pm line 19. BEGIN failed--compilation aborted at /home/openssl-3.4.0/util/perl/OpenSSL/config.pm line 19. Compilation failed in require at /home/openssl-3.4.0/Configure line 23. BEGIN failed--compilation aborted at /home/openssl-3.4.0/Configure line 23. ```</span><br>A: `yum install perl-IPC-Cmd` <br>  <span style="color:red;">Q: ``` Configuring OpenSSL version 3.4.0 for target linux-x86_64 Using os-specific seed configuration Created configdata.pm Running configdata.pm Can&#39;t locate Getopt/Long.pm in @INC (you may need to install the Getopt::Long module) (@INC contains: /usr/local/lib64/perl5 /usr/local/share/perl5 /usr/lib64/perl5/vendor_perl /usr/share/perl5/vendor_perl /usr/lib64/perl5 /usr/share/perl5) at configdata.pm line 34986. BEGIN failed--compilation aborted at configdata.pm line 34986. ```</span><br>A: `yum install perl-Getopt-Long` <br>  <span style="color:red;">Q: error while carry out `./make install` <br>``` Can&#39;t locate Pod/Html.pm in @INC (you may need to install the Pod::Html module) ```</span><br>A: `yum install perl-Pod-Html` <br>  <span style="color:red;">Q: error while carry out `./make` <br>``` Can&#39;t locate Data/Dumper.pm in @INC (@INC contains: Configurations . /home/openssl-3.4.0/util/../Configurations /home/openssl-3.4.0/util/perl /home/openssl-3.4.0/Configurations /usr/local/lib64/perl5 /usr/local/share/perl5 /usr/lib64/perl5/vendor_perl /usr/share/perl5/vendor_perl /usr/lib64/perl5 /usr/share/perl5 /home/openssl-3.4.0/external/perl/Text-Template-1.56/lib /home/openssl-3.4.0/util/../external/perl/Text-Template-1.56/lib) at exporters/cmake/OpenSSLConfig.cmake.in line 5. ```</span><br>A: `yum install perl-Data-Dumper` ln -sf /home/openssl-3.4.0/libssl.so.3 /usr/lib64/libssl.so.3 ln -sf /home/openssl-3.4.0/libcrypto.so.3 /usr/lib64/libcrypto.so.3 <br><br> 改用 docker，Dockerfile 如下 ',30)),o(r(p),{hljs:r(t)},{default:a(()=>[o(r(i),{language:"dockerfile",code:`
FROM ubuntu
RUN apt-get update && apt-get install -y ca-certificates
COPY ./x /tmp/x
WORKDIR /tmp/
RUN chmod +x x
`})]),_:1},8,["hljs"]),e[12]||(e[12]=l(" 旧版本的 ubuntu 也会有 openssl 问题，由于 docker 现在使用不方便，服务器改用 ubuntu 新版本。对依赖 openssl 的库，使用 rustls-tls 特性，可以去除对 openssl 的依赖。但是 native-tls 也会依赖 openssl，使用 cargo tree 查看项目中是否仍有 openssl 或 native-tls 相关的依赖。 "))],64))}});f(E).mount("#app");
