const BaseRepository = require('./BaseRepository')
const Op        = require('sequelize').Op;
const Sequelize = require('sequelize');
const manga      = require('../../database/models/mangaModel');

class mangaRepository extends BaseRepository{

    constructor(model) {
        super(model)
    }

    findAllMangas({ page, pageSize, search }) {
        pageSize = !!pageSize ? pageSize : 10;
        page = !!page ? page : 1;
        const offset = (page - 1) * parseInt(pageSize) || 0;
        const limit = parseInt(pageSize) || 10;

        const options = {
            offset: offset,
            limit: limit
        };

        return this.model.findAndCountAll(options);
    }

}

module.exports = new mangaRepository(manga);
