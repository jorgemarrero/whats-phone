(function() {
    'use strict';
    angular.module('EOI', ['ngRoute']).config(config);

    config.$inject=['$routeProvider','$locationProvider'];

    function config ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider
            .when("/", {
                controller: 'HomeController',
                templateUrl: '/views/home.html'
            })
            .when("/Deseados", {
                controller: 'DeseadosController',
                templateUrl: '/views/deseados.html'
            })
            .when("/Individual/:id", {
                controller: 'IndividualController',
                templateUrl: '/views/individual.html'
            })
    }

})();