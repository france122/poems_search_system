// 搜索模式切换组件
(function () {
    const toggleContainer = document.getElementById('search-mode-toggle-container');
    if (!toggleContainer) return;

    // 初始化搜索模式切换
    function initToggle() {
        const html = `
            <div class="search-mode-toggle">
                <button id="simple-mode-btn" class="mode-btn active" onclick="switchSearchMode('simple')">
                    <span class="btn-text">简单检索</span>
                </button>
                <button id="advanced-mode-btn" class="mode-btn" onclick="switchSearchMode('advanced')">
                    <span class="btn-text">高级检索</span>
                </button>
            </div>
        `;

        toggleContainer.innerHTML = html;
    }

    // 初始化
    initToggle();

    // 添加全局切换函数
    window.switchSearchMode = function (mode) {
        if (mode === 'simple') {
            // 切换到简单模式
            document.getElementById('simple-search-container').style.display = 'block';
            document.getElementById('advanced-search-container').style.display = 'none';
            document.getElementById('simple-mode-btn').classList.add('active');
            document.getElementById('advanced-mode-btn').classList.remove('active');
            document.querySelector('.btn-search').style.display = 'none';
        } else {
            // 切换到高级模式
            document.getElementById('simple-search-container').style.display = 'none';
            document.getElementById('advanced-search-container').style.display = 'block';
            document.getElementById('simple-mode-btn').classList.remove('active');
            document.getElementById('advanced-mode-btn').classList.add('active');
            document.querySelector('.btn-search').style.display = 'block';

            // 确保高级搜索内容可见
            const advancedSearch = document.getElementById('advanced-search');
            if (advancedSearch) {
                advancedSearch.style.display = 'grid';
            }
        }
    };

    // 初始化时显示简单搜索模式
    document.addEventListener('DOMContentLoaded', function () {
        if (window.switchSearchMode) {
            window.switchSearchMode('simple');
        }
    });
})(); 