"use strict";
// In routes/tasks.ts
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tasks_1 = require("../controller/tasks");
const router = (0, express_1.Router)();
router.post('/', tasks_1.createTask);
router.get('/', tasks_1.getAllTasks);
router.get('/:id', tasks_1.getTaskById);
router.put('/:id', tasks_1.updateTask);
router.delete('/:id', tasks_1.deleteTask);
router.put('/:id/complete', tasks_1.markTaskAsCompleted);
router.get('/status', tasks_1.getTasksByStatus);
exports.default = router;
