angular.module('DashboardModule').controller('DashboardController', ['$scope', '$http', 'toastr', function($scope, $http, toastr){

  $scope.getUsers = function () {

  };
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


  $scope.openIssue = function (id) {
      console.log(id);
      console.log("Getting Issue");
      $http.post('/getIssue', {
           id: id
      })
        .then(function onSuccess(sailsResponse){

          $scope.issue = sailsResponse.data;
          console.log(sailsResponse.data);
          // window.location = '/';
        })
        .catch(function onError(sailsResponse){
          console.log(sailsResponse.data);
        })
        .finally(function eitherWay(){
          console.log("Finally");
        })
    }
    $scope.addProject = function () {
      console.log("Adding Project...."+ $scope.newProjectTitle,$scope.newProjectDescription);
      $http.post('/addProject',{
        project_name : $scope.newProjectTitle,
        description : $scope.newProjectDescription
      }).then(function onSuccess(sailsResponse){
        console.log("Record added to db");
          window.location = '/';
      })
        .catch(function onError(sailsResponse){
          console.log("ERRRROOORR");
        })

    }

}]);

