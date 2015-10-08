var Hapi = require('hapi');
var hapiAuthCookie = require('hapi-auth-cookie');
var good = require('good');
var models = require('./service/models');
var routes = require('./service/routes');

var server = new Hapi.Server();

server.connection({
    host: '0.0.0.0',
    port: process.env.PORT || 8000
});

server.register([
    {
        register: good,
        options: {
            reporters: [{
                reporter: require('good-console'),
                events: {log: '*', response: '*', error: '*'}
            }]
        }
    }
], function(err) {
    if (err) {
        throw err;
    }
});

server.route(routes);

models.sequelize.sync().then(function() {
    server.start(function() {
        console.log('Server running at:', server.info.uri);
    });
});