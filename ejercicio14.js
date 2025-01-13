// Contador de repeticiones: Crea una función que nos devuelva 
// el número de veces que se repite cada una de las palabras que lo conforma.
// Por ejemplo, que devuelva: code:4, repeat: 1, eat: 1,...
// Podéis conformar el formato que queráis para la devolución del resultado siempre y cuando sea claro.
const words = ['code',
  'repeat','eat','sleep',
  'code','enjoy','sleep',
  'code','enjoy','sleep',
  'code'
];

const modifiedWords = {}

function repeatCounter(list) {
  for (let i = 0; i < words.length; i++){
    let word = words[i];
    if (modifiedWords[word]){
      modifiedWords[word]++;
    }else{
      modifiedWords[word] = 1;
    }
  }
  console.log(modifiedWords);
}
repeatCounter(words)
