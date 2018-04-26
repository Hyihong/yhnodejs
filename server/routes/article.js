
const router = require("koa-router")()
const articleController = require('../controller/articleController')


router.post('/article/create',articleController.createArticle )


module.exports = router ;