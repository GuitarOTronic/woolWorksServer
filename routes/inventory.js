const router =  require ('express').Router()
const Controller = require('../controllers/InventoryController.js')

router.get('/', Controller.getAllInventory)
// router.get('/:id', Controller.getItem)
// router.get(':styleId', Controller.getStyle)

module.exports = router;