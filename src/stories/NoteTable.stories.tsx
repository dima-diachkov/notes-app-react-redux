import type { Meta, StoryObj } from '@storybook/react';
import NoteTable from '../components/NoteTable';
import store from '../store';
import { Provider } from 'react-redux';
import defaultNotes from '../mocks/defaultNotes';

const notes = [...defaultNotes];

const meta = {
    title: 'Notes/NoteTable',
    component: NoteTable,
    tags: ['autodocs'],
    decorators: [(story) => <Provider store={store}>{story()}</Provider>],
    argTypes: {
        notes
    },
} satisfies Meta<typeof NoteTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        notes
    },
};