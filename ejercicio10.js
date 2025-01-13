const numbers = [12, 21, 38, 5, 45, 37, 6];

let sum = 0;
let contador = 0;
function average(numberList) {
    for (const num of numbers){
        sum += num;
        contador++;
    }
    let promedio = sum / contador;
    // .toFixed() para redondear el decimal a dos cifras
    console.log(promedio.toFixed(2));
}

average(numbers)

