$(window).scroll(function () {
    if( $(window).scrollTop() > $('.masthead').offset().top && !($('.masthead').hasClass('affix'))){
        $('.masthead').addClass('affix');
    } else if ($(window).scrollTop() == 0){
        $('.masthead').removeClass('affix');
    }
});