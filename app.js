// ===== MOBILE MENU =====
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

if (menu && menuLinks) {
    menu.addEventListener('click', function () {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    });

    // Close menu when a nav link is clicked
    document.querySelectorAll('.navbar__links').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('is-active');
            menuLinks.classList.remove('active');
        });
    });
}

// ===== ACTIVE NAV LINK =====
const currentPath = window.location.pathname;
document.querySelectorAll('.navbar__links').forEach(link => {
    const href = link.getAttribute('href');
    const onHome = (currentPath === '/' || currentPath === '/index.html') && (href === '/' || href === '/index.html');
    const onPage = href !== '/' && currentPath.includes(href.replace('/', ''));
    if (onHome || onPage) {
        link.classList.add('active');
    }
});

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (!navbar) return;
    if (window.scrollY > 30) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}, { passive: true });

// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ===== TYPED TEXT EFFECT (hero only) =====
const typedEl = document.getElementById('typed-text');

if (typedEl) {
    const strings = [
        'Software Engineer',
        'Full-Stack Developer',
        'ML Engineer',
        'API Developer'
    ];
    let si = 0;
    let ci = 0;
    let deleting = false;

    function typeEffect() {
        const current = strings[si];

        if (deleting) {
            typedEl.textContent = current.substring(0, ci - 1);
            ci--;
        } else {
            typedEl.textContent = current.substring(0, ci + 1);
            ci++;
        }

        let delay = deleting ? 45 : 95;

        if (!deleting && ci === current.length) {
            delay = 2200;
            deleting = true;
        } else if (deleting && ci === 0) {
            deleting = false;
            si = (si + 1) % strings.length;
            delay = 380;
        }

        setTimeout(typeEffect, delay);
    }

    typeEffect();
}
