

const Router = require("koa-router");
const jsonwebtoken = require('jsonwebtoken');

const { queryData } = require("../../db") 
const { getUserName,validatePasswrod } = require("../controller/login.js")
const config = require("../../config/serverConfig.js")

const router = new Router()

//首页
router.get(['/home'], async (ctx, next) => {
  await ctx.render('index')
})

//管理首页
router.get('/admin', async function (ctx, next) {
      console.log("进入管理首页路由");
      //console.log( ctx.header )
      //const token = ctx.header.authorization  ;
      //console.log( token )
      ctx.state = {
        title: 'welcome page'
      };
      await ctx.render('welcome', {title: ctx.state} );
})

//错误页面
router.get('/error', async function (ctx, next) {
  ctx.state = {
    title: '错误页面'
  };
  await ctx.render('error', {message: ctx.state} );
})

// Restful风格的API
/** 
 *   前后端传递数据的api格式:  /api/xxxxx/
 *   无需鉴权的apa格式      :  /api/public/xxxx
 * 
*/

// 登录鉴权
router.get("/api/loginAuthCheck",async ( ctx,next )=>{
    //进入该路由表示已通过授权认证， jsonwebtoken.verify 验证功能已在 koa-jwt 中间件中进行
    ctx.body={
      message: '已通过验证',
      code: 0
    }
})

//登录验证
router.post( "/api/login", 
              async function(ctx,next){
                  let { username,password }= ctx.request.body ;
                  let isUserExit = await getUserName( username ) ;
                  if( isUserExit ){
                      let isRightPassword = await validatePasswrod( username,password );
                      if( isRightPassword ){
                          // 登录成功，生成并在浏览器标识token
                          var token = jsonwebtoken.sign({ foo: 'bar' }, config.tokenSecret);
                          ctx.body = {
                            message: '获取token成功',
                            code: 0,
                            token
                          }
                      }else{
                            ctx.body = {
                              message: '密码错误，请重新登录！',
                              code: 1,
                            }
                            // ctx.cookies.set("loginFailurMessage",new Buffer('密码错误，请重新登录！').toString('base64'),{ httpOnly: false});
                            // ctx.redirect('/home');
                      }
                  }else{
                    // 方法一 ：ajax提交处理
                    ctx.body = {
                      message: '用户不存在！',
                      code: 2,
                    }
                    //方法二：表单提交处理）
                    //设置登录错误消息的cookie
                    //Buffer 类在 Node.js 中是一个全局变量，因此无需使用 require('buffer').Buffer 
                    //ctx.cookies.set("loginFailurMessage",new Buffer('用户不存在！').toString('base64'),{ httpOnly: false});
                    //ctx.redirect('/home');
                  }
            }
)



// other api ...

module.exports = router ;
