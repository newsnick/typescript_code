"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const task_model_1 = require("../models/task.model");
const connection = new sequelize_typescript_1.Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'root',
    database: 'reactapp',
    logging: false,
    models: [task_model_1.TaskModel],
});
connection.addModels([task_model_1.TaskModel]);
exports.default = connection;
