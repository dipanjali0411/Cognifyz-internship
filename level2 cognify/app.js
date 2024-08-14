const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    btn.style.backgroundColor = '#5da7d8';
    btn.style.boxShadow = '5px 4px 10px #000';
    btn.style.color = '#fff';
    btn.style.border = '#fff';
    btn.style.transition = '.5s ease';
});