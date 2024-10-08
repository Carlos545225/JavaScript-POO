// Clase base Profesion
class Profesion {
  constructor(nombre, edad, experiencia) {
      this.nombre = nombre;
      this.edad = edad;
      this.experiencia = experiencia; // Años de experiencia
  }
}

// Clase Médico que hereda de Profesion
class Medico extends Profesion {
  constructor(nombre, edad, experiencia) {
      super(nombre, edad, experiencia);
      this.especialidad = prompt("Ingrese la especialidad médica: ");
      this.hospital = prompt("Ingrese el nombre del hospital donde trabaja: ");
  }

  trabajar() {
      output.innerHTML += `${this.nombre}, médico especialista en ${this.especialidad}, trabaja en el hospital ${this.hospital}, tiene ${this.edad} años y ${this.experiencia} años de experiencia.<br>`;
  }
}

// Clase Ingeniero que hereda de Profesion
class Ingeniero extends Profesion {
  constructor(nombre, edad, experiencia) {
      super(nombre, edad, experiencia);
      this.rama = prompt("Ingrese la rama de la ingeniería (civil, software, etc.): ");
      this.proyecto_actual = prompt("Ingrese el nombre del proyecto actual: ");
  }

  trabajar() {
      output.innerHTML += `${this.nombre}, ingeniero en ${this.rama}, está trabajando en el proyecto ${this.proyecto_actual}, tiene ${this.edad} años y ${this.experiencia} años de experiencia.<br>`;
  }
}

// Clase Docente que hereda de Profesion
class Docente extends Profesion {
  constructor(nombre, edad, experiencia) {
      super(nombre, edad, experiencia);
      this.asignatura = prompt("Ingrese la asignatura que enseña: ");
      this.institucion = prompt("Ingrese el nombre de la institución donde trabaja: ");
  }

  trabajar() {
      output.innerHTML += `${this.nombre}, docente de ${this.asignatura}, trabaja en ${this.institucion}, tiene ${this.edad} años y ${this.experiencia} años de experiencia.<br>`;
  }
}

// Función que muestra la descripción de cualquier profesional
function mostrarTrabajo(profesional) {
  profesional.trabajar();
}

// Instancias de cada clase
const medico = new Medico("Dr. Juan Pérez", 45, 20);
const ingeniero = new Ingeniero("Ana López", 35, 10);
const docente = new Docente("Carlos Gómez", 40, 15);

// Llamado al método trabajar para cada objeto
mostrarTrabajo(medico);
mostrarTrabajo(ingeniero);
mostrarTrabajo(docente);
