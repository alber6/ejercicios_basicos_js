// Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas.
// Recuerda no usar frutas duplicadas.

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];
for(let j = 0; j < fruits.length; j++){
  console.log(fruits[j]);
  for(let i = 0; i < foodSchedule.length; i++){
    if(foodSchedule[i].isVegan == false){
      foodSchedule[i].isVegan = true;
      foodSchedule[i].name = fruits[j]
      j++;
    }
  }
}
console.log(foodSchedule);
