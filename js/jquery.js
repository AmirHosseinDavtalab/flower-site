$(document).ready(function () {
  $(".right button").click(function () {
    $(".menu-wrapper").toggleClass("show-menu");
  });

  $(".close-icon").click(function () {
    $(".menu-wrapper").removeClass("show-menu");
  });
});
document.querySelector('.product-title').textContent = 'ورود';