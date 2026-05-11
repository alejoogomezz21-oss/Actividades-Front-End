const rojoColor = document.getElementById('rojo');
const textoRojo = document.getElementById('texto-rojo');
const verdeColor = document.getElementById('verde');
const textoVerde = document.getElementById('texto-verde');
const azulColor = document.getElementById('azul');
const textoAzul = document.getElementById('texto-azul');


function generarColor() {
    const rojo = parseInt(rojoColor.value);
    const verde = parseInt(verdeColor.value);
    const azul = parseInt(azulColor.value);
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
    document.body.style.backgroundColor = colorRGB; 
    textoRojo.textContent = rojo;
    textoVerde.textContent = verde;
    textoAzul.textContent = azul;

}

rojoColor.addEventListener('input', generarColor);
verdeColor.addEventListener('input', generarColor);
azulColor.addEventListener('input', generarColor);






