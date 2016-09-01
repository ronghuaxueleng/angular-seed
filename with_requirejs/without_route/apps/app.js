define([//����js���൱����html�ļ���ʹ��srcipt�ķ�ʽ�����ļ�
  'angular',
  'jquery',
  'lodash'
],function (angular, $, _){//���������ռ䣬���������js��˳��һ��
    'use strict';
    var app = angular.module('app', []),
    pre_boot_modules = [],
    register_fns = {};

    app.useModule = function (module) {
        if (pre_boot_modules) {
          pre_boot_modules.push(module);
        } else {
          _.extend(module, register_fns);
        }
        return module;
    };

    app.safeApply = function ($scope, fn) {
        switch($scope.$$phase) {
            case '$apply':
              $scope.$eval(fn);
              break;
            case '$digest':
              setTimeout(function () { app.safeApply($scope, fn); }, 10);
              break;
            default:
              $scope.$apply(fn);
              break;
        }
    };
    
    //������Ϊ��̬����controller��directive��factory��service��filter���������ã�����ʡȥ
    app.config(function ($controllerProvider, $compileProvider, $filterProvider, $provide) {
        register_fns.controller = $controllerProvider.register;
        register_fns.directive  = $compileProvider.directive;
        register_fns.factory    = $provide.factory;
        register_fns.service    = $provide.service;
        register_fns.filter     = $filterProvider.register;
    });

    //��������Ҫע��Ķ��������磺ui.router
    var apps_deps = [
    ];
    

    //��������ģ��
    'controllers directives factories services filters configs'.split(' ').forEach(function (type) {
        if (type){
            var module_name = 'app.'+type;
            app.useModule(angular.module(module_name, []));
            apps_deps.push(module_name);
        } 
    });
    
    //����angularjs �൱��ng-app
    require([
        'apps/controllers/all',
        'apps/directives/all',
        'apps/services/all',
        'apps/configs/all'
    ], function () {
        angular.element(document).ready(function() {
            angular.bootstrap(document, apps_deps)
            .invoke(['$rootScope', function ($rootScope) {
                pre_boot_modules.forEach(function(module){
                    _.extend(module, register_fns);
                });
                pre_boot_modules = false;
            }]);
        });
    })

})