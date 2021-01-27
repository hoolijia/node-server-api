const AsyncHandler = require('../../../plug/async')
const ErrorResponse = require('../../../utils/errorResponse')
const Message = require('../../../common/message')
const UserService = require('./service')

// 获取所有用户信息
exports.getUsers = AsyncHandler(async (req, res) => {
  const list = await UserService.find(req)
  res.send({
    success: true,
    msg: Message.SELECT_SUCCESS,
    count: list.length,
    data: list
  })
})

// 根据id获取用户信息
exports.getOne = AsyncHandler(async (req, res, next) => {
  const user = await UserService.findById(req.params.id)
  if (!user) {
    return next(
      new ErrorResponse(`ID为${req.params.id}的用户无法找到`, 404)
    )
  }
  res.send({
    success: true,
    msg: Message.SELECT_SUCCESS,
    data: user
  })
})

// 创建用户信息
exports.createUser = AsyncHandler(async (req, res, next) => {
  const user = await UserService.create(req.body)
  res.send({
    success: true,
    msg: Message.CREATE_SUCCESS
  })
})

// 更新用户信息
exports.updateUser = AsyncHandler(async (req, res, next) => {
  const user = await UserService.update(req.params.id, req.body)
  if (!user) {
    return next(
      new ErrorResponse(`ID为${req.params.id}的用户无法找到，无法进行更新`, 404)
    )
  }
  res.send({
    success: true,
    msg: Message.UPDATE_SUCCESS
  })
})

// 删除用户信息
exports.deleteUser = AsyncHandler(async (req, res, next) => {
  const user = await UserService.delete(req.params.id)
  if (!user) {
    return next(
      new ErrorResponse(`ID为${req.params.id}的用户无法找到，无法进行删除`, 404)
    )
  }
  res.send({
    success: true,
    msg: Message.DELETE_SUCCESS
  })
})
