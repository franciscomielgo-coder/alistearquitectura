document.addEventListener("DOMContentLoaded", function () {

    // Marcar página activa
    const links = document.querySelectorAll("nav a");
    const currentPage = window.location.href.split("/").pop();

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    // MENÚ HAMBURGUESA
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const overlay = document.querySelector('.menu-overlay');

    if (toggle && nav && overlay) {

        toggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            toggle.classList.toggle('active');
            overlay.classList.toggle('active');
        });

        overlay.addEventListener('click', () => {
            nav.classList.remove('active');
            toggle.classList.remove('active');
            overlay.classList.remove('active');
        });

        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                overlay.classList.remove('active');

                setTimeout(() => {
                    nav.classList.remove('active');
                    toggle.classList.remove('active');
                }, 50);
            });
        });
    }

});
