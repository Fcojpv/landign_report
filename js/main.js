// Cambiar estilo de la navegación al hacer scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-sm');
    } else {
        navbar.classList.remove('shadow-sm');
    }
});

// Scroll suave para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Ajustar el scroll para compensar la navbar fija
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Agregar al archivo main.js existente
document.addEventListener('DOMContentLoaded', function() {
    // Verificar carga de imágenes
    const carouselImages = document.querySelectorAll('.carousel-item img');
    carouselImages.forEach(img => {
        img.addEventListener('error', function() {
            console.error('Error cargando imagen:', img.src);
            // Opcional: mostrar una imagen de respaldo
            img.src = 'assets/images/fallback.png';
        });
    });
}); 