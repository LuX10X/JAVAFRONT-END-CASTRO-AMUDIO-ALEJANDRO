import { person } from "./objects.js";

// Destructuring del objeto 'person' y llamada a la función 'showInfo'
const { name, age, country, notes, showInfo } = person;

// Función arrow que genera un mensaje utilizando Template Literals
const generateMessage = ({ name, age, country }) => {
  return `Buen día, mi nombre es ${name}, tengo ${age} años, y soy de ${country}.`;
};

// Utilizando Spread Operator para combinar el objeto 'person' con información adicional
const extendedPerson = {
  ...person,
  occupation: 'Administrador',
  hobbies: ['Leer', 'Programar', 'Jugar']
};

// Utilizando función para generar un mensaje
console.log(generateMessage({ name, age, country }));

// Accediendo a las notas de 'person' utilizando destructuring
const { math, science } = notes;
console.log("Mis Notas de Matemáticas son:", math);
console.log("Mis Notas de Ciencias son:", science);

// Llamando al método 'showInfo' del objeto 'person'
showInfo();

// Imprimiendo el objeto extendido 'extendedPerson'
console.log("Agregando nuevos datos al objeto (Persona Extendida):", extendedPerson);
