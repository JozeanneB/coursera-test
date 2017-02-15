/*global angular, console */
(function () {
    'use strict';
    
    MsgController.$inject = ['$scope'];
    function MsgController($scope) {
        $scope.name = "Yaakov";
        $scope.stateOfBeing = "hungry";
        $scope.sayMessage = function () {
            return "Yaakov likes to eat healthy snacks at night!";
        };
        $scope.feedYaakov = function () {
            $scope.stateOfBeing = "fed";
        };
    }
    
    angular.module('MsgApp', [])
        .controller('MsgController', MsgController);
    
})();