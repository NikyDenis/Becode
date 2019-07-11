// let shop = function(arme, degatPhysic, degatMagic,minLevel, available){
//     this.title = arme;
//     this.physic = degatPhysic;
//     magic = degatMagic;
//     minLevel = minLevel;
//     available = available;
//     this.items = ["épée", "hache", "dague", "parchemin", "cape", "chapeau", "bottes", "bâton magique"];
// }
// let sword = new shop("épéé", 92, 0, 20, true);
// let axe = new shop("hache", 98, 23, 50, true);
// let dagger = new shop("dague", 40, 12, 5, true);
// let parchment = new shop("parchemin", 0, 110, 70, true);
// let cape = new shop("cape", 0, 0, 12, false);
// let hat = new shop("chapeau", 0, 0, 1, false);
// let boot = new shop("bottes", 0, 0, 1, true);
// let stick = new shop("bâton magique", 0, 200, 80, false);
// console.log (sword);
// function all() {    this.items = ["épée", "hache", "dague", "parchemin", "cape", "chapeau", "bottes", "bâton magique"];

//     alert (sword.arme+" "+axe.arme+" "+dagger.arme+" "+parchment+" "+cape.arme+" "+hat.arme+" "+boot.arme+" "+stick.arme);
// }
// function available(){
//     for (let i=0;shop.lenght>i;i++){
//         if (available==true){
//             alert(this.title);
//         }
//         else{
//             break;
//         }
//     }
// }

// Donner des valeurs à des trucs dans un tableau
let shop = [
    sword={

        name : "Damocles",
        degatMagic : 140 ,
        degatPhysic : 0,
        minLevel : 20,
        minLevel : 80,
        available : false,

    },
    axe = {
        name : "Héracles",
        degatMagic : 40,
        degatPhysic : 112,
        minLevel : 30 ,
        minLevel :  32,
        available : true,
    },
    stick = {
        name : "Poseidon",
        degatMagic : 200,
        degatPhysic : 100,
        minLevel :18,
        available : true,
    },
    parchment = {
        name : "Atlas",
        degatMagic:0,
        degatPhysic:0,
        minLevel : 2,
        available: false,
    },
]
function showShop(){
    for (let i in shop){
    console.log(shop[i]);
}
}

function showAvailable(){
    for (let i in shop){
    if (shop[i].available===true){
        console.log(shop[i].name);
        }
    }
}

function showLevelMin(){
    for (let i in shop){
    if (shop[i].minLevel>=10){
        console.log(shop[i].name+" niveau minimum requis "+shop[i].minLevel);
        }
    }
}