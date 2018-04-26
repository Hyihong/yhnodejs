const { queryData } = require("../../db") 

async function db_insertCreateInfo( id, title,content,type, time ){
    var result;
    let sql = `INSERT INTO article
                   (article_id, article_title,article_content,article_author,article_type,create_time,last_eidt_time) 
                VALUES
                ("${id}","${title}","${content}","陈艺虹",${type},"${time}","${time}" )
                `;
    try{
         result  =  await queryData(sql)
    }catch(e){
        result = { code:"数据库操作失败", message: e.code };
    }
    return result ;
}

exports.db_insertCreateInfo =  db_insertCreateInfo;