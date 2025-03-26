// 添加水墨效果
document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container');
    for (let i = 0; i < 5; i++) {
        const ink = document.createElement('div');
        ink.className = 'ink-wash';
        ink.style.left = Math.random() * 100 + '%';
        ink.style.top = Math.random() * 100 + '%';
        container.appendChild(ink);
    }

    // 设置样式修复
    fixAdvancedSearchStyle();
});

// 修复高级搜索样式
function fixAdvancedSearchStyle() {
    // 确保高级搜索按钮样式正确
    const searchBtn = document.querySelector('.btn-search');
    if (searchBtn) {
        searchBtn.style.display = 'none'; // 初始隐藏
    }

    // 确保高级搜索容器初始化正确
    const advancedSearch = document.getElementById('advanced-search');
    if (advancedSearch) {
        // 初始时隐藏高级搜索
        advancedSearch.style.display = 'none';
    }

    // 初始化搜索模式
    if (window.switchSearchMode) {
        window.switchSearchMode('simple');
    }
}

// 加载所有组件
function loadComponents() {
    // 每个组件将通过自己的JS文件初始化
    // 这些文件在index.html中已经引入
} 