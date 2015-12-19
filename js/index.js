var resizeFrame = function() {
  var iframe = $("#player"),
      rframe = $(".resetframe");

  iframe.attr("width",  rframe.width())
        .attr("height", rframe.height());
};

$(document).ready(function() {
  $(window).on("load resize", function() {
    resizeFrame();
  })
  resizeFrame();
})
