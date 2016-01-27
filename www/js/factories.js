angular.module('starter.factories', [])

.factory('signalr', function () {
  // Declare a proxy to reference the hub
  jQuery.support.cors = true;
  $.connection.hub.url = 'http://4reallyweb.com.br/webapi/signalr';
  var connection = $.connection;

  return connection;
})

.factory('User', function(UserService, $q, API, $http){
  return  {
    signin: function(){
      var user = UserService.getUser();

      var deferred = $q.defer();
      $http.post(API.url + 'api/v1/Account/RegisterExternal', {facebookId:user.userID,Email:user.email,UserName:user.name,Provider:"Facebook",ExternalAccessToken:user.authResponse.accessToken})
        .then(function(data){
          console.log(data);
          UserService.setToken(data.token);
          deferred.resolve();
        }, function(data){
          deferred.reject();
        });

      return deferred.promise;
    }
  };

})
