const mongoose = require('mongoose')

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.LOC_MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })

  console.log(`MongoDB Connected: ${conn.connection.host}`.blue)
}

module.exports = connectDB

