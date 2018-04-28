
const { queryData } = require("../../db") 

async function getUserName( username ){
    let sql = `SELECT user_name FROM user where user_name ='${username}'`;
    var result  =  await queryData(sql) ;
    return !!result[0];
}

async function validatePasswrod( username,password ){
    let sql = `SELECT user_password FROM user where user_name ='${username}'`;
    var result  =  await queryData(sql) ;
    return  result[0].user_password ===  password ;
}

exports.getUserName =  getUserName;
exports.validatePasswrod =  validatePasswrod;