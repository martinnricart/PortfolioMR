document.addEventListener('DOMContentLoaded', () => {
  const translateBtn = document.getElementById('translateBtn');
  const elementsToTranslate = document.querySelectorAll('[data-en]');
  const menuToggle = document.querySelector('.menu-toggle'); // Botón hamburguesa
  const navMenu = document.querySelector('.nav-menu'); // Menú de navegación

  if (translateBtn) {
    // Define el idioma actual, predeterminado a español
    let currentLang = 'es';

    translateBtn.addEventListener('click', () => {
      if (currentLang === 'es') {
        // Cambiar a inglés
        elementsToTranslate.forEach(element => {
          element.textContent = element.getAttribute('data-en');
        });
        translateBtn.textContent = 'Es';
        currentLang = 'en';
      } else {
        // Cambiar a español
        elementsToTranslate.forEach(element => {
          element.textContent = element.getAttribute('data-es');
        });
        translateBtn.textContent = 'En';
        currentLang = 'es';
      }
    });
  } else {
    console.error('Botón de traducción no encontrado');
  }

  // Manejo del contenido y transición de carga
  const content = document.getElementById("content");
  if (content) {
    document.getElementById("trancision").style.display = "none";
    content.classList.add("show");
  } else {
    console.error('Contenido no encontrado');
  }

  // Funcionalidad para el menú hamburguesa
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      // Alternar la clase "active" en el menú de navegación
      navMenu.classList.toggle('active');
    });
  } else {
    console.error('Botón de menú hamburguesa no encontrado');
  }
});