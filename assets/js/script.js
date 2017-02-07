

$(document).ready(function(){
  $("#myBtn").click(function(){
    $("#myModal").modal();
  });
});
 function issue() {
   console.log("Modal window issue");
   $("#myModal").modal().fadeIn();

 }
