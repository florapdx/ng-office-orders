import angular from 'angular';

let UserService = ($rootScope, $http) => {
  let _users = [];

  return {
    getAllUsers() {
      return _users;
    },

    getUser(userId) {
      if (!_currentUser.id) {
        if (!userId) {
          throw new Error('you must pass in a user id');
        } else {
          _currentUser = _users.filter((user) => {
              return user.id === userId;
          });
        }
      }

      return _currentUser;
    },

  // unsure how I feel about this -- could be a separate service
    api: {
      fetchAllUsers() {
        $http.get('/api/users').then((resp) => {
          console.log("ALL_USERS: ", resp);
          _users = [{
              firstName: "Bob",
              lastName: "Personson",
              email: "bob@example.com"
          }];//resp;
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
          _currentUser = resp;
        }).catch((err) => {
          debugger;
        });
      }
    }
  }
};

export default UserService;