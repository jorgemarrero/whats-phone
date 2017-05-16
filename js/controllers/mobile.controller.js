(function () {
    'use strict';
    angular
        .module('EOI')
        .controller('MobileController', MobileController);

    MobileController.$inject = ['$scope', '$routeParams', 'MobilesFactory'];

    function MobileController($scope, $routeParams, MobilesFactory) {
        // Variables $scope
        var mobileId = $routeParams.id;

        $scope.title = mobileId;


        $scope.mobile = MobilesFactory.get(mobileId);
        console.log($scope.mobile);
        // Funciones factorias //
        $scope.setDesired = MobilesFactory.setDesired;
        $scope.unsetDesired = MobilesFactory.unsetDesired;
        $scope.isDesired = MobilesFactory.isDesired;

        activate();

        /////////////////

        function activate() {
            
        }

    }
})();