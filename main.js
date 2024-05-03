const menuEmail = document.querySelector('.navbar-email'); //Seleccionamos la el elemento con el que vamos a trabajar
const desktopMenu = document.querySelector('.desktop-menu'); //Seleccionamos el elemento que le agregaremos la clase

//Creamos la llamada del evento

menuEmail.addEventListener('click', toggleDesktopMenu); 
//Con esta linea se escucha el evento click y se activa la funcion que crearemos

function toggleDesktopMenu(){
    console.log('Click')
    desktopMenu.classList.toggle('inactive');
    //Aqui le estamos diciendo al elemento que agrego o se quite la clase "inactive"
}

console.log('Js Funcionando');