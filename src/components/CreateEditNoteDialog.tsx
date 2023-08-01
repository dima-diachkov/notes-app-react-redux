import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Note } from '../types/types';
import { editNote } from '../actions/noteActions';
import { formatTime } from '../utils';
import { STRINGS } from '../constants';

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
      setContent('');
      setCategory('');
    }

    onClose();
  };

  return isOpen ? (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md shadow-md w-96">
        <div className="flex justify-between items-center mb-4">
          <h2>{initialNote ? STRINGS.EDIT_NOTE_TITLE : STRINGS.CREATE_NOTE_TITLE}</h2>
          <button className="cursor-pointer text-gray-600 w-8 h-8 border-none bg-transparent hover:text-gray-500" onClick={onClose}>
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
              className="w-full p-2 text-sm border border-gray-400 rounded-md mb-4"
            />
          </div>
          <div>
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 text-sm border border-gray-400 rounded-md mb-4"
            >
              <option value="">Select Category</option>
              <option value="Task">Task</option>
              <option value="Random Thought">Random Thought</option>
              <option value="Idea">Idea</option>
            </select>
          </div>
          <div className="flex justify-end mt-4">
            <button>{initialNote ? STRINGS.SAVE_BUTTON_TEXT : STRINGS.ADD_NOTE_BUTTON_TEXT}</button>
            <button onClick={onClose}>
              {STRINGS.CANCEL_BUTTON_TEXT}
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : null;
};

export default CreateEditNoteDialog;
