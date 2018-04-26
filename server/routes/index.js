const Router = require("koa-router");
const router = new Router()

//页面路由控制器
const pageController = require('../controller/pageController');

//根据模块分离的路由
const articleRouter = require('./article.js') ;
const loginRouter = require('./login.js') ;

/*========================
 *
 * 页面请求路由(游客页与管理业分别都是的单页面应用)
 * 
 ========================*/
router.get(/^\/home\/?/, pageController.home)            // 游客单页面
router.get(["/admin",/^\/admin\//], pageController.admin)//管理员的单页面
router.get('/error', pageController.page404 )            //错误页面



/**======================== 
 * 
 *   Restful风格的API
 *   前后端传递数据的api格式:  /api/xxxxx/
 *   无需鉴权的apa格式      :  /api/public/xxxx
 * 
========================*/


router.use('',loginRouter.routes(), loginRouter.allowedMethods() )        // 登录鉴权
router.use('/api',articleRouter.routes(), articleRouter.allowedMethods() )//文章操作API


module.exports = router ;
