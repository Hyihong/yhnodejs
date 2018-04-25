

const Router = require("koa-router");


const router = new Router()

const articleRouter = require('./article.js') ;
const loginRouter = require('./login.js') ;

/*========================
 *
 * 页面请求路由(游客页与管理业分别都是的单页面应用)
 * 
 ========================*/

// 游客单页面
router.get(/^\/home\/?/, async (ctx, next) => {
  console.log("游客页面刷新，走后端路由")
  await ctx.render('index')
})

//管理员的单页面
router.get(["/admin",/^\/admin\//], async  (ctx, next) =>{ 
      console.log(ctx.url )
      await ctx.render('welcome');
})

//错误页面
router.get('/error', async function (ctx, next) {
  ctx.state = {
    title: '错误页面'
  };
  await ctx.render('error', {message: ctx.state} );
})

/** 
 *   Restful风格的API
 *   前后端传递数据的api格式:  /api/xxxxx/
 *   无需鉴权的apa格式      :  /api/public/xxxx
 * 
*/

// 登录鉴权
router.use('',loginRouter.routes(), loginRouter.allowedMethods() )

//文章操作API
router.use('/api',articleRouter.routes(), articleRouter.allowedMethods() )



module.exports = router ;
