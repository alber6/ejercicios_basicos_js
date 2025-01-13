const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];

let sumNums = 0;
let sumLetters = 0;
function averageWord(list) {
    for (element of mixedElements){
        if(typeof element == "number")
            sumNums += element;
        else{
            sumLetters += element.length
        }
    }
    console.log("La suma de los números del larray es de " + sumNums);
    console.log("La suma de las letras de las palabras del array es de " + sumLetters);
}
averageWord(mixedElements)


