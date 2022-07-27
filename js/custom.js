$(document).ready(function () {

  $('.slick_box').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,

    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $(window).scroll(function() {
    var $height = $(window).scrollTop();
    if($height > 50) {
      $('#navbar').addClass('fixed');
    } else {
      $('#navbar').removeClass('fixed');
    }
  });
  




});

$(function () {
  $('.fa-user').on('click',function () {
    $('.fa-user').toggleClass('user_blue');
});


$('.fa-heart').on('click',function () {
  $('.fa-heart').toggleClass('user_heart');
});


$('.fa-star').on('click',function () {
  $('.fa-star').toggleClass('user_star');
});
});