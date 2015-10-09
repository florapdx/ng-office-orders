import UserService from '../services/user-service';

const UserController = () => {
    this.users = [];

    UserService.getAllUsers().then((resp) => {
        console.log("ALL USERS: ", resp);
        this.users = resp;
    }).catch((err) => {
        debugger;
    }).bind(this);
};

export default UserController;