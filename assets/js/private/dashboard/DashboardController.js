angular.module('DashboardModule').controller('DashboardController', ['$scope', '$http', 'toastr', function($scope, $http, toastr){


  $scope.getProjects = function () {
    console.log("Getting projects");
    $http.get('/getProjects', {
         // user_id: '7'
      // email: $scope.forgotMail
    })
      .then(function onSuccess(sailsResponse){
        console.log(sailsResponse);
        // window.location = '/';
      })
      .catch(function onError(sailsResponse){
        console.log(sailsResponse);

      })
      .finally(function eitherWay(){
        console.log("Finally");


      })


  };





}]);

