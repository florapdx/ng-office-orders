var api = require('./api');

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: function(request, reply) {
            reply().code(200);
        }
    },
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
                    firstName: Hapi.types.String().required(),
                    lastName: Hapi.types.String().required(),
                    email: Hapi.types.String().required()
                }
            }
        }
    }
];