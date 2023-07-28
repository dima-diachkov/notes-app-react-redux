import React, { useState } from 'react';
import Table from './Table';
import { useDispatch } from 'react-redux';
import { Note } from '../types/types';
import { removeNote, archiveNote, unarchiveNote, editNote, addNote } from '../actions/noteActions';
import EditNoteDialog from './CreateEditNoteDialog';
import NoteForm from './NoteForm';

interface NoteTableProps {
  notes: Note[];
}

const NoteTable: React.FC<NoteTableProps> = ({ notes }) => {
  const dispatch = useDispatch();
  const activeNotes = notes.filter((note) => !note.archived);
  const archivedNotes = notes.filter((note) => note.archived);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  const handleRemoveNote = (noteId: number) => {
    dispatch(removeNote(noteId));
  };

  const handleArchiveNote = (noteId: number) => {
    dispatch(archiveNote(noteId));
  };

  const handleUnarchiveNote = (noteId: number) => {
    dispatch(unarchiveNote(noteId));
  };

  const handleEditButtonClick = (note: Note) => {
    setSelectedNote(note);
    setShowEditDialog(true);
  };

  const handleCloseEditDialog = () => {
    setSelectedNote(null);
    setShowEditDialog(false);
  };

  const handleSaveNote = (newNote: Note) => {
    if (selectedNote) {
      dispatch(editNote(newNote));
    } else {
      dispatch(addNote(newNote));
    }
    handleCloseEditDialog();
  };
  const editButton = (note: Note) => (
    <button key="edit" onClick={() => handleEditButtonClick(note)}>Edit</button>
  );

  const removeButton = (noteId: number) => (
    <button key="remove" onClick={() => handleRemoveNote(noteId)}>Remove</button>
  );

  const archiveButton = (noteId: number) => (
    <button key="archive" onClick={() => handleArchiveNote(noteId)}>Archive</button>
  );

  const unarchiveButton = (noteId: number) => (
    <button key="unarchive" onClick={() => handleUnarchiveNote(noteId)}>Unarchive</button>
  );

  const generateNoteData = (note: Note, actions: React.ReactNode[]) => {
    const mentionedDates = note.content.match(/\d{1,2}\/\d{1,2}\/\d{4}/g) || [];

    return {
      'Time of Creation': note.time,
      'Note Content': note.content,
      'Note Category': note.category,
      'Mentioned Dates': mentionedDates.join(', '),
      'Actions': (
        <div>
          {actions.map((action, index) => (
            <React.Fragment key={index}>{action}</React.Fragment>
          ))}
        </div>
      ),
    };
  };

  const activeNotesData = activeNotes.map((note) =>
    generateNoteData(note, [editButton(note), removeButton(note.id), archiveButton(note.id)])
  );

  const archivedNotesData = archivedNotes.map((note) =>
    generateNoteData(note, [editButton(note), removeButton(note.id), unarchiveButton(note.id)])
  );

  return (
    <div>
      <h2>Active Notes</h2>
      <Table
        headers={['Time of Creation', 'Note Content', 'Note Category', 'Mentioned Dates', 'Actions']}
        data={activeNotesData}
      />
      <NoteForm />
      <h2>Archived Notes</h2>
      <Table
        headers={['Time of Creation', 'Note Content', 'Note Category', 'Mentioned Dates', 'Actions']}
        data={archivedNotesData}
      />

      <EditNoteDialog
        isOpen={showEditDialog}
        onClose={handleCloseEditDialog}
        initialNote={selectedNote}
        onSave={handleSaveNote}
      />
    </div>
  );
};

export default NoteTable;
