function bindCommonEvents(){
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
    // $( window ).resize(function() {
    //     setSliderHeight();
    //   });
}

$(function () {
    bindCommonEvents();
});