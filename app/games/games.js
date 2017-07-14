'use strict';

angular.module('myApp.games', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/games', {
    templateUrl: 'games/games.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope) {

    $scope.name = '...';

    $scope.sayHelloWorld = function () {
      $scope.name = 'World';
    };

    $scope.sayHelloAngular = function () {
      $scope.name = 'Angular';
    };

    $scope.sayHelloSantaClaus = function () {
      $scope.name = 'Santa Claus';
    };

});

