// 高级搜索功能
function searchPoems() {
    const poetInput = document.getElementById('poet');
    const dynastySelect = document.getElementById('dynasty');
    const titleInput = document.getElementById('title');
    const contentInput = document.getElementById('content');

    // 获取搜索条件
    const poet = poetInput.value.trim();
    const dynasty = dynastySelect.value;
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    // 构建查询参数
    const params = new URLSearchParams();
    if (poet) params.append('poet', poet);
    if (dynasty && dynasty !== 'all') params.append('dynasty', dynasty);
    if (title) params.append('title', title);
    if (content) params.append('content', content);

    // 至少需要一个搜索条件
    if (poet || title || content || (dynasty && dynasty !== 'all')) {
        // 跳转到诗歌详情页面
        window.location.href = `poem_detail.html?${params.toString()}`;
    } else {
        alert('请至少输入一个搜索条件');
    }
}

// 简单搜索功能
function searchPoemsSimple() {
    const query = document.getElementById('simple-query').value.trim();
    if (query) {
        const params = new URLSearchParams();
        params.append('query', query);
        window.location.href = `poem_detail.html?${params.toString()}`;
    } else {
        alert('请输入搜索关键词');
    }
}

// 快速标签搜索
function quickSearch(tag) {
    document.getElementById('simple-query').value = tag;
    searchPoemsSimple();
} 