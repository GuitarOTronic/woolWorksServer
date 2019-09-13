const db = require('../db/connections.js')
// const bcrypt = require('bcrypt-as-promised')
// const jwt = require('jsonwebtoken')
// import mockDB from '../db/mockDB'
const mockDB = require('../db/mockDB')

class InventoryModel {

    static getAllInventory(){
        return db('inventory')
        // .then( (res) => {
        //   console.log('res', res)
        // })
      }
}


module.exports = InventoryModel