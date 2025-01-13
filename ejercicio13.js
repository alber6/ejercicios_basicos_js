const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
];

bool = true;
function nameFinder(nameList, nam) {
    if(names.includes(nam) == true){
        console.log(names.includes(nam), names.indexOf(nam));
    }else{
        console.log(names.includes(nam));
    }
}
nameFinder(names, "Xabier")

