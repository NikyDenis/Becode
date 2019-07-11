
var CreationTableauLangages = function () {
var langages =['Html', 'CSS', 'Java', 'PHP'];
return langages;
} 
//CORRECT

var CreationTableauNombres = function () {
var nombres= [0, 1, 2, 3, 4, 5];
return nombres;
}
//CORRECT

var RemplacementElement = function (langages) {
    let remplacement=langages;
    langages[2]="Javascript";
return remplacement;
}
//CORRECT

var AjoutElementLangages = function (langages) {
    let ajout=langages.push('Ruby', 'Python');
    
    return langages;
}
// CORRECT  

var AjoutElementNombres = function (nombres) {
    let ajout=nombres.unshift(-2, -1);
    return nombres;
}
//  CORRECT

var SuppressionPremierElement = function (langages) {
 let first = langages.shift();
 return langages;
}
//CORRECT

var SuppressionDernierElement = function (langages) {
let last = langages.pop();
return langages;
}
//CORRECT

var ConversionChaineTableau = function (reseaux_sociaux_chaine) {
    const tableau = New Set reseaux_sociaux_chaine);

    return Array.from(reseaux_sociaux_chaine);
}

var ConversionTableauChaine = function (langages) {

}

var TriTableau = function (reseaux_sociaux) {

}

var InversionTableau = function (reseaux_sociaux){

}
