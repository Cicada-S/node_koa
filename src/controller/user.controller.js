const { createUser, getUerInfo } = require('../service/user.service')

class UserController {
  // 用户注册
  async register(ctx, next) {
    // 1.获取数据
    const { user_name, password } = ctx.request.body
    // 合法性
    if(!user_name || !password) {
      console.error('用户名或密码为空', ctx.request.body)
      ctx.status = 400
      ctx.body = {
        code: '10001',
        message: '用户名或密码为空',
        result: '',
      }
      return
    }
    // 合理性
    if (await getUerInfo({ user_name })) {
      ctx.status = 409
      ctx.body = {
        code: '10002',
        message: '用户已经存在',
        result: '',
      }
      return
    }

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
  }

  // 用户登录
  async login(ctx, next) {
    ctx.body = 'user login'
  }
}

module.exports = new UserController()
