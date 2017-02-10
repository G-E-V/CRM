

$(document).ready(function(){
  $("#myBtn").click(function(){
    $("#myModal").modal();
  });
  $("#project").click(function(){
    $("#addProject").modal();
  });



});
 function issue() {
   console.log("Modal window issue");
   $("#myModal").modal().fadeIn();

 }
