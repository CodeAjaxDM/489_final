const sequelize = require('../db')
const { Model, DataTypes } = require('sequelize')

class Cdev extends Model {

    static async findCdev(cdevid){
        try {
            const cdev = await Cdev.findByPk(cdevid)
            return cdev ? cdev : null;
        } catch (error) {
            console.log(error)
            return null
        }
    }
}

Cdev.init({
  cdevid: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
  cdevFirstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cdevLastName: {
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
  contributer: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  student: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  employed: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: true
  },
  other: {
    type: DataTypes.STRING,
    allowNull: true,
    default: ""
  }
}, {
  sequelize, 
  modelName: 'Cdev'
});

module.exports = Cdev