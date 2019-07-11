// let character = {
//     name:"Cookie",
//     age:21,
//     item_to_give:["epee", "bouclier", "caisse"],
// giveItem : function(){
// for (let key in character){
// console.log(character[key]);
//         console.log(math.random(item_to_give));
//         }
//     }		
// };
// character.giveItem(item_to_give);
// console.log(character);

let character = function(){
    this.name = "Coeur de Lion";
    this.age = 24;
    this.item_to_give = ["épée", "bouclier", "lance"];
    this.giveItem = function(){
        giveItem=Math.random(item_to_give);
    }
}
for (let i =0; i<item_to_give.lenght;i++){
    alert(giveItem);
}
let perso = new character();
perso.name = "Charles";
perso.age = 34;
console.log(perso);

