angular.module('DashboardModule').controller('DashboardController', ['$scope', '$http', 'toastr','$location', function($scope, $http, toastr,$location ){


  console.log("Dashboard Ctrl Init");

  $scope.user = function (user_id,user_name) {
    console.log("User init");
    $scope.user_id =  user_id;
    $scope.user_name =  user_name;
    console.log($scope.user_id,$scope.user_name);
  };

  $scope.getProjects = function () {
    console.log("Getting projects");
    $http.post('/getProjects', {
         id: $scope.user_id
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
  $scope.getUser = function(id){
    for(var i = 0; i < $scope.users.length; i++){
      if($scope.users[i].id == id){
        return $scope.users[i].name;
      }
    }
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

  $scope.getIssues = function () {
    console.log("Getting Issues");
    $http.post('/getIssues', {
         id: $scope.user_id
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

  $scope.openProject = function (name) {
    console.log(name);
    console.log("Getting Project");
    $http.post('/getProject', {
      name: name
    })
      .then(function onSuccess(sailsResponse){

        $scope.project = sailsResponse.data;
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

  $scope.openIssue = function () {
      console.log($location.path());
      var id = $location.path().substr(7);
      console.log(id);
      // window.location = '#issue';
      console.log(id);
      console.log("Getting Issue");
      $http.post('/getIssue', {
           id: id
      })
        .then(function onSuccess(sailsResponse){

          $scope.issue = sailsResponse.data;
          console.log($scope.issue);

        })
        .catch(function onError(sailsResponse){
          console.log(sailsResponse.data);
        })
        .finally(function eitherWay(){
          console.log("Finally");
        })
    };
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
        .catch(function onError(sailsResponse) {
          console.log("ERRRROOORR");
        })

    };

    $scope.issueProject = function (project_id) {
      console.log("Issue Project - ",project_id);
      $scope.newIssueProject = project_id;
    };

    $scope.addIssue = function () {
      console.log("Adding issue");
      console.log($scope.newIssueProject,$scope.tracker,$scope.newIssueDescription,$scope.selectedUser);
      for(var i = 0; i < $scope.users.length; i++) {
        if($scope.users[i].name == $scope.selectedUser){
          $scope.selectedUser_id = $scope.users[i].id;
        }
      }
        $http.post('/addIssue',{
         project_id : $scope.newIssueProject,
         tracker : $scope.tracker,
         subject : $scope.newIssueSubject,
         assigne : $scope.selectedUser_id,
         description : $scope.newIssueDescription,
         status : $scope.newIssueStatus,
         priority : $scope.newIssuePriority,
         startDate : $scope.newIssueStart,
         dueDate : $scope.newIssueDue,
         estimatedTime : $scope.newIssueEstimate,
         done : $scope.newIssueDone
        }).then(function onSuccess(sailsResponse){
          console.log("Issue added to db");
          window.location = '/';
        })
          .catch(function onError(sailsResponse){
            console.log("ERRRROOORR");
          })
      };
}]);

