import { ActionType, NoteAction, NotesState } from '../types/types';
import defaultNotes from '../mocks/defaultNotes';


const initialState: NotesState = {
  notes: defaultNotes,
};

const noteReducer = (state = initialState, action: NoteAction): NotesState => {
  switch (action.type) {
    case ActionType.ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case ActionType.EDIT_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? action.payload : note
        ),
      };
    case ActionType.REMOVE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    case ActionType.ARCHIVE_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload ? { ...note, archived: true } : note
        ),
      };
    case ActionType.UNARCHIVE_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload ? { ...note, archived: false } : note
        ),
      };
    default:
      return state;
  }
};

export default noteReducer;
