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
};

export default UserService;