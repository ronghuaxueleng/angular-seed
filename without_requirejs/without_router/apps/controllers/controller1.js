'use strict';

angular.module('app').controller('controller1', function ($scope, config) {
  $scope.data = config.controller1;
});
