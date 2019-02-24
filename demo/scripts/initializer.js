function setSliderHeight(){
    $('.mob-slide').height($('.mob-slide img').height());
}
$(function () {
    $('.desktop-slide').slide({
        'slideSpeed': 3000,
        'isHoverStop': false,
        'isShowArrow': true,
        'dotsEvent': 'mouseenter',
        'isLoadAllImgs': true
    });
    $('.mob-slide').slide({
        'slideSpeed': 3000,
        'isHoverStop': false,
        'isShowArrow': true,
        'dotsEvent': 'mouseenter',
        'isLoadAllImgs': true,
        isImageTag:true
    });

    /*$("#slick-images").slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });*/
    setSliderHeight();

    $(document).click(function(even){
        if(!$(even.target).hasClass('menu-icon'))
            $('.menu-items').removeClass('show');
    })
    $('.menu-icon').click(function () {
        if ($('.menu-items').hasClass('show'))
            $('.menu-items').removeClass('show');
        else
            $('.menu-items').addClass('show');
    });
    $( window ).resize(function() {
        setSliderHeight();
      });
});