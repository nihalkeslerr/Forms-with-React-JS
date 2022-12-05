import React, { useEffect } from 'react'
import List from './List';
import Form from './Form';
import { useState } from 'react';
import {} from './style.css'

function Contacts() {
  const [contacts,setContact] = useState([{
    fullname:"Nihal",
    Phone_Number:12345
  },
  {
    fullname:"Kerem",
    Phone_Number:987
  },
]);

  useEffect(()=>{
    console.log("contact: ",contacts);
    
  },[contacts])

  return (
    <div className='form'>
       <div className='header'>FORM PAGE</div> 
        <List contact={contacts}/> 
        <Form addcontact={setContact} contact={contacts} />
         
    </div>
  
  )
}

export default Contacts;