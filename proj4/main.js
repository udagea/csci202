$(document).ready(function() {
  
  $("img").click(function(){
    // Change src attribute of image
    $(background).attr("src", "images/dark.gif");
    $("p").css("color", "gray");
    $("p").css({"font-family": "Arial, Helvetica, sans-serif"});
    $("h1").css({"font-family": "Arial, Helvetica, sans-serif", "font-size": "200%"});
    $("#p2").show();
    $("#p3").show();
  });
  
  $("#p3").click(function(){
    // Change src attribute of image
    $(background).attr("src", "images/house.gif");
    alert("How Interesting.");
  });
});
''
