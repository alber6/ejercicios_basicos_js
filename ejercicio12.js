// Valores únicos: Crea una función que reciba por parámetro un array y 
// compruebe si existen elementos duplicados, 
// en caso que existan los elimina para retornar un array sin los elementos duplicados.
// Pista: puedes generar un nuevo array y devolverlo.

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
const newArray = [];
function removeDuplicates(list) {
    for (const duplicate of duplicates){
        if(!newArray.includes(duplicate)){
            newArray.push(duplicate)
        }
    }
    console.log(newArray);
}
removeDuplicates(duplicates)


