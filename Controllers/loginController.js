angular.module('LoginApp')
.controller("loginController", ["$scope", "AuthService", 
  function($scope, AuthService) {
       $scope.logIn = function(){
        
        $scope.message = null;
        $scope.error = null;
        var firebase = new Firebase(AuthService.firebaseRef);
    
        firebase.authWithPassword({
          "email" : $scope.logInemail,
          "password" : $scope.logInemailpassword
          
        }, function(error, userData){
          
          if(error){
            alert("Login Failed Because : " + error)
          }
          else{
            firebase.child("users").child(userData.uid).once('value', function(snapshot){
              AuthService.User.username = snapshot.val().username;
              
              AuthService.User.uid = userData.uid;
            });
            AuthService.User.email = $scope.logInemail;
              AuthService.User.password = $scope.logInemailpassword
              console.log( AuthService.User.email)
              console.log( AuthService.User.password)
            alert("Logged In!")
            window.location.hash = "/ToDo"
          }
          
        })
        
      }
  }
]);  