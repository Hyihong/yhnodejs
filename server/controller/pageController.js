/*
*  负责页面请求路由
*/

//游客首页
const home = async (ctx, next) => {
    console.log("游客页面刷新，走后端路由")
    await ctx.render('index')
}

//管理首页
const admin = async  (ctx, next) =>{ 
    console.log(ctx.url )
    await ctx.render('welcome');
}

//404页
const page404 = async function (ctx, next) {
    ctx.state = {
      title: '错误页面'
    };
    await ctx.render('error', {message: ctx.state} );
}

module.exports = {
    home:home,
    admin:admin,
    page404:page404
}