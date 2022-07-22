const db         = require('../config/db');
const destinationsSchema = require('./schemas/destinationsSchema');
const destinations       = db.define('destinations', destinationsSchema);
const city       = require('./cityModel');

destinations.belongsTo(city, { foreignKey: 'city_id', as: 'city' });

module.exports = destinations;