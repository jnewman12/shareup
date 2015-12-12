'use strict';

// were in function args, but jslint complained $http, $q, $location

App.service('tokenHandler', function($rootScope) {
  var token = null;
//currentUser;
  var tokenHandler = {
	set: function(value) { token = value; },
	get: function() { 
		if (!token) {
		  $rootScope.$broadcast('event:unauthorized');
		} else {
		return token;	
	    }
	}
  };
  return tokenHandler;
});