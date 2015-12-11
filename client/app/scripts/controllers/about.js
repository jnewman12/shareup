'use strict';

/**
 * @ngdoc function
 * @name shareupApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the shareupApp
 */
angular.module('shareupApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
