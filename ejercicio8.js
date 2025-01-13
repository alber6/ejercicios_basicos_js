const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];

let long = 0;
let longestword = " "
function findLongestWord(stringList) {
    for(let i = 0; i < avengers.length; i++){
        let avenger = avengers[i];
        if(avenger.length > long){
            long = avenger.length;
            longestword = avenger;
        }
    }
    console.log(long, longestword);
}
findLongestWord(avengers);