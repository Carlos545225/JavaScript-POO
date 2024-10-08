// Clase base Animal
class Animal {
  constructor(nombre) {
      this.nombre = nombre;
  }
}

// Clase Perro que hereda de Animal
class Perro extends Animal {
  sonido() {
      output.innerHTML += `${this.nombre} dice: Guau Guau<br>`;
  }
}

// Clase Gato que hereda de Animal
class Gato extends Animal {
  sonido() {
      output.innerHTML += `${this.nombre} dice: Miau Miau<br>`;
  }
}

// Clase Pájaro que hereda de Animal
class Pajaro extends Animal {
  sonido() {
      output.innerHTML += `${this.nombre} dice: Pío Pío<br>`;
  }
}

// Función que muestra el sonido de cualquier animal
function hacerSonido(animal) {
  animal.sonido();
}

// Instancias de cada clase
const perro = new Perro("Bobby");
const gato = new Gato("Mishi");
const pajaro = new Pajaro("Piolín");

// Llamado al método sonido para cada objeto
hacerSonido(perro);
hacerSonido(gato);
hacerSonido(pajaro);
