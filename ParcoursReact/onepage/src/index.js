import React from 'react';
//import de react
import ReactDOM from 'react-dom';
//affiche le DOM 
import './index.css';
//importe le css
import Welcome from './Welcome';
//import d'un component nommé Welcome

ReactDOM.render(<Welcome />, document.getElementById('root'));
//affiche l'élement demandé à l'endroit demandé

