import React, { useState } from 'react';
import '../css/note.css';

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState('');

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };
  const characterLimit = 200;
  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText('');
    }
  };
  return (
    <div className="note new">
      <textarea
        rows={8}
        cols={10}
        value={noteText}
        placeholder="Type to add a note"
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <p>{characterLimit - noteText.length} Remaining</p>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
