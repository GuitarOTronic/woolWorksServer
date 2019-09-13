const Model = require('../models/photosModel.js')
// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt-as-promised')

class PhotosController {

  static getPhotos(req, res, next){
    Model.getAllPhotos().then(response => {
      res.json({photos:response})
    })
  }

  static getSplashPhotos(req, res, next) {
    console.log('controller')
    Model.getSplashPhotos().then( response => {
      res.json({photos:response})
    })
  }

}

module.exports = PhotosController