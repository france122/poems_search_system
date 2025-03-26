// 简单搜索组件
(function () {
    const simpleSearchContainer = document.getElementById('simple-search-container');
    if (!simpleSearchContainer) return;

    // 初始化简单搜索组件
    function initSimpleSearch() {
        const html = `
            <div id="simple-search" class="search-simple">
                <div class="search-input-container">
                    <div class="search-item-simple">
                        <input type="text" id="simple-query" placeholder="请输入诗人、题目或诗句关键词" class="elegant-input">
                    </div>
                    <button onclick="searchPoemsSimple()" class="btn-search-simple">
                        <svg viewBox="0 0 24 24" class="search-icon">
                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                        </svg>
                        <span>搜索诗词</span>
                    </button>
                </div>
                <div class="quick-tags">
                    <span class="tag-label">热门标签：</span>
                    <div class="tags-container">
                        <span class="quick-tag" onclick="quickSearch('李白')">李白</span>
                        <span class="quick-tag" onclick="quickSearch('思乡')">思乡</span>
                        <span class="quick-tag" onclick="quickSearch('山水')">山水</span>
                        <span class="quick-tag" onclick="quickSearch('爱情')">爱情</span>
                        <span class="quick-tag" onclick="quickSearch('月亮')">月亮</span>
                    </div>
                </div>
            </div>
        `;

        simpleSearchContainer.innerHTML = html;

        // 为简单搜索输入框添加回车搜索功能
        document.getElementById('simple-query').addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                searchPoemsSimple();
            }
        });
    }

    // 初始化
    initSimpleSearch();
})();
