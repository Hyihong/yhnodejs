
const mysql  = require('mysql');


async function queryData(){
  const connection = mysql.createConnection({
    host     : '127.168.4.45',   // 数据库地址
    user     : 'root',    // 数据库用户
    password : 'cyh0726', // 数据库密码
    database : 'cyh'  // 选中数据库
  })
  

  const rtn = await new Promise((resolve,reject)=>{
      connection.query('SELECT * FROM runoob_tbl where runoob_title = 3',  (error, results, fields) => {
        if (error) throw error ;
        // connected! 
        resolve(results[0].runoob_author) ;
        connection.end() ;
      });
  }) 
 
  return rtn;
}


var Router = require("koa-router");
const router = new Router()

var userRouter = require('./users');

router.get('/home', async (ctx, next) => {
  const data =  await queryData();
  ctx.state = {
    title: data
  }
  await ctx.render('index', { title:ctx.state})
})



router.get('/welcome', async function (ctx, next) {
      ctx.state = {
        title: 'welcome page'
      };
  
      await ctx.render('welcome', {title: ctx.state} );
})

module.exports = router ;
