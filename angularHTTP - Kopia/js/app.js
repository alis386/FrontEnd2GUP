var app = angular.module('webapp', ['ngRoute']);

app.config(function($routeProvider, ) {
    

    $routeProvider
    .when('/main', {
        templateUrl: './views/main.html',
        controller: 'first'
    })
     .when('/animals', {
        templateUrl: './views/animals.html',
        controller: 'second'
    })
     .when('/users', {
        templateUrl: './views/users.html',
        controller: 'first'
    })
    .when('/user/:id', {
        templateUrl: './views/user.html',
        controller: 'newController'
    });
});

app.controller('first', function($scope, $http) {
    // $http(/*obiekt konfiguracyjny*/)
    //    .then(/*success handler*/, 
    //          /*error handler*/);
    $http({
        method: "GET",
        url: "http://localhost:3000/users"
    }).then(function(success) {
        $scope.users = success.data;
        console.log(success.data);
    }, function(error) {
        console.error(error);
    });
});

app.controller('second', function($scope, $http) {
       $http({
        method: "GET",
        url: "http://localhost:3000/animals"
    }).then(function(success) {
        $scope.animals = success.data;
        console.log(success.data);
    }, function(error) {
        console.error(error);
    });
});
app.controller('newController', function($scope, $http, $routeParams){
    $http({
        method: "GET",
        url: "http://localhost:3000/users/" + $routeParams.id
    }).then(function(success) {
        $scope.user = success.data;
        console.log(success.data);
    }, function(error) {
        console.error(error);
    });
 });