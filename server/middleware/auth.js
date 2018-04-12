
/**
 * 路由权限验证中间件
 * @param {Object} ctx  
 * @param {Function} next 
 */
module.exports =  function auth( ctx,next ){
    console.log("经过auth中间件")
    return function( ctx,next ){  
        return next().catch((err) => {
          if (err.status === 401) {
            ctx.status = 401;
            ctx.body = {
              //error: err.originalError ? err.originalError.message : err.message
              error: 'token验证不成功，请带上正确的token'
            };
          } else {
            throw err;
          }
        });
    }
}
