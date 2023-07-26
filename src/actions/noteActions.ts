import { ActionType, Note, NoteAction } from '../types/types';

export const addNote = (note: Note): NoteAction => ({
  type: ActionType.ADD_NOTE,
  payload: note,
});
