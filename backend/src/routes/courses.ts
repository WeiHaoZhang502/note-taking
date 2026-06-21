import express from 'express'
import { Course } from '../models/Course.js'

const router = express.Router()

// 获取所有课程
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find()
    res.json(courses)
  } catch (error) {
    res.status(500).json({ message: '获取课程失败', error })
  }
})

// 获取单个课程
router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id)
    if (!course) {
      return res.status(404).json({ message: '课程不存在' })
    }
    res.json(course)
  } catch (error) {
    res.status(500).json({ message: '获取课程失败', error })
  }
})

// 创建课程 (仅管理员)
router.post('/', async (req, res) => {
  try {
    const { name, description, instructor, lessons, duration, level } = req.body
    const course = new Course({ name, description, instructor, lessons, duration, level })
    await course.save()
    res.status(201).json(course)
  } catch (error) {
    res.status(500).json({ message: '创建课程失败', error })
  }
})

export default router
