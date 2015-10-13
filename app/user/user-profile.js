import service from './service';

const UserProfile = () => {
    return {
        scope: {
            user: '='
        },
        controllerAs: 'userProfileCtrl',
        controller: () => {
            service.getUser().then((resp) => {
                console.log("SINGLE_USER: ", resp);
                this.user = user;
            }).catch((err) => {
                debugger;
            });
        },
        templateUrl: './user-profile.html'
    };
};

export default UserProfile;