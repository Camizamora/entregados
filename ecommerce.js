let seguirComprando = true;
let producto = parseInt(
  prompt(
    "Elige la variedad del cafe que deseas adquirir: 1.Red Bourbon - 2.Chiapas - 3.Santander - 4.Sierra Nevada - 5.Valledupar"
  )
);
let totalCompra = 0;
let decision;

const productosArray = [];

class NewProduct {
  constructor(id, name, price, gr) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.gr = gr;
  }
}

const redbourbon = new NewProduct(0, "RedBourbon", 2500, 250);
productosArray.push(redbourbon);
const chiapas = new NewProduct(1, "Chiapas", 2500, 250);
productosArray.push(chiapas);
const santander = new NewProduct(2, "Santander", 2500, 250);
productosArray.push(santander);
const sierranevada = new NewProduct(3, "SierraNevada", 2500, 250);
productosArray.push(sierranevada);
const valledupar = new NewProduct(4, "Valledupar", 2500, 250);
productosArray.push(valledupar);

while (seguirComprando === true) {
  totalCompra = totalCompra + productosArray[producto - 1].price;
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