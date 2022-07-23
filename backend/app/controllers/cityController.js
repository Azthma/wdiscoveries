const cityRepository = require('../repositories/cityRepository');
const e = require('express');

class cityController {

    constructor() {}

    async addCity(req, res, next) {
        const { ...defaults } = req.body;
        try{
            const created = await cityRepository.create({
                name: defaults.name,
                country: defaults.country,
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

    async getAllCities(req, res, next) {
        try {
            const cities = await cityRepository.findAllCities(req.query);
            return res.json(cities);
        } catch (error) {
            return res.json(error);
        }
    }

    async getCity(req, res, next) {
        try {
            const city = await cityRepository.findById(req.params.id);
            if (!!city) {
                return res.json(city);
            } else {
                return res.json({
                    message: "no data found"
                })
            }
        } catch (error) {
            return res.json(error);
        }
    }

}

const city = new cityController();

module.exports = city;
