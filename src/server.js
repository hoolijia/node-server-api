const express = require('express')
const dotenv = require('dotenv')
const DemoRouter = require('./router/demo/router')

module.exports = {
  config: async () => {
    dotenv.config({
      path: `${process.cwd()}/.env`
    })

    const app = express()

    // 创建中间件
    const logger = (req, res, next) => {
      req.data = {msg: 'hello world'}
      console.log('中间件运行')
      next()
    }

    app.use(logger)

    app.use('/api/v1/demo', DemoRouter)

    const PORT = process.env.PORT || 3000

    app.listen(PORT, console.log(`Server running at ${process.env.NODE_ENV} at ${PORT}`))
  }
}





