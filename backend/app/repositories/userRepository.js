const BaseRepository = require('./BaseRepository')
const Op        = require('sequelize').Op;
const Sequelize = require('sequelize');
const user      = require('../../database/models/userModel');

class userRepository extends BaseRepository{

    constructor(model) {
        super(model)
    }

    findByEmail(email, fields) {
        const options = {
            where: { email },
        };
        if (!!fields && fields) {
            options.attributes = fields;
        }
        return this.model.findOne(options);
    }

}

module.exports = new userRepository(user);
