const { getUserName,validatePasswrod } = require("../models/login.js")
const jsonwebtoken = require('jsonwebtoken');
const { success,failure } = require('./responseObject');
const config = require("../../config/serverConfig.js")

const login = async function(ctx,next){
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
              ctx.body = failure('密码错误，请重新登录！');
        }
    }else{
      ctx.body = ctx.body = failure('用户不存在！');
    }
}


const authCheck = async ( ctx,next )=>{
    //进入该路由表示已通过授权认证， jsonwebtoken.verify 验证功能已在 koa-jwt 中间件中进行
    ctx.body={
      message: '已通过验证',
      code: 0
    }
}

module.exports ={
    login:login,
    authCheck:authCheck 
}
