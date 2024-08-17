const { createUser } = require('../service/user.service')

class UserController {
  // 用户注册
  async register(ctx, next) {
    // 1.获取数据
    const { user_name, password } = ctx.request.body
    // 2.操作服务器
    const res = await createUser(user_name, password)
    // 3.返回数据
    ctx.body = res.request.body
  }

  // 用户登录
  async login(ctx, next) {
    ctx.body = 'user login'
  }
}

module.exports = new UserController()
