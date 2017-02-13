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

  $scope.getUsers = function () {
    console.log("Getting Users");
    console.log();
    $http.post('/getUsers', {
    })
      .then(function onSuccess(sailsResponse){
        $scope.users = sailsResponse.data;
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
      console.log("Adding Project...."+ $scope.newProjectTitle,$scope.newProjectDescription,$scope.selectedUser);
      for(var i = 0; i < $scope.users.length; i++){
        if($scope.users[i].name == $scope.selectedUser){
          $scope.selectedUser_id = $scope.users[i].id;
        }
      }
      console.log($scope.selectedUser_id);
      $http.post('/addProject',{
        project_name : $scope.newProjectTitle,
        description : $scope.newProjectDescription,
        user : $scope.selectedUser_id
      }).then(function onSuccess(sailsResponse){
        console.log("Record added to db");
          window.location = '/';
      })
        .catch(function onError(sailsResponse){
          console.log("ERRRROOORR");
        })

    }

}]);

