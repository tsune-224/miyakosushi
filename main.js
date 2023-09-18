$(function () {
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
    $("body").removeClass("sp-nav-active");
    inPageTransition($(this).attr("class"));
  });

  $(".pc-nav a").on("click", function () {
    inPageTransition($(this).attr("class"));
  });

  function inPageTransition(link) {
    let position = link === "top" ? 0 : $(`#${link}`).offset().top;
    $("html,body").animate({ scrollTop: position }, 300);
    return false;
  }

  //メニュー表示制御
  $(".menu-btn").on("click", function () {
    $(".menu-list").toggleClass("active");
    $(".menu-list").toggleClass("close");
    $(".menu-btn").toggleClass("invalid");
  });
});
