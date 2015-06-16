/*jslint nomen: true, node: true */
/*global angular */

(function() {

    var app = angular.module('mineralsApp', ['ngRoute']);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'mineralsController',
                templateUrl: "app/views/minerals.html"
            })
            .when('/orders/:mineralId', {
                controller: 'ordersController',
                templateUrl: "app/views/orders.html"
            })
            .otherwise({ redirectTo: '/'});
    });

}());
