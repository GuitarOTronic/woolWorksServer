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

  static getItem(req, res) {
    const { id } = req.params
    InventoryModel.getItem(id)
      .then(item => {
        res.json({ item })
      })
  }

  static createItem(req, res) {
    InventoryModel.createItem(req.body)
      .then(item => {
        res.status(201).json({ item })
      })
  }

  static deleteItem(req, res) {
    const {id} = req.params
    InventoryModel.deleteItem(id)
      .then(id => {
        res.status(200).json({id})
      })
      .catch(err => {
        throw err
        console.log("adf",err)
      }  )
  } 
}

module.exports = InventoryController