# 我的个人网站

基于 VuePress 2 + Theme Hope 构建的静态个人网站。

## 技术栈

- [VuePress 2](https://vuepress.vuejs.org/) - 静态网站生成器
- [VuePress Theme Hope](https://theme-hope.vuejs.press/) - 主题
- GitHub Pages - 托管

## 目录结构

```
.
├── docs/
│   ├── .vuepress/
│   │   └── config.ts          # 站点配置
│   └── src/                   # 内容目录
│       ├── README.md          # 首页
│       ├── products.md        # 产品页
│       ├── membership.md      # 会员页
│       ├── article.md         # 文章列表
│       ├── series.md          # 专栏
│       ├── oss.md             # 开源项目
│       ├── about.md           # 关于
│       └── blog/
│           ├── longform.md    # 长文
│           └── x.md          # 短帖
├── .github/workflows/
│   └── deploy.yml             # GitHub Actions 自动部署
└── package.json
```

## 本地开发

```bash
# 安装依赖
npm install --legacy-peer-deps

# 启动开发服务器
npm run docs:dev

# 构建
npm run docs:build
```

## 部署

推送到 GitHub `main` 分支后，GitHub Actions 会自动构建并部署到 GitHub Pages。

## 自定义

1. 修改 `docs/.vuepress/config.ts` 中的站点信息（标题、作者、导航等）
2. 修改 `docs/src/` 下的 Markdown 文件来更新内容
3. 如需自定义域名，在 `docs/.vuepress/public/` 下添加 `CNAME` 文件

## 许可证

MIT
