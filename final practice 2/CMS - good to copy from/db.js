const { Sequelize } = require('sequelize') // destructuring

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database/cmsdb1.sqlite'
})

module.exports = sequelize