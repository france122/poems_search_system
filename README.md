# 诗歌检索系统

一个基于 Vue3 + Flask 的诗歌检索系统，支持多条件组合查询。

## 功能特点

- 关键词搜索（支持标题/内容）
- 作者搜索（支持直接输入）
- 朝代筛选（下拉选择）
- 类型筛选（下拉选择）
- 分页显示
- 重置功能

## 技术栈

### 前端
- Vue 3
- Element Plus
- Axios
- Vite

### 后端
- Flask
- Pandas
- Flask-CORS

## 运行方法

### 1. 后端设置
```bash
# 进入后端目录
cd backend

# 安装依赖
pip install -r requirements.txt

# 运行后端服务
python app.py
```

后端服务将运行在 http://localhost:5000

### 2. 前端设置
```bash
# 进入前端目录
cd frontend

# 安装依赖
npm install

# 运行开发服务器
npm run dev
```

前端服务将运行在 http://localhost:5173

## 项目结构

```
POEMS_SEARCH/
├── backend/
│   ├── data/
│   │   └── poems.csv       # 诗歌数据文件
│   ├── app.py               # 后端主程序
│   └── requirements.txt     # 后端依赖
│
└── frontend/
│    ├── src/
│    │   ├── components/
│    │   │   └── PoemSearch.vue  # 主要搜索组件
│    │   ├── App.vue
│    │   └── main.js
│    └── package.json
│── demo/
│    │── components/
│    ├── html/
│    ├── css/
│    ├── js/
│    └── README.md
```

## 注意事项

1. 运行要求
   - Python 3.7+
   - Node.js 14+
   - npm 6+

2. 数据文件
   - 确保 `poems.csv` 文件位于 `backend/data/` 目录下
   - CSV 文件需要包含以下字段：Title, Author, Dynasty, Type, Content 等

3. 运行顺序
   - 先启动后端服务
   - 再启动前端服务
   - 需要同时保持两个服务运行

4. 开发注意
   - 后端服务默认启用了 CORS，支持跨域请求
   - 前端开发服务器配置了 API 代理，指向后端服务

## 可能的问题和解决方案

1. 端口占用
   - 后端默认端口：5000
   - 前端默认端口：5173
   - 如果端口被占用，可以在配置文件中修改

2. 依赖安装问题
   - 建议使用虚拟环境安装 Python 依赖
   - Node.js 依赖建议使用 npm install 安装

## 后续优化方向

1. 功能扩展
   - 添加情感搜索功能
   - 支持更多的筛选条件
   - 添加诗歌详情、收藏页面

2. 性能优化
   - 优化搜索算法
   - 添加数据库支持

3. 用户体验
   - 进行计量分析
   - 添加知识图谱

## 贡献
欢迎提交https://github.com/france122/poems_search_system
