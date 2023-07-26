// components/SummaryTable.tsx
import React from 'react';
import Table from './Table';
import { SummaryState } from '../types/types';

interface SummaryTableProps {
  summaryData: SummaryState;
}

const SummaryTable: React.FC<SummaryTableProps> = ({ summaryData }) => {
  const tableHeaders = ['Category', 'Active Notes Count', 'Archived Notes Count'];

  const tableData = Object.entries(summaryData.activeCategories).map(([category, count]) => ({
    'Category': category,
    'Active Notes Count': count,
    'Archived Notes Count': summaryData.archivedCategories[category] || 0,
  }));

  return <Table headers={tableHeaders} data={tableData} />;
};

export default SummaryTable;
