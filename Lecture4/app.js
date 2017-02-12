/*global angular */
(function () { //IIFE is an immediately invoked function expression - we want to make sure that no local variables bleed into the global scope.
    'use strict'; // protect us from making mistakes
    angular.module("MyFirstApp", []) // this module is bound to index.html - tag html. Can end it with a ; in this line
    
        .controller("MyFirstController", function ($scope) { // is really the way we define the view model of our view, our view being index.html.
            // is really the way we define the view model of our view, our view being index.html.
           /*whenever you see inside AngularJs a dollar sign ($) in front of some variable name it means that this is something that is reserved for
            Angular, this is something that Angular provides.*/
           //$scope is a special object that AngularJS provides for us in order to share data between our view model and our view
            $scope.name = "Jozeanne";
            $scope.sayHello = function () {
                return "Hello Coursera";
            };
            
        });
    
})();