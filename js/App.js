angular.module('HomeApp', ['ngRoute']);

angular.module('HomeApp').config(['$routeProvider', function ($routeProvider) {
    $routeProvider. 
    when("/main", {
        templateUrl: "templates/main.html",
        controller: "MainController"
    }).
    when("/cv", {
        templateUrl: "templates/cv.html",
        controller: "CVController"
    }).
    otherwise({
        redirectTo: "/main"
    });
}]);