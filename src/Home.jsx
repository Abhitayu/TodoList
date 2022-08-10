import React, { useEffect } from 'react'
import AddData from './components/AddData'
import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './Home.css'


const Home = () => {
  const[data,setData]=React.useState({
    data:'',
    labelimp:'',
    color:'',
    currtime:''
  })
  const[event,setEvent] = React.useState([])
  const[imp,setImp] = React.useState('outlined')

  function handleChange(e){
    var today = new Date(),
    time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    setData(prevData =>({
      ...prevData,
      data:e.target.value,
      currtime:time,
      labelimp:imp==='outlined'?'Normal':'Important',
      color:imp==='outlined'?'primary':'error'
    }))
  }

  function handleClick(){
    var today = new Date(),
    time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    setData(prevData => ({
      ...prevData,
      currtime:time
    }))
    if(data!=='')
      setEvent([{id:`${data}-${Date.now()}`,data},...event])
  }
  

  useEffect(() => {
    if(event.length !== 0){
      localStorage.setItem('items', JSON.stringify(event));
    }
  }, [event]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
     setEvent(items);
    }
  }, []);
  
  function isImp(){
    setImp(imp==='outlined'?'contained':'outlined')
    setData(prevData =>({
      ...prevData,
      labelimp:imp==='outlined'?'Important':'Normal',
      color:imp==='outlined'?'error':'primary'
    }))
  }

  return (
    <div className='container'>
      <div className="upper-part">
        <h1>TO DO LIST</h1>
        <span className='input-part'>
          <TextField id="outlined-basic" label="Add Event" variant="outlined" onChange={handleChange} sx={{input:{color:'whitesmoke'}}}/>
          <Button onClick={isImp} variant={imp} >Important</Button>
          <Button variant="contained" onClick={handleClick}>Add</Button>
        </span>  
      </div>
      <AddData event={event} setevent={setEvent} />
    </div>
  )
}

export default Home