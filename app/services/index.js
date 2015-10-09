import angular from 'angular';
import UserService from './user-service';
import VendorService from './vendor-service';

let app = angular.module('officeOrderNG');
app.factory('UserSrvc', UserService);
app.factory('VendorSrvc', VendorService);