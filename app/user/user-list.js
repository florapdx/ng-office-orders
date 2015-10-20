const UserList = () => {
    return {
        scope: {
            users: '=users'
        },
        controllerAs: 'userListCtrl',
        bindToController: true,
        controller: (UserService) => {
            return {
                users: UserService.getAllUsers()
            };
        },
        templateUrl: 'user-list.html'
    };
};

export default UserList;