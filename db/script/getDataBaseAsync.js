

const mysql  = require('mysql');


module.exports = async function queryData( sql ){

  const connection = mysql.createConnection({
        host     : '127.168.4.45',   // 数据库地址
        user     : 'root',    // 数据库用户
        password : 'cyh0726', // 数据库密码
        database : 'cyh'  // 选中数据库
  })
  

  const rtn = await new Promise((resolve,reject)=>{
      connection.query( sql , (error, results, fields) => {
        if (error) {
            reject( error ) ;
        };
    
        if( Object.prototype.toString.call( results )=='[object Array]' ){
            //查询结果
            resolve( results ) ;
        }
        if( Object.prototype.toString.call( results )=='[object Object]'){
            resolve( true )
        }

        connection.end() ;
      })
  })
  return rtn;
}


