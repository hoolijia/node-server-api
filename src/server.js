const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const colors = require('colors')
const errorHandler = require('./common/error')

const DemoRouter = require('./router/demo/router')
const connectDB = require('./config/db')

module.exports = {
  config: async () => {
    dotenv.config({
      path: `${process.cwd()}/.env`
    })

    // 连接数据库
    connectDB()

    const app = express()

    // 配置body解析
    app.use(express.json())

    app.use(morgan('dev'))

    app.use('/api/v1/demo', DemoRouter)

    // 要写到路由挂载之前
    app.use(errorHandler)

    const PORT = process.env.PORT || 3000

    const server = app.listen(PORT, console.log(`Server running at ${process.env.NODE_ENV} at ${PORT}`))

    process.on('unhandledRejection', (err, promise) => {
      console.log(`Error: ${err.message}`.red.bold)
      server.close(() => {
        process.exit(1)
      })
    })
  }
}





