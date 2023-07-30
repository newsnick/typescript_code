// import { Sequelize } from 'sequelize-typescript'
// import { TaskModel } from '../models/task.model'

// const connection = new Sequelize({
//   dialect: 'mysql',
//   host: 'localhost',
//   username: 'root',
//   password: 'root',
//   database: 'reactapp',
//   logging: false,
//   models: [TaskModel],
// })

// connection.addModels([TaskModel])

// export default connection

import { Sequelize } from 'sequelize-typescript'
import { TaskModel } from '../models/task.model'

const connection = new Sequelize({
  dialect: 'sqlite',
  storage: './data/reactapp.db',
  logging: false,
  models: [TaskModel],
})

connection.addModels([TaskModel])

export default connection
