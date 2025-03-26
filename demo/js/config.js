// API配置
const API_CONFIG = {
    API_URL: "https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions",  // API接口地址
    API_KEY: "sk-2ac8980f778c43c4a6b05243d0af6887",  // 您的API密钥
    MODEL: 'qwen-max-latest',  // 使用的模型名称
    TEMPERATURE: 0.7,  // 温度参数，控制回答的创造性，范围0-1
    MAX_TOKENS: 2000,  // 最大生成长度
    SYSTEM_PROMPT: "你是一个专业的古诗文助手，精通中国古典诗词。你可以解释诗词含义，分析写作手法，讲解历史背景，以及讨论作者生平等。请用优雅而易懂的语言回答问题。"  // 系统提示词
}; 