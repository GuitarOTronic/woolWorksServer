const InventoryModel = require('../models/InventoryModel.js')
// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt-as-promised')

class InventoryController {
  // getAllInventory
  // getItem
  // getStyle
  static getAllInventory(req, res, next) {
    InventoryModel.getAllInventory()
      .then(response => {
        console.log('here')
        res.json({ inventory: response })
      })
  }
}

module.exports = InventoryController