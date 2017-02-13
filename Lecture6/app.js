/*global angular */
(function () {
    'use strict';
    angular.module("NameCalculator", [])
        .controller("NameCalculatorController", function ($scope) {
            $scope.name = "";
            $scope.totalValue = 0;
        
            function calculateNumericForString(string) {
                var letter, totalStringValue = 0;
                for (letter = 0; letter < string.length; letter = letter + 1) {
                    totalStringValue += string.charCodeAt(letter);
                }
                
                return totalStringValue;
            };
        
            $scope.displayNumeric = function () {
                var totalNameValue = calculateNumericForString($scope.name); //get the total value
                $scope.totalValue = totalNameValue;
            };     
        });
})();