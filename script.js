const activador = document.querySelector("span");

const menu = document.getElementById("celulares");

const menu2 = document.getElementById("todos");

let control = true

const ancho = window.innerWidth;

window.addEventListener("resize", () => {

    if (window.innerWidth <= 500) {
        activador.style.display = "block";
        menu2.style.display = "none"
    } else {
        activador.style.display = "none";
        menu2.style.display = "flex"
    }

});



activador.addEventListener("click", ()=> {
    if(control) {
        menu.style.display = "flex"
        activador.style.color = "var(--bg-secondary)"
        control = false
    } else if (!control) {
        menu.style.display = "none"
        control = true
        activador.style.color = "#010c23e7";
    }
})