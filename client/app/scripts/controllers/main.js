'use strict';

/**
 * @ngdoc function
 * @name shareupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the shareupApp
*/
// App.controller('MainCtrl', function ($scope) {
//     $scope.awesomeThings = [
//       'HTML5 Boilerplate',
//       'AngularJS',
//       'Karma'
//     ];
// });

App.controller('MainCtrl', function($scope, $http, ArticleService) { 
  $scope.currentUser = {}; 
  ArticleService.getLatestFeed().then(function(data) {
    $scope.articles = data;
  });
});