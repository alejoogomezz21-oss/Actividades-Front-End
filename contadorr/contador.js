let cuenta = 0;
const cambioColor = document.getElementById("numero");

function actualizarPantalla() {
    cambioColor.innerHTML = cuenta;

    if (cuenta >= 10) {
        cambioColor.style.color = "tomato";
    } else {
        cambioColor.style.color = "blue";
    }
}

function aumentar() {
    cuenta++;
    actualizarPantalla()
}

function disminuir() {
    cuenta--;
    actualizarPantalla();
}

function reiniciar() {
    cuenta = 0;
    actualizarPantalla();
}