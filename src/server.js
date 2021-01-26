const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const colors = require('colors')
const errorHandler = require('./common/error')

const DemoRouter = require('./router/demo/router')
const mongoDB = require('./config/mongoDB')

module.exports = {
  config: async () => {
    dotenv.config({
      path: `${process.cwd()}/.env`
    })

    // 连接数据库
    mongoDB()

    const app = express()
    // 配置body解析
    app.use(express.json())
    // 使用morgan中间件
    app.use(morgan('dev'))
    // 挂载路由
    app.use('/api/v1/demo', DemoRouter)
    app.use(errorHandler)

    const PORT = process.env.PORT || 3000
    const server = app.listen(
      PORT,
      console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.magenta.bold
      )
    )

    process.on('unhandledRejection', (err, promise) => {
      console.log(`Error: ${err.message}`.red.bold)
      server.close(() => {
        process.exit(1)
      })
    })

    return server
  }
}





