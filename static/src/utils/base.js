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


/**
   * UTCformat 转换UTC时间并格式化成本地时间
   * @param {string} utc
   */
  export const  UTCformat = function(utc) {
    var date = new Date(utc),
        y = date.getFullYear(),
        month = date.getMonth()+1 > 9 ? date.getMonth()+1 : '0' + parseInt(date.getMonth()+1),
        day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate(),
        h =  date.getHours() > 9 ? date.getHours() : '0' + date.getHours(),
        m = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes(),
        s = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds();
    var res = y + '-' + month + '-' + day + ' ' + h + ':' + m;
    return res;
  }
