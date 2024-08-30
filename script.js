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
document.getElementById('seu-botao').addEventListener('click', () => {
    confetti({
        particleCount: 100, // Quantidade de confetes
        spread: 70, // Espalhamento dos confetes
        origin: { y: 0.6 }, // Origem (altura) dos confetes
    });
});
document.getElementById('seu-botao').addEventListener('click', () => {
    const baloes = document.querySelectorAll('.balao');
    baloes.forEach((balao) => {
        // Adicione aqui a lógica para animar os balões (por exemplo, usando CSS transitions ou transformações)
    });
});