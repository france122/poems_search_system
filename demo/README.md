# 古诗文检索系统 - 前端文档

## 项目概述

古诗文检索系统前端实现，含首页检索、AI诗文助手、个人页面及诗文详情模块。


## 核心功能

### 1. 检索功能
- **简单检索**：单一输入框，支持关键词与快速标签搜索
- **高级检索**：多维度条件（诗人、题名、朝代等），支持情感强度控制

### 2. AI 诗文助手
- 基于千问API的聊天界面，提供诗歌问答与创作功能

## 后端对接指南

### 搜索接口
- **简单搜索**：`/api/poems/search?query=关键词`（GET）
- **高级搜索**：`/api/poems/advanced-search`（支持多参数）

### AI助手接口
- 当前：前端直接调用千问API
- 建议：通过后端代理 `/api/chat`（POST）

### 每日诗词接口
- `/api/daily-poem`：返回每日诗词内容


## 目录结构

```
/
├── html/                  # HTML 页面
│   ├── index.html         # 首页（检索页面）
│   ├── chat.html          # AI 诗文助手页面
│   ├── self.html          # 个人页面
│   └── poem_detail.html   # 诗文详情页
│
├── css/                   # 样式文件
│   ├── main.css           # 全局通用样式
│   ├── chat.css           # 聊天页面样式
│   ├── search-common.css  # 搜索相关通用样式
│   ├── daily-poem.css     # 每日诗词样式
│   ├── advanced-search.css  # 高级搜索样式
│   ├── simple-search.css  # 简单搜索样式
│   └── search-mode-toggle.css  # 搜索模式切换样式
│
├── js/                    # JavaScript 文件
│   ├── main.js            # 主要脚本和初始化
│   ├── search.js          # 搜索相关功能
│   ├── chat.js            # 聊天功能
│   └── config.js          # API 配置文件
│
└── components/            # 组件模块
    ├── daily-poem.js      # 每日诗词组件
    ├── search-mode-toggle.js  # 搜索模式切换组件
    ├── simple-search.js   # 简单搜索组件
    └── advanced-search.js # 高级搜索组件
```

## 部署说明
1. 部署至Web服务器根目录
2. 修改`js/config.js`中的API密钥
3. 建议使用后端代理调用AI API

## 浏览器兼容性
支持Chrome 60+、Firefox 55+、Safari 11+、Edge 79+