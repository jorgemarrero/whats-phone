(function () {
    'use strict';
    angular
        .module('EOI')
        .controller('IndividualController', IndividualController);

    IndividualController.$inject = ['$scope', '$routeParams', 'PhonesFactory'];

    function IndividualController($scope, $routeParams, PhonesFactory) {
        // Variables $scope
        var mobileId = $routeParams.id;

        $scope.title = mobileId;


        $scope.mobile = PhonesFactory.get(mobileId);
        console.log($scope.mobile);
        // Funciones factorias //
        $scope.setDesired = PhonesFactory.setDesired;
        $scope.unsetDesired = PhonesFactory.unsetDesired;
        $scope.isDesired = PhonesFactory.isDesired;

        activate();

        /////////////////

        function activate() {
            
        }

    }
})();