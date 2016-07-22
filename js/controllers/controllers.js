'use strict';

/* Controllers */


var module = angular.module('login.controllers',[]);


module.controller('LoginController', function($scope, $rootScope, AUTH_EVENTS, AuthService) {
	$scope.credentials = {
    username: 'admin',
    password: 'admin'
  };
  $scope.login = function (credentials) {
    AuthService.login(credentials).then(function (user) {
      $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
      $scope.setCurrentUser(user);
    }, function () {
      $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
    });
  };
})
.controller('ApplicationController', function ($scope,USER_ROLES,AuthService) {
  $scope.currentUser = null;
  $scope.userRoles = USER_ROLES;
  $scope.isAuthorized = AuthService.isAuthorized;
 
  $scope.setCurrentUser = function (user) {
    $scope.currentUser = user;
  };
});

