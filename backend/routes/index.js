const user = require('../app/controllers/userController');
const city = require('../app/controllers/cityController');
const destination = require('../app/controllers/destinationsController');
const delicacy = require('../app/controllers/delicacyController');
const activity = require('../app/controllers/activityController');
const manga = require('../app/controllers/mangaController');
var expressJwt = require('express-jwt');
const cors = require('cors');
const dotenv = require("dotenv");
dotenv.config();
const { userRegistrationRules } = require('../app/middleware/rules');
const { uploadCityFile, uploadDestinationFile, uploadDelicacyFile, uploadActivityFile, uploadMangaFile, uploadMangaListFile } = require("../app/middleware/upload");

module.exports = function(app) {

    const corsOptions ={
        origin:process.env.CORS_WHITELIST,
        credentials:true,
        optionSuccessStatus:200
    }
    app.use(cors(corsOptions));

    app.post('/register', userRegistrationRules(), user.register);
    app.post('/login', user.login);

    // city
    app.post('/city', uploadCityFile.single('file'), city.addCity);
    app.get('/cities', city.getAllCities);
    app.get('/city/:id', city.getCity);

    // destination
    app.post('/destination', uploadDestinationFile.single('file'), destination.addDestination);
    app.get('/destinations', destination.getAllDestinations);
    app.get('/city/destinations/:city_id', destination.getAllDestinationsByCity);

    // delicacy
    app.post('/delicacy', uploadDelicacyFile.single('file'), delicacy.addDelicacy);
    app.get('/delicacies', delicacy.getAllDelicacies);

    // activity
    app.post('/activity', uploadActivityFile.single('file'), activity.addActivity);
    app.get('/activities', activity.getAllActivities);

    // manga
    app.post('/upload-manga-list-image', uploadMangaListFile.single('file'));
    app.post('/manga', uploadMangaFile.single('file'), manga.addMangaPost);
    app.get('/mangas', manga.getAllMangas);
    app.get('/manga/:id', manga.getManga);

    app.use(
      expressJwt({
        secret: 'this is a secret',
        algorithms: ['HS256']
      })
    );

};
