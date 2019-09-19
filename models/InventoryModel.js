const db = require('../db/connections.js')
// const bcrypt = require('bcrypt-as-promised')
// const jwt = require('jsonwebtoken')
// import mockDB from '../db/mockDB'
const mockDB = require('../db/mockDB')

class InventoryModel {

  static getAllInventory() {
    return db('item')
    // .then( (res) => {
    //   console.log('res', res)
    // })
  }

  static getCategories(){
    return db('category')
    .then(res => res)
      // .returning('*')
      // .then( res => {
      //   return res
      // })
  }

  static getItem(id) {
    return db('item')
      .where('item.id', id)
      .first()
      .then(result => {
        return result
      })
  }

  static createItem(item) {
    return db('item')
      .insert(item)
      .returning('*')
      .then(([res]) => {
        return res
      })
  }
  static deleteItem(id) {
    return db('item')
      .del()
      .where('id', id)
      .then( id => {
        return id
      })

  }
}


module.exports = InventoryModel