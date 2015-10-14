var Joi = require('joi');
var api = require('./api');

module.exports = [
    {
        method: 'GET',
        path: '/api/users',
        handler: api.users.all
    },
    {
        method: 'GET',
        path: '/api/users/{pk}',
        handler: api.users.getUser
    },
    {
        method: 'POST',
        path: '/api/users',
        config: {
            handler: api.users.createUser,
            validate: {
                payload: {
                    firstName: Joi.string().required().min(1),
                    lastName: Joi.string().required().min(1),
                    email: Joi.string().email().required()
                }
            }
        }
    },
    { // handle static file requests
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: '.',
                redirectToSlash: true,
                index: true
            }
        }
    }
];