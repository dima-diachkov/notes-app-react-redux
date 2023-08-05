import type { Meta, StoryObj } from '@storybook/react';
import defaultNotes from '../mocks/defaultNotes';
import { SummaryTable } from '../components/SummaryTable';

const notes = [...defaultNotes];

const meta = {
    title: 'Notes/SummaryTable',
    component: SummaryTable,
    tags: ['autodocs'],
    argTypes: {
        summaryData: { control: 'object' },
    },
} satisfies Meta<typeof SummaryTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        summaryData: {
            activeCategories: { task: 2, idea: 3 },
            archivedCategories: { task: 2 }
        }
    },
};
