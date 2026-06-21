<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white shadow">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <h1 class="text-2xl font-bold text-blue-600">📚 学习平台</h1>
          </div>
          <div class="flex items-center space-x-4">
            <router-link to="/" class="text-gray-700 hover:text-blue-600">首页</router-link>
            <router-link to="/courses" class="text-gray-700 hover:text-blue-600">课程</router-link>
            <router-link to="/profile" class="text-gray-700 hover:text-blue-600">个人中心</router-link>
          </div>
        </div>
      </nav>
    </header>

    <main class="max-w-7xl mx-auto py-8 px-4">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style scoped>
</style>
