

var Router = require("koa-router");
const router = new Router()

const { queryData } = require("../../db") 

var userRouter = require('./users');

//首页
router.get('/home', async (ctx, next) => {
  const data =  await queryData("SELECT * FROM runoob_tbl where runoob_title = 3");
  ctx.state = {
    title: data.runoob_author
  }
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
router.post("/api/login",async function(ctx,next){
      //  ctx.state = {
      //      username: ctx.request.body.username,
      //      password: ctx.request.body.password
      //  };
     if( false ){
        ctx.redirect('/welcome'); 
     }else{
        //设置登录错误消息的cookie
        //Buffer 类在 Node.js 中是一个全局变量，因此无需使用 require('buffer').Buffer 
        ctx.cookies.set("loginFailurMessage",new Buffer('错误消息').toString('base64'),{ httpOnly: false}); 
        ctx.redirect('/home');
        //ctx.body = "登录失败";
     }
       
})

// other api ...

module.exports = router ;
