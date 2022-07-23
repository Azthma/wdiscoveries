const BaseRepository = require('./BaseRepository')
const Op        = require('sequelize').Op;
const Sequelize = require('sequelize');
const activity      = require('../../database/models/acitvityModel');
const city      = require('../../database/models/cityModel');

class activitiesRepository extends BaseRepository{

    constructor(model) {
        super(model)
    }

    findAllActivities({ page, pageSize, search }) {
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

        return this.model.findAndCountAll(options);
    }

}

module.exports = new activitiesRepository(activity);