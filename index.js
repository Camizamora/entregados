//// CREO PRODUCTOS ////

class Producto {
  constructor(id, nombre, precio, img) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;
    this.cantidad = 1;
  }
}

const redbourbon = new Producto(1, "Red Bourbon", 2200, "img/bourbon.png");
const chiapas = new Producto(2, "Chiapas", 2100, "img/mexico.png");
const santander = new Producto(3, "Santander", 2500, "img/santander.png");
const sierranevada = new Producto(4, "Sierra Nevada", 2500, "img/sierra.png");
const valledupar = new Producto(5, "Valledupar", 2400, "img/valle.png");

//// ARRAY ////

const productos = [redbourbon, chiapas, santander, sierranevada, valledupar];

let carrito = [];

///// ACTUALIZAR PAGINA CON ITEMS EN EL CARRITO ///////
if(localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

const divProductos = document.getElementById("divProductos");

///// CREO CARDS CON LOS PRODUCTOS ////

const mostrarProductos = () => {
  productos.forEach((producto) => {
    const card = document.createElement("div");
    card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
    card.innerHTML = `
            <div class="card">
                <img src="${producto.img}" class="card-img-top imgProductos" alt="${producto.nombre}">        
                <div class="card-body">
                    <h2 class="card-title">${producto.nombre}</h2>
                    <p class="card-text">$ ${producto.precio}</p>
                    <button class="btn colorBoton" id="boton${producto.id}"> Agregar al carrito </button>
                </div>
            </div>
        `;
    divProductos.appendChild(card);

    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener("click", () => {
      agregarAlCarrito(producto.id);
    });
  });
};

mostrarProductos();

//// FUNCION PARA AGREGAR AL CARRITO /////

const agregarAlCarrito = (id) => {
  const producto = productos.find((producto) => producto.id === id);
  const productoAgregado = carrito.find((producto) => producto.id === id);
  if (productoAgregado) {
    productoAgregado.cantidad++;
  } else {
    carrito.push(producto);
    //// LOCAL STORAGE ////
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
  calcularTotal();
};

///// MOSTRAR CARRITO /////

const divCarrito = document.getElementById("divCarrito");
const miCarrito = document.getElementById("miCarrito");

miCarrito.addEventListener("click", () => {
  mostrarCarrito();
});

const mostrarCarrito = () => {
  divCarrito.innerHTML = "";
  carrito.forEach((producto) => {
    const card = document.createElement("div");
    card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
    card.innerHTML = `
            <div class="card">
                <img src="${producto.img}" class="card-img-top imgProductos" alt="${producto.nombre}">        
                <div class="card-body">
                    <h2 class="card-title">${producto.nombre}</h2>
                    <p class="card-text">$ ${producto.precio}</p>
                    <p class="card-text">${producto.cantidad} unidades</p>
                    <button class="btn colorBoton" id="eliminar${producto.id}"> Eliminar producto </button>
                </div>
            </div>
        `;
    divCarrito.appendChild(card);

    ///// CREOBOTO ELIMINAR PROD /////
    const boton = document.getElementById(`eliminar${producto.id}`);
    boton.addEventListener("click", () => {
      eliminarProducto(producto.id);
    });
  });
  calcularTotal();
};

//// FUNCION ELIMINAR PRODUCTO ////

const eliminarProducto = (id) => {
  const producto = carrito.find((producto) => producto.id === id);
  const indice = carrito.indexOf(producto);
  carrito.splice(indice, 1);
  mostrarCarrito();
  //// LOCAL STORAGE ////
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

///// VACIAR CARRITO //////

const vaciarCarrito = document.getElementById("vaciarCarrito");

vaciarCarrito.addEventListener("click", () => {
  eliminarTodo();
});

const eliminarTodo = () => {
  carrito = [];
  mostrarCarrito();
  //// LOCALSTORAGE ////
  localStorage.clear();
};

//// TOTAL COMPRA ////

const totalCompra = document.getElementById("totalCompra");

const calcularTotal = () => {
  let total = 0;
  carrito.forEach((producto) => {
    total += producto.precio * producto.cantidad;
  });
  totalCompra.innerHTML = ` $${total}`;
};
