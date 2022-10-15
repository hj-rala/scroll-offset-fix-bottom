//floating
function floatingScroll() {
  var ft = $(".floating");
  var ftb = $(".floating-btn");

  ftb.on("click", function () {
    if ($(this).closest(ft).hasClass("close")) {
      $(this).closest(ft).removeClass("close");
    } else {
      $(this).closest(ft).addClass("close");
    }
  });

  $(window).scroll(function () {
    var $tmp = $(window).scrollTop();
    var $ftH = ft.height();
    var $footH = $(".footer").height();
    var $contHeight = $(document).height() - $(window).height() - $footH - $ftH + 180;

    if ($contHeight <= $tmp) {
      ft.css({ bottom: $tmp - $contHeight + 180 });
    } else {
      ft.css({ bottom: 180 });
    }

    setTimeout(function () {
      ft.addClass("close");
    }, 500);
  });
}
