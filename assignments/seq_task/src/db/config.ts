import { Sequelize } from 'sequelize-typescript'
import { TaskModel } from '../models/task.model'

const connection = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'root',
  database: 'reactapp',
  logging: false,
  models: [TaskModel],
})

connection.addModels([TaskModel])

export default connection
