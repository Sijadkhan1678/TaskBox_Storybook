import React,{FC} from 'react'
import Task,{ task } from './Task'
import {Box,List,Typography} from '@mui/material'
;

interface TaskListProps {
   loading:boolean
   tasks: task[]
   onArchiveTask: () => void
   onPinTask: () => void
}
const TaskList:FC <TaskListProps> = ({ loading, tasks, onPinTask, onArchiveTask }) => {
  
  
  const events = {
    onPinTask,
    onArchiveTask,
  };


const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );
  
  if (loading) {
    
    return (
      <div className="list-items" data-testid="loading" key={"loading"}>
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }
  
  if (tasks.length === 0) {
    
    return (
      <div className="list-items" key={"empty"} data-testid="empty">
        <div className="wrapper-message">
          <span className="icon-check" />
          <p className="title-message">You have no tasks</p>
          <p className="subtitle-message">Sit back and relax</p>
        </div>
      </div>
    );
  }
  
  return (
    <Box>

    
    <List sx={{ width: '77%', maxWidth: 360, bgcolor: 'white', m: '2rem auto' }}>
    <Typography variant='h5' component='div'>
    Tasks 
    </Typography>
      {tasks.map( (task:task) => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </List>
    </Box>
  );
}

TaskList.defaultProps = {
   tasks: [
    {  id: '1', title: 'Task 1', state: 'TASK_ARCHIVED' },
    {  id: '2', title: 'Task 2', state: 'TASK_ARCHIVED' },
    {  id: '3', title: 'Task 3', state: 'TASK_INBOX' },
    {  id: '4', title: 'Task 4', state: 'TASK_INBOX' },
    {  id: '5', title: 'Task 5', state: 'TASK_PINNED' },
    {  id: '6', title: 'Task 6', state: 'TASK_PINNED' },
    {  id: '7', title: 'Task 7', state: 'TASK_PINNED' },
    
    
  ],
   onArchiveTask: () => {
     console.log('onArchiveTask')
     },
     
   onPinTask: () => {
     console.log('onPinTask')
   }
}
export default TaskList;