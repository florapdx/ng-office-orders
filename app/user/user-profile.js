import service from './service';

const UserProfile = () => {
    return {
        controllerAs: 'userProfileCtrl',
        controller: () => {
            user.newAttr = 'foo';
            service.getUser()
        },
        templateUrl: './user-profile.html'
    };
};

export default UserProfile;