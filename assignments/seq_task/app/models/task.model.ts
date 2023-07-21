// import { Model, Table, Column, DataType } from 'sequelize-types'

// @Table({
//   tableName: 'tasks',
//   timestamps: false,
// })
// export default class Task extends Model {
//   @Column({
//     type: DataType.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//     field: 'id',
//   })
//   id?: number

//   @Column({
//     type: DataType.STRING(255),
//     field: 'username',
//   })
//   iusername?: string

//   @Column({
//     type: DataType.STRING(255),
//     field: 'description',
//   })
//   description?: string

//   @Column({
//     type: DataType.DATE,
//     field: 'deadline',
//   })
//   deadline?: Date

//   @Column({
//     type: DataType.BOOLEAN,
//     field: 'status',
//   })
//   status?: boolean
// }
import { Model, Table, Column, DataType } from 'sequelize-typescript'

@Table({
  tableName: 'tasks',
  timestamps: false,
})
export default class Task extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'id',
  })
  id?: number = 0 // Default value for the optional property

  @Column({
    type: DataType.STRING(255),
    field: 'username',
  })
  iusername?: string = '' // Default value for the optional property

  @Column({
    type: DataType.STRING(255),
    field: 'description',
  })
  description?: string = '' // Default value for the optional property

  @Column({
    type: DataType.DATE,
    field: 'deadline',
  })
  deadline?: Date = new Date() // Default value for the optional property

  @Column({
    type: DataType.BOOLEAN,
    field: 'status',
  })
  status?: boolean = false // Default value for the optional property
}
