const Koa = require('koa')
const views = require('koa-views')
const convert = require('koa-convert')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const debug = require('debug')('koa2:server')
const path = require('path')

const config = require('../config/serverConfig.js')
const router = require('./routes') ;

const port = process.env.PORT || config.port


//创建应用
const app = new Koa()

//错误捕获
onerror(app)

//中间件
app
  .use(bodyparser())
  .use(json())
  .use(logger())
  .use(require('koa-static')(  path.resolve( './static/output')  ))

  .use(views(path.join(__dirname, '/views'), {
    options: {settings: {views: path.join(__dirname, 'views')}},
    map: {'njk': 'nunjucks'},
    extension: 'njk'
  }))

  .use(router.routes())
  .use(router.allowedMethods())


app.on('error', function(err, ctx) {
  console.log(err)
  logger.error('server error', err, ctx)
})

app.listen(config.port, () => {
  console.log( `正在监听 http://localhost:${config.port}` )
})
