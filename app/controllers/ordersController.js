/*jslint nomen: true, node: true */
/*global angular */

(function () {
    'use strict';
    var ordersController = function ($scope, $log, $routeParams, customersFactory, appSettings) {
        var customerId = $routeParams.customerId;
        $scope.orders = null;
        $scope.customer = null;

        function init() {
            customersFactory.getCustomer(customerId)
                .error (function (data, status, headers, config) {
                    $log.log(data.error);
                })
                .success (function (customer) {
                    $scope.customer = customer;
                });

            customersFactory.getOrders(customerId)
                .success(function (orders) {
                    $scope.orders = orders;
                })
                .error(function (data, status, headers, config) {
                    $log.log(data.error + ' ' + status);
                });

        }

        init();
    };

    ordersController.$inject = ['$scope', '$log', '$routeParams', 'customersFactory', 'appSettings'];
    angular.module('customersApp')
        .controller('ordersController', ordersController);
}());
