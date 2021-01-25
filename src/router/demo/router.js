const express = require('express')
const {
  getUsers,
  getOne,
  createUser,
  updateUser,
  deleteUser
} = require('../../business/demo/controller')
const router = express.Router()

router.route('/')
  .get(getUsers)
  .post(createUser)

router.route('/:id')
  .get(getOne)
  .put(updateUser)
  .delete(deleteUser)

module.exports = router
