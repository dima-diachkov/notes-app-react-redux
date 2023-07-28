import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Note } from '../types/types';
import { editNote } from '../actions/noteActions';
import { formatTime } from '../utils';

interface CreateEditNoteDialogProps {
  isOpen: boolean;
  onClose: () => void;
  initialNote: Note | null;
  onSave: (newNote: Note) => void;
}

const CreateEditNoteDialog: React.FC<CreateEditNoteDialogProps> = ({
  isOpen,
  onClose,
  initialNote,
  onSave,
}) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (initialNote) {
      setContent(initialNote.content);
      setCategory(initialNote.category);
    } else {
      setContent('');
      setCategory('');
    }
  }, [initialNote]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (content.trim() === '') {
      alert('Please enter the note content.');
      return;
    }

    if (category.trim() === '') {
      alert('Please select a category.');
      return;
    }

    if (initialNote) {
      const updatedNote: Note = {
        ...initialNote,
        content,
        category,
      };
      dispatch(editNote(updatedNote));
    } else {
      const newNote: Note = {
        id: Date.now(),
        time: formatTime(new Date()),
        content,
        category,
        archived: false,
      };
      onSave(newNote);
    }

    onClose();
  };

  return isOpen ? (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>{initialNote ? 'Edit Note' : 'Create New Note'}</h2>
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="content">Content:</label>
            <input
              type="text"
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              <option value="Task">Task</option>
              <option value="Random Thought">Random Thought</option>
              <option value="Idea">Idea</option>
            </select>
          </div>
          <div className="modal-footer">
            <button type="submit">{initialNote ? 'Save' : 'Add Note'}</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : null;
};

export default CreateEditNoteDialog;
