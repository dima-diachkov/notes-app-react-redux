import type { Meta, StoryObj } from '@storybook/react';
import defaultNotes from '../mocks/defaultNotes';
import CreateEditNoteDialog from '../components/CreateEditNoteDialog';
import { Note } from '../types/types';
import { Provider } from 'react-redux';
import store from '../store';

const notes = [...defaultNotes];

const meta = {
    title: 'Notes/CreateEditNoteDialog',
    component: CreateEditNoteDialog,
    tags: ['autodocs'],
    decorators: [(story) => <Provider store={store}>{story()}</Provider>],
    argTypes: {
 
    },
} satisfies Meta<typeof CreateEditNoteDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        isOpen: true,
        onClose: () => { },
        initialNote: {
            id: 23,
            time: '12/12/1212',
            content: 'Note',
            category: 'Task',
            archived: false,
        },
        onSave: () => { },
    },
};