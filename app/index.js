import angular from 'angular';
//import angularMaterial from 'angular-material';

let app = angular.module('officeOrderNG', [require('angular-route')]);

require('./user');

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'home.html'
            })
    }
]);
