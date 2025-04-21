const swiper = new Swiper('.swiper', {
    slidesPerView: 5,
    slidesPerGroup: 1,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.custom-next',
        prevEl: '.custom-prev',
    },
    loop: true,
});

