

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
        if (error) throw error ;
        resolve( results[0] ) ;
        connection.end() ;
      });
  }) 
 
  return rtn;
}


