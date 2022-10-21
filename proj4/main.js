$(document).ready(function() {
  
  $("img").click(function(){
    // Change src attribute of image
    $(background).attr("src", "images/dark.gif");
    $("p").css("color", "white");
    $("p").css({"font-family": "Arial, Helvetica, sans-serif"});
    $("h1").css({"font-family": "Arial, Helvetica, sans-serif", "font-size": "200%"});
     $("h1").css("color", "white");
    $("#p2").show();
    $("#p3").show();
    $("body").css("color", "black");
  });
  
  $("#p3").click(function(){
    // Change src attribute of image
    $(background).attr("src", "images/house.gif");
    alert("How Interesting.");
  });
});
''
