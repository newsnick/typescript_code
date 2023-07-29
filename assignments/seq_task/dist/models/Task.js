"use strict";
// models/task.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
class Task {
    constructor(id, username, description, deadline, status) {
        this.id = id;
        this.username = username;
        this.description = description;
        this.deadline = deadline;
        this.status = status;
    }
}
exports.Task = Task;
