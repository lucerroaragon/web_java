document.addEventListener('DOMContentLoaded', function() {
// Inicializa un nuevo Swiper para el contenedor con la clase 'mySwiper-1'
var swiper = new Swiper(".mySwiper-1", {
  // Número de diapositivas visibles en una vista
  slidesPerView: 1,
  
  // Espacio (en píxeles) entre las diapositivas
  spaceBetween: 30,
  
  // Activa el modo bucle para que el slider vuelva al inicio después de la última diapositiva
  loop: true,
  
  // Configuración de la paginación
  pagination: {
    // Selector para el contenedor de la paginación (puntos)
    el: ".swiper-pagination",
    // Permite que los puntos de paginación sean clicables
    clickable: true,
  },
  
  // Configuración de la navegación (botones siguiente/anterior)
  navigation: {
    // Selector para el botón de siguiente diapositiva
    nextEl: ".swiper-button-next",
    // Selector para el botón de diapositiva anterior
    prevEl: ".swiper-button-prev",
  },
});
  // Inicialización de Swiper para el segundo slider
  var swiper2 = new Swiper(".mySwiper-2", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 3,
      }
    }
  });

  // Actualización de Swiper al cambiar de pestaña
  let tabInputs = document.querySelectorAll(".tabInput");
  tabInputs.forEach(function(input) {
    input.addEventListener('change', function() {
      let id = input.getAttribute('aria-valuemax');
      let thisSwiper = document.getElementById('swiper' + id);
      if (thisSwiper && thisSwiper.swiper) {
        thisSwiper.swiper.update();
      }
    });
  });
});