import angular from 'angular';
import service from './service';
import UserList from './user-list';
import UserProfile from './user-profile';

let app = angular.module('officeOrderNG');

app.factory('UserService', service);
app.directive('userList', UserList);
app.directive('userProfile', UserProfile);