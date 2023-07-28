import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Note } from '../types/types';
import { editNote } from '../actions/noteActions';

interface EditNoteDialogProps {
  isOpen: boolean;
  onClose: () => void;
  initialNote: Note | null;
}

const EditNoteDialog: React.FC<EditNoteDialogProps> = ({ isOpen, onClose, initialNote }) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (initialNote) {
      setContent(initialNote.content);
      setCategory(initialNote.category);
    }
  }, [initialNote]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (initialNote) {
      const updatedNote: Note = {
        ...initialNote,
        content,
        category,
      };

      dispatch(editNote(updatedNote));
      onClose();
    }
  };

  return isOpen ? (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Edit Note</h2>
        {initialNote && (
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
                <option value="Task">Task</option>
                <option value="Random Thought">Random Thought</option>
                <option value="Idea">Idea</option>
              </select>
            </div>
            <div className="modal-footer">
              <button type="submit">Save</button>
              <button type="button" onClick={onClose}>
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  ) : null;
};

export default EditNoteDialog;
