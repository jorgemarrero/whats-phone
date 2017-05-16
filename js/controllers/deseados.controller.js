(function () {
    'use strict';
    angular
        .module('EOI')
        .controller('DeseadosController', DeseadosController);

    DeseadosController.$inject = ['$scope', 'PhonesFactory'];

    function DeseadosController($scope, PhonesFactory) {
        // Variables $scope
        $scope.title = 'Bienvenido a la página de deseados';
        $scope.mobiles = [];

        // Funciones factorias //

        activate();

        /////////////////

        function activate() {
            $scope.mobiles = PhonesFactory.getDesired();
        }

    }
})();