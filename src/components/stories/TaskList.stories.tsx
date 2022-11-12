import React from 'react';
import {ComponentStory,ComponentMeta} from '@storybook/react'
import TaskList from '../TaskList';


export default {
  component: TaskList,
  title: 'TaskList',
  decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
} as ComponentMeta<typeof TaskList>


const Template:ComponentStory <typeof TaskList> = (args) => <TaskList {...args} />;


export const Default = Template.bind({});
Default.args = {
  
  tasks: [
    {  id: '1', title: 'Task 1', state: 'TASK_INBOX' },
    {  id: '2', title: 'Task 2', state: 'TASK_INBOX' },
    {  id: '3', title: 'Task 3', state: 'TASK_INBOX' },
    {  id: '4', title: 'Task 4', state: 'TASK_INBOX' },
    {  id: '5', title: 'Task 5', state: 'TASK_INBOX' },
    {  id: '6', title: 'Task 6', state: 'TASK_INBOX' },
  ],
};

export const withArchivedTask = Template.bind({})

withArchivedTask.args = {
tasks: [
    {  id: '1', title: 'Task 1', state: 'TASK_ARCHIVED' },
    {  id: '2', title: 'Task 2', state: 'TASK_ARCHIVED' },
    {  id: '3', title: 'Task 3', state: 'TASK_ARCHIVED' },
    {  id: '4', title: 'Task 4', state: 'TASK_INBOX' },
    {  id: '5', title: 'Task 5', state: 'TASK_INBOX' },
    {  id: '6', title: 'Task 6', state: 'TASK_INBOX' },
    { id: '6', title: 'Task 6', state: 'TASK_INBOX' },
  ],
}
export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  
  tasks: [
    {  id: '1', title: 'Task 1', state: 'TASK_PINNED' },
    {  id: '2', title: 'Task 2', state: 'TASK_PINNED' },
    {  id: '3', title: 'Task 3', state: 'TASK_PINNED' },
    {  id: '4', title: 'Task 4', state: 'TASK_INBOX' },
    {  id: '5', title: 'Task 5', state: 'TASK_INBOX' },
    {  id: '6', title: 'Task 6', state: 'TASK_INBOX' },
    { id: '7', title: 'Task 7', state: 'TASK_INBOX' },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {

  ...Loading.args,
  loading: false,
};