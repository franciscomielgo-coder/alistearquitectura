 // Espera a que cargue la página
document.addEventListener("DOMContentLoaded", function () {

    // Marcar en el menú la página actual
    const links = document.querySelectorAll("nav a");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.style.color = "#999";
        }
    });

});