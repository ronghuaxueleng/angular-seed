'use strict';

/* Filters */

angular.module('login.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
        console.log(version);
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }]);
