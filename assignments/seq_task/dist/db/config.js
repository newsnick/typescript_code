"use strict";
// import { Sequelize } from 'sequelize-typescript'
// import { TaskModel } from '../models/task.model'
Object.defineProperty(exports, "__esModule", { value: true });
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
// Import necessary packages and model definitions
const sequelize_typescript_1 = require("sequelize-typescript");
const task_model_1 = require("../models/task.model");
// Initialize Sequelize with SQLite as the dialect and specify the database file path
const connection = new sequelize_typescript_1.Sequelize({
    dialect: 'sqlite',
    storage: './data/reactapp.db',
    logging: false,
    models: [task_model_1.TaskModel],
});
connection.addModels([task_model_1.TaskModel]);
exports.default = connection;
