var app = angular.module('LoginApp', ["firebase", "ngRoute"])

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'HtmlFiles/registration.html',
        controller: 'regController'
      })
      .when('/logIn', {
        templateUrl: 'HtmlFiles/login.html',
        controller: 'loginController'
      })
      
      .when('/User', {
        templateUrl: "HtmlFiles/User.html",
        controller: 'userController'
      })
      .when('/ToDo', {
        templateUrl: "HtmlFiles/Todo.html",
        controller: "todoController"
      })
      
      .when( '/Settings' ,{
        templateUrl: "HtmlFiles/Settings.html",
        controller: "settingsController"
        
      })
      
      .otherwise({
        redirectTo: '/'
      });

   
  });


app.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    var ref = new Firebase("https://uniquecoders.firebaseio.com/");
    return $firebaseAuth(ref);
  }
]);

