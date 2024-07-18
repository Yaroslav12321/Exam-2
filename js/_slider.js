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
  swipe: false,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        arrows: false,
        centerMode: true
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        arrows: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        arrows: false,
      },
    }
],
});
