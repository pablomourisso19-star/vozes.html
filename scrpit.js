
document.addEventListener('DOMContentLoaded', () => {

    // Fecha o menu mobile após clicar em um link
    const menu = document.querySelector('#menu');

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (menu.classList.contains('show')) {
                bootstrap.Collapse.getOrCreateInstance(menu).hide();
            }
        });
    });

    // Animação de entrada das seções
    const elementos = document.querySelectorAll(
        '.info-card, .warning-box, .quote-box, .report-card'
    );

    elementos.forEach(elemento => {
        elemento.style.opacity = '0';
        elemento.style.transform = 'translateY(25px)';
        elemento.style.transition = 'opacity .7s ease, transform .7s ease';
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    elementos.forEach(elemento => observer.observe(elemento));

});