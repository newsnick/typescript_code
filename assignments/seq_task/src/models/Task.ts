// models/task.ts

export class Task {
  private id: number
  private username: string
  private description: string
  private deadline: Date
  private status: boolean

  constructor(
    id: number,
    username: string,
    description: string,
    deadline: Date,
    status: boolean
  ) {
    this.id = id
    this.username = username
    this.description = description
    this.deadline = deadline
    this.status = status
  }
}
