
let arrayIngredients = ["Pâtes","Oeuf","Sel","Poivre","Lardon","Oignon","Parmesan"];
let list = document.getElementById("list");

document.getElementById('list').innerHTML = arrayIngredients.length + '<br>'; //Affiche le nombre d'ingrédients

for(let ingrédients of arrayIngredients) {
  document.getElementById('list').innerHTML += ingrédients + '<br>';//Affiche les ingrédients sous forme de liste
} 

for(let i = 1; i < arrayIngredients.length; i++) {
  document.getElementById('list').innerHTML += (` - ${i} ${arrayIngredients[i]} <br>`);
}

document.getElementById('list').innerHTML += arrayIngredients.sort();
