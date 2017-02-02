angular.module('HomepageModule').controller('HomepageController', ['$scope', '$http', 'toastr', function($scope, $http, toastr){

	// set-up loginForm loading state
	$scope.loginForm = {
		loading: false
	}

	$scope.forgotPass = function () {
    console.log("FOrgot pass starts");
    console.log($scope.forgotMail);
    $http.post('/forgotPass', {
      email: $scope.forgotMail
    })
      .then(function onSuccess(sailsResponse){
        window.location = '/';
      })
      .catch(function onError(sailsResponse){

        // Handle known error type(s).
        // If using sails-disk adpater -- Handle Duplicate Key
        var emailAddressAlreadyInUse = sailsResponse.status == 409;

        if (emailAddressAlreadyInUse) {
          toastr.error('That email address has already been taken, please try again.', 'Error');
          return;
        }

      })
      .finally(function eitherWay(){
        $scope.signupForm.loading = false;
      })




  };

	$scope.submitLoginForm = function (){

    // Set the loading state (i.e. show loading spinner)
    $scope.loginForm.loading = true;

    // Submit request to Sails.
    $http.put('/login', {
      email: $scope.loginForm.email,
      password: $scope.loginForm.password
    })
    .then(function onSuccess (){
      // Refresh the page now that we've been logged in.
      window.location = '/';
    })
    .catch(function onError(sailsResponse) {

      // Handle known error type(s).
      // Invalid username / password combination.
      if (sailsResponse.status === 400 || 404) {
        // $scope.loginForm.topLevelErrorMessage = 'Invalid email/password combination.';
        //
        toastr.error('Invalid email/password combination.', 'Error', {
          closeButton: true
        });
        return;
      }

				toastr.error('An unexpected error occurred, please try again.', 'Error', {
					closeButton: true
				});
				return;

    })
    .finally(function eitherWay(){
      $scope.loginForm.loading = false;
    });
  };


}]);
function pass() {

  console.log("Query starts... ");
  UserControler.forgotPass(req, res);
}
