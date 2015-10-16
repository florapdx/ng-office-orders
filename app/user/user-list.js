const UserList = () => {
    return {
        controllerAs: 'userListCtrl',
        controller: (UserService) => {
            return {
                users: UserService.getAllUsers()
            };
        },
        //templateUrl: 'user-list.html',
        template:
            '<ul ng-repeat="user in userListCtrl.users">' +
               '<li>' +
                '<img ng-src="{{user.avatar}}" />' +
                   '<span>{{user.firstName}} {{user.lastName}}</span>' +
                    '<span>{{user.email}}</span>' +
                '</li>' +
           '</ul>'
    };
};

export default UserList;