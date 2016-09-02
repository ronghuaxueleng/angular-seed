'use strict';

angular.module('app').controller('controller2', function ($scope, config) {
  $scope.data = config.controller2;
});
