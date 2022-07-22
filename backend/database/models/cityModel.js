const db         = require('../config/db');
const citySchema = require('./schemas/citySchema');
const city       = db.define('cities', citySchema);

module.exports = city;