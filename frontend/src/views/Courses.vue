<template>
  <div>
    <h2 class="text-3xl font-bold mb-6">课程列表</h2>
    <div class="grid md:grid-cols-2 gap-6">
      <div v-for="course in courses" :key="course.id" class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
        <h3 class="text-xl font-bold mb-2">{{ course.name }}</h3>
        <p class="text-gray-600 mb-4">{{ course.description }}</p>
        <div class="flex justify-between items-center">
          <span class="text-sm text-gray-500">{{ course.lessons }} 课时</span>
          <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            查看详情
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Course {
  id: number
  name: string
  description: string
  lessons: number
}

const courses = ref<Course[]>([
  {
    id: 1,
    name: 'Vue 3 完全指南',
    description: '学习现代前端框架Vue 3的完整教程',
    lessons: 24
  },
  {
    id: 2,
    name: 'Node.js 后端开发',
    description: '掌握Node.js和Express构建强大后端',
    lessons: 20
  },
  {
    id: 3,
    name: 'TypeScript 进阶',
    description: '深入理解TypeScript类型系统',
    lessons: 16
  },
  {
    id: 4,
    name: 'MongoDB 数据库',
    description: '掌握NoSQL数据库设计与优化',
    lessons: 18
  }
])
</script>
