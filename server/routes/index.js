

const Router = require("koa-router");
var jsonwebtoken = require('jsonwebtoken');

const { queryData } = require("../../db") 
const { getUserName,validatePasswrod } = require("../controller/login.js")


const router = new Router()

//首页
router.get(['/index'], async (ctx, next) => {
  await ctx.render('index')
})

//欢迎页
router.get('/welcome', async function (ctx, next) {
      ctx.state = {
        title: 'welcome page'
      };
      await ctx.render('welcome', {title: ctx.state} );
})

// Restful风格的API
/** 
 *   前后端传递数据的api格式  ： /api/xxxxx/
 * 
*/

//登录
router.post( "/api/login", 
              async function(ctx,next){
                  let { username,password }= ctx.request.body ;
                  let isUserExit = await getUserName( username ) ;
                  if( isUserExit ){
                      let isRightPassword = await validatePasswrod( username,password );
                      if( isRightPassword ){
                          // var token = jsonwebtoken.sign({ foo: 'bar' }, 'shhhhh');
                          // console.log( token )
                          ctx.redirect('/welcome'); 
                      }else{
                            ctx.cookies.set("loginFailurMessage",new Buffer('密码错误，请重新登录！').toString('base64'),{ httpOnly: false});
                            ctx.redirect('/home');
                      }
                  }else{
                    //设置登录错误消息的cookie
                    //Buffer 类在 Node.js 中是一个全局变量，因此无需使用 require('buffer').Buffer 
                    ctx.cookies.set("loginFailurMessage",new Buffer('用户不存在！').toString('base64'),{ httpOnly: false});
                    ctx.redirect('/home');
                  }
            }
)

// other api ...

module.exports = router ;
