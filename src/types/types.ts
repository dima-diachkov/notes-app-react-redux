export interface Note {
    id: number;
    time: string;
    content: string;
    category: string;
    archived: boolean;
}

export interface NotesState {
    notes: Note[];
}

export enum ActionType {
    ADD_NOTE = 'ADD_NOTE',
    EDIT_NOTE = 'EDIT_NOTE',
    REMOVE_NOTE = 'REMOVE_NOTE',
    ARCHIVE_NOTE = 'ARCHIVE_NOTE',
    UNARCHIVE_NOTE = 'UNARCHIVE_NOTE',
}

interface AddNoteAction {
    type: ActionType.ADD_NOTE;
    payload: Note;
}

interface EditNoteAction {
    type: ActionType.EDIT_NOTE;
    payload: Note;
}

interface RemoveNoteAction {
    type: ActionType.REMOVE_NOTE;
    payload: number;
}

interface ArchiveNoteAction {
    type: ActionType.ARCHIVE_NOTE;
    payload: number;
}

interface UnarchiveNoteAction {
    type: ActionType.UNARCHIVE_NOTE;
    payload: number;
}

export type NoteAction =
    | AddNoteAction
    | EditNoteAction
    | RemoveNoteAction
    | ArchiveNoteAction
    | UnarchiveNoteAction;

export interface SummaryState {
    notes: Note[];
    activeCategories: Record<string, number>;
    archivedCategories: Record<string, number>;
}

export enum SummaryActionType {
    UPDATE_SUMMARY = 'UPDATE_SUMMARY',
}

interface UpdateSummaryAction {
    type: SummaryActionType.UPDATE_SUMMARY;
}

export type SummaryAction = UpdateSummaryAction;

export interface RootState {
    notesState: NotesState;
    summaryState: SummaryState;
}
