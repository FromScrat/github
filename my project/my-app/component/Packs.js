import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';
import  IconButton from 'react-native-vector-icons/MaterialIcons';
import {Text} from 'react-native';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
       
      },
    },
  }));
  export default function Packs(){
    
    const classes = useStyles();
    const[name,setName]=useState(' ')
    const[montant,setMontant]=useState('')
    const[duree,setDuree]=useState('')
    const[sms,setSms]=useState('')
    const[Packs,setPacks]=useState([])
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    
     
  

    useEffect(()=>{
        fetch("http://localhost:8089/getAll")
        .then(res=>res.json())
        .then((result)=>{
          setPacks(result);
        }
      )
      },[])

      const Delete=(id)=>{
        fetch('http://localhost:8089/delete/'+ id, {
            method: 'DELETE',
          })
          .then(res => res.text()) // or res.json()
          .then(res => console.log(res))
    
      };
      return(
        
        <Paper elevation={3} style={paperStyle}>

        {Packs.map(Packs=>(
          <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={Packs.id}>
         
          
           Name:{Packs.name}<br/>
           Montant:{Packs.montant}<br/>
           Duree:{Packs.duree}<br/>
           Sms:{Packs.sms}<br/>
           <Text style={{color:'red'}} onPress={()=>Delete(Packs.id)}>Delete</Text>
           
           </Paper>
      ))
}


    </Paper>
  );
  }