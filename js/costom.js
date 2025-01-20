$(function () {
    const swiper = new Swiper('.main_visual_slide', {
        loop: true,
        speed: 1000,
        effect: "fade",

        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },

        navigation: {
            prevEl: '.main_visual .arrows .prev',
            nextEl: '.main_visual .arrows .next',
        },
    });
    $('.mopen').on('click', function () {
        $('.header .gnb').toggleClass('on')
    })
});