define([
    'angular',
    'lodash',
],function(angular){

    'use strict';

    // 各种常量配置
    angular.module('app.configs').constant('config', {
        'controller1': 'data1',
        'controller2': 'data2',
        'directive1': 'directive1',
        'directive2': 'directive2'
    });
})