
const router = require("koa-router")()
const articleController = require('../controller/articleController')


router.post('/article/create',articleController.createArticle )
router.post('/article/modify',articleController.modifyArticle )
router.get('/public/article/getTitleOverview',articleController.getTitleOverview )
router.get('/public/article/getDetail',articleController.getDetailArticle )
router.get('/article/delete',articleController.deleteArticle )


module.exports = router ;