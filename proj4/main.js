$(document).ready(function() {
  
  $("#background").click(function() {
    $("p").css("color", "green");
    //$("img").attr("src", "images/dark.gif");
  });
  
  $("img").click(function(){
    // Change src attribute of image
    $(background).attr("src", "images/dark.gif");
    $("p").css("color", "green");
  });

});
''