const User = require('../model/user.model')

class UserService {
  async createUser(user_name, password) {
    // 写入数据库
    const res = await User.create({ user_name, password })
    // console.log('写入数据库', res)
    return res.dataValues
  }

  async getUerInfo({ id, user_name, password, is_admin }) {
    const whereOpt = {}

    id && Object.assign(whereOpt, { id })
    user_name && Object.assign(whereOpt, { user_name })
    password && Object.assign(whereOpt, { password })
    is_admin && Object.assign(whereOpt, { is_admin })

    const res = await User.findOne({ where: whereOpt })

    return res?.dataValues || null
  }
}

module.exports = new UserService()
