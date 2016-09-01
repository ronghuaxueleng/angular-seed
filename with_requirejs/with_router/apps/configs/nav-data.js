define([
    'angular',
    'lodash',
],function(angular){

    'use strict';

    //* 导航数据
    angular.module('app.configs').constant('NavData', [
        {
            state: 'controller1',
            label: 'controller1'
        },
        {
            state: 'controller2',
            label: 'controller2'
        }
    ]);
})