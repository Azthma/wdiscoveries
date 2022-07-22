const destinationsRepository = require('../repositories/destinationsRepository');
const e = require('express');

class destinationsController {

    constructor() {}

    async addDestination(req, res, next) {
        const { ...defaults } = req.body;
        try{
            const created = await destinationsRepository.create({
                name: defaults.name,
                city_id: defaults.city_id,
                info: defaults.info,
                image: req.file == undefined ? 'default.jpg' : req.file.filename
            });
            return res.json({
                created: true,
                message: "success",
                city: created
            });
        }
        catch(error){
          return res.json(error);
        }
    }

    async getAllDestinations(req, res, next) {
        try {
            const cities = await destinationsRepository.findAllDestinations();
            return res.json(cities);
        } catch (error) {
            return res.json(error);
        }
    }

}

const destinations = new destinationsController();

module.exports = destinations;
