import express from 'express'
import { User } from '../models/User.js'

const router = express.Router()

// 获取用户信息
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password')
    if (!user) {
      return res.status(404).json({ message: '用户不存在' })
    }
    res.json(user)
  } catch (error) {
    res.status(500).json({ message: '获取用户信息失败', error })
  }
})

// 更新用户信息
router.put('/:id', async (req, res) => {
  try {
    const { name } = req.body
    const user = await User.findByIdAndUpdate(req.params.id, { name }, { new: true }).select('-password')
    res.json(user)
  } catch (error) {
    res.status(500).json({ message: '更新用户信息失败', error })
  }
})

export default router
