angular.module('LoginApp')
.controller('userController', ["$scope", "AuthService",  function($scope, AuthService){
    $scope.usernames = AuthService.User.username;

} 
])