// Clase base Instrumento
class Instrumento {
  constructor(nombre, tipo) {
      this.nombre = nombre;
      this.tipo = tipo;
  }
}

// Clase Guitarra que hereda de Instrumento
class Guitarra extends Instrumento {
  constructor(nombre, tipo, cuerdas) {
      super(nombre, tipo);
      this.cuerdas = cuerdas; // Número de cuerdas
  }

  tocar() {
      output.innerHTML += `Soy una guitarra<br>`;
      output.innerHTML += `Nombre: ${this.nombre}<br>`;
      output.innerHTML += `Tipo: ${this.tipo}<br>`;
      output.innerHTML += `Tengo ${this.cuerdas} cuerdas<br><br>`;
  }
}

// Clase Piano que hereda de Instrumento
class Piano extends Instrumento {
  constructor(nombre, tipo, teclas) {
      super(nombre, tipo);
      this.teclas = teclas; // Número de teclas
  }

  tocar() {
      output.innerHTML += `Soy un piano<br>`;
      output.innerHTML += `Nombre: ${this.nombre}<br>`;
      output.innerHTML += `Tipo: ${this.tipo}<br>`;
      output.innerHTML += `Tengo ${this.teclas} teclas<br><br>`;
  }
}

// Clase Trompeta que hereda de Instrumento
class Trompeta extends Instrumento {
  constructor(nombre, tipo, material) {
      super(nombre, tipo);
      this.material = material; // Material de la trompeta
  }

  tocar() {
      output.innerHTML += `Soy una trompeta<br>`;
      output.innerHTML += `Nombre: ${this.nombre}<br>`;
      output.innerHTML += `Tipo: ${this.tipo}<br>`;
      output.innerHTML += `Material: ${this.material}<br><br>`;
  }
}

// Función que muestra la descripción de cualquier tipo de instrumento
function tocarInstrumento(instrumento) {
  instrumento.tocar();
}

// Instancias de cada clase
const guitarra = new Guitarra("Gibson Les Paul", "Cuerda", 6);
const piano = new Piano("Yamaha", "Cuerda percutida", 88);
const trompeta = new Trompeta("Bach Stradivarius", "Viento", "Latón");

// Llamado al método tocar para cada objeto
tocarInstrumento(guitarra);
tocarInstrumento(piano);
tocarInstrumento(trompeta);
