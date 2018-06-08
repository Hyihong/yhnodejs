
const router = require("koa-router")()
const articleController = require('../controller/articleController')


router.post('/article/create',articleController.createArticle )
router.post('/article/modify',articleController.modifyArticle )
router.get('/article/getTitleOverview',articleController.getTitleOverview )
router.get('/article/getDetail',articleController.getDetailArticle )


module.exports = router ;