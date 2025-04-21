const scrollContainer = document.getElementById('scroll-container');



function scroll_right() {
    if (scrollContainer) {
        scrollContainer.scrollBy({
            left: 330,
            behavior: 'smooth'
        });
    }
}

function scroll_left() {
    if (scrollContainer) {
        scrollContainer.scrollBy({
            left: -330,
            behavior: 'smooth'
        });
    }
}

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

