const botonMenu = document.getElementById("boton-menu");
const menuMovil = document.getElementById("nav-movil");
const navEscritorio = document.getElementById("nav-escritorio");

const ANCHO_MOVIL = 600;

function cerrarMenu() {
    menuMovil.classList.remove("abierto");
    botonMenu.classList.remove("abierto");
    botonMenu.setAttribute("aria-expanded", "false");
    botonMenu.setAttribute("aria-label", "Abrir menú");
}

function ajustarNavegacion() {
    const esMovil = window.innerWidth <= ANCHO_MOVIL;

    botonMenu.style.display = esMovil ? "block" : "none";
    navEscritorio.style.display = esMovil ? "none" : "flex";

    if (!esMovil) cerrarMenu();
}

function alternarMenu() {
    const abrir = !menuMovil.classList.contains("abierto");

    menuMovil.classList.toggle("abierto", abrir);
    botonMenu.classList.toggle("abierto", abrir);
    botonMenu.setAttribute("aria-expanded", String(abrir));
    botonMenu.setAttribute("aria-label", abrir ? "Cerrar menú" : "Abrir menú");
}

// Aplica el estado correcto también en la carga inicial, no solo tras un resize.
ajustarNavegacion();
window.addEventListener("resize", ajustarNavegacion);

botonMenu.addEventListener("click", alternarMenu);
botonMenu.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter" || evento.key === " ") {
        evento.preventDefault();
        alternarMenu();
    }
});

// Cierra el menú al elegir un enlace o al pulsar Escape.
menuMovil.querySelectorAll("a").forEach((enlace) => {
    enlace.addEventListener("click", cerrarMenu);
});

document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") cerrarMenu();
});
