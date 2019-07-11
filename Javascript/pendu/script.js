let motMystere = ['B', 'O', 'N', 'J', 'O', 'U', 'R'];
    let pendu = [" ", " ", " ", " ", " ", " ", " "];
    let letter;
 function guessWord(){
        letter = prompt("Propose une lettre").toUpperCase();
     for (let i=0 ;i<=motMystere.length;i++){
        if (letter === motMystere[i]){    
                pendu[i] = motMystere[i];
                console.log(pendu);
        }else if(pendu.toString()=== motMystere.toString()) {
            return alert("Gagné!");
        }
    }
        if (pendu.toString()!== motMystere.toString()){
            guessWord();
        }
    }








                                    // CODE DE JEREMY POUR COMPARER
// Définir les variables

// let mot = ['B', 'O', 'N', 'J', 'O', 'U', 'R'];
// let clear = [" ", " ", " ", " ", " ", " ", " "];

// // Définir les fonctions

// document.getElementById('start').addEventListener("click", guessLetter);
// let txt;
// function guessLetter() {
//     txt = prompt("Veuillez entrer une lettre").toUpperCase();
//     console.log(txt);
//     for (let i = 0; i <= mot.length; i++) {
//         if (txt === mot[i]) {
//             clear[i] = mot[i];
//             console.log(clear);
//         }

//         else if (clear.toString() === mot.toString()) {
//             return alert("Bonne réponse")
//         }
//     }
//     if (clear.toString() !== mot.toString()) {
//         guessLetter();
//     }
// }

// document.getElementById('reset').addEventListener("click", restart);

// function restart() {
//     clear = [];
//     guessLetter();
// 


//                  Code de Apprendre le js
// var lettres = [ 's', 'u', 'p', 'p', 'e', 'r' ];

// for (var tentatives = 10; tentatives > 0 && lettres.length > 0; ) {
//   console.log('lettres à trouver:', lettres);
//   alert('Lettres à trouver: ' + lettres.length + '. Tentatives: ' + tentatives);
//   var lettre = prompt('Devinez une lettre');
//   var trouvees = 0;
//   // tant qu'on trouve des occurrences, on continue de les supprimer une à une
//   for (var indice = 0; indice !== -1 ;) {
//     indice = lettres.indexOf(lettre); // cherche la prochaine occurrence de la lettre
//     if (indice !== -1) {
//       lettres.splice(indice, 1); // retire cette occurrence de la lettre trouvée dans le tableau
//       trouvees++;
//     }
//   }
//   if (trouvees === 0) {
//     --tentatives;
//     alert('Le mot à trouver ne contient pas la lettre ' + lettre+ ', désolé...');
//   } else {
//     alert('Bonne pioche ! Il y avait bien ' + trouvees + ' ' + lettre + ' dans le mot à trouver !');
//   }
// }

// if (lettres.length === 0) {
//   alert('bravo!');
// } else if (tentatives === 0) {
//   alert('perdu!');
// }