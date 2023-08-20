$(function () {
  //ページ読み込み時

  $(window).on("load", function () {
    setTimeout(function () {
      $(".load").addClass("hidden");
      setTimeout(function () {
        $(".load").addClass("d-none");
        $("body").removeClass("on_load");
      }, 500);
    }, 1000);
  });

  //header 制御

  var startPos = 0;
  var scrollPos = 0;

  $(window).on("scroll", function () {
    scrollPos = $(this).scrollTop();

    if (scrollPos >= startPos) {
      $("header").addClass("hide");
    } else {
      $("header").removeClass("hide");
    }

    startPos = scrollPos;
  });

  //sp時ハンバーガー
  $(".hamburger-btn").on("click", function () {
    $(".hamburger-btn").toggleClass("close");
    $(".sp-menu").toggleClass("active");
    $("body").toggleClass("sp-nav-active");
  });

  $(".sp-menu a").on("click", function () {
    $(".hamburger-btn").toggleClass("close");
    $(".sp-menu").toggleClass("active");
    $("body").toggleClass("sp-nav-active");
  });

  //slick.js
  $(".fv-inner").slick({
    arrows: false,
    dots: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  });
});
