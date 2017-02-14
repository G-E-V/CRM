

$(document).ready(function(){
  $("#myBtn").click(function(){
    $("#myModal").modal();
  });
  $("#project").click(function(){
    console.log("Modal window --add project-- ");
    $("#addProject").modal();
  });
  // $('#newIssue').click(function(){
  //   console.log("Modal window --add issue-- ");
  //   $("#addIssue").modal();
  // });



});
 function newIssue() {
   console.log("Modal window issue");
   $("#addIssue").modal().fadeIn();

 }
