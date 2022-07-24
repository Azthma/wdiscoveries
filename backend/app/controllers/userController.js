const userRepository = require('../repositories/userRepository');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const e = require('express');
const { validationResult } = require('express-validator');

class userController {

    constructor() {}

    async register(req, res, next) {
        const errors = validationResult(req);
        if(errors.errors != ''){
            return res.json(errors)
        }
        const { ...defaults } = req.body;
        try{
            const user = await userRepository.findByEmail(defaults.email);
            const hash = bcrypt.hashSync(defaults.password, 10);
            if(!user) {
                const created = await userRepository.create({
                    type: defaults.type == undefined ? 'user' : defaults.type,
                    name: defaults.name,
                    gender: defaults.gender,
                    birthdate: defaults.birthdate,
                    image: defaults.image,
                    address: defaults.address,
                    email: defaults.email,
                    password: hash,
                    image: req.file == undefined ? 'default.png' : req.file.filename
                });
                return res.json({
                    created: true,
                    message: "success",
                    user: created,
                })
            }
            else {
                return res.json({
                    created: false,
                    message: "Email is already in use.",
                })
            }
        }
        catch(error){
          return res.json(error);
        }
    }

    async login(req, res, next) {
        try {
            const { ...defaults } = req.body
            const user = await userRepository.findByEmail(defaults.email);
            if(!!user){
                let checkPassword = !!user ? await bcrypt.compare(defaults.password, user.password) : null;
                if(!!checkPassword){
                    let token = jwt.sign(
                        {
                            id: user.id,
                            type: user.type,
                            name: user.name,
                            gender: user.gender,
                            birthdate: user.birthdate,
                            address: user.address,
                            email: user.email,
                            image: user.image,
                            exp: Math.floor(Date.now() / 1000) + 60 * (60 * 24)
                        },
                        process.env.JWT_SECRET
                    );
                    return res.json({
                        success: true,
                        user: {
                            id: user.id,
                            type: user.type,
                            name: user.name,
                            gender: user.gender,
                            birthdate: user.birthdate,
                            address: user.address,
                            email: user.email,
                            token
                        },
                    });
                }
                else{
                    return res.json({
                        success: false,
                        error: "Invalid password",
                    });
                }
            }
            else {
                return res.json({
                    success: false,
                    error: "Invalid email",
                });
            }
        } catch (error) {
            return res.json(error)
        }
    }

}

const user = new userController();

module.exports = user;
