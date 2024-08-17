const { createUser } = require('../service/user.service')
const { userRegisterRrror } = require('../constant/err.type')

class UserController {
  // 用户注册
  async register(ctx, next) {
    // 1.获取数据
    const { user_name, password } = ctx.request.body
    try {
      // 2.操作服务器
      const res = await createUser(user_name, password)
      // 3.返回数据
      ctx.body = {
        code: 0,
        message: '用户注册成功',
        result: {
          id: res.id,
          user_name: res.user_name,
        }
      }
    } catch (err) {
      console.error('error', err)
      ctx.app.emit('error', userRegisterRrror, ctx)
    }
  }

  // 用户登录
  async login(ctx, next) {
    ctx.body = 'user login'
  }
}

module.exports = new UserController()
