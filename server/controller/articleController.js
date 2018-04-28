
const uuidv1 = require('uuid/v1');
const { db_insertCreateInfo,db_selectArticleOverview } = require("../models/article.js")
const { success,failure } = require('./responseObject');
const { queryData } = require("../../db") 

//创建文章
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

async function getTitleOverview( ctx,next ){
    const result = await db_selectArticleOverview() ;
    ctx.body= success('请求成功',result)
}

//查询文章概览
exports.createArticle =  createArticle;
exports.getTitleOverview =  getTitleOverview;
