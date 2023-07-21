// import { Request, Response } from 'express'
// import Task from '../models/task.model'
// import taskRepository from '../repositories/task.repository'

// export default class TaskController {
//   async create(req: Request, res: Response) {}

//   async findAll(req: Request, res: Response) {}
//   async findOne(req: Request, res: Response) {}
//   async update(req: Request, res: Response) {}
//   async delete(req: Request, res: Response) {}
//   async deleteAll(req: Request, res: Response) {}
//   async findAllStatus(req: Request, res: Response) {}
// }

import { Request, Response } from 'express'
import Task from '../models/task.model'
import taskRepository from '../repositories/task.repository'

export default class TaskController {
  async create(req: Request, res: Response) {
    try {
      const task: Task = req.body
      const newTask = await taskRepository.save(task)
      res.status(201).json(newTask)
    } catch (error) {
      res.status(500).json({ message: 'Failed to create Task!' })
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const { username, status } = req.query
      const searchParams = {
        username: username?.toString() || undefined,
        status:
          status === 'true' ? true : status === 'false' ? false : undefined,
      }
      const tasks = await taskRepository.retrieveAll(searchParams)
      res.json(tasks)
    } catch (error) {
      res.status(500).json({ message: 'Failed to retrieve Tasks!' })
    }
  }

  async findOne(req: Request, res: Response) {
    try {
      const taskId = Number(req.params.id)
      const task = await taskRepository.retrieveById(taskId)
      if (!task) {
        return res.status(404).json({ message: 'Task not found!' })
      }
      res.json(task)
    } catch (error) {
      res.status(500).json({ message: 'Failed to retrieve Task!' })
    }
  }

  async update(req: Request, res: Response) {
    try {
      const taskId = Number(req.params.id)
      const task: Task = req.body
      task.id = taskId // Make sure to set the task id to the one in the URL
      const affectedRows = await taskRepository.update(task)
      if (affectedRows === 0) {
        return res.status(404).json({ message: 'Task not found!' })
      }
      res.json({ message: 'Task updated successfully!' })
    } catch (error) {
      res.status(500).json({ message: 'Failed to update Task!' })
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const taskId = Number(req.params.id)
      const affectedRows = await taskRepository.delete(taskId)
      if (affectedRows === 0) {
        return res.status(404).json({ message: 'Task not found!' })
      }
      res.json({ message: 'Task deleted successfully!' })
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete Task!' })
    }
  }

  async deleteAll(req: Request, res: Response) {
    try {
      const affectedRows = await taskRepository.deleteAll()
      res.json({
        message: 'All tasks deleted successfully!',
        count: affectedRows,
      })
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete Tasks!' })
    }
  }

  async findAllStatus(req: Request, res: Response) {
    try {
      const status = req.params.status === 'true'
      const tasks = await taskRepository.retrieveAll({ status })
      res.json(tasks)
    } catch (error) {
      res.status(500).json({ message: 'Failed to retrieve Tasks!' })
    }
  }
}
