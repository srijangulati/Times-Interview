var app = angular.module('myApp', ['ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('/', {
            url: '/',
            templateUrl: 'views/details.html',
            controller: "deatilsController"
        });
}]);

app.controller('deatilsController', ['$scope', '$http', function ($scope, $http) {
    $scope.venues = [];
    $http({
        method: 'GET',
        url: 'https://api.foursquare.com/v2/venues/search?near=Bangalore&oauth_token=SQ1PQIHAYYDTHK0VJAYUTWM1CJN0XDILXSJG5KOPI045MC1T&v=20160123&limit=50'
    }).then(function (response) {
        $scope.venues = response.data.response.venues;
    });

    $scope.verified = "";
    $scope.toggleVerified = function () {
        if ($scope.verified == "") {
            $scope.verified = "true";
        } else
            $scope.verified = "";
    };
    $scope.sort = function (event) {
        var stat = event.target.id
        $scope.venues.sort(function (a, b) {
            return (parseInt(a.stats[stat]) - parseInt(b.stats[stat]));
        });
    };
    $scope.rSort = function (event) {
        var stat = event.target.id
        $scope.venues.sort(function (a, b) {
            return (parseInt(b.stats[stat]) - parseInt(a.stats[stat]));
        });
    };
}]);