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

const port = process.env.PORT || config.port

//创建应用
const app = new Koa()

//错误捕获
onerror(app)


//base middleware
app
  //.use(jwt({ secret: 'chenyihong'}).unless({  path: [/\/welcome/] }));
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
  

//product
if(false){
app
  .use(require('koa-static')(  path.resolve( __dirname,'../static/dist')  ))
  .use(router.routes())
  .use(router.allowedMethods())
}

//development

if(true){
    app
      .use(router.routes())
      .use(router.allowedMethods())
      .use(middleware({
           compiler:compilerInstance,
           dev:{
              logLevel: "error" //只在发生错误时才在控制台输出
           }
        })
      );
}

app.on('error', function(err, ctx) {
  console.log("发生错误");
  console.log(err)
  logger.error('server error', err, ctx)
})

app.listen(config.port, () => {
  console.log( `正在监听 http://localhost:${config.port}` )
})

