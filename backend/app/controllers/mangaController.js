const mangaRepository = require('../repositories/mangaRepository');
const e = require('express');

class mangaController {

    constructor() {}

    async addMangaPost(req, res, next) {
        const { ...defaults } = req.body;
        try{
            const created = await mangaRepository.create({
                title: defaults.title,
                description: defaults.description,
                image: req.file == undefined ? 'default.jpg' : req.file.filename,
                manga_lists: defaults.manga_lists
            });
            return res.json({
                created: true,
                message: "success",
                data: created
            });
        }
        catch(error){
          return res.json(error);
        }
    }

    async getAllMangas(req, res, next) {
        try {
            const manga = await mangaRepository.findAllMangas(req.query);
            return res.json(manga);
        } catch (error) {
            return res.json(error);
        }
    }

    async getManga(req, res, next) {
        try {
            const data = await mangaRepository.findById(req.params.id);
            if (!!data) {
                return res.json(data);
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

const manga = new mangaController();

module.exports = manga;
