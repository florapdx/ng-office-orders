import service from './service';

const UserList = () => {
    return {
        scope: {
            'users': '@'
        },
        controllerAs: 'userListCtrl',
        controller: () => {
            service.getAllUsers().then(resp) => {
                console.log("ALL_USERS: ", resp);
                this.users = resp;
            }.catch((err) => {
                debugger;
            }).bind(this);
        },
        templateUrl: './users.html'
        //template:
        // '<ul ng-repeat="user in userCtrl.users">
        //     <li>
        //         <img ng-src="{{user.avatar}}" />
        //         <span>{{user.firstName}} {{user.lastName}}</span>
        //         <span>{{user.email}}</span>
        //     </li>
        // </ul>
    };
};

export default UserList;