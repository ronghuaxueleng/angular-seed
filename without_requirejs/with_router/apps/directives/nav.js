'use strict';

angular.module('app').directive('appNav', function(NavData) {
  return {
    restrict: 'EA',
    scope: {},
    templateUrl: 'apps/views/nav.html',
    link: function(scope, element, attrs) {
      scope.data = NavData;
    }
  }
});