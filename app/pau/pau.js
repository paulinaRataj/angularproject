'use strict';

angular.module('myApp.pau', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/pau', {
            templateUrl: 'pau/pau.html',
            controller: 'pauCtrl'
        });
    }])

    .controller('pauCtrl', [function() {

    }]);