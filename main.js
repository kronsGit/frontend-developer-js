const menuEmail = document.querySelector('.navbar-email'); //Seleccionamos la el elemento con el que vamos a trabajar
const desktopMenu = document.querySelector('.desktop-menu'); //Seleccionamos el elemento que le agregaremos la clase
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');



//Creamos la llamada del evento

menuEmail.addEventListener('click', toggleDesktopMenu); 
menuHamIcon.addEventListener('click', toggleMobilepMenu); 

//Con esta linea se escucha el evento click y se activa la funcion que crearemos

function toggleDesktopMenu(){
  
    desktopMenu.classList.toggle('inactive');
    //Aqui le estamos diciendo al elemento que agrego o se quite la clase "inactive"
}


//Esto es para quitar y poner una clase con JS
function toggleMobilepMenu(){
    mobileMenu.classList.toggle('inactive');
}

