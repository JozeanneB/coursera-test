/*global angular, console */
(function () {
    'use strict';
    
    MsgController.$inject = ['$scope', 'lovesFilter'];
    function MsgController($scope, lovesFilter) {
        $scope.name = "Yaakov";
        $scope.stateOfBeing = "hungry";
        
        $scope.sayMessage = function () {
            return "Yaakov likes to eat healthy snacks at night!";
        };
        
        $scope.sayLovesMessage = function () {
            return lovesFilter("Yaakov likes to eat healthy snacks at night!");
        };
        
        $scope.feedYaakov = function () {
            $scope.stateOfBeing = "fed";
        };
    }
    
    function LovesFilter() {
        return function (input) {
            input = input || "";
            return input.replace("likes", "loves");
        };
    }
    
    angular.module('MsgApp', [])
        .controller('MsgController', MsgController)
        .filter('loves', LovesFilter);
    
})();