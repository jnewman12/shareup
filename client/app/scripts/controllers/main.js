'use strict';

App.controller('MainCtrl', function($scope, $http, ArticleService) { 
  $scope.currentUser = {}; 
  ArticleService.getLatestFeed().then(function(data) {
    $scope.articles = data;
  });
});