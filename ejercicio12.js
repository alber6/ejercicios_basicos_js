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


