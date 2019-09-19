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
        res.json({ inventory: response })
      })
  }

  static getCategories(req, res, next){
    console.log('getCategories')
    InventoryModel.getCategories()
      .then((categories) => {
        console.log("then cont",categories)
        res.status(200).json({categories})
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