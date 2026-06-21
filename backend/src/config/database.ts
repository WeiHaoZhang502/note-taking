import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    const mongoUrl = process.env.MONGODB_URL || 'mongodb://localhost:27017/learning-platform'
    await mongoose.connect(mongoUrl)
    console.log('✅ MongoDB 连接成功')
  } catch (error) {
    console.error('❌ MongoDB 连接失败:', error)
    process.exit(1)
  }
}
