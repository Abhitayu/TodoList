import React from 'react'
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import './Add.css'
import { borderRadius } from '@mui/system';


const AddData = (props) => {
  
  function handleDelete(id) {
    const deleteevent = props.event.filter((t)=>t.id!==id)
    props.setevent([...deleteevent])
  } 
  return (
    <div>
        {props.event.map((d)=>(
        <div className="event">
           <Box sx={{ width: '100%', maxWidth: 360, bgcolor: '#90caf9', borderRadius:6}}key={d.id}>
              <Box sx={{ my: 3, mx: 2 }}>
                <Grid container alignItems="center">
                  <Grid item xs>
                    <Typography gutterBottom variant="h6" color="text.secondary" component="div" fontFamily={'cursive'}>
                      Event
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography gutterBottom variant="body2" component="div" fontFamily={'cursive'}>
                      {d.data.currtime}
                    </Typography>
                  </Grid>
                </Grid>
                <Typography  variant="h4" fontFamily={'cursive'}>
                  {d.data.data}
                </Typography>
              </Box>
              <Divider variant="middle"/>
              <Box sx={{ m: 2}}>
                <Stack direction="row" spacing={1}>
                  <Chip color={d.data.color}label={d.data.labelimp}/>
                </Stack>
              </Box>
              <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
                <Button onClick={()=>handleDelete(d.id)} endIcon={<DeleteIcon />} color="error">Delete</Button>
              </Box>
           </Box>
        </div>
      ))}
      
    </div>
  )
}

export default AddData