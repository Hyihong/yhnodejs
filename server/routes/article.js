
const router = require("koa-router")()
const { success,failure } = require('./responseObject');



router.post('/article/create', async(ctx,next)=>{
    console.log( ctx.request.body );
    ctx.body= success('创建文章成功')
})


module.exports = router ;