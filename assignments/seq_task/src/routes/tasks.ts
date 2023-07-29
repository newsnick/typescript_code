// In routes/tasks.ts

import { Router } from 'express'
import {
  createTask,
  deleteTask,
  getAllTasks,
  updateTask,
  getTaskById,
  markTaskAsCompleted,
  getTasksByStatus,
} from '../controller/tasks'

const router = Router()

router.post('/', createTask)
router.get('/', getAllTasks)
router.get('/:id', getTaskById)
router.put('/:id', updateTask)
router.delete('/:id', deleteTask)
router.put('/:id/complete', markTaskAsCompleted)
router.get('/status', getTasksByStatus)

export default router
