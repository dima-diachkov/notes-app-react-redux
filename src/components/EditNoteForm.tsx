import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Note } from '../types/types';
import { editNote } from '../actions/noteActions';

interface EditNoteFormProps {
  note: Note;
  onClose: () => void;
}

const EditNoteForm: React.FC<EditNoteFormProps> = ({ note, onClose }) => {
  const [content, setContent] = useState(note.content);
  const [category, setCategory] = useState(note.category);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedNote: Note = {
      ...note,
      content,
      category,
    };

    dispatch(editNote(updatedNote));

    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="content">Content:</label>
        <input type="text" id="content" value={content} onChange={(e) => setContent(e.target.value)} />
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Task">Task</option>
          <option value="Random Thought">Random Thought</option>
          <option value="Idea">Idea</option>
        </select>
      </div>
      <button type="submit">Save</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
};

export default EditNoteForm;
