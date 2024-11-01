document.addEventListener('DOMContentLoaded', () => {
    const skillCards = document.querySelectorAll('.skill-card');

    skillCards.forEach(card => {
        card.addEventListener('click', () => {
            card.querySelector('.skill-card-inner').style.transform = 
                card.querySelector('.skill-card-inner').style.transform === 'rotateY(180deg)' 
                    ? 'rotateY(0deg)' 
                    : 'rotateY(180deg)';
        });

        // Agregar atributos aria para accesibilidad
        const front = card.querySelector('.skill-card-front');
        const back = card.querySelector('.skill-card-back');
        front.setAttribute('aria-hidden', 'false');
        back.setAttribute('aria-hidden', 'true');

        card.addEventListener('mouseenter', () => {
            front.setAttribute('aria-hidden', 'true');
            back.setAttribute('aria-hidden', 'false');
        });

        card.addEventListener('mouseleave', () => {
            front.setAttribute('aria-hidden', 'false');
            back.setAttribute('aria-hidden', 'true');
        });
    });
});