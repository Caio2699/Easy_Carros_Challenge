const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showSlide(index) {
    carousel.style.transform = `translateX(-${index * 100}%)`;

    // Alterar a cor de fundo da página com base no índice atual
    const colors = [
        'rgba(235, 237, 245, 1)',
        'rgba(42, 78, 160, 1)',
        'rgba(11, 219, 196, 1)',
        'rgba(42, 78, 160, 1)',
    ];
    document.body.style.backgroundColor = colors[index];
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
}
setInterval(nextSlide, 3000); // Troca a cada 3 segundos
showSlide(currentIndex);
