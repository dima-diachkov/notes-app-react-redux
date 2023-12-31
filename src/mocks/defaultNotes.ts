import { Note } from '../types/types';

const defaultNotes: Note[] = [
  {
    id: 1,
    time: '7/25/2023, 10:00',
    content: 'I have a Task to complete today',
    category: 'Task',
    archived: true,
  },
  {
    id: 2,
    time: '7/26/2023, 15:30',
    content: 'Call John about the project proposal',
    category: 'Task',
    archived: false,
  },
  {
    id: 3,
    time: '7/27/2023, 09:00',
    content: 'Write an article about React.js',
    category: 'Idea',
    archived: false,
  },
  {
    id: 4,
    time: '7/27/2023, 14:45',
    content: 'Take a break and go for a walk',
    category: 'Task',
    archived: false,
  },
  {
    id: 5,
    time: '7/28/2023, 10:00',
    content: 'Read the new book by Jane Doe',
    category: 'Idea',
    archived: false,
  },
  {
    id: 6,
    time: '7/28/2023, 16:20',
    content: 'Random Thought: What if time travel were possible?',
    category: 'Random Thought',
    archived: false,
  },
  {
    id: 7,
    time: '7/29/2023, 13:15',
    content: 'Prepare presentation for the team meeting',
    category: 'Task',
    archived: false,
  },
];

export default defaultNotes;
