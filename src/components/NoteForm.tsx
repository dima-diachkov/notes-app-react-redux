import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../actions/noteActions';
import { Note } from '../types/types';
import { formatTime } from '../utils';

interface NoteFormProps {
}

const NoteForm: React.FC<NoteFormProps> = () => {
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newNote: Note = {
      id: Date.now(),
      time: formatTime(new Date()),
      content,
      category,
      archived: false,
    };

    dispatch(addNote(newNote));

    setContent('');
    setCategory('');
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
          <option value="">Select Category</option>
          <option value="Task">Task</option>
          <option value="Random Thought">Random Thought</option>
          <option value="Idea">Idea</option>
        </select>
      </div>
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
