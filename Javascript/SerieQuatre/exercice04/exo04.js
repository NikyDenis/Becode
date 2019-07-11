function verifier(){
let mdp1=document.getElementById("motdepasse");
let mdp2=document.getElementById("confirmation");
console.log(mdp1);
console.log(mdp2);
if( mdp1.value== mdp2.value){
    //mettre input en rouge
    mdp1.style.border=("2px solid green");
    mdp2.style.border=("2px solid green");
}else{
    //mettre les inputs en verts
    mdp1.style.border=("2px solid red");
    mdp2.style.border=("2px solid red");
}
}