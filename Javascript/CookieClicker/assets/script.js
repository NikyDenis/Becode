let score = 0;                                 //On initialise le score a 0
let multiplicateur=1;                          //Le multi a 1
let multprice = 50;                            // Prix de départ du multiplicateur
let prixAutoClik=500;                          // Prix de l'autoclicker
let prixBonus = 5000;                           // Prix du bonus
let test = 1;


// Bouton à cliquer

function clik(){
    if (score>=0){                                      //évite que le score descende en dessous de 0
    score = score +1 * multiplicateur;                   // Le score augmente en fct du mutliplicateur
    document.getElementById("affichage").innerHTML=score;
}
}




// Augmenter le multiplicateur

function augmenterMultiplicateur(){
    if (score>=multprice){      // Evite qu'on fasse crédit
    multiplicateur++;           // On incrémente le multiplicateur
    score -= multprice;         // On soustrait le prix du au score
    multprice *= multiplicateur;    // Le prix augmente selon le multi
    document.getElementById("multiplier").innerHTML="Multiplicateur x "+multiplicateur+" Prix "+multprice;
    document.getElementById("affichage").innerHTML=score;
    console.log(multiplicateur);
    }
}



// Autocliquer

function AutoClik(){
    if (score>=500){                            //Ne pas aller dans les négatifs 
        score -= prixAutoClik;                  // Retirer les 500 pour lancer l'autoclick
            function AutoClicker(){
            score += 1;                         // ajouter 1 au score 
            document.getElementById("affichage").innerHTML=score;   //afficher le décompte
            }
            AutoClicker();                       // Appeler la fonction pour qu'il ajoute 1
            setInterval (AutoClicker, 1000);    // Juste ajouter 1 chaque secondes sinon boucle -500 aussi 
        }
}







// Bonus

function bonus(){
    let temps = "30";       //On détermine le temps du décompte
    if (score>=5000){       // Pas de crédit, c'est pas une banque
    score-=prixBonus;       //On déduit le prix du bonus
    test=multiplicateur*2;       // On incrémente le multiplicateur

    document.getElementById("affichage").innerHTML=score;
    function augBonus(){
       if (temps>+0){     //On s'arrête à 0, sinon c'est un décompte bizarre
        temps --;          // décompte => décrémente
        score=score+1*test;   //Le principe du bonus à ma sauce
        console.log(multiplicateur);            //Voir si ça marche 
        console.log(test);
        document.getElementById("bonus").innerHTML=temps;
    }else{
        document.getElementById("bonus").innerHTML="bonus";
    
    }
}
        augBonus();         //Même principe que la fct de l'autoclik
        setInterval(augBonus,1000) // 
        setTimeout(augBonus, 3000)
    }


}


