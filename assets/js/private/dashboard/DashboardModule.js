angular.module('DashboardModule', ['toastr','ngRoute']).config(function($routeProvider) {
  $routeProvider
    .when("/issue/:ID", {
      templateUrl : "templates/issue.html",
      controller : "DashboardController"
    })
    .when("/", {
      templateUrl : "templates/issues.html",
      controller : "DashboardController"
    })
    .when("/projects", {
      templateUrl : "templates/projects.html",
      controller : "DashboardController"
    })
    .when("/blue", {
      templateUrl : "blue.htm"
    });
});
