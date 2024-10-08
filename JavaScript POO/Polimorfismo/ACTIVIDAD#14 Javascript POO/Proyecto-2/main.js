// Clase base Vehiculo
class Vehiculo {
  constructor(marca, color) {
      this.marca = marca;
      this.color = color;
  }
}

// Clase Carro que hereda de Vehiculo
class Carro extends Vehiculo {
  constructor(marca, modelo, color) {
      super(marca, color);
      this.modelo = modelo;
  }

  descripcion() {
      output.innerHTML += "Soy un carro<br>";
      output.innerHTML += `Marca: ${this.marca}<br>`;
      output.innerHTML += `Modelo: ${this.modelo}<br>`;
      output.innerHTML += `Color: ${this.color}<br><br>`;
  }
}

// Clase Moto que hereda de Vehiculo
class Moto extends Vehiculo {
  constructor(marca, modelo, color) {
      super(marca, color);
      this.modelo = modelo;
  }

  descripcion() {
      output.innerHTML += "Soy una moto<br>";
      output.innerHTML += `Marca: ${this.marca}<br>`;
      output.innerHTML += `Modelo: ${this.modelo}<br>`;
      output.innerHTML += `Color: ${this.color}<br><br>`;
  }
}

// Clase Bicicleta que hereda de Vehiculo
class Bicicleta extends Vehiculo {
  constructor(marca, tipo, color) {
      super(marca, color);
      this.tipo = tipo; // Tipo de bicicleta (montaña, carretera, etc.)
  }

  descripcion() {
      output.innerHTML += "Soy una bicicleta<br>";
      output.innerHTML += `Marca: ${this.marca}<br>`;
      output.innerHTML += `Tipo: ${this.tipo}<br>`;
      output.innerHTML += `Color: ${this.color}<br><br>`;
  }
}

// Función que muestra la descripción de cualquier tipo de vehículo
function mostrarVehiculo(vehiculo) {
  vehiculo.descripcion();
}

// Instancias de cada clase
const carro = new Carro("Toyota", "Corolla", "Rojo");
const moto = new Moto("Honda", "CBR600", "Negro");
const bicicleta = new Bicicleta("Trek", "Montaña", "Azul");

// Llamado al método descripcion para cada objeto
mostrarVehiculo(carro);
mostrarVehiculo(moto);
mostrarVehiculo(bicicleta);
