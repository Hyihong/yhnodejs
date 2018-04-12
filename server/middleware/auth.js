
/**
 * 路由权限验证中间件
 * 功能：捕获jwt中间价抛出的错误：如果http header不带有 Authorization 标识，直接返回401状态
 * @param {Object} ctx  
 * @param {Function} next 
 */
module.exports =  function auth( ctx,next ){
    return function( ctx,next ){  
        return next().catch((err) => {
          console.log( err.status )
          if (err.status === 401) {
            ctx.status = 401;
            ctx.body = {
              code:-1,
              error: "请求未授权"
            };
          } else {
            throw err;
          }
        });
    }
}
