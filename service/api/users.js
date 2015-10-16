var User = require('../models').User;

module.exports = {
    all: function(request, reply) {
        User.findAll().then(function(users) {
            reply(users).code(200);
        });
    },

    getUser: function(request, reply) {
        User.find(request.params.pk).then(function(user) {
            reply(user).code(200);
        });
    },

    createUser: function(request, reply) {
        var data = request.payload.userData;

        User.create({
         firstName: data.firstName,
         lastName: data.lastName,
         email: data.email
        });
    }
};