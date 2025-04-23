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


function updateVisibility(value) {
  const stepper = document.getElementById("stepper");
  const buyButton = document.getElementById("buy_button");
  const plusButton = document.getElementById("plus_button");

  if (value === 0) {
    stepper.classList.add("hidden");
    buyButton.classList.remove("hidden");
  } else {
    stepper.classList.remove("hidden");
    buyButton.classList.add("hidden");
  }

  if (value >= 5) {
    plusButton.disabled = true;
    plusButton.classList.add("opacity-50", "cursor-not-allowed");
  } else {
    plusButton.disabled = false;
    plusButton.classList.remove("opacity-50", "cursor-not-allowed");
  }
}


function plus() {
  const quantity = document.getElementById("qtde_value");
  const plus_button = document.getElementById("plus_button")
  let value = parseInt(quantity.innerText);
  value += 1;
  quantity.innerText = value;
 
  updateVisibility(value);
}

function minus() {
  const quantity = document.getElementById("qtde_value");
  let value = parseInt(quantity.innerText);
  if (value > 0) {
    value -= 1;
  }
  quantity.innerText = value;
  updateVisibility(value);
}

function buy() {
  const quantity = document.getElementById("qtde_value");
  quantity.innerText = 1;
  updateVisibility(1);
}

window.onload = () => {
  updateVisibility(0);
};



