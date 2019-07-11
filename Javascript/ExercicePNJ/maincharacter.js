// let maincharacter = function (name, level, life, weapon){
//     this.name = "Loki";
//     this.level = 70;
//     this.life = 100;
//     this.weapon = function(name, damage){
//         this.name = "Fenrir";
//         this.damage = 52;
//     }
//     this.attack = function(){
        
//     }
//     console.log(maincharacter);
// }
// function attack (){
//     damagetot = maincharacter.level*maincharacter.weapon.damage
//     console.log(maincharacter.name+" attaque avec "+maincharacter.weapon.name+" qui fait "+damagetot);
// }


//Test tableau

let mainCharacter ={
    name : "Loki",
    level : 70,
    life : 100,

}
let weapon = {
    name : "Fenrir",
    damage : 70,

}

function attack (){
    console.log(mainCharacter.name+" attaque avec "+weapon.name+" et fait "+mainCharacter.level*weapon.damage+" de dégat ");
}

attack();

