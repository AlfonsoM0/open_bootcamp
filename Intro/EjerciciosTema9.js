/* 
Crea una clase Persona con las siguientes variables:

La edad

El nombre

El teléfono

Una vez creada la clase, crea una nueva clase Cliente que herede de Persona, esta nueva clase tendrá la variable credito solo para esa clase.

Crea ahora un objeto de la clase Cliente que debe tener como propiedades la edad, el telefono, el nombre y el credito, tienes que darles valor y mostrarlas por pantalla.

Una vez hecho esto, haz lo mismo con la clase Trabajador que herede de Persona, y con una variable salario que solo tenga la clase Trabajador.
*/

function main() {
  const cliente = new Cliente(25, 'Sofi', '12345678', 789);
  console.log(cliente);

  const trabajador = new Trabajador(30, 'Roberto', 87654321, 987);
  console.log(trabajador);
}

class Persona {
  constructor(edad, nombre, telefono) {
    this.edad = edad;
    this.nombre = nombre;
    this.telefono = telefono;
  }
}

class Cliente extends Persona {
  constructor(edad, nombre, telefono, credito) {
    super(edad, nombre, telefono);
    this.credito = credito;
  }
}

class Trabajador extends Persona {
  constructor(edad, nombre, telefono, salario) {
    super(edad, nombre, telefono);
    this.salario = salario;
  }
}

// function Persona(edad, nombre, telefono) {
//   this.edad = edad;
//   this.nombre = nombre;
//   this.telefono = telefono;
// }

// function Cliente(edad, nombre, telefono, credito) {
//   Persona.call(this, edad, nombre, telefono);
//   this.credito = credito;
// }

// function Trabajador(edad, nombre, telefono, salario) {
//   Persona.call(this, edad, nombre, telefono);
//   this.salario = salario;
// }

main();
