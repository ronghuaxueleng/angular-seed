define([
    'angular',
    'lodash',
],function(angular){
    'use strict';
    angular.module('app.controllers').controller('controller2', function ($scope, config) {
        $scope.data = config.controller2;
    });
})
