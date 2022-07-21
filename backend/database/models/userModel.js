const db         = require('../config/db');
const userSchema = require('./schemas/userSchema');
const user       = db.define('users', userSchema);

module.exports = user;