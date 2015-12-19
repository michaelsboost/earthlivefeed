$(window).on("load resize", function() {
  var iframe = $("#player"),
      rframe = $(".resetframe");

  iframe.attr("width",  rframe.width())
        .attr("height", rframe.height());
})
