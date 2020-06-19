---
title: hexo
date: 2020-06-07 10:14:24
tags: [hexo, github]
cover: http://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/d788d43f8794a4c2ef38ecd70ff41bd5ad6e3936.jpg
---
## create steps
### create repository 
create a repository in github, name it `<user-name>.github.io`
### use nodejs
- install nodejs
- `npm install -g hexo`
- `hexo init`
### change settings
- modify `_config.yml`, change `deploy.repo` to your git repo
### hexo command
- `hexo s` `hexo server`
- `hexo g` `hexo generate`
- `hexo d` `hexo deploy`
- `hexo new [scaffolds] [title]`

## save your source
github only save your html, you can use branch to save you source.
### steps
#### new branch
create a new branch, example: `hexo`.
set it as the default branch.
#### push your code
push `scaffolds`, `source`, `themes`, `_config.yml`, `package.json` to your new branch.

## change theme
### steps
#### find theme
find themes in https://hexo.io/themes/
#### download theme to your project
download theme from github, example: https://github.com/miiiku/flex-block
unzip to your folder or directly clone to your folder: /themes
#### change settings
change `theme` to the name of new theme in `_config.yml`
#### command
```bash
hexo clean
hexo generate
```

## api
### site.data.links
it means `/source/_data/links.yml`

## problems
Q: show `extends includes/layout.pug block content include includes/recent-posts.pug include`
A: `npm install --save hexo-renderer-jade hexo-generator-feed hexo-generator-sitemap hexo-browsersync hexo-generator-archive`

Q: `Try running:'npm install hexo --save'`
A: `cnpm install`

Q: show `Cannot GET /tags/`
A: use command `hexo new page tags`, it will create `index.md` in `source/tags/`, change `type` to "tags", then you'll get it in chrome.