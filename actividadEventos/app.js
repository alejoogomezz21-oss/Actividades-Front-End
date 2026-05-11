
const boton = document.querySelector('button')
/*
boton.onclick = function saludar() {
    console.log('Hola mundo')
}


boton.addEventListener('click', saludar);

    function saludar() {
    console.log('Hola mundo') 
}


boton.addEventListener('mouseover', function() {
    boton.style.backgroundColor = 'blue';
})

boton.removeEventListener('mouseover', function() {
    boton.style.backgroundColor = 'blue';
});*/

boton.addEventListener('dblclick', saludar);

function saludar(event) {
    console.log(event.target);
}

/*
document.addEventListener("DOMContentLoaded", () => {
    console.log('El contenido ha cargado completamente');
});*/

