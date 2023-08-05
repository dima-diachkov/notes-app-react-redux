import type { Meta, StoryObj } from '@storybook/react';
import Table from '../components/Table';

const meta = {
  title: 'Notes/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    headers: {
      control: 'array',
      description: 'An array of table headers',
      defaultValue: ['Header 1', 'Header 2', 'Header 3'],
    },
    data: {
      control: 'object',
      description: 'An array of objects representing table data',
      defaultValue: [{ 'Header 1': 'Cell 1', 'Header 2': 'Cell 2', 'Header 3': 'Cell 3' }],
    },
  },
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    headers: ['Header 1', 'Header 2', 'Header 3'],
    data: [
      { 'Header 1': 'Cell 1-1', 'Header 2': 'Cell 1-2', 'Header 3': 'Cell 1-3' },
      { 'Header 1': 'Cell 2-1', 'Header 2': 'Cell 2-2', 'Header 3': 'Cell 2-3' }
    ],
  },
};
