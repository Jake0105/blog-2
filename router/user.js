const Router = require('koa-router')
const router = new Router()
const userController = require('../controller/user')


router.post('/register', userController.register)
router.get('/list', userController.list)
router.del('/del/:id', userController.del)
module.exports = router