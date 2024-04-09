export const person = {
    name: 'Alejandro',
    age: 22,
    country: 'Peru',
    notes: {
      math: [20, 18, 17],
      science: [17, 18, 19]
    },
  
    // Método para calcular el promedio de un conjunto de notas
    calculateAverage: (notes) => {
      const sum = notes.reduce((acc, val) => acc + val, 0);
      return sum / notes.length;
    },
  
    // Método que calcula el promedio de notas y verifica si pertenece al tercio superior
    showInfo: () => {
      const mathAverage = person.calculateAverage(person.notes.math);
      const scienceAverage = person.calculateAverage(person.notes.science);
      const overallAverage = (mathAverage + scienceAverage) / 2;
  
      console.log(`El promedio de mis notas es: ${overallAverage.toFixed(2)}`);
  
      if (overallAverage >= 15) {
        console.log("¡Perteneces al tercio superior!");
      } else {
        console.log("No perteneces al tercio superior.");
      }
    }
  };
  