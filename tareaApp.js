const carritoDeCompras=[];
const añadir = prompt("Escriba el nombre del articulo que desea agregar al Carrito : ");
carritoDeCompras.push(añadir);
while( confirm('¿Deseas agregar algun otro articulo?')){

    const añadir = prompt("Escriba el nombre del siguiente articulo que desea agregar .De no ser el caso oprima cancelar.");

    carritoDeCompras.push(añadir);
}

console.log(carritoDeCompras);
