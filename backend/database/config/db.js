const Sequelize = require('sequelize');

module.exports = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  dialectOptions: {
    dateStrings: true,
    typeCast: function (field, next) {
      // for reading from database
      if (field.type === 'DATETIME') {
        return field.string();
      }
      return next();
    }
  },
  timezone: '+08:00',
  define: {
    underscored: true,
    paranoid: true,
    timestamps: true
  }
});
