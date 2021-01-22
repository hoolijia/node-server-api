const express = require('express')
const dotenv = require('dotenv')
const DemoRouter = require('./router/demo/router')
const morgan = require('morgan')
const colors = require('colors')
// const Logger = require('./common/logger')

module.exports = {
  config: async () => {
    dotenv.config({
      path: `${process.cwd()}/.env`
    })

    const app = express()

    app.use(morgan('dev'))

    app.use('/api/v1/demo', DemoRouter)

    const PORT = process.env.PORT || 3000

    app.listen(PORT, console.log(`Server running at ${process.env.NODE_ENV} at ${PORT}`))
  }
}





