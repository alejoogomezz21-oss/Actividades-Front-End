const boton = document.getElementById('btn-cambiar');
const textoColor = document.getElementById('color-texto');

function generarColor() {
    const caracteres = '0123456789ABCDEF';
    let color = '#';
    
    for (let i = 0; i < 6; i++) {
        let indiceAleatorio = Math.floor(Math.random() * 16);
        color += caracteres[indiceAleatorio];
    }
    
    return color; 
}

boton.addEventListener('click', function() {
    let colorNuevo = generarColor();

    textoColor.textContent = colorNuevo;

    document.body.style.backgroundColor = colorNuevo;
});