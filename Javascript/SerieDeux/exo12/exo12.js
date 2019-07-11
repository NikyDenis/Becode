function conversionTemperature(){
    let choix=Number(prompt("Que voulez-vous convertir? \n 0 = Fin du programme \n 1 = Celsius en Fahrenheit \n 2 = Celsius en Kalvin \n 3 = Fahrenheit en Celsius \n 4 = Fahrenheit en Kalvin \n 5 = Kalvin en Celsius \n 6 = Kalvin en Fahrenheit"));
    switch (choix){
        case 0 :
        stop;
        break;
        case 1 :
        celsiusF=Number(prompt("Entrez la température à convertir"));
        alert ((celsiusF*1.8)+ +32);
        break;
        case 2 :
        celsiusK=Number(prompt("Entrez la température à convertir"));
        alert(celsiusK+ +273.15);
        break;
        case 3 :
        fahrenheitC=Number(prompt("Entrez la température à convertir"));
        alert((fahrenheitC-32)/(1.8));
        break;
        case 4 :
        fahrenheitK=Number(prompt("Entrez la température à convertir"));
        alert(((fahrenheitK-32)*(0.5555555556))+ +273.15);
        break;
        case 5 :
        kalvinC=Number(prompt("Entrez la température à convertir"));
        alert(kalvinC-273.15);
        break;
        case 6 :
        kalvinF=Number(prompt("Entrez la température à convertir"));
        alert((kalvinF*(1.8))-459.67);
        break;
        default:
        alert("Le chiffre entré n'est pas bon");
        choix=Number(prompt("Que voulez-vous convertir? \n 0 = Fin du programme \n 1 = Celsius en Fahrenheit \n 2 = Celsius en Kalvin \n 3 = Fahrenheit en Celsius \n 4 = Fahrenheit en Kalvin \n 5 = Kalvin en Celsius \n 6 = Kalvin en Fahrenheit"));
        
    }
}