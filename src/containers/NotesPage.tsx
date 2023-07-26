import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../types/types';
import NoteTable from '../components/NoteTable';
import NoteForm from '../components/NoteForm';
import SummaryTable from '../components/SummaryTable';

const NotesPage: React.FC = () => {
  const notes = useSelector((state: RootState) => state.notesState.notes);
  const summaryData = useSelector((state: RootState) => state.summaryState);

  return (
    <div>
      <h1>Notes App</h1>
      <NoteForm />
      <NoteTable notes={notes} />
      <SummaryTable summaryData={summaryData} />
    </div>
  );
};

export default NotesPage;
