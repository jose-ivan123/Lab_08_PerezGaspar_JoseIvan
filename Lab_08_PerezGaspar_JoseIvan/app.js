class Producto {
  constructor(nombre, precio, descuento, imagen) {
    this.nombre = nombre;
    this.precio = precio;
    this.descuento = descuento; // porcentaje, ej: 20 = 20%
    this.imagen = imagen;
  }

  calcularPrecioFinal() {
    return this.precio - (this.precio * this.descuento / 100);
  }
}

const producto1 = new Producto("Mouse Gamer", 80, 10, "img/mouse.png");
const producto2 = new Producto("Teclado Mecánico", 150, 20, "img/teclado.png");
const producto3 = new Producto("Audífonos RGB", 120, 15, "img/audifonos.png");

const catalogo = [producto1, producto2, producto3];

console.log(catalogo);


const contenedor = document.getElementById("contenedor-productos");

catalogo.forEach((producto) => {
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("tarjeta");

  const nombre = document.createElement("h3");
  nombre.textContent = producto.nombre;

  const imagen = document.createElement("img");
  imagen.src = producto.imagen;
  imagen.alt = producto.nombre;

  const precio = document.createElement("p");
  precio.textContent = `Precio: S/ ${producto.precio.toFixed(2)}`;

  const boton = document.createElement("button");
  boton.textContent = "Aplicar Descuento";

  
  boton.addEventListener("click", () => {
    const precioFinal = producto.calcularPrecioFinal();
    precio.textContent = `Precio con ${producto.descuento}% de descuento: S/ ${precioFinal.toFixed(2)}`;
    boton.disabled = true;
  });

  tarjeta.append(nombre, imagen, precio, boton);
  contenedor.appendChild(tarjeta);
});