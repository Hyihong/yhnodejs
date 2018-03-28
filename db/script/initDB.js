
const fs = require('fs');
const path = require('path')
const mysql = require('mysql')

const sql = fs.readFileSync( path.resolve(__dirname,'../sql/init.sql'), 'utf8' );


const connection = mysql.createConnection({
    host     : '127.168.4.45',   // 数据库地址
    user     : 'root',    // 数据库用户
    password : 'cyh0726', // 数据库密码
    database : 'cyh'  // 选中数据库
})


connection.query( sql , (error, results, fields) => {
    if (error) throw error ;
    console.log( results )
});