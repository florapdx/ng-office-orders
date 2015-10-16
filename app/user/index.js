import angular from 'angular';
import service from './service';
import UserList from './user-list';
import UserProfile from './user-profile';

angular.module('officeOrderNG')
    .factory('UserService', service)
    .directive('userList', UserList)
    .directive('userProfile', UserProfile);