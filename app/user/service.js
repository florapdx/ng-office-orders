import angular from 'angular';

const UserService = ($http) => {
    const _users = [];
    const _currentUser = {};

    this.getAllUsers = () => {
        return _users;
    };

    this.getUser = (userId) => {
        _currentUser = _currentUser.id ? _currentUser : _users.filter((user) => {
            return user.id === userId;
        });
        return _currentUser;
    };

    // unsure how I feel about this -- could be a separate service
    this.api = {
        fetchAllUsers = () =>
            $http.get('/api/users').{then(resp) => {
                console.log("ALL_USERS: ", resp);
                _users = resp;
            }.catch((err) => {
                debugger;
            });
        },

        createNewUser = (fName, lName, email) => {
            return $http.post('/api/users', {
                firstName: fName,
                lastName: lName,
                email: email
            });
        },

        fetchUser = (userId) => {
            return $http.get('/api/users/' + userId);
        }
    }
};

export default UserService;