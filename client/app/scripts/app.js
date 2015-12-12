'use strict';

/**
 * @ngdoc overview
 * @name shareupApp
 * @description
 * # shareupApp
 *
 * Main module of the application.
 */
angular
  .module('shareupApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function($httpProvider) {
    var interceptor = ['$rootScope', '$location', '$q',
    function($scope, $location, $q) {
      var success = function(resp) { return resp; },
      err = function(response) {
        if (response.status === 401) {
          var d = $q.defer();
          $scope.$broadcast('event:unauthorized');
          return d.promise;
        };
        return $q.reject(response)
      };
      return function(promise) {
        return promise.then(success, err);
      }
    }];
     $httpProvider.responseInterceptors.push(interceptor);
   })

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  .run(function($rootScope,$http,$location,tokenHandler) { 
    $rootScope.$on('event:unauthorized', function(evt) {
      $location.path('/login');
    });
  });
