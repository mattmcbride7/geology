/*jslint nomen: true, node: true */
/*global angular */

(function() {

    var app = angular.module('mineralsApp', ['ngRoute']);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'mineralsController',
                templateUrl: "app/views/home.html"
            })
            .when('/minerals', {
                controller: 'mineralsController',
                templateUrl: "app/views/minerals.html"
            })
            .when('/minerals/:mineralId', {
                controller: 'ordersController',
                templateUrl: "app/views/orders.html"
            })
            .otherwise({ redirectTo: '/'});
    });

}());
