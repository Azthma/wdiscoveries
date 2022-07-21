const user = require('../app/controllers/userController');
var expressJwt = require('express-jwt');
const cors = require('cors');
const dotenv = require("dotenv");
dotenv.config();
const { userRegistrationRules } = require('../app/middleware/rules');

module.exports = function(app) {

    const corsOptions ={
        origin:process.env.CORS_WHITELIST,
        credentials:true,
        optionSuccessStatus:200
    }
    app.use(cors(corsOptions));

    app.post('/register', userRegistrationRules(), user.register);
    app.post('/login', user.login);

    app.use(
      expressJwt({
        secret: 'this is a secret',
        algorithms: ['HS256']
      })
    );

};
