const Joi = require('@hapi/joi');
const {scanPredictHandler, getProducts, getArticles, getSkins, verifyToken, login, register} = require('./controllers/controller.js');

module.exports = [
    // Authentication
    {
        method: 'POST',
        path: '/register',
        handler: register,
        options: {
            validate: {
                payload: Joi.object({
                    name: Joi.string().required(),
                    email: Joi.string().email().required(),
                    password: Joi.string().min(6).required()
                })
            }
        }
    },
    //login
    {
        method: 'POST',
        path: '/login',
        handler: login,
        options: {
            validate: {
                payload: Joi.object({
                    email: Joi.string().email().required(),
                    password: Joi.string().min(6).required()
                })
            }
        }
    },
    //predict
    {
        path: '/predict',
        method: 'POST',
        handler: scanPredictHandler,
        options: {
            payload: {
                allow: 'multipart/form-data',
                multipart: true
            },
        },
    },

    // Skins
    {
        method: 'GET',
        path: '/skins',
        handler: getSkins,
        options: {
            pre: [{ method: verifyToken }],
        },
    },

    // Articles
    {
        method: 'GET',
        path: '/articles',
        handler: getArticles,
        options: {
            pre: [{ method: verifyToken }],
        },
    },

    // Products
    {
        method: 'GET',
        path: '/products',
        handler: getProducts,
        options: {
            pre: [{ method: verifyToken }],
        },
    },
];
