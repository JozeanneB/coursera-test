/*global angular, console */
(function () {
    'use strict';
    
    function DIController($scope, $filter, $injector) {
        $scope.name = "Yaakov";
        $scope.upper = function () {
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        };
        
        console.log($injector.annotate(DIController));
    }
    
    angular.module("DIApp", [])
        .controller("DIController", DIController);
    
    function AnnonateMe(name, job, blah) {
        return "Bla!";
    }
    
    //console.log(AnnonateMe());
    //console.log(AnnonateMe);
    console.log(AnnonateMe.toString());
        
})();