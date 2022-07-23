const db         = require('../config/db');
const activitySchema = require('./schemas/activitySchema');
const activity       = db.define('activities', activitySchema);

module.exports = activity;