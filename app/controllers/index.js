import angular from 'angular';
import VendorController from './vendor/controller';
import UserController from './user/controller';

let app = angular.module('officeOrderNG');
app.controller('VendorCtrl', VendorController);
app.controller('UserCtrl', UserController);