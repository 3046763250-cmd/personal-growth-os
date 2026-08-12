# 刘映杰 · Personal Growth OS

面向招聘与长期自我记录的静态个人网站。技术栈为 Astro + TypeScript + 原生 CSS/SVG；所有示例数据均明确标识。

## How to run

安装 Node.js 20+，运行 `pnpm install`，再运行 `pnpm dev`。生产构建为 `pnpm build`，输出在 `dist/`。

## How to update data

个人信息在 `src/data/profile.json`；学习、健身、篮球数据在 `src/data/growth.json`；项目在 `src/data/projects.json`。修改后页面会自动同步。

## How to add a project

在 `projects.json` 数组追加同结构对象。不要省略 Problem、Goal、Role、Tools、Result、Learned。

## How to add fitness, exam, basketball data

参见 `DATA_GUIDE.md`。真实数据上线前删除对应 `Example data` 标记。

## How to add images

压缩为 WebP/AVIF 后放入 `public/images/`，在页面使用 `/images/name.webp` 并填写有意义的 alt。

## How to deploy

推荐 Cloudflare Pages：连接 GitHub 仓库，构建命令 `pnpm build`，输出目录 `dist`。也可用 GitHub Pages 或 Vercel。提交后自动构建。

## How to change domain

把 `astro.config.mjs` 的 `site` 与 `public/robots.txt` 的 Sitemap 域名替换为正式 HTTPS 域名，再在部署平台绑定域名。

## How SEO works

Base layout 统一生成 title、description、canonical、Open Graph、Twitter Card 与 Person JSON-LD；Astro sitemap 插件生成 sitemap，`public/robots.txt` 允许抓取。正式上线前必须替换 `example.com`。
