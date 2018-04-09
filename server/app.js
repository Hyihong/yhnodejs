const Koa = require('koa')
const views = require('koa-views')
const convert = require('koa-convert')
const json = require('koa-json')
const onerror = require('koa-onerror')
const cors = require('koa2-cors');
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const debug = require('debug')('koa2:server')
const path = require('path')
const jwt = require('koa-jwt');

const config = require('../config/serverConfig.js')
const router = require('./routes') ;

const middleware = require('koa-webpack');
const { compilerInstance } = require('./compiler');

//custom middleware
const auth = require('./middleware/auth.js')

const port = process.env.PORT || config.port
const isDev = config.isDev;

//创建应用
const app = new Koa()

//错误捕获
onerror(app)

//base middleware
app
  .use(cors())
  .use(bodyparser({
      enableTypes:['json', 'form', 'text']
  }))
  .use(json())
  //.use(logger())
  .use(views(path.join(__dirname, '/views'), {
    options: {settings: {views: path.join(__dirname, 'views')}},
    map: {'njk': 'nunjucks'},
    extension: 'njk'
  }))


if( isDev ){
    app
      //token验证，拦截401
      .use( auth() )
      .use(jwt({ secret: 'chenyihong'}).unless({  path: [/\/home/,/\/api\/*/,/\/error/,/\.*(js|png|jpg|css)/ ] }))
      .use(router.routes())
      .use(router.allowedMethods())
      .use(middleware({
           compiler:compilerInstance,
           dev:{
              logLevel: "error" //只在发生错误时才在控制台输出
           }
        })
      )
      
}else{
    app
    .use(jwt({ secret: 'chenyihong'}).unless({  path: [/\/static\/dist/] }))
    .use(require('koa-static')(  path.resolve( __dirname,'../static/dist')  ))
    .use(router.routes())
    .use(router.allowedMethods())
}

app.on('error', function(err, ctx) {
  console.log("发生错误");
  console.log(err)
  logger.error('server error', err, ctx)
})

app.listen(config.port, () => {
  console.log( `正在监听 http://localhost:${config.port}` )
})
