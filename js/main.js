$(document).ready(function(){
    $('.slider__wrapper').slick({
        slidesPerRow: 3,
        rows: 2,
        dots: true,
        appendDots: $('.slider-nav__dots'),
        appendArrows: $('.slider-nav'),
        nextArrow: '<div class="slider-nav__arrow">></div>',
        prevArrow: '<div class="slider-nav__arrow"><</div>',
        responsive: [
            {
              breakpoint: 1150,
              settings: {
                slidesPerRow: 2,
                rows: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                dots: true,
                centerMode: true,
                centerPadding: '20px',
                slidesPerRow: 1,
                rows: 1,
                slickRemove: 0,
              }
            }
          ]
    });
  });