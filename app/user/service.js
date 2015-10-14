import angular from 'angular';

const UserService = ($http) => {
    const _users = [];
    const _currentUser = {};

    return {
        getAllUsers() {
            return _users;
        },

        getUser() {
            return _currentUser;
        },

        // unsure how I feel about this -- could be a separate service
        api() {
            return {
                fetchAllUsers() {
                    debugger;
                    $http.get('/api/users').then((resp) => {
                        console.log("ALL_USERS: ", resp);
                        debugger;
                    }).catch((err) => {
                        debugger;
                    });
                },

                createNewUser(fName, lName, email) {
                    $http.post('/api/users', {
                        firstName: fName,
                        lastName: lName,
                        email: email
                    }).then((resp) => {
                        console.log("ADD USER: ", resp);
                    }).catch((err) => {
                        debugger;
                    });
                },

                fetchUser(userId) {
                    return $http.get('/api/users/' + userId);
                }
            }
        }
    }
};

export default UserService;