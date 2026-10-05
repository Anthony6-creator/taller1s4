// Función para contar los divisores usando descomposición en factores primos
function contarDivisores(num) {
    if (num <= 0) return 0;
    if (num === 1) return 1;

    let totalDivisores = 1;
    let n = num;
    if (n % 2 === 0) {
        let exponente = 0;
        while (n % 2 === 0) {
            exponente++;
            n /= 2;
        }
        totalDivisores *= (exponente + 1);
    }

    let divisor = 3;
    while (divisor * divisor <= n) {
        if (n % divisor === 0) {
            let exponente = 0;
            while (n % divisor === 0) {
                exponente++;
                n /= divisor;
            }
            totalDivisores *= (exponente + 1);
        }
        divisor += 2;
    }

    if (n > 1) {
        totalDivisores *= 2;
    }

    return totalDivisores;
}

function encontrarFibonacciConDivisores(limiteDivisores) {
    let a = 0n; 
    let b = 1n;
    let index = 0;

    console.time("Tiempo de ejecución");

    while (true) {
        let temp = a + b;
        a = b;
        b = temp;
        index++;

        let numActual = Number(a); 
        let cantidadDivisores = contarDivisores(numActual);

        if (cantidadDivisores >= limiteDivisores) {
            console.timeEnd("Tiempo de ejecución");
            return {
                posicion: index,
                numeroFibonacci: numActual,
                divisoresEncontrados: cantidadDivisores
            };
        }
    }
}

const resultado = encontrarFibonacciConDivisores(1000);
console.log(`¡Encontrado! El primer número es F_${resultado.posicion}`);
console.log(`Valor: ${resultado.numeroFibonacci}`);
console.log(`Cantidad exacta de divisores: ${resultado.divisoresEncontrados}`);