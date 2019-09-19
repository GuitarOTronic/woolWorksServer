const router =  require ('express').Router()
const Controller = require('../controllers/InventoryController.js')

router.get('/', Controller.getCategories)
router.get('/:id', Controller.getItem)
router.post('/', Controller.createItem)
router.delete('/:id', Controller.deleteItem)
// router.get(':styleId', Controller.getStyle)

module.exports = router;