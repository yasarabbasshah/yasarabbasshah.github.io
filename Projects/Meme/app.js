var main = function() {
   $("#top-text").keyup(function(){
    var text = $("#top-text").val();
    $(".top-caption").text(text);
  });
  $("#bottom-text").keyup(function(){
    var text = $("#bottom-text").val();
    $(".bottom-caption").text(text);
  });
  $("#image-url").keyup(function(){
    var img = $("#image-url").val();
    $(".thumbnail img").attr("src", img);
  });
  
};
 
$(document).ready(main);