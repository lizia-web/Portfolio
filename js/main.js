// switch theme

(function () {
    const theme = document.getElementById("theme");
    const container = document.querySelector(".container");

    if (!theme || !container) return;
    const saved = localStorage.getItem('darkTheme');
    if (saved === '1'){
        container.classList.add('dark-theme');
        theme.checked = true;
    }

    theme.addEventListener('change', () => {
        container.classList.toggle('dark-theme', theme.checked);
        localStorage.setItem('darkTheme', theme.checked ? '1':'0');
    });

}) ();

// navigateTo

function navigateTo(url) {
    window.open(url, '_blank');
}

function navigateToMenu(url) {
    window.open(url, '_self');
}

function openGmail() {
    const email = 'contact.elizabethkarshina@gmail.com';
    const subject = encodeURIComponent('Запит з веб-сайту');

    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}`;

    window.open(url, "_blank");
}
