angular.module('DashboardModule').controller('DashboardController', ['$scope', '$http', 'toastr', function($scope, $http, toastr){


  $scope.getProjects = function (user_id) {
    console.log("Getting projects");
    console.log(user_id);
    $http.post('/getProjects', {
         id: user_id
    })
      .then(function onSuccess(sailsResponse){
        $scope.projects = sailsResponse.data;
        console.log(sailsResponse.data);
        // window.location = '/';
      })
      .catch(function onError(sailsResponse){
        console.log(sailsResponse.data);

      })
      .finally(function eitherWay(){
        console.log("Finally");
      })
  };
  $scope.getIssues = function (id) {
    console.log(id);
    console.log("Getting Issues");
    $http.post('/getIssues', {
         id: id
    })
      .then(function onSuccess(sailsResponse){
        $scope.issues = sailsResponse.data;
        console.log(sailsResponse.data);
        // window.location = '/';
      })
      .catch(function onError(sailsResponse){
        console.log(sailsResponse.data);
      })
      .finally(function eitherWay(){
        console.log("Finally");
      })
  };





}]);

