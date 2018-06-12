const { queryData } = require("../../db") 

//创建文章（数据库插入）
async function db_insertCreateInfo( id, title,content,type, time ){
    let result;
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

//请求文章概览数据（包括文章ID,文章标题，文章类型 ）
async function db_selectArticleOverview(){
    let result;
    let sql = `SELECT article_id AS ID,
                      article_title AS title,
                      article_type AS type,
                      CONCAT ( SUBSTRING(article_content,1,70),"...") AS overview,
                      last_eidt_time as lastTime 
                from article`;
    try{
         result  =  await queryData(sql)
    }catch(e){
        result = { code:"数据库操作失败!", message: e.code };
    }
    return result ;
}

//根据文章ID获取文章详细信息
async function db_getArticleDetail(id){
    let result;
    let sql = `SELECT article_id AS ID,article_title AS title,article_content AS content,article_type AS type from article WHERE article_id="${id}"`;
    try{
         result  =  await queryData(sql)
    }catch(e){
        result = { code:"数据库操作失败!", message: e.code };
    }
    return result ;
}

async function db_modifyArticle(modify){
    let result;
    let sqlParts="";
    let m = Object.keys(modify);
    m.map( (key,idx) =>{
        if(key.toLocaleUpperCase()!='ID'){
            sqlParts += `article_${key} = "${modify[key]}"`  
            if(idx !== m.length - 2){
                sqlParts+=','
            }
        }
    })
    let sql =  `UPDATE article SET ${sqlParts} WHERE article_id="${modify.id}" `;
    try{
        result  =  await queryData(sql)
    }catch(e){
        result = { code:"数据库操作失败!", message: e.code };
    } 
    return result;
}
module.exports ={
    db_insertCreateInfo:db_insertCreateInfo,
    db_selectArticleOverview:db_selectArticleOverview,
    db_getArticleDetail:db_getArticleDetail,
    db_modifyArticle:db_modifyArticle,
}

