const menuEmail = document.querySelector('.navbar-email'); //Seleccionamos la el elemento con el que vamos a trabajar
const desktopMenu = document.querySelector('.desktop-menu'); //Seleccionamos el elemento que le agregaremos la clase
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const productDetailCloseIcon = document.querySelector('.product-detail-close')


const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');



//Creamos la llamada del evento

menuEmail.addEventListener('click', toggleDesktopMenu); 
menuHamIcon.addEventListener('click', toggleMobilepMenu); 
menuCarIcon.addEventListener('click', toggleCarIconMenu);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

//Con esta linea se escucha el evento click y se activa la funcion que crearemos

function toggleDesktopMenu(){
  
    desktopMenu.classList.toggle('inactive');
    closeProductDetailAside();
    //Aqui le estamos diciendo al elemento que agrego o se quite la clase "inactive"
}

//Esto es para quitar y poner una clase con JS
function toggleMobilepMenu(){
    shoppingCartContainer.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');

    closeProductDetailAside();
}

function toggleCarIconMenu(){
    mobileMenu.classList.add('inactive');
    shoppingCartContainer.classList.toggle('inactive');
    closeProductDetailAside();
} 

function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
    
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}


/*Product List*/

const productList = [];

productList.push({
    name:'Bike',
    price: 120,
    image: 'https://picsum.photos/200/300?random=1'
});
productList.push({
    name:'Pantalla',
    price: 340,
    image: 'https://picsum.photos/200/300?random=2'
});
productList.push({
    name:'Compu',
    price: 750,
    image: 'https://picsum.photos/200/300?random=3'
});
productList.push({
    name:'Compu',
    price: 750,
    image: 'https://picsum.photos/200/300?random=4'
});
productList.push({
    name:'Compu',
    price: 750,
    image: 'https://picsum.photos/200/300?random=5'
});

/*Recorrer el array*/

for(product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    //product={name,price,image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

        const productHoleDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = '$' + product.name;

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');

    
    /*Ordenamiento de los elementos*/
    productHoleDiv.append(productPrice,productName);
    productInfoFigure.appendChild(productImgCart);
    
    productInfo.appendChild(productHoleDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);

}