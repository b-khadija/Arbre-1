//Exercice 1 : En JS, dans une page HTML, affichez dans une pop up (fonction alert() ) les nombres de 22 à 28.
//Exercice 2 : En JS, dans une page HTML, après avoir fait l’exercice précédent. Affichez dans la console le 2ème nombre affiché sur la page dans alert. (→23)

let num = 22;
let i = 28;
function myAlert() {
  for (num; num <= i; num++) {
    console.log(window.alert(num));//Exercice 1
  }
  while (num < 23) {//Exercice 2
    num++;
    console.log(num);
  }
}
myAlert();