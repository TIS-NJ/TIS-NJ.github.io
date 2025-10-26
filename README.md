# 可信智能软件团队网站

基于 Vite + React 构建的团队官方网站，通过 GitHub Pages 自动部署。

## 技术栈

- ⚡ [Vite](https://vitejs.dev/) - 下一代前端构建工具
- ⚛️ [React](https://reactjs.org/) - UI 框架
- 🎨 原生 CSS - 样式解决方案
- 🚀 GitHub Actions - 自动化部署

## 特性

- ✨ 现代化的设计风格
- 📱 完全响应式布局
- ⚡ 快速的开发体验
- 🚀 自动部署到 GitHub Pages
- 🎯 SEO 友好

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:3000

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 部署

### 自动部署

推送代码到 main 分支后，GitHub Actions 会自动构建并部署到 GitHub Pages。

### 手动部署

```bash
npm run deploy
```

## 项目结构

```
.
├── src/                    # 源代码目录
│   ├── components/         # React 组件
│   ├── pages/             # 页面组件
│   ├── App.jsx           # 主应用组件
│   ├── main.jsx          # 入口文件
│   └── index.css         # 全局样式
├── public/               # 静态资源
├── index.html           # HTML 模板
├── vite.config.js       # Vite 配置
├── package.json         # 项目配置
└── .github/workflows/   # GitHub Actions 配置
```

## 开发指南

### 添加新页面

1. 在 `src/pages/` 目录下创建新的页面组件
2. 在 `src/App.jsx` 中添加路由配置

### 修改样式

- 全局样式：编辑 `src/index.css`
- 组件样式：在对应组件文件中导入 CSS 文件

### 添加新组件

1. 在 `src/components/` 目录下创建组件
2. 在需要的地方导入并使用

## License

MIT
