import type { Meta, StoryObj } from '@storybook/react';
import Table from '../components/Table';

const meta = {
  title: 'Example/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    headers: ['array of headers'],
    data: [{'key': 'ReactNode'}],
  },
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    headers: ['Header 1', 'Header 2', 'Header 3'],
    data: [{ 'Header 1': 'Cell 1', 'Header 2': 'Cell 2', 'Header 3': 'Cell 3' }],
  },
};