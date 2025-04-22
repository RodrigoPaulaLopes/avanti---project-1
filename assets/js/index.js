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
  breakpoints: {
    0: {
      slidesPerView: 2,
      grid: {
        rows: 1,
        fill: 'row'
      },
    },
    768: {
      slidesPerView: 3,
      grid: {
        rows: 1,
      },
    },
    1024: {
      slidesPerView: 5,
      grid: {
        rows: 1,
      },
    }
  }
});


function search(event) {
  const searchInput = document.getElementById("searchInput");
  const searchResponse = document.getElementById("searchResponse");

  if (searchInput && searchResponse) {
    const query = searchInput.value.trim();
    console.log(query);

    if (query !== "") {
      const sanitizedQuery = query.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      searchResponse.innerHTML = `Você buscou por: <span class='font-medium'>"${sanitizedQuery}"</span>`;
    } else {
      searchResponse.innerHTML = "";
    }
  }
}

function toggleSection(header) {
  const submenu = header.nextElementSibling;
  const icon = header.querySelector('.icon');
  submenu.classList.toggle('hidden');
  icon.classList.toggle('rotate-180');
}



