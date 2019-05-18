const express = require('express')
const validate = require('express-validation')
const handle = require('express-async-handler')

const routes = express.Router()

const authMiddleware = require('./app/middlewares/auth')
const controllers = require('./app/controllers')
const validators = require('./app/validators')

routes.post(
  '/users',
  validate(validators.User),
  handle(controllers.UserController.store)
)

routes.post(
  '/sessions',
  validate(validators.Session),
  handle(controllers.SessionController.store)
)

routes.use(authMiddleware)

/**
 *
 * Squad
 *
 */
routes.get('/squads', handle(controllers.SquadController.index))
routes.get('/squads/:id', handle(controllers.SquadController.show))
routes.post(
  '/squads',
  validate(validators.Squad),
  handle(controllers.SquadController.store)
)
routes.put(
  '/squads/:id',
  validate(validators.Squad),
  handle(controllers.SquadController.update)
)
routes.delete('/squads/:id', handle(controllers.SquadController.destroy))

module.exports = routes
