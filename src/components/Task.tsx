import React,{FC} from 'react';
import {Box} from '@mui/material'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star'
import StarBorder from '@mui/icons-material/StarBorder'


export interface task {
  
    id: string
    title: string
    state: string
}
interface TaskProps {
  
    task: task
    onArchiveTask: (id:string) => void
    onPinTask: (id:string) => void
}

const Task:FC <TaskProps> = ({task:{id,title,state},onArchiveTask,onPinTask}) => {
  
   return (
      <Box bgcolor='#48D8FB' mt={2} borderRadius={1.2}>
      <ListItem>
      
        <Checkbox
          disabled={true}
          checked={state === "TASK_ARCHIVED"}
        />
        
        <ListItemText
      
          primary={title}
         // id={id}
        
        />
      
      {state !== "TASK_ARCHIVED" && (
        <IconButton
          
        onClick={() => onPinTask(id)}
          
        >
   { state === 'TASK_PINNED' ? <StarIcon color='secondary'/> : <StarBorder color='primary'/> }
        </IconButton>
      )}
    </ListItem>
      </Box>
     )
}


Task.defaultProps = {
    task: { id:'1', title:'walking task', state: 'TASK_INBOX'
    },
    
   onArchiveTask: () => {
     console.log('onArchiveTask')
     },
     
   onPinTask: () => {
     console.log('onPinTask')
   }
   
}

export default Task;