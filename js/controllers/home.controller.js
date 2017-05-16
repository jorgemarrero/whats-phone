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
        $scope.brands = [];
        $scope.numDesired = MobilesFactory.getNumDesired();

        $scope.setDesired = setDesired;
        $scope.unsetDesired = unsetDesired;
        $scope.isDesired = MobilesFactory.isDesired;


        // Funciones factorias //

        activate();

        ////////////////

        function activate() {
            $scope.mobiles = MobilesFactory.getAll();
            $scope.brands = MobilesFactory.getBrands();
        }

        function setDesired(id) {
            MobilesFactory.setDesired(id);
            $scope.numDesired  = MobilesFactory.getNumDesired();
        }

        function unsetDesired(id) {
            MobilesFactory.unsetDesired(id);
            $scope.numDesired  = MobilesFactory.getNumDesired();
        }

    }
})();