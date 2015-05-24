angular.module('HomeApp', ['ngRoute']);

angular.module('HomeApp').config(['$routeProvider', function ($routeProvider) {
    $routeProvider. 
    when("/", {
        templateUrl: "templates/cv.html",
        controller: "CVController"
    }).
    otherwise({
        redirectTo: "/"
    });
}]);