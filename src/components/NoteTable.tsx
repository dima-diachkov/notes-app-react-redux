import React, { useState } from 'react';
import Table from './Table';
import { useDispatch } from 'react-redux';
import { Note } from '../types/types';
import { editNote, removeNote, archiveNote, unarchiveNote } from '../actions/noteActions';
import EditNoteForm from './EditNoteForm';

interface NoteTableProps {
  notes: Note[];
}

const NoteTable: React.FC<NoteTableProps> = ({ notes }) => {
  const dispatch = useDispatch();
  const activeNotes = notes.filter((note) => !note.archived);
  const archivedNotes = notes.filter((note) => note.archived);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  const handleEditNote = (updatedNote: Note) => {
    dispatch(editNote(updatedNote));
    handleCloseEditForm();
  };

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
    setShowEditForm(true);
  };

  const handleCloseEditForm = () => {
    setSelectedNote(null);
    setShowEditForm(false);
  };

  return (
    <div>
      <h2>Active Notes</h2>
      <Table
        headers={['Time of Creation', 'Note Content', 'Note Category', 'Mentioned Dates', 'Actions']}
        data={activeNotes.map((note) => {
          const mentionedDates = note.content.match(/\d{1,2}\/\d{1,2}\/\d{4}/g) || [];

          return {
            'Time of Creation': note.time,
            'Note Content': note.content,
            'Note Category': note.category,
            'Mentioned Dates': mentionedDates.join(', '),
            'Actions': (
              <div>
                <button onClick={() => handleEditButtonClick(note)}>Edit</button>
                <button onClick={() => handleRemoveNote(note.id)}>Remove</button>
                <button onClick={() => handleArchiveNote(note.id)}>Archive</button>
              </div>
            ),
          };
        })}
      />

      <h2>Archived Notes</h2>
      <Table
        headers={['Time of Creation', 'Note Content', 'Note Category', 'Mentioned Dates', 'Actions']}
        data={archivedNotes.map((note) => {
          const mentionedDates = note.content.match(/\d{1,2}\/\d{1,2}\/\d{4}/g) || [];

          return {
            'Time of Creation': note.time,
            'Note Content': note.content,
            'Note Category': note.category,
            'Mentioned Dates': mentionedDates.join(', '),
            'Actions': (
              <div>
                <button onClick={() => handleEditButtonClick(note)}>Edit</button>
                <button onClick={() => handleRemoveNote(note.id)}>Remove</button>
                <button onClick={() => handleUnarchiveNote(note.id)}>Unarchive</button>
              </div>
            ),
          };
        })}
      />

      {showEditForm && selectedNote && (
        <EditNoteForm note={selectedNote} onClose={handleCloseEditForm} />
      )}
    </div>
  );
};

export default NoteTable;
