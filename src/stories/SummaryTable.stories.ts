import type { Meta, StoryObj } from '@storybook/react';
import defaultNotes from '../mocks/defaultNotes';
import { SummaryTable } from '../components/SummaryTable';

const notes = [...defaultNotes];

const meta = {
    title: 'Notes/SummaryTable',
    component: SummaryTable,
    tags: ['autodocs'],
    argTypes: {
        summaryData: {
            activeCategories: { task: 'number', idea: 'number', random_thoughts: 'number' },
            archivedCategories: { task: 'number', idea: 'number', random_thoughts: 'number' }
        }
    },
} satisfies Meta<typeof SummaryTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        summaryData: {
            activeCategories: { task: 2 },
            archivedCategories: { task: 2 }
        }
    },
};