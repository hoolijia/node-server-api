const controller = {
  getUsers: (req, res, next) => {
    res.status(200).json({success: true, msg: '获取所有用户信息', data: req.data.msg})
  },
  getOne: (req, res, next) => {
    res.status(200).json({success: true, msg: `获取${req.params.id}的用户信息`})
  },
  insert: (req, res, next) => {
    res.status(200).json({success: true, msg: '创建成功'})
  },
  update: (req, res, next) => {
    res.status(200).json({success: true, msg: `修改${req.params.id}的用户信息`})
  },
  delete: (req, res, next) => {
    res.status(200).json({success: true, msg: `删除${req.params.id}的用户信息`})
  }
}

module.exports = controller
