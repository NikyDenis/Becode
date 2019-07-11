import React, { Component } from 'react';
import Note from './Note/Note';
import NoteForm from './NoteForm/NoteForm';
import { DB_CONFIG } from './Config/config';
import firebase from 'firebase/app';
import 'firebase/database';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.addNote=this.addNote.bind(this);

    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child('notes');

    //where going to setup the React state of our component
    this.state={
      notes : [], 
    }
  }

  componentWillMount(){
    const previousNotes = this.state.notes;

    //Data Snapshot
    this.database.on('child_added', snap => {
      previousNotes.push({
        id: snap.key,
        noteContent : snap.val().noteContent,
      })
      this.setState({
        notes:previousNotes
      })
    })
  }

  addNote(note){
    // //push the note to the notes array
    // const previousNotes = this.state.notes;
    // //push un truc a l'id +1 pour pas écraser ce que tu as déjà avec son contenu
    // previousNotes.push({id : previousNotes.length+1, noteContent :note});
    // this.setState({
    // notes : previousNotes
    // })

    this.database.push().set({noteContent:note});

  }





  
  render() {
    return (
      <div className="notesWrapper">
      <div className="notesHeader">
      <div className="heading">React to do list</div>
      </div>
      <div className="notesBody">
      {
        this.state.notes.map((note)=> {
          return(
            <Note noteContent={note.noteContent} noteId={note.id} key={note.id} />
          )
        })
    }
      </div>
      <div className="notesFooter">
        <NoteForm addNote={this.addNote} />
      </div>
      </div>
    );
  }
}

export default App;
