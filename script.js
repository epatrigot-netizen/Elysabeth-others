document.querySelectorAll('.skill-card').forEach(card => {
    const img = card.querySelector('img');
    const originalSrc = img.src;
    const colorSrc = img.getAttribute('data-color');
    
    card.addEventListener('mouseenter', () => {
        img.src = colorSrc;
    });
    
    card.addEventListener('mouseleave', () => {
        img.src = originalSrc;
    });
});