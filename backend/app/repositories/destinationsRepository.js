const BaseRepository = require('./BaseRepository')
const Op        = require('sequelize').Op;
const Sequelize = require('sequelize');
const destinations      = require('../../database/models/destinationsModel');
const city      = require('../../database/models/cityModel');

class destinationsRepository extends BaseRepository{

    constructor(model) {
        super(model)
    }

    findAllDestinations(fields, include) {
        const options = {};
        if (!!fields && fields) {
            options.attributes = fields;
        }
        if (!!include && Array.isArray(include)) {
          options.include = include;
        }
        options.include = [
          { model: city, as: 'city' },
        ];
        return this.model.findAndCountAll(options);
    }

}

module.exports = new destinationsRepository(destinations);