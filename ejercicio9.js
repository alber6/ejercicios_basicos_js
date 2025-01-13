const numbers = [1, 2, 3, 5, 45, 37, 58];

let sum = 0;

function sumNumbers(numberList) {
    for (const num of numbers){
        sum += num;
    }
    console.log(sum);
}
sumNumbers(numbers)


