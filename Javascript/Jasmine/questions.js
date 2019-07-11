/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
let tailleString = function (texte) {
    return texte.length;
}
let remplaceECar = function (texte) {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " +texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = function (texte1, texte2) {
    return texte1+texte2;
}
let afficherCar5 = function (texte) {
    
 return texte.charAt(4);
}
let afficher9Car = function (texte) {
   
  return texte.substr(0, 9);
}
let majusculeString = function (texte) {
let phrasemaj='un autre excellent exercice';
let maj=phrasemaj.toUpperCase();
return maj;
}
let minusculeString = function (texte) {
   let phrasemin= 'Celui ci aussi!';
   let min=phrasemin.toLowerCase();
   return min;
}
let SupprEspaceString = function (texte) {
return texte.trim();
}
let IsString = function (texte) {
   (typeof value==='string');
   return true;

}
//S'affiche avec le point encore rhoooo 
let AfficherExtensionString = function (texte) {
   // return texte.substring( texte.lastIndexOf("."));
   return texte.split('.').pop();
}
let NombreEspaceString = function (texte) {
   return  texte.split(' ').length - 1;
}
let InverseString = function (texte) {
   return texte.split('').reverse().join('');
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance = function (x, y) {
   return Math.pow(x, y);
}
let valeurAbsolue = function (nombre) {
return Math.abs(nombre);
}
let valeurAbsolueArray = function (array) {
   for (let i=0; i<array.length; i++) {
      array[i] = Math.abs(array[i]);
}
return array;
}
let sufaceCercle = function (rayon) {
let surface= rayon*rayon*Math.PI;
return Math.round(surface);

}
let hypothenuse = function (ab, ac) {
   return(Math.sqrt((ab * ab) + (ac * ac)));

}
let calculIMC = function (poids, taille) {

   let imc= Number (poids/(taille*taille));
return  Math.round(imc*100)/100;
}
