const router = require("koa-router")()
const loginController = require("../controller/loginController");

router.get("/api/authCheck",loginController.authCheck ) // 登录鉴权
router.post("/api/public/login", loginController.login ) //登录验证

module.exports = router ;