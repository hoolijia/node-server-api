const Demo = require('../../model/demo')

// 获取用户信息
exports.getList = async (queryInfo) => {
  const demos = await Demo.find()
  return demos
}
