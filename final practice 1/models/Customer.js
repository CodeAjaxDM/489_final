const sequelize = require('../db')
const { Model, DataTypes } = require('sequelize')

class Customer extends Model {

    static async findCustomer(customerid){
        try {
            const customer = await Customer.findByPk(customerid)
            return customer ? customer : null;
        } catch (error) {
            console.log(error)
            return null
        }
    }
}

Customer.init({
  customerid: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
  customerFirstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  customerLastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false
  },
  drinksOrdered: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  amountSpent: {
    type: DataTypes.NUMBER,
    allowNull: true
  },
  member: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
}, {
  sequelize, 
  modelName: 'Customer'
});

module.exports = Customer