<template>
  <div>
    <h2 class="text-3xl font-bold mb-6">个人中心</h2>
    <div class="grid md:grid-cols-3 gap-6">
      <div class="bg-white p-6 rounded-lg shadow">
        <div class="text-center mb-4">
          <div class="text-5xl mb-3">👤</div>
          <h3 class="text-xl font-bold">{{ user.name }}</h3>
          <p class="text-gray-600">{{ user.email }}</p>
        </div>
      </div>
      
      <div class="bg-white p-6 rounded-lg shadow">
        <h3 class="text-lg font-bold mb-4">学习进度</h3>
        <div class="space-y-3">
          <div>
            <p class="text-sm text-gray-600 mb-1">完成课程: {{ user.completedCourses }}/10</p>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-blue-600 h-2 rounded-full" :style="{width: (user.completedCourses / 10 * 100) + '%'}"></div>
            </div>
          </div>
          <div>
            <p class="text-sm text-gray-600 mb-1">总学时: {{ user.totalHours }} 小时</p>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg shadow">
        <h3 class="text-lg font-bold mb-4">学习成就</h3>
        <ul class="space-y-2">
          <li class="flex items-center"><span class="text-yellow-500 mr-2">⭐</span> 7日连续学习</li>
          <li class="flex items-center"><span class="text-yellow-500 mr-2">⭐</span> 完成3门课程</li>
          <li class="flex items-center"><span class="text-yellow-500 mr-2">⭐</span> 获得50个学分</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const user = ref({
  name: '学习者',
  email: 'user@example.com',
  completedCourses: 3,
  totalHours: 45
})
</script>
