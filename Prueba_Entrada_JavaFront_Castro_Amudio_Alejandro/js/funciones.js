import { Calculadora } from "./clases.js";

// Punto 1: Funciones

console.log("Punto 1: Funciones");

// Función que suma dos números
function suma(num1, num2) {
    return num1 + num2;
}
console.log("Ejemplo de suma:", suma(5, 3)); // Debería mostrar: 8


// Función que calcula el promedio de un arreglo de números
function promedio(arr) {
    const total = arr.reduce((acc, curr) => acc + curr, 0);
    return total / arr.length;
}
console.log("Ejemplo de promedio:", promedio([4, 5, 6, 7])); // Debería mostrar: 5.5


// Función que filtra personas mayores de 40 años
function personasMayoresDe40(personas) {
    return personas.filter(persona => persona.edad > 40);
}
const personas = [
    { id: 1, nombre: 'Juan', apellidos: 'Perez', dni: '12345678A', edad: 35, peso: 70 },
    { id: 2, nombre: 'Maria', apellidos: 'Lopez', dni: '87654321B', edad: 45, peso: 65 },
    { id: 3, nombre: 'Carlos', apellidos: 'Gomez', dni: '98765432C', edad: 50, peso: 80 }
];

console.log("Personas mayores de 40 años:", personasMayoresDe40(personas)); // Debería mostrar: [{id: 2, nombre: "Maria", apellidos: "Lopez", dni: "87654321B", edad: 45, peso: 65}, {id: 3, nombre: "Carlos", apellidos: "Gomez", dni: "98765432C", edad: 50, peso: 80}]


// Función que calcula el promedio de notas eliminando la más baja
function promedioNotas(notas) {
    const minNota = Math.min(...notas);
    const suma = notas.reduce((acc, curr) => acc + curr, 0) - minNota;
    const promedio = suma / (notas.length - 1);
    return {
        promedio: promedio,
        notaEliminada: minNota,
        sumaNotas: suma
    };
}

console.log("Promedio de notas:", promedioNotas([15, 17, 13, 14])); // Debería mostrar: {promedio: 15.333333333333334, notaEliminada: 13, sumaNotas: 46}

// División entre puntos
console.log("------------------------------------------------");

// Punto 2: Función Lambda para el cálculo de áreas

console.log("Punto 2: Función Lambda para el cálculo de áreas");

const calcularArea = (tipo = 'T', valor1, valor2) => {
    switch (tipo.toUpperCase()) {
        case 'T':
            return 0.5 * valor1 * valor2; // Área del triángulo
        case 'C':
            return Math.PI * valor1 * valor1; // Área del círculo
        case 'Q':
            return valor1 * valor1; // Área del cuadrado
        default:
            return 'Tipo de figura no válido';
    }
}

// Ejemplos
console.log('Área del triángulo:', calcularArea('T', 3, 4)); // Debería mostrar: 6
console.log('Área del círculo:', calcularArea('C', 5)); // Debería mostrar: ~78.54
console.log('Área del cuadrado:', calcularArea('Q', 6)); // Debería mostrar: 36

// División entre puntos
console.log("------------------------------------------------");

// Punto 3: Clase Calculadora
// Ejemplo de uso Clase Calculadora
const objetoCalculadora = new Calculadora(2, 3);
objetoCalculadora.operar("+");
objetoCalculadora.operar("x");