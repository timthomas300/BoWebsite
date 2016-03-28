/// <reference path="boController.js" />

myApp.directive('serviceDirective', function () {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl: 'scripts/directives/boDirective.html'
    };
});