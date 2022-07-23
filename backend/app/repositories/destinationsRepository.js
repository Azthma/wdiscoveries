const BaseRepository = require('./BaseRepository')
const Op        = require('sequelize').Op;
const Sequelize = require('sequelize');
const destinations      = require('../../database/models/destinationsModel');
const city      = require('../../database/models/cityModel');

class destinationsRepository extends BaseRepository{

    constructor(model) {
        super(model)
    }

    findAllDestinations({ page, pageSize, search }, include) {
        pageSize = !!pageSize ? pageSize : 10;
        page = !!page ? page : 1;
        const offset = (page - 1) * parseInt(pageSize) || 0;
        const limit = parseInt(pageSize) || 10;

        const options = {
            where: {
                [Op.and]: [
                    {
                      name :{
                        [Op.like]: `%${search || ""}%`
                      }
                    }, {
                      id :{
                        [Op.like]: `%${search || ""}%`
                      }
                    }
                ],
            },
            offset: offset,
            limit: limit
        };

        if (!!include && Array.isArray(include)) {
          options.include = include;
        }
        options.include = [
          { model: city, as: 'city' },
        ];
        return this.model.findAndCountAll(options);
    }

    findByCity(city_id = 0) {
        const options = {
            where: { city_id },
        };
        return this.model.findAndCountAll(options);
    }

}

module.exports = new destinationsRepository(destinations);