import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../types/types';
import NoteTable from '../components/NoteTable';
import NoteForm from '../components/NoteForm';
import SummaryTable from '../components/SummaryTable';
import { updateSummary } from '../actions/noteActions';

const NotesPage: React.FC = () => {
  const notes = useSelector((state: RootState) => state.notesState.notes);
  const summaryData = useSelector((state: RootState) => state.summaryState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateSummary(notes));
  }, [notes, dispatch]);

  return (
    <div className="app-container">
      <h1>Notes App</h1>
      <div className="note-page-content">
        <NoteForm />
        <NoteTable notes={notes} />
        <SummaryTable summaryData={summaryData} />
      </div>
    </div>
  );
};

export default NotesPage;
