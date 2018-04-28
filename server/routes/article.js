
const router = require("koa-router")()
const articleController = require('../controller/articleController')


router.post('/article/create',articleController.createArticle )
router.get('/article/getTitleOverview',articleController.getTitleOverview )


module.exports = router ;