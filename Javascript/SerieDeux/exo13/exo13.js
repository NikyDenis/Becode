function calculImc(){
    poids=Number(prompt("Entrez votre poids"));
    taille=Number(prompt("Entrez votre taille"));
    let imc = Number((poids/(taille*taille)));
    if (16.5>imc){
        alert(imc+" > dénutrition");
    }else if (imc<=18.5){
        alert(imc+" > maigreur");
    }else if (imc<=20){
    alert(imc+" > corpulence normale");
    }else if (imc<=25){
        alert(imc+" > surpoids");
    }else if(imc<=30){
        alert(imc+" > obésité modérée");
    }else if (imc<=40){
        alert(imc+" > obésié sévère");
    }else if(40<=imc){
        alert(imc+" > obésité morbide");
    }else{
        poids=Number(prompt("Entrez votre poids"));
        taille=Number(prompt("Entrez votre taille"));
    }
}