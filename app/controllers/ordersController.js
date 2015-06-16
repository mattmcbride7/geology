/*jslint nomen: true, node: true */
/*global angular */

(function () {
    'use strict';
    var ordersController = function ($scope, $log, $routeParams, mineralsFactory, appSettings) {
        var mineralId = $routeParams.mineralId;
        $scope.orders = null;
        $scope.mineral = null;

        function init() {
            mineralsFactory.getMineral(mineralId)
                .error (function (data, status, headers, config) {
                    $log.log(data.error);
                })
                .success (function (mineral) {
                    $scope.mineral = mineral;
                });

            mineralsFactory.getOrders(mineralId)
                .success(function (orders) {
                    $scope.orders = orders;
                })
                .error(function (data, status, headers, config) {
                    $log.log(data.error + ' ' + status);
                });

        }

        init();
    };

    ordersController.$inject = ['$scope', '$log', '$routeParams', 'mineralsFactory', 'appSettings'];
    angular.module('mineralsApp')
        .controller('ordersController', ordersController);
}());
