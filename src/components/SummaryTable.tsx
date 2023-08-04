import React from 'react';
import { SummaryState } from '../types/types';
import Table from './Table';
import { NOTE_CATEGORIES, NOTE_TABLE_HEADERS } from '../constants';

interface SummaryTableProps {
  summaryData: SummaryState;
}

export const SummaryTable: React.FC<SummaryTableProps> = ({ summaryData }) => {
  console.log(summaryData);
  const tableHeaders = NOTE_TABLE_HEADERS;

  const tableData = NOTE_CATEGORIES.map((category) => ({
    'Note Category': category,
    'Active': summaryData.activeCategories[category.toLowerCase()] || 0,
    'Archived': summaryData.archivedCategories[category.toLowerCase()] || 0,
  }));

  return (
    <div className="summary-table">
      <h2>Summary Table</h2>
      <Table headers={tableHeaders} data={tableData} />
    </div>
  );
};
