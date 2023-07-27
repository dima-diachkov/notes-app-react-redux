import React from 'react';
import { SummaryState } from '../types/types';
import Table from './Table';

interface SummaryTableProps {
  summaryData: SummaryState;
}

const SummaryTable: React.FC<SummaryTableProps> = ({ summaryData }) => {
  const tableHeaders = ['Note Category', 'Active', 'Archived'];

  const tableData = ['Task', 'Random Thought', 'Idea'].map((category) => ({
    'Note Category': category,
    'Active': summaryData.activeCategories[category.toLowerCase()] || 0,
    'Archived': summaryData.archivedCategories[category.toLowerCase()] || 0,
  }));

  return <Table headers={tableHeaders} data={tableData} />;
};

export default SummaryTable;
