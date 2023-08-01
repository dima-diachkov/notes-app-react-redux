import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../types/types';
import NoteTable from '../components/NoteTable';
import { updateSummary } from '../actions/noteActions';
import { SummaryTable } from '../components/SummaryTable';

const NotesPage: React.FC = () => {
  const notes = useSelector((state: RootState) => state.notesState.notes);
  const summaryData = useSelector((state: RootState) => state.summaryState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateSummary(notes));
  }, [notes, dispatch]);

  return (
    <div className="max-w-6xl mx-auto my-0">
      <h1 className="text-center mt-4 mb-0 text-3xl font-bold">Notes App</h1>
      <div className="flex flex-col justify-between items-stretch p-8 min-h-screen">
        <div>
          <NoteTable notes={notes} />
        </div>
        <div>
          <SummaryTable summaryData={summaryData} />
        </div>
      </div>
    </div>
  );
};

export default NotesPage;
