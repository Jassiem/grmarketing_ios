// Service definition
grassroot.service('apiService', ['$http', function($http){
  var API_DOMAIN = "http://still-cliffs-1000.herokuapp.com/"
  //var API_DOMAIN = "http://localhost:3000"

  /* enable CORS */
  $http.defaults.useXDomain = true;
  delete $http.defaults.headers.common['X-Requested-With'];

  var sendResponse = function(requestConfig, callback) {
    $http(requestConfig).success(function(data,status){
      callback(data,status);
    }).error(function(data, status) {
      callback(data, status);
    });   
  }

  this.get = function(callback) {
    var url = API_DOMAIN + arguments[1];
    var config = {method: 'GET', url: url, params: arguments[2]};

    sendResponse(config, callback);
  };

  this.post = function(callback) {
    var url = API_DOMAIN + arguments[1];
    var config = {method: 'POST', url: url, data: arguments[2]};

    sendResponse(config, callback);
  };

}]);

