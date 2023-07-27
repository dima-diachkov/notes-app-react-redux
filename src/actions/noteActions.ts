import { ActionType, Note, NoteAction } from '../types/types';

export const addNote = (note: Note): NoteAction => ({
  type: ActionType.ADD_NOTE,
  payload: note,
});

export const editNote = (note: Note): NoteAction => ({
  type: ActionType.EDIT_NOTE,
  payload: note,
});

export const removeNote = (noteId: number): NoteAction => ({
  type: ActionType.REMOVE_NOTE,
  payload: noteId,
});

export const archiveNote = (noteId: number): NoteAction => ({
  type: ActionType.ARCHIVE_NOTE,
  payload: noteId,
});

export const unarchiveNote = (noteId: number): NoteAction => ({
  type: ActionType.UNARCHIVE_NOTE,
  payload: noteId,
});
