import React from 'react';
import  {ComponentStory,ComponentMeta} from '@storybook/react';


import Task from '../Task';


export default {
  component: Task,
  title: 'Task',
/*args: {
  

onArchiveTask: () => {
  console.log('onArchive')
},
 onPinTask: () => {
  console.log('onPin')
}
  }*/
  
} as ComponentMeta <typeof Task>; 

 

const Template:ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    id:'2',
    title:'Home Work',
    state: 'TASK_PINNED',
  },

};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    id:'3',
    title:'reading',
    state: 'TASK_ARCHIVED',
  },

};