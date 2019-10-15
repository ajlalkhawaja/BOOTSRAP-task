$(document).ready(function(){
    $(".menu-btn").click(function(){
        $(".top-nav").toggleClass("active");
    });
      $('.one-time').slick({
        dots: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll:4,
        autoplay: true,
        autoplaySpeed: 2000,
        mobileFirst:true,
        arrows:0,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                  arrows: false,
                  slidesToShow: 10,
                  slidesToScroll:4,
                }
              },
              {
                breakpoint: 990,
                settings: {
                  arrows: false,
                  slidesToShow: 12,
                  slidesToScroll:3,
                }
              },
              {
                breakpoint: 1199,
                settings: "unslick"
              }
        ]
        });
});