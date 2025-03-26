// 高级搜索组件
(function () {
    const advancedSearchContainer = document.getElementById('advanced-search-container');
    if (!advancedSearchContainer) return;

    // 初始化高级搜索组件
    function initAdvancedSearch() {
        const html = `
            <div id="advanced-search" class="search-grid" style="display: none;">
                <div class="search-item">
                    <label for="poet">诗人</label>
                    <input type="text" id="poet" placeholder="请输入诗人名称">
                </div>
                <div class="search-item">
                    <label for="title">题名</label>
                    <input type="text" id="title" placeholder="请输入诗歌题目">
                </div>
                <div class="search-item">
                    <label for="content">全文</label>
                    <input type="text" id="content" placeholder="请输入诗歌内容">
                </div>
                
                <div class="search-item">
                    <label for="dynasty">朝代</label>
                    <select id="dynasty">
                        <option value="" disabled selected hidden>请选择朝代</option>
                        <option value="all">全部</option>
                        <option value="唐代">唐代</option>
                        <option value="宋代">宋代</option>
                        <option value="元代">元代</option>
                        <option value="明代">明代</option>
                        <option value="清代">清代</option>
                    </select>
                </div>
                <div class="search-item">
                    <label for="rhyme">韵脚</label>
                    <input type="text" id="rhyme" placeholder="请输入韵脚">
                </div>
                <div class="search-item">
                    <label for="imagery">意象</label>
                    <input type="text" id="imagery" placeholder="请输入相关意象">
                </div>
                <div class="search-item">
                    <label for="allusion">典故</label>
                    <input type="text" id="allusion" placeholder="请输入相关典故">
                </div>
                
                <div class="search-item">
                    <label for="emotion">情感</label>
                    <select id="emotion" onchange="toggleEmotionIntensity()">
                        <option value="" disabled selected hidden>请选择情感</option>
                        <option value="all">全部</option>
                        <option value="乐">乐</option>
                        <option value="好">好</option>
                        <option value="怒">怒</option>
                        <option value="哀">哀</option>
                        <option value="惧">惧</option>
                        <option value="恶">恶</option>
                        <option value="惊">惊</option>
                    </select>
                    <div id="emotion-intensity-container" style="display: none;">
                        <label for="emotion-intensity">情感强度 (1-10):</label>
                        <input type="range" id="emotion-intensity" min="1" max="10" value="5" class="slider">
                        <span id="emotion-intensity-value">5</span>
                    </div>
                </div>
            </div>
        `;

        advancedSearchContainer.innerHTML = html;

        // 添加高级搜索输入框的回车搜索功能
        const searchInputs = ['poet', 'title', 'content', 'rhyme', 'imagery', 'allusion'].map(id => document.getElementById(id));
        searchInputs.forEach(input => {
            if (input) {
                input.addEventListener('keypress', function (e) {
                    if (e.key === 'Enter') {
                        searchPoems();
                    }
                });
            }
        });

        // 添加情感强度滑块的实时更新
        const intensitySlider = document.getElementById('emotion-intensity');
        const intensityValue = document.getElementById('emotion-intensity-value');
        if (intensitySlider && intensityValue) {
            intensitySlider.oninput = function () {
                intensityValue.textContent = this.value;
            };
        }
    }

    // 切换情感强度显示
    window.toggleEmotionIntensity = function () {
        const emotionSelect = document.getElementById('emotion');
        const intensityContainer = document.getElementById('emotion-intensity-container');

        if (emotionSelect && intensityContainer) {
            if (emotionSelect.value !== 'all' && emotionSelect.value !== '') {
                intensityContainer.style.display = 'block';
            } else {
                intensityContainer.style.display = 'none';
            }
        }
    };

    // 初始化
    initAdvancedSearch();
})(); 