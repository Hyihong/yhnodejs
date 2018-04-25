const { queryData } = require("../../db") 

async function getUserName( username ){
    let sql = `SELECT user_name FROM user where user_name ='${username}'`;
    var result  =  await queryData(sql) ;
    return !!result;
}


exports.getUserName =  getUserName;
