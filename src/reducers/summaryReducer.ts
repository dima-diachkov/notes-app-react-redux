import { SummaryAction, SummaryActionType, SummaryState, RootState } from '../types/types';

const initialState: SummaryState = {
  activeCategories: {},
  archivedCategories: {},
};

const calculateSummary = (notes: RootState['notesState']['notes']): SummaryState => {
  const activeCategories: Record<string, number> = {};
  const archivedCategories: Record<string, number> = {};

  for (const note of notes) {
    const category = note.category.toLowerCase();
    if (!note.archived) {
      activeCategories[category] = (activeCategories[category] || 0) + 1;
    } else {
      archivedCategories[category] = (archivedCategories[category] || 0) + 1;
    }
  }

  return {
    activeCategories,
    archivedCategories,
  };
};

const summaryReducer = (state = initialState, action: SummaryAction): SummaryState => {
  switch (action.type) {
    case SummaryActionType.UPDATE_SUMMARY:
      const updatedSummary = calculateSummary(action.notes);
      return updatedSummary;
    default:
      return state;
  }
};

export default summaryReducer;
