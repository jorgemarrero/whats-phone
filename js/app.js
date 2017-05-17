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
            .when("/wishlist", {
                controller: 'WishlistController',
                templateUrl: '/views/home.html'
            })
            .when("/mobile/:id", {
                controller: 'MobileController',
                templateUrl: '/views/mobile.html'
            })
    }

})();