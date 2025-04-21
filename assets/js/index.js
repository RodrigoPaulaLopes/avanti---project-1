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


function search(event) {
    const searchInput = document.getElementById("searchInput"); 
    const searchResponse = document.getElementById("searchResponse");
    
    if (searchInput && searchResponse) {
        const query = searchInput.value.trim();

        if (query !== "") {
            const sanitizedQuery = query.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            searchResponse.innerHTML = `Você buscou por: <span class='font-medium'>"${sanitizedQuery}"</span>`;
        } else {
            searchResponse.innerHTML = "";
        }
    } 
}

