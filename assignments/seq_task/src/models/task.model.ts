// models/task.model.ts

import { Table, Column, DataType, Model } from 'sequelize-typescript'

@Table({
  timestamps: false,
  tableName: 'tasks',
})
export class TaskModel extends Model<TaskModel> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  username!: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description!: string

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  deadline!: Date

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  status!: boolean
}
