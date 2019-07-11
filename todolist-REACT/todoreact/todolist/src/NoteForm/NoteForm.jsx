import React, { Component } from 'react';
import './NoteForm.css';

class NoteForm extends Component {
    constructor (props) {
      super (props);
      this.state = {
          newNoteContent: '',
      };
      this.handleUserInputIt = this.handleUserInputIt.bind(this)
      this.writeNote = this.writeNote.bind(this)

    }


    //When the user input changes, set de newNoteContent
    //ti the value of what's inn the input box
    //Quand un utilisateur change l'input, ça change NewNoteContent avec le contenu de l'input
    handleUserInputIt(e){
        this.setState({
            newNoteContent: e.target.value // valeur du text input

        })
    }

    writeNote(){
        //Call a method that sets the noteContent for a note to
        //the value of the input 
        //Appelle une méthode qui donne a noteContent la valeur du input
        this.props.addNote(this.state.newNoteContent);


        //Set the newNoteContent to a empty string
        //Remet newNoteContent en tant que string vide
        this.setState({
            newNoteContent:' '
        })
    }

    render(){
        return(
            <div className="formWrapper">
                <input className="noteInput" 
                placeholder="write a new note"
                value={this.state.newNoteContent}
                onChange={this.handleUserInputIt}/>
                <button className="noteButton"
                onClick={this.writeNote}>Add Note FDP</button>
            </div>
        )
    }
}


export default NoteForm;