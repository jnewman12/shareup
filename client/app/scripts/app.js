'use strict';

/**
 * @ngdoc overview
 * @name shareupApp
 * @description
 * # shareupApp
 *
 * Main module of the application.
 */

// leaving this structure for now, but might change
var App =  angular.module('shareupApp', ['ngAnimate','ngCookies','ngResource','ngRoute','ngSanitize','ngTouch'])


App.config(function($httpProvider) {
    var interceptor = ['$rootScope', '$location', '$q',
    function($scope, $location, $q) {
      var success = function(resp) { return resp; },
      err = function(response) {
        if (response.status === 401) {
          var d = $q.defer(); 
          $scope.$broadcast('event:unauthorized');
          return d.promise;
        }
        return $q.reject(response);
      };
      return function(promise) {
        return promise.then(success, err);
      };
    }];
     $httpProvider.responseInterceptors.push(interceptor);
   });

App.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        resolve: {
        token: function(tokenHandler) { 
          return tokenHandler.get();
        } 
       }
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

App.run(function($rootScope,$http,$location) { 
    $rootScope.$on('event:unauthorized', function(evt) {
      $location.path('/login');
      console.log('fuck the grunt watch bullshit' + evt);
    });
  });
