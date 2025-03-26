// 每日诗词组件
(function () {
    const dailyPoemContainer = document.getElementById('daily-poem-container');
    if (!dailyPoemContainer) return;

    // 初始化每日诗词
    function initDailyPoem() {
        // 可以在这里添加从后端获取每日诗词的逻辑
        // 目前使用静态内容作为示例
        const poemContent = "最是人间留不住，朱颜辞镜花辞树";

        const html = `
            <div class="daily-poem">
                <span class="daily-poem-label">今日诗语</span>
                <span class="daily-poem-text">${poemContent}</span>
            </div>
        `;

        dailyPoemContainer.innerHTML = html;
    }

    // 初始化
    initDailyPoem();
})(); 