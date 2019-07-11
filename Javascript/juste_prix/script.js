let valeurMinimum =20;
let valeurMaximum = 80;
// function prixrandom (valeurMaximum, valeurMinimum){
//    let random=Number( Math.floor(Math.random()*(valeurMaximum-valeurMinimum+1))+valeurMinimum);
//     console.log(random);
  
    
//     // math.floor -> pour arrondir 
//     // math.random pour générer un random
//     // Et le reste c'est pour qu'il inclue la v max et min demandée.
// }
let essais=10;
let random=Number( Math.floor(Math.random()*(valeurMaximum-valeurMinimum+1))+valeurMinimum);
    console.log(random);
function Justeprix(){
            for (let i=0;i<essais;++i){
                alert('Il vous reste '+ essais + ' essais');
                essais--;
           let prix =Number( prompt("Entrez le prix!"));
           console.log(essais);
        if (prix<20 || prix>80){
            alert("Valeur incorrecte");
            } else if (prix>random){
                alert ("C'est moins!");
                // prix =Number( prompt("Entrez le prix!"));
            } else if (prix<random){
                alert("C'est plus!");
                // // prix =Number( prompt("Entrez le prix!"));
            } else if (prix===random){
                alert("Bravooooooo");
                break;
                
        }
    }
}


// function prix(){
//     prix=Number (prompt("Devine le prix!"));
//    while (prix!=random){
//        if (prix<20){
//        prix=prompt("Devine le prix !");
//     }
//    }
//    alert="Bravoo!";
// }















     