const sequelize = require('../db')
const { Model, DataTypes } = require('sequelize')

class User extends Model {

    static async findUser(first_name, last_name, email){
        try {
            const user = await User.findByPk(first_name, last_name, email)
            if(user){
                return user
            }else{
                return null
            }
        } catch (error) {
            console.log(error)
            return null
        }
    }

}

User.init({
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  sequelize, 
  modelName: 'User'
});

module.exports = User