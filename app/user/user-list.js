import service from './service';

const UserList = () => {
    return {
        controllerAs: 'userListCtrl',
        controller: () => {
            service.getAllUsers();
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