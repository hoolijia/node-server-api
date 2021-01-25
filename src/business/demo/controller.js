const Demo = require('../../model/demo')

// 获取所有用户信息
exports.getUsers = async (req, res, next) => {
  try {
    const demos = await Demo.find()
    res.status(200).json({success: true, count: demos.length, data: demos})
  } catch (error) {
    res.status(400).json({success: false, error: error})
  }
}

// 根据id获取用户信息
exports.getOne = async (req, res, next) => {
  try {
    const user = await Demo.findById(req.params.id)
    if (!user) {
      return res.status(400).json({success: false})
    }
    res.status(200).json({success: true, data: user})
  } catch (error) {
    res.status(400).json({success: false, error: error})
  }

}

// 创建用户信息
exports.createUser = async (req, res, next) => {
  try {
    const result = await Demo.create(req.body)
    res.status(200).json({success: true, data: result})
  } catch (error) {
    res.status(400).json({success: false, error: error})
  }
}

// 更新用户信息
exports.updateUser = async (req, res, next) => {
  try {
    const user = await Demo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    if (!user) {
      return res.status(400).json({success: false})
    }
    res.status(200).json({success: true, msg: '修改成功', data: user})
  } catch (error) {
    res.status(400).json({success: false, error: error})
  }
}

// 删除用户信息
exports.deleteUser = async (req, res, next) => {
  try {
    const user = await Demo.findByIdAndDelete(req.params.id)
    if (!user) {
      return res.status(400).json({success: false})
    }
    res.status(200).json({success: true, msg: '删除成功', data: {}})
  } catch (error) {
    res.status(400).json({success: false, error: error})
  }
}
