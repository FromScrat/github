import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));
export default function Pack(){
    const classes = useStyles();
    const[name,setName]=useState(' ')
    const[montant,setMontant]=useState('')
    const[duree,setDuree]=useState('')
    const[sms,setSms]=useState('')
    const[Pack,setPacks]=useState([])
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const handleClick=(e)=>{
      e.preventDefault()
      const Pack={name,montant,duree,sms}
      console.log(Pack)
      fetch("http://localhost:8089/addPack",{
        method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(Pack)

      }) .then(()=>{
        console.log("New Pack added")
      })
    }
   
    return(
        <Container>
            <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}><u>Add Pack</u></h1>
        <form className={classes.root} noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="Nom de Pack" variant="outlined" fullWidth value={name}
      onChange={(e)=>setName(e.target.value)}/>
      <TextField id="outlined-basic" label="Montant" variant="outlined" fullWidth value={montant}
      onChange={(e)=>setMontant(e.target.value)} />
      <TextField id="outlined-basic" label="Durée de validité" variant="outlined" fullWidth value={duree}
      onChange={(e)=>setDuree(e.target.value)} />
      <TextField id="outlined-basic" label="Nombre_SMS_Maximum" variant="outlined" fullWidth value={sms}
      onChange={(e)=>setSms(e.target.value)} />
      <Button variant="contained" color="secondary" onClick={handleClick}>
  Submit
</Button>
      </form>
      </Paper>
      </Container>
      );
    }