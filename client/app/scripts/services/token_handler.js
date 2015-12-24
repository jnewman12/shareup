'use strict';

// were in function args, but jslint complained $http, $q, $location

angular.module('shareupApp')
 .service('tokenHandler', function($rootScope, $http, $q) {
  var token = null, currentUser;

  var tokenWrapper = function(resource, action) {
    resource['_' + action] = resource[action];
	resource[action] = function( data, success, error){
	  return resource['_' + action](
	    angular.extend({}, data || {}, 
	     {access_token: tokenHandler.get()}), success,error); 
	  };
  };
//currentUser;
  var tokenHandler = {
	set: function(value) { token = value; },
	get: function() { 
		if (!token) {
		  $rootScope.$broadcast('event:unauthorized');
		} else {
		return token;	
	  }
	},
    wrapActions: function(resource, actions) {
      var wrappedResource = resource;
      for (var i=0; i < actions.length; i++) {
        tokenWrapper( wrappedResource, actions[i] );
       }
      return wrappedResource; 
    },
  //};
  getCurrentUser: function() {
  	var d = $q.defer();
  	if (currentUser) {
  	  d.resolve(currentUser);
  	} else {
  		$http({
  			url: '/api/current_user',
  			method: 'POST'
  		}).then(function(data) {
  			d.resolve(data.data);
  		});
  	}
  	return d.promise;
   }

  };
  return tokenHandler;
});

