// Punto 3: Clase Calculadora

export class Calculadora {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    operar(operacion) {
        switch (operacion) {
            case '+':
                console.log(`La suma de ${this.num1} y ${this.num2} es ${this.num1 + this.num2}`);
                break;
            case '-':
                console.log(`La resta de ${this.num1} y ${this.num2} es ${this.num1 - this.num2}`);
                break;
            case 'x':
                console.log(`La multiplicación de ${this.num1} y ${this.num2} es ${this.num1 * this.num2}`);
                break;
            case '/':
                console.log(`La división de ${this.num1} y ${this.num2} es ${this.num1 / this.num2}`);
                break;
            default:
                console.log('Operación no válida');
        }
    }
}