const router =  require ('express').Router()
const Controller = require('../controllers/photosController.js')


router.get('/photos', Controller.getPhotos)
router.get('/splash', Controller.getSplashPhotos)
module.exports = router;