// 创建中间件
const logger = (req, res, next) => {
  req.data = {msg: 'hello world'}
  console.log('中间件运行')
  next()
}

module.exports = logger
