// function faireChoix(){
//  choix=prompt("Choisissez entre 1, 2 et 3")
// if (choix==1){
//     alert("merci");
// }else if (choix==2){
//     alert("Bonjour");
// }else if (choix==3){
//     alert("Au revoir");
// }else{
//     alert("Pardon, que voulez-vous?")
// }
// }

function faireChoix(){
    let choix= Number(prompt("Faites un choix entre 1, 2 et 3"));
switch (choix){
    case 1:
    alert("merci");
    break;
    case 2:
    alert("Bonjour");
    break;
    case 3:
    alert("Au revoir");
    break;
    default:
    alert("Pardon, que voulez-vous?");
    break;
}
}   