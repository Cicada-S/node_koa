const { getUerInfo } = require('../service/user.service')
const { userFormateError, userAlreadyExited, userRegisterRrror } = require('../constant/err.type')

// 合法性
const userValidator = async (ctx, next) => {
  const { user_name, password } = ctx.request.body

  if (!user_name || !password) {
    console.error('用户名或密码为空', ctx.request.body)
    ctx.app.emit('error', userFormateError, ctx)
    return
  }

  await next()
}

// 合理性
const verifyUser = async (ctx, next) => {
  const { user_name } = ctx.request.body

  try {
    const res = await getUerInfo({ user_name })
    if (res) {
      console.error('用户名已存在', { user_name })
      ctx.app.emit('error', userAlreadyExited, ctx)
      return
    }
  } catch (err) {
    console.error('获取用户信息失败', err)
    ctx.app.emit('error', userRegisterRrror, ctx)
    return
  }

  await next()
}

module.exports = {
  userValidator,
  verifyUser
}
