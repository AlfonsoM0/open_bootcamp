/* 
En este ejercicio practicarás las estructuras de control, para ello deberás crear:

Usando un if, crear una condición que compare si la variable numeroIf es positivo, negativo, o 0.
Pista: Los números inferiores a 0 son negativos y los superiores, positivos.

Crea un bucle While, este bucle tendrá que tener como condición que la variable numeroWhile sea inferior a 3, el bloque de código que tendrá el bucle deberá:

Incrementar el valor de la variable en uno cada vez que se ejecute.

Mostrarlo por pantalla cada vez que se ejecute.

Para el bucle Do While, deberás crear la misma estructura que en el While, pero solo se debe ejecutar una vez.

Para el bucle For, crea una variable numeroFor, esta variable tendrá como valor 0 y su condición será que la variable sea igual o menor que 3, se irá incrementando en 1 su valor cada vez que se ejecute y deberá mostrarse por pantalla.

Por último, para el Switch, deberás crear la variable estacion, y distintos case para las cuatro estaciones del año. Dependiendo del valor de la variable estacion se deberá mandar un mensaje por consola informando de la estación en la que está. También habrá que poner un default para cuando el valor de la variable no sea una estación.
*/

const number = 1;

if (number >= 0) console.log('Is poisitive');
else console.log('Is negative');

while (number < 3) {
  console.log(number);
  number++;
}

do {
  if (number === 1) console.log(number);
  number++;
} while (number < 3);

for (let numeroFor = 0; numeroFor <= 3; numeroFor++) {
  console.log(numeroFor);
}

const estacion = 'Verano';

switch (estacion) {
  case 'Verano':
    console.log(`Es ${estacion}`);
    break;
  case 'Otoño':
    console.log(`Es ${estacion}`);
    break;
  case 'Primavera':
    console.log(`Es ${estacion}`);
    break;
  case 'Invierno':
    console.log(`Es ${estacion}`);
    break;

  default:
    console.log('No es una estación.');
    break;
}
