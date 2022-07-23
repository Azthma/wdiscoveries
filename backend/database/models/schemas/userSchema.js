const Sequelize = require('sequelize');

const userSchema = {
  id: {
    type: Sequelize.INTEGER(11).UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  type: {
    type: Sequelize.STRING,
    defaultValue: 'user'
  },
  name: {
    type: Sequelize.STRING
  },
  gender: {
    type: Sequelize.STRING
  },
  birthdate: {
    type: Sequelize.DATEONLY
  },
  address: {
    type: Sequelize.STRING
  },
  image: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  created_at: {
    type: 'TIMESTAMP',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false
  },
  updated_at: {
    type: 'TIMESTAMP',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false
  },
  deleted_at: {
    type: Sequelize.DATE,
    defaultValue: null
  }
};

module.exports = userSchema;
