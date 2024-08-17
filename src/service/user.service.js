const User = require('../model/user.model')

class UserService {
  async createUser(user_name, password) {
    // 写入数据库
    const res =  await User.create({ user_name, password })
    // console.log('写入数据库', res)
    return res.dataValues
  }
}

module.exports = new UserService()
