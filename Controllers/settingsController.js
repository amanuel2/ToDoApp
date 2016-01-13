 angular.module('LoginApp')
 .controller("settingsController", ["$scope", "AuthService","$firebaseAuth",
        function($scope, AuthService, $firebaseAuth) {


            $scope.removeUser = function(){
                var ref = new Firebase("https://uniquecoders.firebaseio.com/");
                var firebase = $firebaseAuth(ref);
                console.log(AuthService.User.email)//Gives correct Info
                console.log(AuthService.User.password)//Gives correct Info
                    firebase.$removeUser({
                    email: AuthService.User.email,
                    password: AuthService.User.password
                  }).then(function() {
                    //Remove Data from our personal data we created
               ref.child("users").child(AuthService.User.uid).remove().then(function(){
                   window.location.hash = "/"
                   setTimeout(function(){
                        alert("User Successfully Removed")
                   }, 700)


            });
            ref.child("users").child(AuthService.User.username).remove().then(function(){
                   window.location.hash = "/"
                   setTimeout(function(){
                        alert("User Successfully Removed")
                   }, 700)


            });
            ref.child("users").child(AuthService.User.email).remove().then(function(){
                   window.location.hash = "/"
                   setTimeout(function(){
                        alert("User Successfully Removed")
                   }, 700)


            });
            ref.child("users").child(AuthService.User.password).remove().then(function(){
                   window.location.hash = "/"
                   setTimeout(function(){
                        alert("User Successfully Removed")
                   }, 700)


            });

            windows.location.hash = "/"

                  }).catch(function(error) {
                    alert("Succesfully Removed.");
                    window.location.hash = "/"
                    ref.child("users").child(AuthService.User.uid).remove().then(function(){
                        window.location.hash = "/"
                        setTimeout(function(){
                             alert("User Successfully Removed")
                        }, 700)


                 });
                 ref.child("users").child(AuthService.User.username).remove().then(function(){
                        window.location.hash = "/"
                        setTimeout(function(){
                             alert("User Successfully Removed")
                        }, 700)


                 });
                 ref.child("users").child(AuthService.User.email).remove().then(function(){
                        window.location.hash = "/"
                        setTimeout(function(){
                             alert("User Successfully Removed")
                        }, 700)


                 });
                 ref.child("users").child(AuthService.User.password).remove().then(function(){
                        window.location.hash = "/"
                        setTimeout(function(){
                             alert("User Successfully Removed")
                        }, 700)


                 });
                  });


            }

        }]
        )
