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

const koaWebpack = require('koa-webpack')

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
    //token验证
    .use( auth() )        
    //不需要授权的页面有：/home路由下的：游客
    //                  /api/public 公共方法
    //                  /api/login  登录
    //                  /js|png|css 这些是在开发模式下的资源
    //                  /待加入 ： 在生产模式下，资源也是不需要授权的           
    .use(jwt({ secret: config.tokenSecret}).unless({  path: ["/favicon.ico",/\/home\/*/,/\/admin\/*/,/^\/api\/public\/*/,/\/error/,/\.*(js|png|jpg|css|woff|woff2|ttf)/,/sourcemap$/ ] }))
    .use(router.routes())
    .use(router.allowedMethods())
    
    koaWebpack({
       compiler:compilerInstance,
       devMiddleware:{
        logLevel:'info',
       },
       hotClient:{
        hmr:true
       }
    }).then( middleware =>{
      app.use(middleware)
    }).catch( err => console.log(err))
    
}else{
    app
    .use( auth() )     
    .use(jwt({ secret: config.tokenSecret}).unless({  path: ["/favicon.ico",/\/home\/*/,/\/admin\/*/,/^\/api\/public\/*/,/\/error/,/\.*(js|png|jpg|css|woff|woff2|ttf)/,/sourcemap$/ ] }))
    .use(require('koa-static')(  path.resolve( __dirname,'../static/dist')  ))
    .use(router.routes())
    .use(router.allowedMethods())
}

app.on('error', function(err, ctx) {
  console.log("发生未捕获的错误");
  //console.log(err)
  //logger.error('server error', err, ctx)
})

app.listen(config.port, () => {
  console.log( `正在监听 http://localhost:${config.port}` )
})

