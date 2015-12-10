'use strict';

/**
 * @ngdoc function
 * @name shareupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the shareupApp
 */
angular.module('shareupApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
