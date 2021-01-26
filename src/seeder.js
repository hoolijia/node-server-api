const fs = require('fs')
const mongoose = require('mongoose')
const colors = require('colors')
const dotenv = require('dotenv')

dotenv.config({
  path: `${process.cwd()}/.env`
})

const Demo = require('./model/demo')

mongoose.connect(process.env.LOC_MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})

// 读取本地数据
const demos = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/demo.json`, "utf-8")
)

// 导入数据到DB
const importData = async () => {
  try {
    await Demo.create(demos)
    console.log('存储成功'.green.inverse)
    // 退出进程
    process.exit()
  } catch (e) {
    console.log(e)
  }
}

// 删除数据
const deleteData = async () => {
  try {
    await Demo.deleteMany()
    console.log('删除成功'.red.inverse)
    // 退出进程
    process.exit()
  } catch (e) {
    console.log(e)
  }
}

if (process.argv[2] === '-i') {
  importData()
}
if (process.argv[2] === '-d') {
  deleteData()
}
