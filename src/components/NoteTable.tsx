import React from 'react';
import Table from './Table';
import { useDispatch } from 'react-redux';
import { Note } from '../types/types';
import { editNote, removeNote, archiveNote, unarchiveNote } from '../actions/noteActions';

interface NoteTableProps {
  notes: Note[];
}

const NoteTable: React.FC<NoteTableProps> = ({ notes }) => {
  const dispatch = useDispatch();
  const tableHeaders = ['Time of Creation', 'Note Content', 'Note Category', 'Mentioned Dates', 'Actions'];

  const tableData = notes.map((note) => {
    const mentionedDates = note.content.match(/\d{1,2}\/\d{1,2}\/\d{4}/g) || [];

    return {
      'Time of Creation': note.time,
      'Note Content': note.content,
      'Note Category': note.category,
      'Mentioned Dates': mentionedDates.join(', '),
      'Actions': (
        <div>
          <button onClick={() => handleEditNote(note)}>Edit</button>
          <button onClick={() => handleRemoveNote(note.id)}>Remove</button>
          {note.archived ? (
            <button onClick={() => handleUnarchiveNote(note.id)}>Unarchive</button>
          ) : (
            <button onClick={() => handleArchiveNote(note.id)}>Archive</button>
          )}
        </div>
      ),
    };
  });

  const handleEditNote = (note: Note) => {
    dispatch(editNote(note));
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

  return <Table headers={tableHeaders} data={tableData} />;
};

export default NoteTable;
