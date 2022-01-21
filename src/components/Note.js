import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import '../css/note.css';

function Note() {
  return (
    <div className="note">
      <span>Hello! testing stuff</span>
      <div className="note-footer">
        <small>13/04/2021</small>
        <MdDeleteForever className="delete-icon" size="1.3em" />
      </div>
    </div>
  );
}

export default Note;
