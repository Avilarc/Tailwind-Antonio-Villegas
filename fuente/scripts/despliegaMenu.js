document.addEventListener("DOMContentLoaded", function() {
    let menu = document.getElementById("desplegable_movil");
    let boton = document.getElementById("menu-movil");
    let botonCerrar = document.getElementById("cierra_desplegable");

    boton.addEventListener("click", function() {
        menu.classList.remove("hidden")
    });

    botonCerrar.addEventListener("click", function() {
        menu.classList.add("hidden");
    });
});