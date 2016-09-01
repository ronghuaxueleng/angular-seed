define([
    'angular',
    'lodash',
],function(angular){
    'use strict';
    angular.module('app.directives').directive('directive2', function(config) {
      return {
        restrict: 'EA',
        scope: {},
        templateUrl: 'apps/views/directive2.html',
        link: function(scope, element, attrs) {
         scope.data = config.directive2;
        }
      }
    });
})