/*global angular, console */
(function () {
    'use strict';
    
    
    function MsgController($scope, $filter) {
        $scope.name = "Yaakov";
        $scope.stateOfBeing = "hungry";
        $scope.cookieCost = .45;
        
        $scope.sayMessage = function () {
            var msg = "Yaakov likes to eat healthy snacks at night!";
            return $filter('uppercase')(msg);
        };
        MsgController.$inject = ['$scope', '$filter'];
        
        $scope.feedYaakov = function () {
            $scope.stateOfBeing = "fed";
        };
    }
    
    angular.module('MsgApp', [])
        .controller('MsgController', MsgController);
    
})();