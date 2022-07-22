const BaseRepository = require('./BaseRepository')
const Op        = require('sequelize').Op;
const Sequelize = require('sequelize');
const city      = require('../../database/models/cityModel');

class cityRepository extends BaseRepository{

    constructor(model) {
        super(model)
    }

}

module.exports = new cityRepository(city);
