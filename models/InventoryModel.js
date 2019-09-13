const db = require('../db/connections.js')
// const bcrypt = require('bcrypt-as-promised')
// const jwt = require('jsonwebtoken')
// import mockDB from '../db/mockDB'
const mockDB = require('../db/mockDB')

class InventoryModel {

  static getAllInventory() {
    return db('inventory')
    // .then( (res) => {
    //   console.log('res', res)
    // })
  }

  static getItem(id) {
    return db('inventory')
      .where('inventory.id', id)
      .first()
      .then(result => {
        return result
      })
  }

  static createItem(item) {
    return db('inventory')
      .insert(item)
      .returning('*')
      .then(([res]) => {
        return res
      })
  }
  static deleteItem(id) {
    return db('inventory')
      .del()
      .where('id', id)
      .then( id => {
        return id
      })

  }
}


module.exports = InventoryModel