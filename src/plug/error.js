const ErrorResponse = require('../utils/errorResponse')
const ResponseStatus = require('../common/responseStatus')

const errorHandler = (err, req, res, next) => {
  // 打印error相关信息
  // console.log(err.stack.red)
  // console.log(err)
  // console.log('errorName：' + err.name)

  if (err.name === 'CastError') {
    const msg = `Resource not found with id of ${err.value}`
    err = new ErrorResponse(msg, ResponseStatus.MONGODB_DATA_NOT_FOUND)
  }

  // 返回重复字段值响应
  if (err.code === 11000) {
    const message = "输入了重复的字段值";
    err = new ErrorResponse(message, ResponseStatus.MONGODB_DUPLICATE_INPUT);
  }

  // 校验失败
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((val) => val.message);
    err = new ErrorResponse(message, ResponseStatus.MONGODB_VALIDATION_ERROR);
  }

  res
    .status(err.statusCode || ResponseStatus.SYSTEM_ERROR)
    .json({
      success: false,
      error: err.message || 'Server error'
    })
}

module.exports = errorHandler
