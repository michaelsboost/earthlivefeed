var resizeFrame = function() {
  var iframe = $("#player"),
      rframe = $(".resetframe");

  iframe.attr("width",  rframe.width())
        .attr("height", rframe.height());
};

$(document).ready(function() {
  $(window).resize(function() {
    resizeFrame();
  })
  resizeFrame();
})
