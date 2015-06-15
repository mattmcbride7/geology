/*jslint nomen: true, node: true */
/*global angular */

(function () {
    'use strict';
    var mineralsController = function ($scope, $log, mineralsFactory, appSettings) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.minerals = [];
        $scope.appSettings = appSettings;

        function init() {
            mineralsFactory.getMinerals()
                .success(function (minerals) {
                    $scope.minerals = minerals;
                })
                .error(function (data, status, headers, config) {
                    //$log.log(data.error + ' ' + status);
                });
        }

        init();

        $scope.doSort = function (propName) {
            if ($scope.sortBy === propName) {
                $scope.reverse = !$scope.reverse;
            } else {
                $scope.sortBy = propName;
                $scope.reverse = false;
            }
        };
    };

    mineralsController.$inject = ['$scope', '$log', 'mineralsFactory', 'appSettings'];
    angular.module('mineralsApp')
        .controller('mineralsController', mineralsController);
}());
