'use strict';

var app = angular.module('app', []);
var pre_boot_modules = [];
var register_fns = {};

app.useModule = function (module) {
    if (pre_boot_modules) {
      pre_boot_modules.push(module);
    } else {
      _.extend(module, register_fns);
    }
    return module;
};

var apps_deps = [
    'oc.lazyLoad'
];

_.each('controllers directives services filters'.split(' '),
  function (type) {
    var module_name = 'app.'+type;
    // create the module
    app.useModule(angular.module(module_name, []));
    apps_deps.push(module_name);
});

app.safeApply = function ($scope, fn) {
    switch($scope.$$phase) {
    case '$apply':
      // $digest hasn't started, we should be good
      $scope.$eval(fn);
      break;
    case '$digest':
      // waiting to $apply the changes
      setTimeout(function () { app.safeApply($scope, fn); }, 10);
      break;
    default:
      // clear to begin an $apply $$phase
      $scope.$apply(fn);
      break;
    }
};


app.config(function ($controllerProvider, $compileProvider, $filterProvider, $provide) {
    register_fns.controller = $controllerProvider.register;
    register_fns.directive  = $compileProvider.directive;
    register_fns.factory    = $provide.factory;
    register_fns.service    = $provide.service;
    register_fns.filter     = $filterProvider.register;
});

angular.element(document).ready(function() {
    angular.bootstrap(document, apps_deps)
    .invoke(['$rootScope', function ($rootScope) {
        _.each(pre_boot_modules, function (module) {
          _.extend(module, register_fns);
        });
        pre_boot_modules = false;
    }]);
});
