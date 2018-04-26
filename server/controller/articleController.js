const { queryData } = require("../../db") 
const { success,failure } = require('./responseObject');

async function createArticle( ctx,next ){
    console.log( ctx.request.body );
    ctx.body= success('创建文章成功')
}

exports.createArticle =  createArticle;
