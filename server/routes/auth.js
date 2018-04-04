
/**
 * 路由权限验证中间件
 * @param {Object} ctx  
 * @param {Function} next 
 */
exports.auto =  function auth( ctx,next ){
    return async function( ctx,next ){
      console.log("权限验证");
       await next();
    } 
  }