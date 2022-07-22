const user = require('../app/controllers/userController');
const city = require('../app/controllers/cityController');
const destination = require('../app/controllers/destinationsController');
var expressJwt = require('express-jwt');
const cors = require('cors');
const dotenv = require("dotenv");
dotenv.config();
const { userRegistrationRules } = require('../app/middleware/rules');
const { uploadCityFile, uploadDestinationFile } = require("../app/middleware/upload");

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
    app.get('/cities', city.getAllCities)

    // destinations
    app.post('/destination', uploadDestinationFile.single('file'), destination.addDestination);
    app.get('/destinations', destination.getAllDestinations)

    app.use(
      expressJwt({
        secret: 'this is a secret',
        algorithms: ['HS256']
      })
    );

};
