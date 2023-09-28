class Producto {
constructor (nombre, precio, detalle, cantidad){
this.nombre = nombre;
this.precio = parseFloat(precio);
this.detalle = detalle;
this.cantidad = cantidad;
this.disponible = true;

}

sumarIva() {
    return this.precio * 1.21;
}

Vender(){
    this.disponible = false;
}

preciosSugeridos(){
    return this.precio * 1.21 * 1.25;

}
}

var arrayProductos = [];
do{

    var comprobacion = prompt('Ingrese un nombre del producto o fin para terminar de agregar');
    if (comprobacion === "fin" || comprobacion === "FIN" || comprobacion === "Fin") {
        break;
    }else{
        nombreP = comprobacion;
        var precioP = prompt('Ingrese el precio del producto');
        var detalleP = prompt('Ingrese el detalle del producto');
        var cantidadP = prompt('Ingrese la cantidad completa del producto');
        arrayProductos.push(new Producto(nombreP, precioP, detalleP, cantidadP));
    }
}

while (comprobacion != "fin" || comprobacion != "FIN" || comprobacion != "Fin")
console.log(arrayProductos);

for (var producto of arrayProductos) {
    document.write("<ul><li><h3>Nombre: " + producto.nombre + "</h3></li>");
    document.write("<li><h3> Detalle: " + producto.detalle + "</h3></li>");
    document.write("<li><h3> Cantidad: " + producto.cantidad + "</h3></li>");
    document.write("<li><h3>  Precio: " + producto.precio + "</h3></li>");
    document.write("<li><h3>  Precio con IVA es: " + producto.sumarIva() + "</h3></li></ul><br>");
    console.log(producto.nombre);
    console.log(producto.detalle);
    console.log(producto.cantidad);
    console.log(producto.sumarIva());
}


var pocoStock = arrayProductos.filter(producto => producto.cantidad <= 3 );
console.log ('Productos con Poco Stock, comprar nuevamente: ');
console.log(pocoStock);
document.write("<h3> Lista de Productos con poco Stock (menos de 3 unidades): </h3>");



for (var producto of pocoStock) {
 document.write("<ul><li><h3>Nombre: " + producto.nombre + "</h3></li>");
 document.write("<li><h3> Detalle: " + producto.detalle + "</h3></li>");
 document.write("<ul><li><h3> Cantidad: " + producto.cantidad + "</h3></li></ul><br>");


}



var sinStock = arrayProductos.filter(producto => producto.cantidad == 0 || producto.disponible == false);
console.log(sinStock);
document.write("<h3> Lista de Productos sin Stock (cantidad = 0 o disponible = false): </h3>");

for (var producto of sinStock) {
   document.write("<ul><li><h3>Nombre: " + producto.nombre + "</h3></li>");
   document.write("<li><h3> Detalle: " + producto.detalle + "</h3></li>");
   document.write("<ul><li><h3> Cantidad: " + producto.cantidad + "</h3></li></ul><br>");
}



var ingresado = prompt('Ingresar el producto que quiero buscar');
var prodIngresado = arrayProductos.filter(producto => producto.nombre.includes(ingresado));
console.log(prodIngresado);
document.write("<h3> Lista de Productos ingresados para busqueda: </h3>");

for (var producto of prodIngresado) {
   document.write("<ul><li><h3>Nombre: " + producto.nombre + "</h3></li>");
   document.write("<li><h3> Detalle: " + producto.detalle + "</h3></li>");
   document.write("<ul><li><h3> Cantidad: " + producto.cantidad + "</h3></li></ul><br>");
}

var ordenadosCantidad = [];
ordenadosCantidad = arrayProductos.map(elemento => elemento);
ordenadosCantidad.sort(function(a, b) {
    return a.cantidad - b.cantidad;
});
console.log('Ordenados por cantidad Ascendente');
console.log(ordenadosCantidad);
document.write("<h3> Lista de Productos ordenados por cantidad: </h3>");


for (var producto of ordenadosCantidad) {
   document.write("<ul><li><h3>Nombre: " + producto.nombre + "</h3></li>");
   document.write("<li><h3> Detalle: " + producto.detalle + "</h3></li>");
   document.write("<ul><li><h3> Cantidad: " + producto.cantidad + "</h3></li></ul><br>");
}


var ordenadosPrecio = [];
ordenadosPrecio = arrayProductos.map(elemento => elemento);
var ordenadosPrecio = arrayProductos; 
ordenadosPrecio.sort(function(a, b) {
    return a.precio - b.precio;
});
console.log('Ordenados por Precios Ascendentes');
console.log(ordenadosPrecio);
document.write("<h3> Lista de Productos ordenados por Precio ascendente: </h3>");


for (var producto of ordenadosPrecio) {
   document.write("<ul><li><h3>Nombre: " + producto.nombre + "</h3></li>");
   document.write("<li><h3> Detalle: " + producto.detalle + "</h3></li>");
   document.write("<ul><li><h3> Precio: " + producto.precio + "</h3></li></ul><br>");
}






























































