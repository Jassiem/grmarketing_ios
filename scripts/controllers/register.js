function RegisterCtrl($scope, apiService, $location) {

	$scope.formData = {};
	$scope.showErrors = false;
	$scope.errorMessage = '';
	$scope.company_identifier = "1111";

  console.log("inside register.js");

	$scope.registerCustomer = function() {
    console.log("attempting to submit.");
		// check if form is valid
    if ($scope.form.registercustomer.$valid === false) {
      $scope.showErrors = true;
      return;
    }

    // add key for rails strong parameters and petition data
    $scope.formData.company_identifier = $scope.company_identifier;
    $scope.formData = {customer: $scope.formData};

    // send form data to rails api
    apiService.post(function(data, status){
      if(status == 200) {
        console.log("sucessful submission");
      	window.localStorage.setItem("userStatus", "true");
        $location.url('/cards');
      }
      else {
        $scope.errorMessage = 'Registration is down. Try again later.';
      }

    }, 'api/register-customer', $scope.formData);
	};
};

RegisterCtrl.$inject = ['$scope', 'apiService', '$location'];