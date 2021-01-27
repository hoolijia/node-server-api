const User = require('../../../model/user')

exports.find = async (queryInfo) => {
  const users = await User.find()
  return users
}

exports.findById = async (id) => {
  const user = await User.findById(id)
  return user
}

exports.create = async (user) => {
  const result = await User.create(user)
  return result
}

exports.update = async (id, user) => {
  const result = await User.findByIdAndUpdate(id, user, {
    new: true,
    runValidators: true
  })
  return result
}

exports.delete = async (id) => {
  const result = await User.findByIdAndDelete(id)
  return result
}
