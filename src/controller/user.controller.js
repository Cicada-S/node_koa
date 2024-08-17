class UserController {
  // 用户注册
  async register(ctx, next) {
    ctx.body = 'hello users'
  }

  // 用户登录
  async login(ctx, next) {
    ctx.body = 'user login'
  }
}

module.exports = new UserController()
