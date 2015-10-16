import angular from 'angular';
import angularMaterial from 'angular-material';
import 'angular-route';

let app = angular.module('officeOrderNG', [angularMaterial, 'ngRoute']);

// es6 imports are hoisted (see specification:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-moduledeclarationinstantiation)
// hence the require()
require('./user');

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'home.html',
                controller: (UserService) => {
                    // populate user service store
                    UserService.api.fetchAllUsers();
                }
            });
    }
]);