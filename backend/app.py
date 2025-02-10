from flask import Flask, request, jsonify
import pandas as pd
from typing import List, Dict, Any
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # 启用CORS支持跨域请求

# 加载数据
def load_poems_data() -> pd.DataFrame:
    df = pd.read_csv('data/poems.csv')
    # 处理可能的空值
    df = df.fillna('')
    return df

# 全局变量存储数据
POEMS_DF = load_poems_data()

@app.route('/api/search', methods=['GET'])
def search_poems():
    # 获取查询参数
    keyword = request.args.get('keyword', '')
    dynasty = request.args.get('dynasty', '')
    author = request.args.get('author', '')
    poem_type = request.args.get('type', '')
    page = int(request.args.get('page', 1))
    page_size = int(request.args.get('pageSize', 10))

    # 构建查询条件
    query_conditions = []
    
    if keyword:
        keyword_condition = (
            POEMS_DF['Title'].str.contains(keyword, na=False) |
            POEMS_DF['Content'].str.contains(keyword, na=False) |
            POEMS_DF['Preface'].str.contains(keyword, na=False)
        )
        query_conditions.append(keyword_condition)
    
    if dynasty:
        query_conditions.append(POEMS_DF['Dynasty'] == dynasty)
    
    if author:
        query_conditions.append(POEMS_DF['Author'] == author)
        
    if poem_type:
        query_conditions.append(POEMS_DF['Type'] == poem_type)

    # 应用查询条件
    if query_conditions:
        result_df = POEMS_DF[pd.concat(query_conditions, axis=1).all(axis=1)]
    else:
        result_df = POEMS_DF

    # 计算总数
    total = len(result_df)
    
    # 分页
    start_idx = (page - 1) * page_size
    end_idx = start_idx + page_size
    
    # 获取分页数据
    page_data = result_df.iloc[start_idx:end_idx]
    
    # 转换为列表
    poems = page_data.to_dict('records')

    return jsonify({
        'total': total,
        'page': page,
        'pageSize': page_size,
        'data': poems
    })

@app.route('/api/filters', methods=['GET'])
def get_filters():
    """获取过滤条件选项"""
    return jsonify({
        'dynasties': POEMS_DF['Dynasty'].unique().tolist(),
        'authors': POEMS_DF['Author'].unique().tolist(),
        'types': POEMS_DF['Type'].unique().tolist()
    })

if __name__ == '__main__':
    app.run(debug=True) 