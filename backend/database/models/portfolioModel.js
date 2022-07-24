const db         = require('../config/db');
const portfolioSchema = require('./schemas/portfolioSchema');
const portfolio       = db.define('portfolios', portfolioSchema);
const user       = require('./userModel');

portfolio.belongsTo(city, { foreignKey: 'user_id', as: 'user' });

module.exports = portfolio;