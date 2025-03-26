document.addEventListener('DOMContentLoaded', function () {
    const chatMessages = document.getElementById('chatMessages');
    const userInput = document.getElementById('userInput');
    const typingIndicator = document.getElementById('typingIndicator');

    // 初始化时滚动到底部
    setTimeout(() => {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 100);

    userInput.addEventListener('input', function () {
        this.style.height = 'auto';
        this.style.height = Math.min(this.scrollHeight, 120) + 'px';
    });

    // 监听回车键发送消息
    userInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    // 添加全局发送消息函数
    window.sendMessage = async function () {
        const message = userInput.value.trim();
        if (!message) return;

        // 显示用户消息
        addUserMessage(message);
        userInput.value = '';
        userInput.style.height = 'auto';

        // 显示正在输入指示器
        typingIndicator.style.display = 'block';
        chatMessages.scrollTop = chatMessages.scrollHeight;

        try {
            // 调用API获取回复
            const response = await callQwenAPI(message);

            // 隐藏输入指示器并显示回复
            typingIndicator.style.display = 'none';
            addAIMessage(response);
        } catch (error) {
            console.error('发送消息错误:', error);
            typingIndicator.style.display = 'none';
            addAIMessage("抱歉，我遇到了一些问题。请稍后再试。");
        }
    };

    // 调用千问API
    async function callQwenAPI(message) {
        try {
            const response = await fetch(API_CONFIG.API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_CONFIG.API_KEY}`
                },
                body: JSON.stringify({
                    model: API_CONFIG.MODEL,
                    messages: [
                        {
                            role: "system",
                            content: API_CONFIG.SYSTEM_PROMPT
                        },
                        {
                            role: "user",
                            content: message
                        }
                    ],
                    temperature: API_CONFIG.TEMPERATURE,
                    max_tokens: API_CONFIG.MAX_TOKENS
                })
            });

            if (!response.ok) {
                throw new Error('API调用失败');
            }

            const data = await response.json();
            return data.choices[0].message.content;
        } catch (error) {
            console.error('API调用错误:', error);
            return "抱歉，我现在无法回答您的问题。请稍后再试。";
        }
    }

    // 添加用户消息
    function addUserMessage(content) {
        // 创建用户消息HTML结构
        const messageHTML = `
            <div class="user-message">
                <div class="avatar">你</div>
                <div class="message-content">${content}</div>
            </div>
        `;

        // 将HTML字符串插入到DOM中
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = messageHTML;
        const messageNode = tempDiv.firstElementChild;

        // 插入到聊天窗口
        chatMessages.insertBefore(messageNode, typingIndicator);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // 添加AI消息
    function addAIMessage(content) {
        // 创建AI消息HTML结构
        const messageHTML = `
            <div class="assistant-message">
                <div class="avatar">AI</div>
                <div class="message-content">${content}</div>
            </div>
        `;

        // 将HTML字符串插入到DOM中
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = messageHTML;
        const messageNode = tempDiv.firstElementChild;

        // 插入到聊天窗口
        chatMessages.insertBefore(messageNode, typingIndicator);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}); 