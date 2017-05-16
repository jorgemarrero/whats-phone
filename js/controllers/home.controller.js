(function() {
'use strict';

    angular
        .module('EOI')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'PhonesFactory'];
    function HomeController($scope, PhonesFactory) {
        // Variables $scope
        $scope.title = 'Bienvenido a la página principal';

        $scope.mobiles = [];


        // Funciones factorias //

        activate();

        ////////////////

        function activate() {
            $scope.mobiles = PhonesFactory.getAll();
        }

    }
})();