(function() {
'use strict';

    angular
        .module('EOI')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'MobilesFactory'];
    function HomeController($scope, MobilesFactory) {
        // Variables $scope
        $scope.title = 'Bienvenido a la página principal';

        $scope.mobiles = [];
        $scope.numDesired = MobilesFactory.getNumDesired();


        // Funciones factorias //

        activate();

        ////////////////

        function activate() {
            $scope.mobiles = MobilesFactory.getAll();
        }

    }
})();