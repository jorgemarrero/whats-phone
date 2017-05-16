(function() {
    'use strict';
    angular.module('EOI', ['ngRoute']).config(config);

    config.$inject=['$routeProvider','$locationProvider'];

    function config ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider
            .when("/", {
                controller: 'HomeController',
                templateUrl: 'whats-phone/views/home.html'
            })
            .when("/wishlist", {
                controller: 'WishlistController',
                templateUrl: 'whats-phone/views/wishlist.html'
            })
            .when("/mobile/:id", {
                controller: 'MobileController',
                templateUrl: 'whats-phoneviews/mobile.html'
            })
    }

})();
