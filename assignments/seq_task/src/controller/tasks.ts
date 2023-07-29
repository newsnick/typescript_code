// In controller/tasks.ts

import { RequestHandler } from 'express'
import { TaskModel } from '../models/task.model'

interface TaskRequestBody {
  username: string
  description: string
  deadline: Date
  status: boolean
}

export const createTask: RequestHandler = async (req, res, next) => {
  const { username, description, deadline, status } =
    req.body as TaskRequestBody

  try {
    const newTask = await TaskModel.bulkCreate<TaskModel>(req.body, {
      fields: ['username', 'description', 'deadline', 'status'],
    })

    return res
      .status(200)
      .json({ message: 'Task created successfully', data: newTask })
  } catch (error) {
    next(error)
  }
}

export const deleteTask: RequestHandler = async (req, res, next) => {
  const { id } = req.params
  try {
    const deletedTask: TaskModel | null = await TaskModel.findByPk(id)
    await TaskModel.destroy({ where: { id } })
    return res
      .status(200)
      .json({ message: 'Task deleted successfully', data: deletedTask })
  } catch (error) {
    next(error)
  }
}

export const getAllTasks: RequestHandler = async (req, res, next) => {
  const allTasks: TaskModel[] = await TaskModel.findAll()

  return res
    .status(200)
    .json({ message: 'Task fetched successfully', data: allTasks })
}

export const getTaskById: RequestHandler = async (req, res, next) => {
  const { id } = req.params
  const tasks: TaskModel | null = await TaskModel.findByPk(id)
  return res
    .status(200)
    .json({ message: 'Task fetched successfully', data: tasks })
}

export const updateTask: RequestHandler = async (req, res, next) => {
  const { id } = req.params
  await TaskModel.update({ ...req.body }, { where: { id } })
  const updatedTasks: TaskModel | null = await TaskModel.findByPk(id)
  return res
    .status(200)
    .json({ message: 'Task updated successfully', data: updatedTasks })
}

export const markTaskAsCompleted: RequestHandler = async (req, res, next) => {
  const { id } = req.params
  try {
    const updatedTask: TaskModel | null = await TaskModel.findByPk(id)
    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' })
    }

    updatedTask.status = true
    await updatedTask.save()

    return res
      .status(200)
      .json({ message: 'Task marked as completed', data: updatedTask })
  } catch (error) {
    next(error)
  }
}

export const getTasksByStatus: RequestHandler = async (req, res, next) => {
  const { status } = req.query
  try {
    const allTasks: TaskModel[] = await TaskModel.findAll({
      where: { status: status === 'completed' ? true : false },
    })

    return res
      .status(200)
      .json({ message: 'Tasks fetched successfully', data: allTasks })
  } catch (error) {
    next(error)
  }
}
