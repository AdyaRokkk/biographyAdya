const themeBtn = document.getElementById('theme-btn');
const body = document.documentElement;

if (localStorage.getItem('theme') === 'dark') {
    body.setAttribute('data-theme', 'dark');
    themeBtn.textContent = '🌙';
}

themeBtn.addEventListener('click', () => {
    if (body.hasAttribute('data-theme')) {
        body.removeAttribute('data-theme');
        themeBtn.textContent = '☀️';
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeBtn.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    }
});