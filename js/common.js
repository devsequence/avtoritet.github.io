'use strict';
if(!window.console) window.console = {};
if(!window.console.memory) window.console.memory = function() {};
if(!window.console.debug) window.console.debug = function() {};
if(!window.console.error) window.console.error = function() {};
if(!window.console.info) window.console.info = function() {};
if(!window.console.log) window.console.log = function() {};

// sticky footer
//-----------------------------------------------------------------------------
if(!Modernizr.flexbox) {
  (function() {
    var
      $pageWrapper = $('#page-wrapper'),
      $pageBody = $('#page-body'),
      noFlexboxStickyFooter = function() {
        $pageBody.height('auto');
        if($pageBody.height() + $('#header').outerHeight() + $('#footer').outerHeight() < $(window).height()) {
          $pageBody.height($(window).height() - $('#header').outerHeight() - $('#footer').outerHeight());
        } else {
          $pageWrapper.height('auto');
        }
      };
    $(window).on('load resize', noFlexboxStickyFooter);
  })();
}
if(ieDetector.ieVersion == 10 || ieDetector.ieVersion == 11) {
  (function(){
    var
      $pageWrapper = $('#page-wrapper'),
      $pageBody = $('#page-body'),
      ieFlexboxFix = function() {
        if($pageBody.addClass('flex-none').height() + $('#header').outerHeight() + $('#footer').outerHeight() < $(window).height()) {
          $pageWrapper.height($(window).height());
          $pageBody.removeClass('flex-none');
        } else {
          $pageWrapper.height('auto');
        }
      };
    ieFlexboxFix();
    $(window).on('load resize', ieFlexboxFix);
  })();
}

$(function() {

// placeholder
//-----------------------------------------------------------------------------
  $('input[placeholder], textarea[placeholder]').placeholder();
    $('.bot-nav-button').on('click', function(){
        if($(this).hasClass('nav-btn-open')){
            $('.bot-nav').addClass('bot-nav-open');
            $(this).addClass('nav-btn-close').removeClass('nav-btn-open');
        }else{
            $('.bot-nav').removeClass('bot-nav-open');
            $(this).addClass('nav-btn-open').removeClass('nav-btn-close');
        }
    });
    $('.bot-nav a').each(function () {
        var location = window.location.href;
        var link = this.href;
        if(location == link) {
            $(this).addClass('active');
        }
    });
    $('.select-wrap').on('click', function() {
        $('.slider-popup-wrap').slick("setPosition", 0);
    });
    $('.model-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.tab-slider').slick({
    });

    $(".price-table tbody").mCustomScrollbar({
        axis: "y"
    });
    //$(".price-table-container").mCustomScrollbar({
    //    axis: "x"
    //});
    $(".table-block tbody").mCustomScrollbar({
        axis: "y"
    });
    //$(".table-table-container").mCustomScrollbar({
    //    axis: "x"
    //});





    //$(".table-block").mCustomScrollbar({
    //    axis: "yx"     // custom scroll ver,hor scroll
    //
    //});
    $('.tabs-nav a').on('click', function(e){
        e.preventDefault();
        var $this = $(this),
            topTab = $('.tabs-container').offset().top -120,
            thisIdItem = $this.attr('href');
        $('.tabs-nav a').removeClass('active');
        $this.addClass('active');
        $('.tab').removeClass('tab-active');
        $(thisIdItem).addClass('tab-active');
        $('.tabs-nav li').removeClass('active-li');
        $this.parent('li').addClass('active-li');
        $('body,html').animate({scrollTop: topTab}, 500);
        $('.tabs-container .tab-slider').slick('setPosition');
    });
    $('.open-popup').on('click', function(e){
        e.preventDefault();
        $('.footer-popup').addClass('footer-popup-open');
    });
    $('.link-offers a').on('click', function(e){
        e.preventDefault();
        $('.footer-popup').addClass('footer-popup-open');
    });
    $('.close-popup').on('click', function(e){
        e.preventDefault();
        $('.footer-popup').removeClass('footer-popup-open');
    });
    $('.footer-popup__overlay').on('click', function(e){
        e.preventDefault();
        $('.footer-popup').removeClass('footer-popup-open');
    });
    //$('.service-link a').on('click', function(){
    //    var $this = $(this),
    //        id  = $this.attr('href'),
    //        top = $('.service-page-slider').offset().top -120;
    //    $('body,html').animate({scrollTop: top}, 500);
    //    $('.service-link a').removeClass('active-link');
    //    $(this).addClass('active-link');
    //    $('.service-wrap').removeClass('active');
    //    $(id).addClass('active');
    //    $('.service-page-slider .model-slider').slick('setPosition');
    //});

});

$(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
        $('.scroll-to-top').fadeIn().css('display','block');
    }
    else {
        $('.scroll-to-top').fadeOut().css('display','none');
    }
});
$('.scroll-to-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 400);
    return false;
});