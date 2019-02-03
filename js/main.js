$(document).ready(function () {
  $(".nav > li").click(function () {
    $(".nav > li.highlighted").removeClass("highlighted");
    $(this).addClass("highlighted");
    $(".nav > li.highlightedside").removeClass("highlightedside");
    $(this).addClass("highlightedside");
  });
});

$(document).on('click', '.navbar-collapse.in', function (e) {
  if ($(e.target).is('a:not(".dropdown-toggle")')) {
    $(this).collapse('hide');
  }
});
