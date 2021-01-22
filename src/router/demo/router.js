const express = require('express')
const Controller = require('../../business/demo/controller')
const router = express.Router()

router.route('/')
  .get(Controller.getUsers)
  .post(Controller.insert)

router.route('/:id')
  .get(Controller.getOne)
  .put(Controller.update)
  .delete(Controller.delete)

// router.get('/:id', (req, res) => {
//   res.status(200).json({success: true, msg: `获取用户id为${req.params.id}的用户信息`})
// })
//
// router.put('/:id', (req, res) => {
//   res.status(200).json({success: true, msg: `修改用户id为${req.params.id}的用户信息`})
// })
//
// router.delete('/:id', (req, res) => {
//   res.status(200).json({success: true, msg: `删除用户id为${req.params.id}的用户信息`})
// })

module.exports = router
