const delicacyRepository = require('../repositories/delicacyRepository');
const e = require('express');

class delicacyController {

    constructor() {}

    async addDelicacy(req, res, next) {
        const { ...defaults } = req.body;
        try{
            const created = await delicacyRepository.create({
                name: defaults.name,
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

    async getAllDelicacies(req, res, next) {
        try {
            const delicacies = await delicacyRepository.findAllDelicacies(req.query);
            return res.json(delicacies);
        } catch (error) {
            return res.json(error);
        }
    }

}

const delicacy = new delicacyController();

module.exports = delicacy;
