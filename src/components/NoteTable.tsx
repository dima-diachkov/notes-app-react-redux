import React from 'react';
import Table from './Table';
import { Note } from '../types/types';

interface NoteTableProps {
  notes: Note[];
}

const NoteTable: React.FC<NoteTableProps> = ({ notes }) => {
  const tableHeaders = ['Time of Creation', 'Note Content', 'Note Category', 'Dates Mentioned'];

  const tableData = notes.map((note) => ({
    'Time of Creation': note.time,
    'Note Content': note.content,
    'Note Category': note.category,
  }));

  return <Table headers={tableHeaders} data={tableData} />;
};

export default NoteTable;
