
const fs = require('fs');
const path = require('path')
const mysql = require('mysql')

const sqlList = fs.readFileSync( path.resolve(__dirname,'../sql/init.sql'), 'utf8' );


const connection = mysql.createConnection({
    host     : '127.168.4.45',   // 数据库地址
    user     : 'root',    // 数据库用户
    password : 'cyh0726', // 数据库密码
    database : 'cyh'  // 选中数据库
})


sqlList.split(";").map( sql => {
    //最后一条为回车换行
    if(sql !== '\r\n'){
        connection.query( sql , (error, results, fields) => {
            console.log(sql)
            if (error) throw error ;
            console.log("执行完毕！")
        });
    }
  
})
