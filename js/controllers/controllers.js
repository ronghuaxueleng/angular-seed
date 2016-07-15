'use strict';


var module = angular.module('app.controllers',[]);

module.controller('indexController',function($scope, $ocLazyLoad){
    $scope.loadPage = function(page) {
        console.log(page);
    }
});