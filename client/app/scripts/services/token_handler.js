angular.module('shareUpApp')
  .service('tokenHandler', function($rootScope, $http, $q, $location) {
  	var token = null;
  	currentUser;

  	var tokenHandler = {
  		set: function(value) { token = value; },
  		get: function() { 
  			if (!token) 
  			  $rootScope.$broadcast('event:unauthorized');
  			else
  			return token	
  		}
  	};
  	return tokenHandler;
  });