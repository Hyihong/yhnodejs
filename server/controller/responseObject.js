/*
   功能：返回响应对象，以优化路由返回信息的重复编码
*/

exports.success = function(){
    let  o = {
        code:0,
        message: '请求成功',
        data:null
    }
    
    switch( arguments.length ){
        case 1 : o.message = arguments[0] ;
        case 2 : o.message = arguments[0],
                 o.data = arguments[1] ;
    }

    return o ;
}


exports.failure = function(){
    let  o = {
        code:1,
        message: '请求失败',
        data:null
    }
    
    switch( arguments.length ){
        case 1 : o.message = arguments[0] ;
        case 2 : o.message = arguments[0],
                 o.data = arguments[1] ;
    }

    return o ;
}