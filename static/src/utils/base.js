//判断是否是数组
export const isArray = function isArray(object){
    return object && typeof object==='object' &&
            Array === object.constructor;
}


// 获取get请求中query的参数
export const getQueryString = function getQueryString(search,name) {
//&+url参数名字=值+&
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = search.slice(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}
