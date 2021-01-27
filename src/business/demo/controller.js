const AsyncHandler = require('../../plug/async')
const ErrorResponse = require('../../utils/errorResponse')
const DemoService = require('../../business/demo/service')
const Demo = require('../../model/demo')

// 获取所有用户信息
exports.getUsers = AsyncHandler(async (req, res) => {
  const list = await DemoService.getList(req)
  res
    .status(200)
    .json({
      success: true,
      count: list.length,
      data: list
    })
})

// 根据id获取用户信息
exports.getOne = AsyncHandler(async (req, res, next) => {
  const user = await Demo.findById(req.params.id)
  if (!user) {
    return next(
      new ErrorResponse(`ID为${req.params.id}的用户无法找到`, 404)
    )
  }
  res.status(200).json({success: true, data: user})
})

// 创建用户信息
exports.createUser = AsyncHandler(async (req, res, next) => {
  const result = await Demo.create(req.body)
  res.status(200).json({success: true, data: result})
})

// 更新用户信息
exports.updateUser = AsyncHandler(async (req, res, next) => {
  const user = await Demo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  })
  if (!user) {
    return res.status(400).json({success: false})
  }
  res.status(200).json({success: true, msg: '修改成功', data: user})
})

// 删除用户信息
exports.deleteUser = AsyncHandler(async (req, res, next) => {
  const user = await Demo.findByIdAndDelete(req.params.id)
  if (!user) {
    return res.status(400).json({success: false})
  }
  res.status(200).json({success: true, msg: '删除成功', data: {}})
})
