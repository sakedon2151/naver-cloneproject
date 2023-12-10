$(function(){

    // naviBtn icon mouseenter & leave active add
    $('.btn_menu').mouseenter(function () {
        $('.menu_tip').addClass('active');
    });
    $('.btn_menu').mouseleave(function () {
        $('.menu_tip').removeClass('active');
    });
    $('.btn_pay').mouseenter(function () {
        $('.pay_tip').addClass('active');
    });
    $('.btn_pay').mouseleave(function () {
        $('.pay_tip').removeClass('active');
    });
    $('.btn_talk').mouseenter(function () {
        $('.talk_tip').addClass('active');
    });
    $('.btn_talk').mouseleave(function () {
        $('.talk_tip').removeClass('active');
    });
    $('.btn_notify').mouseenter(function () {
        $('.notify_tip').addClass('active');
    });
    $('.btn_notify').mouseleave(function () {
        $('.notify_tip').removeClass('active');
    });

    // search input focus logo border active add
    $('.input_box>input').focus(function () {
        $('.logo').addClass('active');
    });
    $('.input_box>input').blur(function () {
        $('.logo').removeClass('active');
    });

    // keyboard icon mouseenter & leave active add
    $('.btn_keyboard').mouseenter(function () {
        $('.btn_keyboard_text').addClass('active');
    });
    $('.btn_keyboard').mouseleave(function () {
        $('.btn_keyboard_text').removeClass('active');
    });

    // searchArea headerout dropdown design (only activate width over 1900px)
    if ($(window).width() >= 1900) {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 253) {
                $('.searchArea').addClass('active');
                $('.logo').addClass('active');
            } else {
                $('.searchArea').removeClass('active');
                $('.logo').removeClass('active');
            };
        });
    } else {}
    
    // shortcut more btn active add
    $('.shortcut_plus_btn').click(function () {
        $(this).toggleClass('active');
        $('.shortcutArea').toggleClass('active');
    });

    // finance swiper
    const swiper1 = new Swiper('.finance_swiper', {
        speed: 400,
        delay: 4000,
        autoplay: true,
        loop: true,
        disableOnInteraction: false,
        allowTouchMove: false,
        slidesPerView: 1,
        centeredSlides: true,
    });

    $('.finance_swiper').on('mouseover', function (event) {
        swiper1.autoplay.stop();
        event.stopPropagation();
    });
    $('.finance_swiper').on('mouseout', function (event) {
        swiper1.autoplay.start();
        event.stopPropagation();
    });

    // clip swiper
    const swiper = new Swiper('.clipSwiper', {
        speed: 400,
        delay: 4000,
        autoplay: true,
        loop: true,
        disableOnInteraction: false,
        allowTouchMove: false,
        spaceBetween: -5,
        // slidesPerGroup: 3,
        slidesPerView: 3,
        centeredSlides: true,
    });

});