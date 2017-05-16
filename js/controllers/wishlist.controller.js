(function () {
    'use strict';
    angular
        .module('EOI')
        .controller('WishlistController', WishlistController);

    WishlistController.$inject = ['$scope', 'MobilesFactory'];

    function WishlistController($scope, MobilesFactory) {
        // Variables $scope
        $scope.title = 'Bienvenido a la página de deseados';
        $scope.mobiles = [];
        $scope.numDesired = MobilesFactory.getNumDesired();

        // Funciones factorias //

        activate();

        /////////////////

        function activate() {
            $scope.mobiles = MobilesFactory.getDesired();
        }

    }
})();