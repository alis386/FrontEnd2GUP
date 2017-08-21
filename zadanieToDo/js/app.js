var app = angular.module('toDoApp', ['ngRoute']);   


app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: './views/main.html'
    })
        .when('/add', {
            templateUrl: './views/add.html',
            controller: 'pierwszy'
    })
        .when('/see', {
            templateUrl: './views/see.html',
            controller: 'drugi'
    })
    
        .when('/delete/:id', {
            template: '',
            controller: 'deleteToDoController'
    })
        .when('/other', {
            template: '<h3>Cześć, tutaj jest coś innego</h3>'
     
    });
    
});

app.service('okienko', function(){
    
    this.dodaj=[]; 
    
    this.counter = this.dodaj.length + 1;
    
    this.add = function(okienko){  
        okienko.id = this.counter++;
        this.dodaj.push(okienko);
    }
    this.get = function(){                                  
        return this.dodaj;
    }
    this.deleteById = function(id){
        for(var i = 0; i < this.dodaj.length; i++){
            if(this.dodaj[i].id == id){
                break;
            }
        }
        this.dodaj.splice(i, 1);
    }
    
});

app.controller('pierwszy', function($scope, okienko){
    $scope.add=function(){
        okienko.add({task: $scope.task, opis: $scope.opis});
    }
});

app.controller('drugi', function($scope, okienko){
    $scope.dodaj = okienko.get();
    $scope.delete = function(id){
        okienko.deleteById(id);
    };
});
 app.controller('deleteToDoController', function($scope, $routeParams, okienko, $location ){
     okienko.deleteById($routeParams.id);
     $location.path('/see');
 });










