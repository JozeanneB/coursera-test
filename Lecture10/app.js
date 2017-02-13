/*global angular, console */
/*
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
        //Solution 1
        //.controller("DIController", ['$scope', '$filter', '$injector', DIController]);
        //Solution2
        .controller("DIController", DIController);
    DIController.$inject = ['$scope', '$filter', '$injector'];
    
})();
*/
/*
//Solution 1
!function(){"use strict";function n(e,o,a){e.name="Yaakov",e.upper=function(){var n=o("uppercase");e.name=n(e.name)},console.log(a.annotate(n))}angular.module("DIApp",[]).controller("DIController",["$scope","$filter","$injector",n])}();
*/
//Solution 2
!function(){"use strict";function n(e,o,t){e.name="Yaakov",e.upper=function(){var n=o("uppercase");e.name=n(e.name)},console.log(t.annotate(n))}angular.module("DIApp",[]).controller("DIController",n),n.$inject=["$scope","$filter","$injector"]}();