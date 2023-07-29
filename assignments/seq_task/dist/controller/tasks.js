"use strict";
// In controller/tasks.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTasksByStatus = exports.markTaskAsCompleted = exports.updateTask = exports.getTaskById = exports.getAllTasks = exports.deleteTask = exports.createTask = void 0;
const task_model_1 = require("../models/task.model"); // Import the TaskModel
const createTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, description, deadline, status } = req.body;
    try {
        const newTask = yield task_model_1.TaskModel.bulkCreate(req.body, {
            fields: ['username', 'description', 'deadline', 'status'], // Explicitly specify the fields to create
        });
        return res
            .status(200)
            .json({ message: 'Task created successfully', data: newTask });
    }
    catch (error) {
        next(error);
    }
});
exports.createTask = createTask;
const deleteTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const deletedTask = yield task_model_1.TaskModel.findByPk(id);
        yield task_model_1.TaskModel.destroy({ where: { id } });
        return res
            .status(200)
            .json({ message: 'Task deleted successfully', data: deletedTask });
    }
    catch (error) {
        next(error);
    }
});
exports.deleteTask = deleteTask;
const getAllTasks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const allTasks = yield task_model_1.TaskModel.findAll();
    return res
        .status(200)
        .json({ message: 'Task fetched successfully', data: allTasks });
});
exports.getAllTasks = getAllTasks;
const getTaskById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const tasks = yield task_model_1.TaskModel.findByPk(id);
    return res
        .status(200)
        .json({ message: 'Task fetched successfully', data: tasks });
});
exports.getTaskById = getTaskById;
const updateTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield task_model_1.TaskModel.update(Object.assign({}, req.body), { where: { id } });
    const updatedTasks = yield task_model_1.TaskModel.findByPk(id);
    return res
        .status(200)
        .json({ message: 'Task updated successfully', data: updatedTasks });
});
exports.updateTask = updateTask;
const markTaskAsCompleted = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const updatedTask = yield task_model_1.TaskModel.findByPk(id);
        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        updatedTask.status = true; // Mark the task as completed
        yield updatedTask.save();
        return res
            .status(200)
            .json({ message: 'Task marked as completed', data: updatedTask });
    }
    catch (error) {
        next(error);
    }
});
exports.markTaskAsCompleted = markTaskAsCompleted;
const getTasksByStatus = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { status } = req.query;
    try {
        const allTasks = yield task_model_1.TaskModel.findAll({
            where: { status: status === 'completed' ? true : false },
        });
        return res
            .status(200)
            .json({ message: 'Tasks fetched successfully', data: allTasks });
    }
    catch (error) {
        next(error);
    }
});
exports.getTasksByStatus = getTasksByStatus;
