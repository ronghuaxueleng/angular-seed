define([
    'angular',
    'lodash',
],function(angular){
    'use strict';

    angular.module('app.directives').directive('appNav', function(NavData) {
      return {
        restrict: 'EA',
        scope: {},
        templateUrl: 'apps/views/nav.html',
        link: function(scope, element, attrs) {
          scope.data = NavData;
        }
      }
    });
})