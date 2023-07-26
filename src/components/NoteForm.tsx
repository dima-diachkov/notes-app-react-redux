import React, { useState } from 'react';

interface NoteFormProps {
  
}

const NoteForm: React.FC<NoteFormProps> = () => {
  const [noteContent, setNoteContent] = useState('');

  const handleNoteContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNoteContent(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={noteContent}
        onChange={handleNoteContentChange}
        placeholder="Enter your note"
      />
      <button type="submit">Add/Edit Note</button>
    </form>
  );
};

export default NoteForm;
