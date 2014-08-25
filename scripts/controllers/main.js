'use strict';

// dashboard controller
function MainCtrl($scope, apiService, $location, $timeout) {
  $scope.isUser = false;

  $scope.init = function() {
    console.log("finished main.");
    $scope.checkUserStatus();
  	//document.addEventListener('deviceready', $scope.checkUserStatus(), false);
  };

  $scope.checkUserStatus = function() {
  	var isRegisteredCustomer = window.localStorage.key("userStatus");

  	if(isRegisteredCustomer === null) {
  		window.localStorage.setItem("userStatus", "false");
  		$location.url('/register');
  	} else {
  		if(window.localStorage.getItem("userStatus") === "false") {
  			$location.url('/register');
  		} else {
  			$location.url('/cards');
  		}
  	}

    console.log("finished checking usr status.");
  };

  $scope.init();

}
MainCtrl.$inject = ['$scope', 'apiService', '$location', '$timeout'];
