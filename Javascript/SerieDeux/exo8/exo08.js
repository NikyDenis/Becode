
function jourDeLaSemaine(){
let j = new Array( "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche" );
let d = new Date();
alert(j[d.getDay() - 1]);
}

// function mois(){
// var mo = new Array ("janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre" );
// var m = new Month();
// alert (mo[m.getMonth() - 1]);
// }

