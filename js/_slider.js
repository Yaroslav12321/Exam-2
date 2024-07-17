$(document).ready(function(){
    $('.slider').slick({
        autoplay: false,
        autoplaySpeed: 4600,
        speed: 1600,
        dots: true,
        arrows: false,
        infinite: true,
        swipe: false,
        fade: true
    });
});
$(document).ready(function(){
    $('.slider_news').slick({
        autoplay: false,
        autoplaySpeed: 4600,
        speed: 1600,
        dots: true,
        arrows: true,
        infinite: true,
        swipe: false,
        slidesToShow: 3,
    });
});