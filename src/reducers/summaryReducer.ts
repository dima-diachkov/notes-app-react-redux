import { SummaryAction, SummaryActionType, SummaryState } from '../types/types';

const initialState: SummaryState = {
  activeCategories: {},
  archivedCategories: {},
  notes: [],
};

const calculateSummary = (notes: SummaryState['notes'], state: SummaryState): SummaryState => {
  const activeCategories: Record<string, number> = {};
  const archivedCategories: Record<string, number> = {};

  for (const note of notes) {
    if (!note.archived) {
      activeCategories[note.category] = (activeCategories[note.category] || 0) + 1;
    } else {
      archivedCategories[note.category] = (archivedCategories[note.category] || 0) + 1;
    }
  }

  return {
    ...state,
    activeCategories,
    archivedCategories,
  };
};

const summaryReducer = (state = initialState, action: SummaryAction): SummaryState => {
  switch (action.type) {
    case SummaryActionType.UPDATE_SUMMARY:
      const updatedSummary = calculateSummary(state.notes, state);
      return updatedSummary;
    default:
      return state;
  }
};

export default summaryReducer;
