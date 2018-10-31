const Model = require('../models/usersModel.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt-as-promised')

class UserController {

  static getAllUsers(req, res, next){
    Model.getAllUsers().then(response => {
      res.json({users:response})
    })
  }

}

module.exports = UserController