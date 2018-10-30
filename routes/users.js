const router =  require ('express').Router()
const Controller = require('../controllers/users-controller.js')


router.get('/', Controller.getAllUsers)