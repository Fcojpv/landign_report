// Simplificación del JavaScript usando Bootstrap y clases nativas
document.addEventListener('DOMContentLoaded', () => {
    // Navbar shadow on scroll
    window.addEventListener('scroll', () => {
        document.querySelector('.navbar').classList.toggle('shadow', window.scrollY > 50);
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                window.scrollTo({
                    top: target.offsetTop - navHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
}); 