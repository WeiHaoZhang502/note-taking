# 学习平台 API 文档

## 认证相关

### 注册
- **端点**: `POST /auth/register`
- **请求体**:
  ```json
  {
    "email": "user@example.com",
    "name": "用户名",
    "password": "密码"
  }
  ```
- **响应**: 返回JWT token和用户信息

### 登录
- **端点**: `POST /auth/login`
- **请求体**:
  ```json
  {
    "email": "user@example.com",
    "password": "密码"
  }
  ```
- **响应**: 返回JWT token和用户信息

## 课程相关

### 获取所有课程
- **端点**: `GET /courses`
- **响应**: 课程列表

### 获取单个课程
- **端点**: `GET /courses/:id`
- **响应**: 课程详情

### 创建课程
- **端点**: `POST /courses`
- **请求体**:
  ```json
  {
    "name": "课程名称",
    "description": "课程描述",
    "instructor": "讲师名字",
    "lessons": 10,
    "duration": 20,
    "level": "beginner"
  }
  ```

## 用户相关

### 获取用户信息
- **端点**: `GET /users/:id`
- **响应**: 用户信息

### 更新用户信息
- **端点**: `PUT /users/:id`
- **请求体**:
  ```json
  {
    "name": "新用户名"
  }
  ```
