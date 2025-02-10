<template>
  <div class="poem-search">
    <div class="search-form">
      <el-form :inline="true" :model="searchForm">
        <el-form-item label="关键词">
          <el-input v-model="searchForm.keyword" placeholder="标题/内容"></el-input>
        </el-form-item>
        
        <el-form-item label="作者">
          <el-input v-model="searchForm.author" placeholder="请输入作者姓名"></el-input>
        </el-form-item>
        
        <el-form-item label="朝代">
          <el-select v-model="searchForm.dynasty" placeholder="选择朝代">
            <el-option
              label="全部"
              value="">
            </el-option>
            <el-option
              v-for="item in filters.dynasties"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        
        <el-form-item label="类型">
          <el-select v-model="searchForm.type" placeholder="选择类型">
            <el-option
              label="全部"
              value="">
            </el-option>
            <el-option
              v-for="item in filters.types"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        
        <el-form-item>
          <el-button type="primary" @click="handleSearch">搜索</el-button>
          <el-button @click="handleReset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="search-results">
      <el-table :data="poems" style="width: 100%">
        <el-table-column prop="Title" label="标题" width="180"></el-table-column>
        <el-table-column prop="Author" label="作者" width="120"></el-table-column>
        <el-table-column prop="Dynasty" label="朝代" width="120"></el-table-column>
        <el-table-column prop="Type" label="类型" width="120"></el-table-column>
        <el-table-column prop="Content" label="内容"></el-table-column>
      </el-table>
      
      <div class="pagination">
        <el-pagination
          @current-change="handlePageChange"
          :current-page="currentPage"
          :page-size="pageSize"
          :total="total"
          layout="total, prev, pager, next">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const searchForm = ref({
  keyword: '',
  dynasty: '',
  author: '',
  type: ''
})

const filters = ref({
  dynasties: [],
  types: []
})

const poems = ref([])
const total = ref(0)
const currentPage = ref(1)
const pageSize = ref(10)

// 获取过滤条件选项
const getFilters = async () => {
  try {
    const response = await axios.get('/api/filters')
    filters.value = {
      dynasties: response.data.dynasties,
      types: response.data.types
    }
  } catch (error) {
    console.error('获取过滤条件失败:', error)
  }
}

// 搜索诗歌
const searchPoems = async () => {
  try {
    const response = await axios.get('/api/search', {
      params: {
        ...searchForm.value,
        page: currentPage.value,
        pageSize: pageSize.value
      }
    })
    poems.value = response.data.data
    total.value = response.data.total
  } catch (error) {
    console.error('搜索失败:', error)
  }
}

const handleSearch = () => {
  currentPage.value = 1
  searchPoems()
}

const handleReset = () => {
  searchForm.value = {
    keyword: '',
    dynasty: '',
    author: '',
    type: ''
  }
  handleSearch()
}

const handlePageChange = (page) => {
  currentPage.value = page
  searchPoems()
}

onMounted(() => {
  getFilters()
  searchPoems()
})
</script>

<style scoped>
.poem-search {
  padding: 20px;
}

.search-form {
  margin-bottom: 20px;
}

.search-results {
  margin-top: 20px;
}

.pagination {
  margin-top: 20px;
  text-align: center;
}

/* 添加下拉框样式 */
:deep(.el-select) {
  width: 160px;
}

:deep(.el-input) {
  width: 160px;
}
</style>