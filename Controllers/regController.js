angular.module('LoginApp')
    .controller("regController", ["$scope", "AuthService",
        function($scope, AuthService) {
            $scope.createUser = function() {
                if ($scope.email == "") {
                    alert("Email cannot be empty");s
                }
                else {
                    var firebase = new Firebase("https://uniquecoders.firebaseio.com/");
                    firebase.createUser({
                        email: $scope.email,
                        password: $scope.password
                    }, function(error, userData) {
                        if (error) {
                            switch (error.code) {
                                case "EMAIL_TAKEN":
                                    alert("The new user account cannot be created because the email is already in use. Try to login");
                                    break;
                                case "INVALID_EMAIL":
                                    alert("The specified email is not a valid email.");
                                    break;
                                case "INVALID_PASSWORD":
                                    alert("The Specified Passowrd Is not valid.")
                                    break;
                                default:
                                    alert("Error creating user:", error);
                            }
                        }
                        else {
                            firebase.child("users").child(userData.uid).set({
                                username: $scope.username
                            });
                            AuthService.User.email = $scope.email;
                            AuthService.User.password = $scope.password;
                            AuthService.User.username = $scope.username;
                            AuthService.User.uid = userData.uid;
                            alert("Successfully created user account with username " + AuthService.User.username);
                            window.location.hash = "/ToDo"
                        }
                    });


                };
            }
        }
    ]);