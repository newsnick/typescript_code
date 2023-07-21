import Task from '../models/task.model'
import { Op } from 'sequelize'

interface ITaskRepository {
  save(task: Task): Promise<Task>
  retrieveAll(searchParams: {
    username?: string
    status?: boolean
  }): Promise<Task[]>
  retrieveById(taskId: number): Promise<Task | null>
  update(task: Task): Promise<number>
  delete(taskId: number): Promise<number>
  deleteAll(): Promise<number>
}

class TaskRepository implements ITaskRepository {
  async save(task: Task): Promise<Task> {
    try {
      return await Task.create({
        username: task.iusername,
        description: task.description,
        deadline: task.deadline,
      })
    } catch (err) {
      throw new Error('Failed to create Task!')
    }
  }

  async retrieveAll(searchParams: {
    username?: string
    status?: boolean
  }): Promise<Task[]> {
    try {
      let condition: SearchCondition = {}

      if (searchParams?.status) condition.status = true

      if (searchParams?.username)
        condition.username = { [Op.like]: `%${searchParams.username}%` }

      return await Task.findAll({ where: condition })
    } catch (error) {
      throw new Error('Failed to retireve Tasks!')
    }
  }

  async retrieveById(taskId: number): Promise<Task | null> {
    try {
      return await Task.findByPk(taskId)
    } catch (error) {
      throw new Error('Failed to retireve Tasks!')
    }
  }

  // async update(task: Task): Promise<number> {
  //   try {
  //     const affectedRows = await Task.update(
  //       { username, description, status },
  //       { where: { id: id } }
  //     )
  //     return affectedRows[0]
  //   } catch (error) {
  //     throw new Error('Failed to update Task!')
  //   }
  // }

  async update(task: Task): Promise<number> {
    try {
      const { id, username, description, status } = task // Destructure the properties from the task object
      const affectedRows = await Task.update(
        { username, description, status },
        { where: { id } } // Use the destructured id directly
      )
      return affectedRows[0]
    } catch (error) {
      throw new Error('Failed to update Task!')
    }
  }

  async delete(taskId: number): Promise<number> {
    try {
      const affectedRows = await Task.destroy({ where: { id: taskId } })

      return affectedRows
    } catch (error) {
      throw new Error('Failed to delete Tasks!')
    }
  }

  // async deleteAll(): Promise<number> {
  //   try {
  //     return TaskRepository.destroy({
  //       where: {},
  //       truncate: false,
  //     })
  //   } catch (error) {
  //     throw new Error('Failed to delete Tasks!')
  //   }
  // }

  async deleteAll(): Promise<number> {
    try {
      return Task.destroy({
        where: {},
        truncate: false,
      })
    } catch (error) {
      throw new Error('Failed to delete Tasks!')
    }
  }
}

export default new TaskRepository()
