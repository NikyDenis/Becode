async function getData(){
    let requete = await fetch('https://thatsthespir.it/api');
    let data = await requete.json()
    return data;
}

getData()
        .then((data) =>{
            document.getElementById('img').src = data.photo;
            document.getElementById('quote').innerHTML = data.quote;
            document.getElementById('author').innerHTML = data.author;
            document.getElementById('allQuote').innerHTML = data.total_quotes;
        })

        .catch((err)=>{
            console.error('Erreur');
            console.dir(err);
        })



















//         METHODE BIDON    // 

// let xhr = new XMLHttpRequest; // creer une requête ajax

// xhr.open("GET", "", true);          // méthode GET ou POST, doc à ouvrir, asynchrome ou pas?

// xhr.onload = function (){
//     console.log(this);
// };

// xhr.send();     // Envoie la requête

