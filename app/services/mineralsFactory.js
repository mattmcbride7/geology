/*jslint nomen: true, node: true, plusplus: true */
/*global angular */

(function () {
    'use strict';
    var mineralsFactory = function ($http) {


        var factory = {};

        factory.getMinerals = function () {
            return $http.get('/minerals');
        };

        factory.getMinerals = function (mineralId) {
            return $http.get('/minerals/' + mineralId);
        };

        factory.getOrders = function (mineralId) {
            return $http.get('/orders/' + mineralId);
        };

        return factory;
    };

    mineralsFactory.$inject = ['$http'];

    angular.module('mineralsApp').factory('mineralsFactory', mineralsFactory);
}());
