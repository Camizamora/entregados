let seguirComprando = true;
let producto = parseInt(
  prompt(
    "Elige la variedad del cafe que deseas adquirir: 1.Red Bourbon - 2.Chiapas - 3.Santander - 4.Sierra Nevada - 5.Valledupar"
  )
);
let totalCompra = 0;
let decision;

// CLASS

class NewProduct {
  constructor(id, name, price, gr) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.gr = gr;
  }
}
const redbourbon = new NewProduct(1, "RedBourbon", 2500, 250);
const chiapas = new NewProduct(2, "Chiapas", 2500, 250);
const santander = new NewProduct(3, "Santander", 2500, 250);
const sierranevada = new NewProduct(4, "SierraNevada", 2500, 250);
const valledupar = new NewProduct(1, "Valledupar", 2500, 250);

while (seguirComprando === true) {
  if (producto === redbourbon.id) {
    totalCompra = totalCompra + redbourbon.price;
  } else if (producto === chiapas.id) {
    totalCompra = totalCompra + chiapas.price;
  } else if (producto === santander.id) {
    totalCompra = totalCompra + santander.price;
  } else if (producto === sierranevada.id) {
    totalCompra = totalCompra + sierranevada.price;
  } else {
    totalCompra = totalCompra + valledupar.price;
  }

  decision = parseInt(prompt("Quieres seguir comprando? 1.Si - 2.No"));
  if (decision === 1) {
    producto = parseInt(
      prompt(
        "Elige la variedad del cafe que deseas adquirir: 1.Red Bourbon - 2.Chiapas - 3.Santander - 4.Sierra Nevada - 5.Valledupar"
      )
    );
  } else {
    seguirComprando = false;
  }
}

const totalCompraConDescuento = descuento(totalCompra);

function descuento(valor) {
  let descuento = 0;
  if (valor <= 2500) {
    descuento = 0;
  } else if ((valor) => 5000 && valor <= 10000) {
    descuento = 10;
  } else if (valor > 10000) {
    descuento = 15;
  }

  let valorDescuento = valor * (descuento / 100);
  let valorFinal = valor - valorDescuento;
  return valorFinal;
}

alert(`El total de tu compra es ${totalCompraConDescuento}`);
