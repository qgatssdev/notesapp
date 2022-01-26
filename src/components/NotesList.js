import React from 'react';
import Note from './Note';
import '../css/noteslist.css';
import AddNote from './AddNote';

function NotesList({ notes, handleAddNote, handleDeleteNote }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
}

export default NotesList;
