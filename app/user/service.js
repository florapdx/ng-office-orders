import angular from 'angular';

const UserService = ($http) => {
    this.getAllUsers = () => {
        return $http.get('/api/users');
    };

    this.createNewUser = (fName, lName, email) => {
        return $http.post('/api/users', {
            firstName: fName,
            lName: lName,
            email: email
        });
    };

    this.getUser = (userId) => {
        return $http.get('/api/users/' + userId);
    };
};

export default UserService;