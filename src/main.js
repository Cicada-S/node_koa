const Koa = require('koa')
const userRouter = require('./router/user.route');
const { APP_PORT } = require('./config/config.default')

const app = new Koa()

app.use(userRouter.routes())

app.listen(APP_PORT, () => {
  console.log(`server is running on http://localhost:${APP_PORT}`)
})
