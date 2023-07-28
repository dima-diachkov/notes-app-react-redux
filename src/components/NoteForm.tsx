import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Note } from '../types/types';
import EditNoteDialog from './CreateEditNoteDialog';
import { addNote } from '../actions/noteActions';

interface NoteFormProps {}

const NoteForm: React.FC<NoteFormProps> = () => {
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const dispatch = useDispatch();

  const handleAddNote = (newNote: Note) => {
    dispatch(addNote(newNote));
  };

  const handleCloseEditDialog = () => {
    setSelectedNote(null);
    setShowEditDialog(false);
  };

  const addButton = <button key="add" onClick={() => setShowEditDialog(true)}>Add Note</button>;

  return (
    <div>
      {addButton}
      <EditNoteDialog
        isOpen={showEditDialog}
        onClose={handleCloseEditDialog}
        initialNote={selectedNote}
        onSave={handleAddNote}
      />
    </div>
  );
};

export default NoteForm;
