const mongoose = require('mongoose')

module.exports = async () => {
  const conn = await mongoose.connect(`mongodb://${process.env.MONGODB_PATH}:${process.env.MONGODB_PROT}/${process.env.MONGODB_DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })

  console.log(`MongoDB Connected: ${conn.connection.host}`.blue)
}
