const router =  require ('express').Router()
const Controller = require('../controllers/usersController.js')


router.get('/', Controller.getAllUsers)

module.exports = router;