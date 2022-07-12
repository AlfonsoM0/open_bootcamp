/* 
Primera parte:

Crear una función con tres parámetros que sean números que se suman entre sí.

Llamar a la función en el main y darle valores.

Segunda parte:

Crear una clase coche.

Dentro de la clase coche, una variable numérica que almacene el número de puertas que tiene.

Una función que incremente el número de puertas que tiene el coche.

Crear un objeto miCoche en el main y añadirle una puerta.

Mostrar el número de puertas que tiene el objeto.
*/

function main() {
  suma();

  const coche = new Coche(4);

  coche.addpuertas();

  console.log(coche.puertas);
}

class Coche {
  constructor(puertas) {
    this.puertas = puertas;
  }

  addpuertas() {
    return (this.puertas += 1);
  }
}

function suma(a, b, c) {
  return a + b + c;
}

main();
console.log(suma(1, 2, 3));
