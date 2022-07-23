const activitiesRepository = require('../repositories/activitiesRepository');
const e = require('express');

class activityController {

    constructor() {}

    async addActivity(req, res, next) {
        const { ...defaults } = req.body;
        try{
            const created = await activitiesRepository.create({
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

    async getAllActivities(req, res, next) {
        try {
            const activities = await activitiesRepository.findAllActivities(req.query);
            return res.json(activities);
        } catch (error) {
            return res.json(error);
        }
    }

}

const activity = new activityController();

module.exports = activity;
