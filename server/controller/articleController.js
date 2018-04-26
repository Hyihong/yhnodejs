
const uuidv1 = require('uuid/v1');
const { db_insertCreateInfo } = require("../models/article.js")
const { success,failure } = require('./responseObject');
const { queryData } = require("../../db") 

async function createArticle( ctx,next ){
    const { title, content,type } = ctx.request.body ;
    const id = uuidv1(); //生成文章ID
    const result = await db_insertCreateInfo( id,title,content,type,new Date().toLocaleString() ) ;
    if( result === true){
        ctx.body= success('创建文章成功')
    }else{
        ctx.body= failure('创建失败！'+ result.message )
    }
}

exports.createArticle =  createArticle;
