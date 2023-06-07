const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

function disableScrolling() {
    setTimeout(function() {
        document.body.style.overflow = 'hidden';
    }, 1000);
}
  
function enableScrolling() {
    document.body.style.overflow = '';
}

function lightMode() {
    const navbar = document.querySelector('.navbar');
    navbar.style.background = '#f2f2f2';
}

const checker = document.getElementById('dark-mode');
if (checker.checked == false) {
    lightMode();
}