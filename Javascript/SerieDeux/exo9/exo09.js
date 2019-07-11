function testWhile(){
    let mot=prompt("Entrez un mot contenant la lettre p");
    let erreur=mot.search('p');
while (erreur == -1) {
    mot=prompt("Entrez un mot contenant la lettre p");
    erreur=mot.search('p');

}
alert("'"+mot+"'");
}
