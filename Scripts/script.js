const carouselItems = document.querySelectorAll('.carousel-item');
const circlesContainer = document.querySelector('.circles');
let currentIndex = 0;

// Creamos un círculo para cada mensaje
carouselItems.forEach((item, index) => {
  const circle = document.createElement('div');
  circle.classList.add('circle');
  circle.addEventListener('click', () => showSlide(index));
  circlesContainer.appendChild(circle);
});

function showSlide(index) {
  // Ocultamos todos los mensajes
  carouselItems.forEach(item => item.classList.remove('active'));
  // Mostramos el mensaje seleccionado
  carouselItems[index].classList.add('active');
  // Actualizamos el índice actual
  currentIndex = index;
  // Actualizamos el estado de los círculos
  updateCircles();
}

function updateCircles() {
  const circles = document.querySelectorAll('.circle');
  circles.forEach((circle, index) => {
    if (index === currentIndex) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });
}

function nextSlide() {
  // Calculamos el índice del siguiente mensaje
  const nextIndex = (currentIndex + 1) % carouselItems.length;
  // Mostramos el siguiente mensaje
  showSlide(nextIndex);
}

// Cambiamos de slide automáticamente cada 3 segundos
setInterval(nextSlide, 3000);

// Mostramos el primer mensaje por defecto
showSlide(0);
