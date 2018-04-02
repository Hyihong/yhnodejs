

var Router = require("koa-router");
const router = new Router()

const { queryData } = require("../../db") 

var userRouter = require('./users');

router.get('/home', async (ctx, next) => {
  
  const data =  await queryData("SELECT * FROM runoob_tbl where runoob_title = 3");
  ctx.state = {
    title: data.runoob_author
  }
  await ctx.render('index')
})



router.get('/welcome', async function (ctx, next) {
      ctx.state = {
        title: 'welcome page'
      };
  
      await ctx.render('welcome', {title: ctx.state} );
})

router.get("/test",async function(ctx,next){
     console.log("收到test请求")
})

router.post("/login",async function(ctx,next){
       ctx.state = {
           username: ctx.request.body.username,
           password: ctx.request.body.password
       };

       ctx.body = 'Hello World!';
      
})

module.exports = router ;
