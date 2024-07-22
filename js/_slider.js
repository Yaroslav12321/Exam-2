$(".slider").slick({
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 1600,
  dots: true,
  arrows: false,
  infinite: true,
  swipe: false,
  fade: true,
});
$(".slider_news").slick({
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 1600,
  dots: true,
  arrows: true,
  infinite: true,
  swipe: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1230,
      settings: {
        slidesToShow: 2,
        arrows: false,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        arrows: false,
      },
    }
],
});
