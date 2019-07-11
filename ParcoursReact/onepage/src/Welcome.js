import React, { Component } from 'react';
//import de la librairie REact
import Hello from './Hello';
//On importe le component Hello

export default class Welcome extends Component {
    //Création de la class et export de la classe pour l'imbriquer dans d'autres components
    render(){
        //on met le return dedans pour afficher
        return (
            //equivalent du render en node
            <div className="App">
                <Hello parametre={'HelloWorld'}/>
            </div>
        );
    }
}
