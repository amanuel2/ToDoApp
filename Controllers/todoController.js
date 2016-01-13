angular.module('LoginApp')

.controller("todoController", ["$scope", "AuthService", "$firebaseArray" , 
        function($scope, AuthService, $firebaseArray) {
   
            var todoListRef = new Firebase(AuthService.firebaseRef + 'posts/' + AuthService.User.uid);
            
            setTimeout(function(){
                  console.log(AuthService.User.username, AuthService.User.uid);
            //I added for security
            
            if(AuthService.User.email === undefined){
                window.location.hash = "/"
                setTimeout(function(){
                    alert("You Must Sign-Up Before using the ToDo App")
                }, 800)
            }
            else if(AuthService.User.password === undefined){
                window.location.hash = "/"
                setTimeout(function(){
                    alert("You Must Sign-Up Before using the ToDo App")
                }, 800)
                
            }
            else{
            
            $scope.newTodo = function(){
                console.log($scope.textValue);
             todoListRef.push
                ({textValue : $scope.textValue});
                
                //reset the form for the next one
                $scope.textValue = '';
            };
            
            $scope.todos = $firebaseArray(todoListRef)
            }
            }, 1000)
           
        }
    ]);