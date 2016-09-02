define([
    'angular',
    'lodash',
],function(angular){
    'use strict';

    angular.module('app.directives').directive('directive1', function(config) {
      return {
        restrict: 'EA',
        scope: {},
        templateUrl: 'apps/views/directive1.html',
        link: function(scope, element, attrs) {
          scope.data = config.directive1;
        }
      }
    });
})