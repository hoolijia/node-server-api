const express = require('express')
const router = express.Router()
const Controller = require('../../business/admin/user/controller')

router.route('/')
  .get(Controller.getUsers)
  .post(Controller.createUser)

router.route('/:id')
  .get(Controller.getOne)
  .put(Controller.updateUser)
  .delete(Controller.deleteUser)

module.exports = router
