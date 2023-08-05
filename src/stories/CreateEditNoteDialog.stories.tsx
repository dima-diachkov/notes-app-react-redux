import type { Meta, StoryObj } from '@storybook/react';
import defaultNotes from '../mocks/defaultNotes';
import CreateEditNoteDialog from '../components/CreateEditNoteDialog';
import { Provider } from 'react-redux';
import store from '../store';

const notes = [...defaultNotes];

const meta = {
    title: 'Notes/CreateEditNoteDialog',
    component: CreateEditNoteDialog,
    tags: ['autodocs'],
    decorators: [(story) => <Provider store={store}>{story()}</Provider>],
    argTypes: {
        isOpen: { control: 'boolean' },
        onClose: { action: 'onClose' },
        initialNote: { control: 'object' },
        onSave: { action: 'onSave' },
    },
} satisfies Meta<typeof CreateEditNoteDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Create: Story = {
    args: {
        isOpen: true,
        onClose: () => { },
        initialNote: null,
        onSave: () => { },
    },
};

export const Edit: Story = {
    args: {
        isOpen: true,
        onClose: () => { },
        initialNote: {
            id: 42,
            time: '42/42/2042',
            content: 'Note',
            category: 'Task',
            archived: false,
        },
        onSave: () => { },
    },
};
