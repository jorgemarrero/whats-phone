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

        $scope.setDesired = MobilesFactory.setDesired;
        $scope.unsetDesired = MobilesFactory.unsetDesired;
        $scope.isDesired = MobilesFactory.isDesired;


        // Funciones factorias //

        activate();

        ////////////////

        function activate() {
            $scope.mobiles = MobilesFactory.getAll();
        }

    }
})();