// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

//Slettet tabID og tilføjet scroller til sektionen

//Scroller den til sektionen og luk hambermenu
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
        const targetId = link.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
        }

        // Luk navbar på mobil
        const navbar = document.querySelector('.navbar-collapse');
        const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbar);
        bsCollapse.hide();
    });
});
const rows = document.querySelectorAll('.scrolly-row');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.3 });

rows.forEach(row => observer.observe(row));