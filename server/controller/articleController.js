
const uuidv1 = require('uuid/v1');
const { db_insertCreateInfo,db_selectArticleOverview,db_getArticleDetail,db_modifyArticle } = require("../models/article.js")
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
//修改文章
async function modifyArticle( ctx,next ){
    const result = await db_modifyArticle(ctx.request.body);
    ctx.body= success('修改文章成功',{})
}

//查询文章概览
async function getTitleOverview( ctx,next ){
    const result = await db_selectArticleOverview() ;
    ctx.body= success('请求成功',result)
}

//获取文章详情
async function getDetailArticle( ctx,next){
    const result = await db_getArticleDetail(ctx.query.id);
    ctx.body= success('请求成功',result);
}


module.exports = {
    createArticle: createArticle,
    getTitleOverview: getTitleOverview,
    getDetailArticle: getDetailArticle,
    modifyArticle: modifyArticle
}

