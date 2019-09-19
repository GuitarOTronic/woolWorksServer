const db = require('../db/connections.js')
// const bcrypt = require('bcrypt-as-promised')
// const jwt = require('jsonwebtoken')


class PhotosModel {

    static getAllPhotos(){
        return db('users')
      }
}


module.exports = PhotosModel