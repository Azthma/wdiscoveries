const db         = require('../config/db');
const delicacySchema = require('./schemas/delicacySchema');
const delicacy       = db.define('delicacies', delicacySchema);

module.exports = delicacy;