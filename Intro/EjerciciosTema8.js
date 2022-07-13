/* 
Para practicar la encapsulación:

Crear clase Persona.

Crear variables las privadas edad, nombre y telefono de la clase Persona.

Crear gets y sets de cada propiedad.

Crear un objeto persona en el main.

Utiliza los gets y sets para darle valores a las propiedades edad, nombre y telefono, por último muéstralas por consola.
 */

function main() {
  const persona = new Persona();

  persona.setEdad(35);
  persona.setNombre('Alfonso');
  persona.setTelefono('123456789');

  console.log(persona.getEdad());
  console.log(persona.getNombre());
  console.log(persona.getTelefono());
}

class Persona {
  constructor() {
    (this.edad = null), (this.nombre = null), (this.telefono = null);
  }

  getEdad() {
    return this.edad;
  }
  setEdad(edad) {
    this.edad = edad;
  }

  getNombre() {
    return this.nombre;
  }
  setNombre(nombre) {
    this.nombre = nombre;
  }

  getTelefono() {
    return this.telefono;
  }
  setTelefono(telefono) {
    this.telefono = telefono;
  }
}

main();
