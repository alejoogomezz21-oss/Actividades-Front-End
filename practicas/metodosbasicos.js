

// Métodos básicos de manipulación del DOM

// Seleccionar un elemento por su ID
/*

let elementoPorId = document.getElementById('p1');
elementoPorId.innerHTML = 'HTML';

let elementoPorTag = document.getElementsByTagName('p')[1];
elementoPorTag.innerHTML = 'CSS';

let elementoPorClase = document.getElementsByClassName('parrafos')[2];
elementoPorClase.textContent = 'JAVASCRIPRT';

elementoPorId.style.backgroundColor='blue';
elementoPorId.style.color='white';
elementoPorId.style.borderRadius='10px';
elementoPorId.style.textAlign='center';
elementoPorId.style.width='100px';
*/

// Obtener elementos por su clase
//Es una colección de elementos. Se accede a cada uno por su indice.

// Obtener elementos por su etiqueta


//Modificar estilos de un elemento



//por nodo
/*

let elementoPorId = document.querySelector('#p1')
elementoPorId.innerHTML = 'HTML'

let elementoPorClase = document.querySelectorAll('.parrafos')
elementoPorClase[1].innerHTML = 'CSS'


elementoPorEtiqueta = document.querySelectorAll('p')
elementoPorEtiqueta[2].innerHTML = 'JAVASCRIPT'

elementoPorId.style.backgroundColor='purple';
elementoPorId.style.color='white';
elementoPorId.style.borderRadius='10px';
elementoPorId.style.textAlign='center';
elementoPorId.style.width='100px';
elementoPorId.style.margin='10px';
*/


let elementoPadre=document.querySelector('.padre')

let parrafoCuatro = document.createElement('p')
parrafoCuatro.innerHTML = ('Parrafo 4')
elementoPadre.appendChild(parrafoCuatro)
parrafoCuatro.classList.add('parrafos')
parrafoCuatro.setAttribute('id' , 'p4')


const parrafoCinco = document.createElement('p')
parrafoCinco.innerHTML = ('Parrafo 5')
elementoPadre.appendChild(parrafoCinco)
parrafoCinco.classList.add('parrafos')
parrafoCinco.setAttribute('id' , 'p5')

let parrafoCero = document.createElement('p')
parrafoCero.innerHTML='Parrafo 0'

let parrafoReferencia=document.getElementById('p1')
elementoPadre.insertBefore(parrafoCero, parrafoReferencia)


const parrafoExtra=document.createElement('p')
parrafoExtra.innerHTML= 'Parrafo Extra'

elementoPadre.insertAdjacentElement("beforeend" , parrafoExtra)


parrafoCero.remove()

elementoPadre.removeChild(parrafoCinco)

elementoPadre.replaceChild(parrafoCinco , parrafoExtra)

