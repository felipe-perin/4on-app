angular.module('starter.services', [])
  .service('UserService', function() {
    // For the purpose of this example I will store user data on ionic local storage but you should save it on a database
    var setUser = function(user_data) {
      window.localStorage.starter_facebook_user = JSON.stringify(user_data);
    };

    var getUser = function(){
      return JSON.parse(window.localStorage.starter_facebook_user || '{}');
    };

    var setToken = function(token) {
      window.localStorage.userToken = JSON.stringify(token);
    };

    var getToken = function(){
      return JSON.parse(window.localStorage.userToken || '{}');
    };

    return {
      getUser: getUser,
      setUser: setUser,
      getToken: getToken,
      setToken: setToken
    };
  });

