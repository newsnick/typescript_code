// import { Router } from 'express'
// import TaskController from '../controllers/task.controller'

// class TaskRoutes {
//   router = Router()
//   controller = new TaskController()

//   constructor() {
//     this.initializeRoutes()
//   }
//   initializeRoutes() {}
// }

// export default new TaskRoutes().router
import { Router } from 'express'
import TaskController from '../controllers/task.controller'

class TaskRoutes {
  router = Router()
  controller = new TaskController()

  constructor() {
    this.initializeRoutes()
  }

  initializeRoutes() {
    this.router.post('/', this.controller.create.bind(this.controller))
    this.router.get('/', this.controller.findAll.bind(this.controller))
    this.router.get('/:id', this.controller.findOne.bind(this.controller))
    this.router.put('/:id', this.controller.update.bind(this.controller))
    this.router.delete('/:id', this.controller.delete.bind(this.controller))
    this.router.delete('/', this.controller.deleteAll.bind(this.controller))
    this.router.get(
      '/status/:status',
      this.controller.findAllStatus.bind(this.controller)
    )
  }
}

export default new TaskRoutes().router
