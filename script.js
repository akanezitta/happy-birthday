document.addEventListener('DOMContentLoaded', () => {
    const initialWindow = document.getElementById('initialWindow');
    const card = document.getElementById('card');

    initialWindow.addEventListener('click', () => {
        initialWindow.style.opacity = '0';
        initialWindow.style.transform = 'scale(0.8)';
        setTimeout(() => {
            initialWindow.style.display = 'none';
            card.classList.add('visible');
        }, 1000);
    });
});